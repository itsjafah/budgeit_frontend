import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteCategory } from '../../actions/category'
import './CategoryMain.css'

class CategoryMain extends Component {
  state = {
    categories: [],
    sort: false,
    search: ''
  }

  handleClickDeleteCategory = (category) => {
    this.props.deleteCategory(category)
  }

  handleClickCategorySort = () => {
    if (this.state.sort === false) {
      this.sortAToZ()
      this.setState({categories: this.props.categories, sort: true})
    } else if (this.state.sort === true) {
      this.sortZtoA()
      this.setState({categories: this.props.categories, sort: false})
    }
  }

  sortAToZ = () => {
    this.props.categories.sort(function(a,b) {
      let titleA = a.title.toLowerCase()
      let titleB = b.title.toLowerCase()
      if (titleA < titleB){
        return -1
      }
      if (titleA > titleB){
        return 1
      }
      return 0
    })
  }

  sortZtoA = () => {
    this.props.categories.sort(function(a,b) {
      let titleA = a.title.toLowerCase()
      let titleB = b.title.toLowerCase()
      if (titleA > titleB){
        return -1
      }
      if (titleA < titleB){
        return 1
      }
      return 0
    })
  }

  handleChangeCategorySearch = (event) => {
    this.setState({search: event.target.value})
  }

  searchedCategoryTerm = () => {
    return this.props.categories.filter((category) => {
      return category.title.toLowerCase().includes(this.state.search.toLowerCase())
    })
  }

  mapCategories = () => {
    return this.searchedCategoryTerm().map((category) => {
      return (
        <div id="category_container_div" key={category.id}>
          <div id="category" style={{backgroundColor: `${category.color}`}}>
            <div id="category_label">{category.title}</div>
            <button id="category_delete_button" onClick={()=>this.handleClickDeleteCategory(category)}> X </button>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div id="categories_container">
        <div id="categories_header">My Categories</div>
        <div id="categories_handler">
          <button id="category_sort_button" onClick={this.handleClickCategorySort}>Sort</button>
          <input id="category_search" type="text" placeholder="Search..." onChange={this.handleChangeCategorySearch}></input>
        </div>

        <div id="category_container">
          <div id="category_container2">
            {this.mapCategories()}
          </div>
        </div>

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
    deleteCategory: (category) => deleteCategory(category,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMain)
