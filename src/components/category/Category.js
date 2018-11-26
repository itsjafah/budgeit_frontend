import React, { Component } from 'react';
import CategoryMain from './CategoryMain'
import CategoryDetails from './CategoryDetails'
import CategoryEdit from './CategoryEdit'

class Category extends Component {

  render() {
    return (
      <div>
        <CategoryMain />
        <CategoryDetails />
        <CategoryEdit />
      </div>
    );
  }
}

export default Category;
