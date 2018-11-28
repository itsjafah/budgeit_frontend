import React, { Component } from 'react';
import BudgetMain from './BudgetMain'
import BudgetDetails from './BudgetDetails'
import BudgetEdit from './BudgetEdit'
import { connect } from 'react-redux'

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

const mapStateToProps = state => {
  return {
    budget: state.budgetReducer.budget
  }
}

const mapDispatchToProps = dispatch => {
  return {
    budget: budget => budget(budget, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget)
