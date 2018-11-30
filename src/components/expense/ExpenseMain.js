import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getExpenses, deleteExpense } from '../../actions/expense'

class ExpenseMain extends Component {
  state = {
    expenses: [],
    sortDescription: false,
    sortDates: false,
    sortAmounts: false
  }

  componentDidMount() {
    this.props.getExpenses()
  }

  handleClickDeleteExpense = (expense) => {
    // console.log(expense);
    this.props.deleteExpense(expense)
    .then(()=>this.props.getExpenses())
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

  mapExpenses = () => {
    if (this.props.expenses.length > 0) {
      return this.props.expenses.map((expense) => {
        // console.log(expense)
          return (
            <tr key={expense.id}>
              <td> Category Color </td>
              <td>{expense.description}</td>
              <td>{expense.date}</td>
              <td>${expense.amount}</td>
              <td>$-{expense.amount} </td>
              <td>
                <button id={expense.id} onClick={() => this.props.handleClickEditExpense(expense)}> Edit </button>
                <button id={expense.id} onClick={() => this.handleClickDeleteExpense(expense)}> Delete </button>
              </td>
            </tr>
          )
      })
    }
  }

  render() {
    // console.log(this.props);
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

              <tr>
                <th> Budget </th>
                <th></th>
                <th></th>
                <th> Budget Amount </th>
              </tr>

              <tr>
                <th> Category <button> Sort </button></th>
                <th> Expense Description <button onClick={this.handleClickExpenseDescriptionSort}> Sort </button></th>
                <th> Expense Dates <button onClick={this.handleClickExpenseDateSort}> Sort </button></th>
                <th> Expense Amount <button onClick={this.handleClickExpenseAmountSort}> Sort </button></th>
                <th> Remaining </th>
              </tr>

              {this.mapExpenses()}

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td> Remaining </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenseReducer.expenses,
    expense: state.expenseReducer.expense
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getExpenses: () => getExpenses(dispatch),
    deleteExpense: (expense) => deleteExpense(expense,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseMain)
