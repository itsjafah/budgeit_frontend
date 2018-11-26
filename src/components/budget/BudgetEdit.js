import React, { Component } from 'react';

class BudgetEdit extends Component {

  render() {
    return (
      <div>
        <form>
          <div>
            <label> Budget Description: </label>
            <input type="text"></input>
            <label> Budget Amount: </label>
            <input type="text"></input>
            <div>
              <label> Budget Start Date: </label>
              <input type="text"></input>
              <label> Budget End Date </label>
              <input type="text"></input>
            </div>
          </div>

          <div>
            <div> Category Title / Color </div>
            <div> Category Title / Color </div>
            <div> Category Title / Color </div>
            <div> Category Title / Color </div>
          </div>

          <div>
            <button> Save </button>
            <button> Delete </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BudgetEdit;
