import React, { Component } from 'react';

class CategoryMain extends Component {

  render() {
    return (
      <div>

        <div>
          <button> Sort </button>
          <button> Add </button>
          <input type="text" placeholder="Search"></input>
        </div>

        <div>
          <div> Color </div>
          <div> Category Title </div>
          <button> ⇒ </button>
        </div>

      </div>
    );
  }
}

export default CategoryMain;
