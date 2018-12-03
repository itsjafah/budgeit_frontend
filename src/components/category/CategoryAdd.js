import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCategory } from '../../actions/category'
import './CategoryAdd.css'

const COLORS = [
  '#A3586D',
  '#5C4A72',
  '#f3b05a',
  '#f4874b',
  '#346a4e',
  '#192e5B',
  '#1d65a6',
  '#72a2c0',
  '#bf988F'
]

class CategoryAdd extends Component {
  state = {
    title: '',
    color: '',
    budget_id: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleClickColor = (idx) => {
    this.setState({ color: COLORS[idx] })
  }

  handleSubmitCategory = (event) => {
    event.preventDefault()
    if (this.state.budget_id && this.state.title && this.state.color) {
      let category = { ...this.props.category, ...this.state}
      this.props.addCategory(category)
      event.target.reset()
    } else {
      alert('Please add a title and select a color.')
    }
    this.setState({
      title: '',
      color: '',
      budget_id: ''
    })
  }

  selectBudgetOptions = () => {
    return this.props.budgets.map((budget) => {
      return <option value={budget.id} key={budget.id}> {budget.description} </option>
    })
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmitCategory}>
          <div>

            <label> Budget: </label>
            <select name="budget_id" onChange={this.handleChange} value={this.state.budget_id}>
              <option value="" disabled selected hidden>Budget</option>
              {this.selectBudgetOptions()}
            </select>

            <label> Description: </label>
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title}></input>

            <div>
              Colors:
            </div>
            <div id="color_container">

              {COLORS.map((color,idx) => {
                return <div className="color" style={{backgroundColor: `${color}`}} onClick={()=>this.handleClickColor(idx)}></div>
              })}
            </div>

            <div>
              <button> Save </button>
            </div>

          </div>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoryReducer.categories,
    budgets: state.budgetReducer.budgets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCategory: category => addCategory(category, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdd)
