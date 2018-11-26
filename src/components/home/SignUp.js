import React, { Component } from 'react';

class SignUp extends Component {

  render() {
    return (
      <div>

        <form>
          <label> First Name: </label>
          <input type="text"></input>

          <label> Last Name: </label>
          <input type="text"></input>

          <label> Email: </label>
          <input type="text"></input>

          <label> Password: </label>
          <input type="text"></input>

          <label> Password: </label>
          <input type="text"></input>

          <button> Signup </button>
        </form>
        
      </div>
    );
  }
}

export default SignUp;
