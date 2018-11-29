import React, { Component } from 'react';
import BudgetMain from './BudgetMain'
import BudgetAdd from './BudgetAdd'
import BudgetEdit from './BudgetEdit'
import { connect } from 'react-redux'

class Budget extends Component {
  state = {
    selectedBudget: '',
    id: '',
    description: '',
    amount: '',
    start_date: '',
    end_date: ''
  }

  handleClickEditBudget = (budget) => {
    // console.log("clicked");
    // console.log(budget);
    this.setState({selectedBudget: budget})
  }

  render() {
    // console.log(this.state.selectedBudget);
    return (
      <div>
        <BudgetMain handleClickEditBudget={this.handleClickEditBudget} />
        <BudgetAdd />
        <BudgetEdit selectedBudget={this.state.selectedBudget}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    budget: state.budgetReducer.budget,
    selectedBudget: state.budgetReducer.selectedBudget
  }
}

const mapDispatchToProps = dispatch => {
  return {
    budget: budget => budget(budget, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget)
