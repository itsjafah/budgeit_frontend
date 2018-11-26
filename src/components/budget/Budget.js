import React, { Component } from 'react';
import BudgetMain from './BudgetMain'
import BudgetDetails from './BudgetDetails'
import BudgetEdit from './BudgetEdit'

class Budget extends Component {

  render() {
    return (
      <div>
        <BudgetMain />
        <BudgetDetails />
        <BudgetEdit />
      </div>
    );
  }
}

export default Budget;
