import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteExpense } from '../../actions/expense'
import './ExpenseMain.css'

class ExpenseMain extends Component {
  state = {
    expenses: [],
    sortDescription: false,
    sortDates: false,
    sortAmounts: false
  }

  handleClickDeleteExpense = (expense) => {
    this.props.deleteExpense(expense)
  }

  handleClickExpenseDescriptionSort = () => {
    if (this.state.sortDescription === false) {
    this.sortAtoZ()
    this.setState({budgets: this.props.budgets, sortDescription: true})
  } else if (this.state.sortDescription === true) {
    this.sortZtoA()
    this.setState({budgets: this.props.budgets, sortDescription: false})
  }
  }

  handleClickExpenseDateSort = () => {
    if (this.state.sortDates === false) {
    this.sortDatesLowToHigh()
    this.setState({budgets: this.props.budgets, sortDates: true})
  } else if (this.state.sortDates === true) {
    this.sortDatesHighToLow()
    this.setState({budgets: this.props.budgets, sortDates: false})
  }
}

  handleClickExpenseAmountSort = () => {
    if (this.state.sortAmounts === false) {
      this.sortAmountLowToHigh()
      this.setState({budgets: this.props.budgets, sortAmounts: true})
    } else if (this.state.sortAmounts === true) {
      this.sortAmountHighToLow()
      this.setState({budgets: this.props.budgets, sortAmounts: false})
    }
  }

  sortAtoZ = () => {
    this.props.expenses.sort(function(a,b) {
      let descriptionA = a.description
      let descriptionB = b.description
      if (descriptionA < descriptionB){
        return -1
      }
      if (descriptionA > descriptionB){
        return 1
      }
      return 0
    })
  }

  sortZtoA = () => {
    this.props.expenses.sort(function(a,b) {
      let descriptionA = a.description
      let descriptionB = b.description
      if (descriptionA > descriptionB){
        return -1
      }
      if (descriptionA < descriptionB){
        return 1
      }
      return 0
    })
  }

  sortDatesLowToHigh = () => {
    this.props.expenses.sort(function(a,b) {
      let dateA = a.date
      let dateB = b.date
      if (dateA < dateB){
        return -1
      }
      if (dateA > dateB){
        return 1
      }
      return 0
    })
  }

  sortDatesHighToLow = () => {
    this.props.expenses.sort(function(a,b) {
      let dateA = a.date
      let dateB = b.date
      if (dateA > dateB){
        return -1
      }
      if (dateA < dateB){
        return 1
      }
      return 0
    })
  }

  sortAmountLowToHigh = () => {
    return this.props.expenses.sort(function(a,b) {
      return a.amount - b.amount
    })
  }

  sortAmountHighToLow = () => {
    return this.props.expenses.sort(function(a,b) {
      return b.amount - a.amount
    })
  }

  mapBudgets = () => {
    return this.props.budgets.map(budget => {
      let categoryBudgets = this.props.categories.filter(category => budget.id === category.budget_id)
      return <div>
        <tr id="budget_table_row">
          <th className="budget_table_headers"> Budget: {budget.description}</th>
          <th className="budget_table_headers"> Budget Total: ${budget.amount}</th>
          <th className="budget_table_headers"> Budget Remaining: $-{budget.amount}</th>
        </tr>
        {categoryBudgets.map(category => {
          let categoryExpenses = this.props.expenses.filter(expense => expense.category_id === category.id)
          return <div>
            <tr id="category_table_row">
              <th className="category_table_headers"> {category.title} <button> Sort </button></th>
            </tr>
            <tr id="expense_table_label_row">
              <th className="expense_table_headers"> Expense Description <button onClick={this.handleClickExpenseDescriptionSort}> Sort </button></th>
              <th className="expense_table_headers"> Expense Dates <button onClick={this.handleClickExpenseDateSort}> Sort </button></th>
              <th className="expense_table_headers"> Expense Amount <button onClick={this.handleClickExpenseAmountSort}> Sort </button></th>
              <th className="expense_table_headers"> Edit/Delete </th>
            </tr>
            {categoryExpenses.map(expense => {
              return <div>
                <tr key={expense.id} id="expense_table_row">
                  <td className="expense_table_data">{expense.description}</td>
                  <td className="expense_table_data">{expense.date}</td>
                  <td className="expense_table_data">${expense.amount}</td>
                  <td className="expense_table_data">
                    <button id={expense.id} onClick={() => this.props.handleClickEditExpense(expense)}> Edit </button>
                    <button id={expense.id} onClick={() => this.handleClickDeleteExpense(expense)}> Delete </button>
                  </td>
                </tr>
              </div>
            })}
          </div>
        })}
      </div>
    })
  }

  render() {
    return (
      <div>

        <div>
          <select>
            <option> Week </option>
            <option> Month </option>
          </select>
        </div>

        <div>
          <table>
            <tbody>

              {this.mapBudgets()}
              
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    budgets: state.budgetReducer.budgets,
    expenses: state.expenseReducer.expenses,
    categories: state.categoryReducer.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteExpense: (expense) => deleteExpense(expense,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseMain)
