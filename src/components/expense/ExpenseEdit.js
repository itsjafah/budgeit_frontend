import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editExpense } from '../../actions/expense'
import './ExpenseEdit.css'

class ExpenseEdit extends Component {
  state = {
    category_id: this.props.selectedExpense.category_id,
    description: this.props.selectedExpense.description,
    date: this.props.selectedExpense.date,
    amount: this.props.selectedExpense.amount,
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedExpense !== prevProps.selectedExpense && this.props.selectedExpense) {
      debugger
       this.setState({
         category_id: this.props.selectedExpense.category_id,
         description: this.props.selectedExpense.description,
         date: this.props.selectedExpense.date,
         amount: this.props.selectedExpense.amount,
       })
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value })
  }

  handleEditExpense = (event) => {
    event.preventDefault()
    if (this.props.selectedExpense.category_id && this.props.selectedExpense.description && this.props.selectedExpense.date && this.props.selectedExpense.amount) {
      let expense = { ...this.props.selectedExpense, ...this.state}
      this.props.editExpense(expense)
      event.target.reset()
    } else {
      alert('Please fill out all information.')
    }
    this.setState({
      category_id: '',
      description: '',
      date: '',
      amount: '',
    })
  }

  selectedExpenseOptions = () => {
    return this.props.categories.map((category) => {
      return <option key={category.id} value={category.id}> {category.title} </option>
    })
  }

  render() {
    const category = this.props.categories.find(category => category.id === this.props.selectedExpense.category_id)
    return (
      <div id="expenses_edit_container">
        <div id="expense_edit_header"> Edit Expense </div>

        <form id="expense_edit_form" onSubmit={this.handleEditExpense}>

          <select className="expense_edit_input" name="category_id" onChange={this.handleChange} value={this.state.category_id}>
            <option value="" disabled selected hidden>Category</option>
            <option value={category.id}>{category.title}</option>
            {this.selectedExpenseOptions()}
          </select>

          <input className="expense_edit_input" type="text" name="description" onChange={this.handleChange} value={this.state.description}></input>
          <input className="expense_edit_input" type="date" name="date" onChange={this.handleChange} value={this.state.date}></input>
          <input className="expense_edit_input" type="number" name="amount" step="0.01" min="0" onChange={this.handleChange} value={this.state.amount}></input>

          <button id="expense_edit_button"> Save </button>

        </form>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenseReducer.expenses,
    categories: state.categoryReducer.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editExpense: expense => editExpense(expense, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEdit)
