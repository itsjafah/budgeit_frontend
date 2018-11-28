import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/home'

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmitLogin = (event) => {
    event.preventDefault()

    if (this.state.email && this.state.password) {
      this.props.login(this.state)
      event.target.reset()
    } else {
      alert('Please use a valid email and password.')
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div>

        <form onSubmit={this.handleSubmitLogin}>
          <label> Email: </label>
          <input type="text" name="email" onChange={this.handleChange}></input>

          <label> Password: </label>
          <input type="text" name="password" onChange={this.handleChange}></input>

          <button> Login </button>
        </form>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => login(user, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
