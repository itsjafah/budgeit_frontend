import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addBudget } from '../../actions/budget'

class BudgetAdd extends Component {
  state = {
    description: '',
    amount: '',
    start_date: '',
    end_date: ''
  }

  handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmitBudget = (event) => {
    event.preventDefault()

    if (this.state.description && this.state.amount && this.state.start_date && this.state.end_date) {
      let budget = { ...this.props.budgets, ...this.state}
      this.props.addBudget(budget)
      this.setState({
        description: '',
        amount: '',
        start_date: '',
        end_date: ''
      })
    } else {
      alert('Please add a description, amount, start date, and/or end date.')
    }
  }

  render() {
    // console.log('BUDGET', this.props)
    return (
      <div>

        <form onSubmit={this.handleSubmitBudget}>
          <div>
            <label> Budget Description: </label>
            <input type="text" name="description" onChange={this.handleChange} value={this.state.description}></input>
            <label> Budget Amount: </label>
            <input type="text" name="amount" onChange={this.handleChange} value={this.state.amount}></input>
            <div>
              <label> Budget Start Date: </label>
              <input type="date" name="start_date" onChange={this.handleChange} value={this.state.start_date}></input>
              <label> Budget End Date </label>
              <input type="date" name="end_date" onChange={this.handleChange} value={this.state.end_date}></input>
            </div>
          </div>

          <div>
            <button> Save </button>
          </div>
        </form>

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
    addBudget: budget => addBudget(budget, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetAdd)
