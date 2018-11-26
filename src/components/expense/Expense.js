import React, { Component } from 'react';
import ExpenseMain from './ExpenseMain'
import ExpenseEdit from './ExpenseEdit'

class Expense extends Component {

  render() {
    return (
      <div>
        <ExpenseMain />
        <ExpenseEdit />
      </div>
    );
  }
}

export default Expense;
