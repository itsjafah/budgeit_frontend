import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCategory } from '../../actions/category'
import './CategoryAdd.css'

class CategoryAdd extends Component {
  state = {
    title: '',
    color: '' || '#000000',
    budget_id: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
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
      color: '' || '#000000',
      budget_id: ''
    })
  }

  selectBudgetOptions = () => {
    return this.props.budgets.map((budget) => {
      return <option value={budget.id} key={budget.id}>{budget.description}</option>
    })
  }

  render() {
    return (
      <div id="category_add_container">

        <div id="category_add_header">Add A Category</div>

        <form id="category_form" onSubmit={this.handleSubmitCategory}>

          <div id="category_add">

            <div className="category_info_add">
              <label className="category_add_label">Budget:</label>
              <select id="category_dropdown" name="budget_id" onChange={this.handleChange} value={this.state.budget_id}>
                <option value="" disabled defaultValue hidden>Select a budget...</option>
                {this.selectBudgetOptions()}
              </select>
            </div>

            <div className="category_info_add">
              <label className="category_add_label">Category:</label>
              <input id="category_add_input" type="text" name="title" placeholder="Enter a category..." onChange={this.handleChange} value={this.state.title}></input>
            </div>

            <div className="category_info_add">
              <label className="category_add_label">Select Color:</label>
              <input id="category_add_color" type="color" name="color" onChange={this.handleChange}></input>
            </div>

          </div>

          <div id="category_save_container">
            <button id="category_save_button">Save</button>
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
