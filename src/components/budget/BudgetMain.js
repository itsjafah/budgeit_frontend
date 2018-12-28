import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteBudget } from '../../actions/budget'
import BudgetAdd from './BudgetAdd'
import BudgetEdit from './BudgetEdit'
import './BudgetMain.css'

class BudgetMain extends Component {
  state = {
    sort: false,
    search: '',
    budget: null,
    budgetSelected: false,
    selectedBudget: ''
  }

  handleClickEditBudget = (budget) => {
    this.setState({selectedBudget: budget})
    document.getElementById("budget_edit_container").style.display = "block"
    document.getElementById("budget_add_container").style.display = "none"
  }

  handleClickDeleteBudget = (budget) => {
    this.props.deleteBudget(budget)
  }

  handleClickBudgetSort = () => {
    if (this.state.sort === false) {
      this.sortAToZ()
      this.setState({budgets: this.props.budgets, sort: true})
    } else if (this.state.sort === true) {
      this.sortZtoA()
      this.setState({budgets: this.props.budgets, sort: false})
    }
  }

  sortAToZ = () => {
    this.props.budgets.sort(function(a,b) {
      let nameA = a.description.toLowerCase()
      let nameB = b.description.toLowerCase()
      if (nameA < nameB){
        return -1
      }
      if (nameA > nameB){
        return 1
      }
      return 0
    })
  }

  sortZtoA = () => {
    this.props.budgets.sort(function(a,b) {
      let nameA = a.description.toLowerCase()
      let nameB = b.description.toLowerCase()
      if (nameA > nameB){
        return -1
      }
      if (nameA < nameB){
        return 1
      }
      return 0
    })
  }

  handleChangeBudgetSearch = (event) => {
    this.setState({search: event.target.value})
  }

  searchedBudgetTerm = () => {
    return this.props.budgets.filter((budget) => {
      return budget.description.toLowerCase().includes(this.state.search.toLowerCase())
    })
  }

  handleClickBudgetSelected = (budget) => {
    this.setState({budget: budget, budgetSelected: !this.state.budgetSelected})
  }

  mapBudgets = () => {
    return this.searchedBudgetTerm().map((budget) => {
      return (
        <div className="budget_container" key={budget.id} onClick={()=>this.handleClickBudgetSelected(budget)}>
          <div className="budget_info" >{budget.description}</div>
          <div className="budget_info">{budget.start_date} - {budget.end_date}</div>
          <div className="budget_info">${budget.amount.toFixed(2)}</div>
          {this.state.budget === budget && this.state.budgetSelected
          ?
            <React.Fragment>
              <div id="budget_label_button">
                <button className="budget_button" onClick={()=>this.handleClickEditBudget(budget)}>Edit</button>
                <button className="budget_button" onClick={()=>this.handleClickDeleteBudget(budget)}>Delete</button>
              </div>
            </React.Fragment>
          :
            null
          }
        </div>
      )
    })
  }

  handleClickShowForm = () => {
    document.getElementById("budget_add_container").style.display = "block"
    document.getElementById("budget_edit_container").style.display = "none"
  }

  render() {
    return (
      <div id="budgets_container">
        <div id="budget_header">My Budgets</div>
        <BudgetAdd />
        <BudgetEdit selectedBudget={this.state.selectedBudget}/>
        <div id="budget_handler">
          <button id="sort_button" onClick={this.handleClickBudgetSort}>Sort</button>
          <button id="add_button" onClick={this.handleClickShowForm}>Add</button>
          <div id="budget_search_input_container"><input id="budget_search_input" type="text" placeholder="Search..." onChange={this.handleChangeBudgetSearch}></input></div>
        </div>
        <div id="budgets">
          <div id="budget_label_container">
            <div className="budget_label">Description</div>
            <div className="budget_label">Date Range</div>
            <div className="budget_label">Amount</div>
            <div className="budget_label">Edit/Delete</div>
          </div>
          <div id="budgets_container_main">
            {this.mapBudgets()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    budgets: state.budgetReducer.budgets,
    budget: state.budgetReducer.budget
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBudget: (budget) => deleteBudget(budget, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetMain)
