import React, { Component } from 'react';
import ExpenseMain from './ExpenseMain'
import ExpenseEdit from './ExpenseEdit'
import { connect } from 'react-redux'

class Expense extends Component {

  handleClickEditExpense = (expense) => {
    this.setState({selectedExpense: expense})
  }

  render() {
    return (
      <React.Fragment>
        {!!this.props.user.first_name
        ?
          <React.Fragment>
            <ExpenseMain />
          </React.Fragment>
        :
          null
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenseReducer.expenses,
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    expense: expense => expense(expense, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expense)
