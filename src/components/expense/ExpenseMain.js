import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getExpenses, deleteExpense } from '../../actions/expense'

class ExpenseMain extends Component {

  componentDidMount() {
    this.props.getExpenses()
  }

  handleClickDeleteExpense = (expense) => {
    // console.log(expense);
    this.props.deleteExpense(expense)
    .then(()=>this.props.getExpenses())
  }

  mapExpenses = () => {
    if (this.props.expenses.length > 0) {
      return this.props.expenses.map((expense) => {
        // console.log(expense)
          return (
            <tr key={expense.id}>
              <td> Category Color </td>
              <td>{expense.date}</td>
              <td>${expense.amount}</td>
              <td>${expense.amount} </td>
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
              </tr>

              <tr>
                <th> Category <button> Sort </button></th>
                <th> Expense Dates <button> Sort </button></th>
                <th> Expense Amount <button> Sort </button></th>
                <th> Remaining <button> Sort </button></th>
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
