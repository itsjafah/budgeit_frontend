import React, { Component } from 'react';
import ExpenseMain from './ExpenseMain'
import ExpenseEdit from './ExpenseEdit'
import { connect } from 'react-redux'

class Expense extends Component {
  state = {
    selectedExpense: null
  }

  handleClickEditExpense = (expense) => {
    // console.log(expense);
    this.setState({selectedExpense: expense})
  }

  handleSubmit = () => {
    this.setState({selectedExpense: null})
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <ExpenseMain handleClickEditExpense={this.handleClickEditExpense}/>
        <ExpenseEdit handleSubmit={this.handleSubmit} selectedExpense={this.state.selectedExpense}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expense: state.expenseReducer.expense
  }
}

const mapDispatchToProps = dispatch => {
  return {
    expense: expense => expense(expense, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expense)
