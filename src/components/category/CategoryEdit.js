import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCategory, editCategory } from '../../actions/category'
import './CategoryEdit.css'

class CategoryEdit extends Component {
  state = {
    title: '',
    color: ''
  }

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value})
  }

  handleClickColor = (event) => {
    // console.log(event.target.id);
    this.setState({ color: event.target.id})
  }

  handleSubmitCategory = (event) => {
    // console.log(this.props.category);
    event.preventDefault()

    if (this.props.selectedCategory) {

    }

    if (this.state.title && this.state.color) {
      let category = { ...this.props.category, ...this.state}
      // console.log(category);
      this.props.addCategory(category)
      event.target.reset()
    } else {
      alert('Please add a title and select a color.')
    }
  }

  render() {
    // console.log(this.props.selectedCategory);
    return (
      <div>
        <form onSubmit={this.handleSubmitCategory}>
          <div>
            <label> Description: </label>
            <input type="text" name="title" onChange={this.handleChange}></input>
            <div id="color_container">
              <div id="color_1" onClick={this.handleClickColor}> Color </div>
              <div id="color_2" onClick={this.handleClickColor}> Color </div>
              <div id="color_3" onClick={this.handleClickColor}> Color </div>
              <div id="color_4" onClick={this.handleClickColor}> Color </div>
              <div id="color_5" onClick={this.handleClickColor}> Color </div>
              <div id="color_6" onClick={this.handleClickColor}> Color </div>
              <div id="color_7" onClick={this.handleClickColor}> Color </div>
              <div id="color_8" onClick={this.handleClickColor}> Color </div>
              <div id="color_9" onClick={this.handleClickColor}> Color </div>
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
  // console.log(state.categoryReducer)
  return {
    category: state.categoryReducer.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCategory: category => addCategory(category, dispatch),
    editCategory: category => editCategory(category, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEdit)
