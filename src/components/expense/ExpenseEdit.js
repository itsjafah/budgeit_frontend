import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addExpense, editExpense, getExpenses } from '../../actions/expense'
import { getCategories } from '../../actions/category'

class ExpenseEdit extends Component {
  state = {
    categories: [],
    category_id: '',
    description: '',
    date: '',
    amount: '',
    user_id: 1,
  }

  componentDidMount() {
    this.props.getCategories()
    this.setState({categories: this.props.categories})
  }

  componentDidUpdate(prevProps) {
    // console.log(this.prevprops);
    // console.log(this.props);
    if (this.props.selectedExpense !== prevProps.selectedExpense && this.props.selectedExpense) {
       this.setState({
        category_id: this.props.selectedExpense.categories.id,
        description: this.props.selectedExpense.description,
        date: this.props.selectedExpense.date,
        amount: this.props.selectedExpense.amount
      })
    }
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmitExpense = (event) => {
    event.preventDefault()
    // console.log(this.props.expense)
    // console.log(this.state)
    if (this.state.category_id && this.state.description && this.state.date && this.state.amount) {
      let expense = { ...this.props.expense, ...this.state}

      if (this.props.selectedExpense) {
        expense = { ...this.props.selectedExpense, ...this.state }
        this.props.handleSubmit()
        this.props.editExpense(expense)
          .then(()=>this.props.getExpenses())
      } else {

        this.props.addExpense(expense)
          .then(()=>this.props.getExpenses())
      }
      event.target.reset()
    } else {
      alert('Please fill out all information.')
    }
    this.setState({
      category_id: '',
      description: '',
      date: '',
      amount: '',
      user_id: 1
    })
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <div> Expense </div>
        <form onSubmit={this.handleSubmitExpense}>
          <select name="category_id" onChange={this.handleChange} value={this.state.category_id}>
            <option value="" disabled selected hidden>Category</option>
            {this.props.categories.map((category) => <option key={category.id} value={category.id}>{category.title}</option>)}
          </select>
          <input type="text" name="description" onChange={this.handleChange} value={this.state.description}></input>
          <input type="date" name="date" onChange={this.handleChange} value={this.state.date}></input>
          <input type="text" name="amount" onChange={this.handleChange} value={this.state.amount}></input>
          <button> Save </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expense: state.expenseReducer.expense,
    categories: state.categoryReducer.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => addExpense(expense, dispatch),
    editExpense: expense => editExpense(expense, dispatch),
    getExpenses: expense => getExpenses(dispatch),
    getCategories: () => getCategories(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEdit)
