import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editExpense } from '../../actions/expense'

class ExpenseEdit extends Component {
  state = {
    categories: [],
    category_id: '',
    description: '',
    date: '',
    amount: '',
  }

  componentDidUpdate(prevProps) {
    // console.log(this.prevprops);
    // console.log(this.props);
    if (this.props.selectedExpense !== prevProps.selectedExpense && this.props.selectedExpense) {
       this.setState({
         category_id: '',
         description: '',
         date: '',
         amount: '',
      })
    }
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
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
    // console.log(this.state);
    const category = this.props.categories.find(category => category.id === this.props.selectedExpense.category_id)
    console.log(category);
    return (
      <div>
        <div> Expense </div>
        <form onSubmit={this.handleEditExpense}>
          <select name="category_id" onChange={this.handleChange} value={this.state.category_id}>
            <option value={category.id}>{category.title}</option>
            {this.selectedExpenseOptions()}
          </select>
          <input type="text" name="description" onChange={this.handleChange} value={this.props.selectedExpense.description}></input>
          <input type="date" name="date" onChange={this.handleChange} value={this.props.selectedExpense.date}></input>
          <input type="text" name="amount" onChange={this.handleChange} value={this.props.selectedExpense.amount}></input>
          <button> Save </button>
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
