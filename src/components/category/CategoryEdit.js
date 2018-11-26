import React, { Component } from 'react';

class CategoryEdit extends Component {

  render() {
    return (
      <div>
        <form>
          <div>
            <label> Description: </label>
            <input type="text"></input>
            <div>
              <div> Color </div>
              <div> Color </div>
              <div> Color </div>
              <div> Color </div>
            </div>
            <div>
              <button> Save </button>
              <button> Delete </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CategoryEdit;
