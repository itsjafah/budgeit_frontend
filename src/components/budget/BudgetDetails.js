import React, { Component } from 'react';
import { connect } from 'react-redux'

class BudgetDetails extends Component {

  render() {
    return (
      <div>

        <div>
          <button> ⇐ </button>
          <button> Edit </button>
        </div>

        <div>
          <div> Budget Description </div>
          <div> Budget Amount </div>
          <div> Budget Date Range </div>
        </div>

        <div>
          <div> Past 30 Days </div>
          <div>
            <div> Category Title / Color</div>
            <div> Expense Date</div>
            <div> Expense Description </div>
            <div> Expense Amount </div>
          </div>
        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(BudgetDetails)
