import React, { Component } from 'react';

class CategoryDetails extends Component {

  render() {
    return (
      <div>

        <div>
          <button> ⇐ </button>
          <div> Past 30 Days </div>
          <button> Edit </button>
        </div>

        <div>
          <div> Category Color Title </div>
          <div>
            <div>
              <div> Expense Date </div>
              <div> Expense Description </div>
              <div> Expense Amount </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default CategoryDetails;
