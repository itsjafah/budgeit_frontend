import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getBudgets } from '../../actions/budget'

class BudgetMain extends Component {

  componentDidMount() {
    this.props.getBudgets()
  }

  mapBudgets = () => {
    // console.log(this.props);
    return this.props.budgets.map((budget) => {
      // console.log(budget);
      return (
        <div key={budget.id}>
          <div> {budget.description} </div>
          <div> {budget.start_date} - {budget.end_date} </div>
          <div> ${budget.amount} </div>
          <div> ⇒ </div>
        </div>
      )
    })
  }

  render() {
    // console.log(this.props);
    return (
      <div>

        <div>
          <button> Sort </button>
          <button> Add </button>
          <input type="text" placeholder="Search"></input>
        </div>

        <div>
          {this.mapBudgets()}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    budgets: state.budgetReducer.budgets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBudgets: () => getBudgets(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetMain)
