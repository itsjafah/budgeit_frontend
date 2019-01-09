import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addExpense } from '../../actions/expense'
import './ExpenseAdd.css'

class ExpenseAdd extends Component {
  state = {
    categories: [],
    category_id: '',
    description: '',
    date: '',
    amount: '',
  }

  componentDidMount() {
    this.setState({categories: this.props.categories})
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmitExpense = (event) => {
    event.preventDefault()

    if (this.state.category_id && this.state.description && this.state.date && this.state.amount) {
      let expense = { ...this.props.expense, ...this.state}
      this.props.addExpense(expense)
      this.setState({
        category_id: '',
        description: '',
        date: '',
        amount: '',
      })
    } else {
      alert('Please fill out all information.')
    }
  }

  render() {
    return (
      <div id="expenses_add_container">
        <div id="expense_add_header"> Add Expense </div>

        <form id="expense_add_form" onSubmit={this.handleSubmitExpense}>

          <select className="expense_add_input" name="category_id" onChange={this.handleChange} value={this.state.category_id}>
            <option value="" disabled value hidden>Category</option>
            {this.props.categories.map((category) => <option key={category.id} value={category.id}>{category.title}</option>)}
          </select>

          <input className="expense_add_input" type="text" name="description" placeholder="Enter a description..." onChange={this.handleChange} value={this.state.description}></input>
          <input className="expense_add_input" type="date" name="date" onChange={this.handleChange} value={this.state.date}></input>
          <input className="expense_add_input" type="number" step="0.01" min="0" name="amount" placeholder="Enter an amount..." onChange={this.handleChange} value={this.state.amount}></input>

          <button id="expense_add_button"> Save </button>

        </form>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoryReducer.categories,
    expense: state.expenseReducer.expense,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => addExpense(expense, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseAdd)
