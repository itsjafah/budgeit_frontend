import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addBudget } from '../../actions/budget'
import './BudgetAdd.css'

class BudgetAdd extends Component {
  state = {
    description: '',
    amount: '',
    start_date: '',
    end_date: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmitBudget = (event) => {
    event.preventDefault()

    if (this.state.description && this.state.amount && this.state.start_date && this.state.end_date && this.state.start_date < this.state.end_date) {
      let budget = { ...this.props.budgets, ...this.state}
      this.props.addBudget(budget)
      this.setState({
        amount: '',
        start_date: '',
        end_date: ''
      })
    } else {
      alert('Please add a description, amount, start date, and/or end date.')
    }
  }

  handleClickBudgetAddClose = () => {
    document.getElementById("budget_add_container").style.display = "none"
  }

  render() {
    return (
      <React.Fragment>
        <div id="budget_add_container">
          <button id="budget_add_close" onClick={this.handleClickBudgetAddClose}> X </button>
          <form id="budget_add_form" onSubmit={this.handleSubmitBudget}>
            <div id="budget_add_body">
              <label className="budget_add_label"> Budget Description: </label>
              <input className="budget_add_input" type="text" name="description" placeholder="Enter a description..." onChange={this.handleChange} value={this.state.description}></input>
              <label className="budget_add_label"> Budget Amount: </label>
              <input className="budget_add_input" type="number" step="0.01" min="0" name="amount" placeholder="Enter an amount..." onChange={this.handleChange} value={this.state.amount}></input>
              <label className="budget_add_label"> Budget Start Date: </label>
              <input className="budget_add_input" type="date" name="start_date" onChange={this.handleChange} value={this.state.start_date}></input>
              <label className="budget_add_label"> Budget End Date: </label>
              <input className="budget_add_input" type="date" name="end_date" onChange={this.handleChange} value={this.state.end_date}></input>
            </div>
            <div id="budget_add_button_container">
              <button id="budget_add_button"> Save </button>
            </div>
          </form>
        </div>
      </React.Fragment>
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
    addBudget: budget => addBudget(budget, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetAdd)
