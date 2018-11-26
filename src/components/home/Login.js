import React, { Component } from 'react';

class Login extends Component {

  render() {
    return (
      <div>

        <form>
          <label> Email: </label>
          <input type="text"></input>

          <label> Password: </label>
          <input type="text"></input>

          <button> Login </button>
        </form>

      </div>
    );
  }
}

export default Login;
