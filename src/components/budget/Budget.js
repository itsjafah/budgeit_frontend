import React, { Component } from 'react';
import BudgetMain from './BudgetMain'
import BudgetAdd from './BudgetAdd'
import BudgetEdit from './BudgetEdit'
import { connect } from 'react-redux'

class Budget extends Component {
  state = {
    selectedBudget: ''
  }

  handleClickEditBudget = (budget) => {
    this.setState({selectedBudget: budget})
  }

  render() {
    return (
      <React.Fragment>
        {!!this.props.user.first_name
        ?
        <React.Fragment>
          <BudgetAdd />
          <BudgetEdit selectedBudget={this.state.selectedBudget}/>
          <BudgetMain handleClickEditBudget={this.handleClickEditBudget} />
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
    budgets: state.budgetReducer.budgets,
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    budget: budget => budget(budget, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget)
