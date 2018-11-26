import React, { Component } from 'react';

class BudgetMain extends Component {

  render() {
    return (
      <div>

        <div>
          <button> Sort </button>
          <button> Add </button>
          <input type="text" placeholder="Search"></input>
        </div>

        <div>
          <div>
            <div> Budget Description </div>
            <div> Budget Date Range </div>
            <div> Budget Amount </div>
            <button> ⇒ </button>
          </div>
        </div>

      </div>
    );
  }
}

export default BudgetMain;
