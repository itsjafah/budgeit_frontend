import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Doughnut } from 'react-chartjs-2'
import DoughnutChartMaker from './DoughnutChartMaker'

class DoughnutChart extends Component {
  render() {
    const budgetCategories = (budget) => {
      let cats = this.props.categories.filter((category) => {
        return category.budget_id === budget.id
      })
      return cats
    }
    return (
      <div>
        {
          this.props.budgets.length > 0 && this.props.expenses.length > 0
          ?
            this.props.budgets.map(budget => <DoughnutChartMaker categories={budgetCategories(budget)} budgetAmt={budget.amount} expenses={this.props.expenses} />)
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
