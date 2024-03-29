import React, { Component } from 'react';
import { connect } from 'react-redux'
import DoughnutChartMaker from './DoughnutChartMaker'
import './DoughnutChart.css'

class DoughnutChart extends Component {
  render() {
    const budgetCategories = (budget) => {
      let cats = this.props.categories.filter((category) => {
        return category.budget_id === budget.id
      })
      return cats
    }
    return (
      <div id="graph_container2">
        {
          this.props.budgets.length > 0 && this.props.expenses.length > 0
          ?
            this.props.budgets.map(budget => (
              <div className="graph" key={budget.id}>
                <div className="graph_label">{budget.description}</div>
                <DoughnutChartMaker
                  key={budget.id}
                  categories={budgetCategories(budget)}
                  budgetAmt={budget.amount}
                  expenses={this.props.expenses}
                />
              </div>
            ))
          :
            null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    budgets: state.budgetReducer.budgets,
    categories: state.categoryReducer.categories,
    expenses: state.expenseReducer.expenses
  }
}

export default connect(mapStateToProps)(DoughnutChart)
