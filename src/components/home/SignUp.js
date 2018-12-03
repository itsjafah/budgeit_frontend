import React, { Component } from 'react';
import { addUser } from '../../actions/home'
import { connect } from 'react-redux'
import './SignUp.css'

class SignUp extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    showpassword: false
  }

  handleChange = (event) => {
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

  onClickPassword = () => {
    this.setState({showpassword: !this.state.showpassword})
  }

  render() {
    return (
      <React.Fragment>
        <div id="sign_up_form_container">
          <form id="sign_up_form" onSubmit={this.handleSubmitSignup}>

            <div className="sign_up_form_div">
              <label className="sign_up_label"> First Name: </label>
              <input className="sign_up_input" type="text" name='first_name' onChange={this.handleChange}></input>
            </div>

            <div className="sign_up_form_div">
              <label className="sign_up_label"> Last Name: </label>
              <input className="sign_up_input" type="text" name='last_name' onChange={this.handleChange}></input>
            </div>

            <div className="sign_up_form_div">
              <label className="sign_up_label"> Email: </label>
              <input className="sign_up_input" type="text" name='email' onChange={this.handleChange}></input>
            </div>

            <div className="sign_up_form_div">
              <label className="sign_up_label"> Password: </label>
              <input className="sign_up_input" type={this.state.showpassword ? "text" : "password"} name='password' onChange={this.handleChange}></input>
            </div>

            <div id="sign_up_form_checkbox_div">
              <input type="checkbox" onClick={this.onClickPassword}></input>
              <label className="show_password_label"> show password </label>
            </div>

            <button id="sign_up_button"> Signup </button>

          </form>
        </div>

      </React.Fragment>
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
