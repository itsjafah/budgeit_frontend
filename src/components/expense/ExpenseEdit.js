import React, { Component } from 'react';

class ExpenseEdit extends Component {

  render() {
    return (
      <div>
        <div> Expense </div>
        <div>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <button> Save </button>
        </div>
      </div>
    );
  }
}

export default ExpenseEdit;
