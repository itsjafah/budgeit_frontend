import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCategories, deleteCategory } from '../../actions/category'

class CategoryMain extends Component {

  componentDidMount() {
    this.props.getCategories()
  }

  handleClickDeleteCategory = (category) => {
    // console.log(category.id);
    this.props.deleteCategory(category)
    .then(()=>this.props.getCategories())
  }

  mapCategories = () => {
    // console.log(this.props);
    return this.props.categories.map((category) => {
      // console.log(category.title);
      return (
        <div key={category.id}>
          <div> </div>
          <div> {category.title} </div>
          <button onClick={()=>this.handleClickDeleteCategory(category)}> Delete </button>
        </div>
      )
    })
  }

  render() {
    // console.log(this.props);
    return (
      <div>

        <div>
          <button> Sort </button>
          <button> Add </button>
          <input type="text" placeholder="Search"></input>
        </div>

        {this.mapCategories()}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoryReducer.categories,
    category: state.categoryReducer.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => getCategories(dispatch),
    deleteCategory: (category) => deleteCategory(category,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMain)
