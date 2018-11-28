import React, { Component } from 'react';
import CategoryMain from './CategoryMain'
import CategoryEdit from './CategoryEdit'
import { connect } from 'react-redux'

class Category extends Component {
  state = {
    id: '',
    title: '',
    color: ''
  }

  handleClickEditCategory = (category) => {
    // console.log(category);
    this.setState ({
      id: category.id,
      title: category.title,
      color: category.color
    })

  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <CategoryMain handleClickEditCategory={this.handleClickEditCategory}/>
        <CategoryEdit />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.categoryReducer.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    category: category => category(category, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
