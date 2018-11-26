import React, { Component } from 'react';

class ProfileEdit extends Component {

  render() {
    return (
      <div>
        <form>
          <img src='' alt=''></img>
          <div>
            <label> First Name: </label>
            <input type="text"></input>

            <label> Last Name: </label>
            <input type="text"></input>

            <label> Email: </label>
            <input type="text"></input>

            <label> Password: </label>
            <input type="text"></input>

            <button> Save </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;
