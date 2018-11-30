import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getBudgets, deleteBudget } from '../../actions/budget'

class BudgetMain extends Component {
  state = {
    budgets: [],
    sort: false,
    search: ''
  }

  componentDidMount() {
    this.props.getBudgets()
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

  mapBudgets = () => {
    return this.searchedBudgetTerm().map((budget) => {
      return (
        <div key={budget.id}>
          <div> {budget.description} </div>
          <div> {budget.start_date} - {budget.end_date} </div>
          <div> ${budget.amount} </div>
          <button onClick={()=>this.props.handleClickEditBudget(budget)}> Edit </button>
          <button onClick={()=>this.handleClickDeleteBudget(budget)}> Delete </button>
        </div>
      )
    })
  }

  render() {
    // console.log(this.props.budgets);
    // console.log(this.state.budgets);
    return (
      <div>

        <div>
          <button onClick={this.handleClickBudgetSort}> Sort </button>
          <button> Add </button>
          <input type="text" placeholder="Search" onChange={this.handleChangeBudgetSearch}></input>
        </div>

        <div>
          {this.mapBudgets()}
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
    getBudgets: () => getBudgets(dispatch),
    deleteBudget: (budget) => deleteBudget(budget, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetMain)
