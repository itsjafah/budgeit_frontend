import React, { Component } from 'react';
import ExpenseMain from './ExpenseMain'
import ExpenseAdd from './ExpenseAdd'
import ExpenseEdit from './ExpenseEdit'
import { connect } from 'react-redux'

class Expense extends Component {
  state = {
    selectedExpense: ''
  }

  handleClickEditExpense = (expense) => {
    console.log("clicked");
    console.log(expense);
    this.setState({selectedExpense: expense})
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <ExpenseMain handleClickEditExpense={this.handleClickEditExpense}/>
        <ExpenseAdd />
        {this.state.selectedExpense ? <ExpenseEdit selectedExpense={this.state.selectedExpense}/> : null }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenseReducer.expenses,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    expense: expense => expense(expense, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expense)
