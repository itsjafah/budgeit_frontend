import React, { Component } from 'react';
import CategoryMain from './CategoryMain'
import CategoryAdd from './CategoryAdd'
import { connect } from 'react-redux'

class Category extends Component {
  state = {
    id: '',
    title: '',
    color: ''
  }

  handleClickEditCategory = (category) => {
    this.setState ({
      id: category.id,
      title: category.title,
      color: category.color
    })
  }

  render() {
    return (
      <React.Fragment>
        {!!this.props.user.first_name
        ?
          <React.Fragment>
            <CategoryMain handleClickEditCategory={this.handleClickEditCategory}/>
            <CategoryAdd />
          </React.Fragment>
        :
          null
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.categoryReducer.category,
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    category: category => category(category, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
