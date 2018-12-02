import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addExpense } from '../../actions/expense'

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

  componentDidUpdate(prevProps) {
    // console.log(this.prevprops);
    // console.log(this.props);
    // if (this.props.selectedExpense !== prevProps.selectedExpense && this.props.selectedExpense) {
    //    this.setState({
    //      category_id: '',
    //      description: '',
    //      date: '',
    //      amount: '',
    //   })
    // }
  }

  handleChange = (event) => {
    // console.log(event.target.value)
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
    // console.log('EXPENSE', this.props);
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
