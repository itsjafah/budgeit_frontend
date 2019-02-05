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

  handleCloseButton = () => {
    document.getElementById("sign_up_form_container").style.display = "none";
  }

  render() {
    return (
      <React.Fragment>
        <div id="sign_up_form_container">
          <div id="signup_close_container">
            <button id="signup_close" onClick={this.handleCloseButton }>X</button>
          </div>
          <form id="sign_up_form" onSubmit={this.handleSubmitSignup}>
            <div className="sign_up_form_div">
              <input className="sign_up_input" placeholder="Enter first name..." type="text" name='first_name' onChange={this.handleChange}></input>
            </div>
            <div className="sign_up_form_div">
              <input className="sign_up_input" placeholder="Enter last name..." type="text" name='last_name' onChange={this.handleChange}></input>
            </div>
            <div className="sign_up_form_div">
              <input className="sign_up_input" placeholder="Enter email address..." type="text" name='email' onChange={this.handleChange}></input>
            </div>
            <div className="sign_up_form_div">
              <input className="sign_up_input" placeholder="Enter password..." type={this.state.showpassword ? "text" : "password"} name='password' onChange={this.handleChange}></input>
              <div id="sign_up_form_checkbox_div">
                <input id="signup_checkbox" type="checkbox" onClick={this.onClickPassword}></input>
                <div id="signup_show_password_div">show password</div>
              </div>
            </div>
            <div id="sign_up_button_container">
              <button id="sign_up_button">Signup</button>
            </div>
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
