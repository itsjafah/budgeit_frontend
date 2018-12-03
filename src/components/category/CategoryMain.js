import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteCategory } from '../../actions/category'

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
        <div key={category.id}>
          <div></div>
          <div>{category.title}</div>
          <button onClick={()=>this.handleClickDeleteCategory(category)}> Delete </button>
        </div>
      )
    })
  }

  render() {
    return (
      <div>

        <div>
          <button onClick={this.handleClickCategorySort}> Sort </button>
          <button> Add </button>
          <input type="text" placeholder="Search" onChange={this.handleChangeCategorySearch}></input>
        </div>

        {this.mapCategories()}

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
