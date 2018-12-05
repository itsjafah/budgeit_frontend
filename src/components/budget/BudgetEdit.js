import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editBudget } from '../../actions/budget'

class BudgetEdit extends Component {
  state = {
    description: '',
    amount: '',
    start_date: '',
    end_date: '',
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedBudget !== prevProps.selectedBudget && this.props.selectedBudget) {
       this.setState({
        description: this.props.selectedBudget.description,
        amount: this.props.selectedBudget.amount,
        start_date: this.props.selectedBudget.start_date,
        end_date: this.props.selectedBudget.end_date,
      })
    }
  }

  handleChangeEdit = (event) => {
    this.setState({ [event.target.name]:event.target.value})
  }

  handleEditBudget = (event) => {
    event.preventDefault()
    if (this.props.selectedBudget.description && this.props.selectedBudget.amount && this.props.selectedBudget.start_date && this.props.selectedBudget.end_date && this.state.start_date < this.state.end_date) {
      let budget = { ...this.props.selectedBudget, ...this.state}
      this.props.editBudget(budget)
      event.target.reset()
    } else {
      alert('Please add a description, amount, start date, and/or end date.')
    }
    this.setState({
      description: '',
      amount: '',
      start_date: '',
      end_date: ''
    })
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleEditBudget}>

          <div>
            <label> Budget Description: </label>
            <input type="text" name="description" onChange={this.handleChangeEdit} value={this.state.description}></input>
            <label> Budget Amount: </label>
            <input type="number" step="0.01" min="0" name="amount" onChange={this.handleChangeEdit} value={this.state.amount}></input>

            <div>
              <label> Budget Start Date: </label>
              <input type="date" name="start_date" onChange={this.handleChangeEdit} value={this.state.start_date}></input>
              <label> Budget End Date </label>
              <input type="date" name="end_date" onChange={this.handleChangeEdit} value={this.state.end_date}></input>
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
    budgets: state.budgetReducer.budgets,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editBudget: budget => editBudget(budget, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetEdit)
