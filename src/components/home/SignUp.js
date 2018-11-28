import React, { Component } from 'react';
import { addUser } from '../../actions/home'
import { connect } from 'react-redux'

class SignUp extends Component {

  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  handleChange = (event) => {
    // console.log(event.target.name, event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmitSignup = (event) => {
    event.preventDefault()

    if (this.state.first_name && this.state.last_name && this.state.email && this.state.password) {

      this.props.addUser(this.state)
      event.target.reset()
    } else {
      alert('Please fill out all information.');
    }
  }

  render() {
    // console.log(this.props)
    // console.log('SIGN UP STATE: ', this.state);
    return (
      <div>

        <form onSubmit={this.handleSubmitSignup}>
          <label> First Name: </label>
          <input type="text" name='first_name' onChange={this.handleChange}></input>

          <label> Last Name: </label>
          <input type="text" name='last_name' onChange={this.handleChange}></input>

          <label> Email: </label>
          <input type="text" name='email' onChange={this.handleChange}></input>

          <label> Password: </label>
          <input type="text" name='password' onChange={this.handleChange}></input>

          <button> Signup </button>
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
    addUser: user => addUser(user, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
