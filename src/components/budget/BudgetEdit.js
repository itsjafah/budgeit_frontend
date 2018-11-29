import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editBudget, getBudgets } from '../../actions/budget'

class BudgetEdit extends Component {
  state = {
    description: '',
    amount: '',
    start_date: '',
    end_date: '',
    user_id: 1
  }

  componentDidUpdate(prevProps) {
    // console.log(this.prevprops);
    // console.log(this.props);
    if (this.props.selectedBudget !== prevProps.selectedBudget && this.props.selectedBudget) {
       this.setState({
        description: this.props.selectedBudget.description,
        amount: this.props.selectedBudget.amount,
        start_date: this.props.selectedBudget.start_date,
        end_date: this.props.selectedBudget.end_date
      })
    }
  }

  handleChangeEdit = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    this.setState({ [event.target.name]:event.target.value})
  }

  handleEditBudget = (event) => {
    event.preventDefault()

    if (this.props.selectedBudget.description && this.props.selectedBudget.amount && this.props.selectedBudget.start_date && this.props.selectedBudget.end_date) {
      let budget = { ...this.props.selectedBudget, ...this.state}
      // console.log(budget);
      this.props.editBudget(budget)
      .then(()=>this.props.getBudgets())
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
    // console.log({...this.state});
    return (
      <div>

        <form onSubmit={this.handleEditBudget}>
          <div>
            <label> Budget Description: </label>
            <input type="text" name="description" onChange={this.handleChangeEdit} value={this.state.description}></input>
            <label> Budget Amount: </label>
            <input type="text" name="amount" onChange={this.handleChangeEdit} value={this.state.amount}></input>
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
    budget: state.budgetReducer.budget,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editBudget: budget => editBudget(budget, dispatch),
    getBudgets: () => getBudgets(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetEdit)
