import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/home'
import './Login.css'

class Login extends Component {
  state = {
    email: '',
    password: '',
    showpassword: false
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
      alert('Please fill out all information.')
    }
  }

  onClickPassword = () => {
    this.setState({showpassword: !this.state.showpassword})
  }

  handleCloseButton = () => {
    document.getElementById("login_form_container").style.display = "none";
  }

  render() {
    return (
      <React.Fragment>
        <div id="login_form_container">
          <div id="login_close_container">
            <button onClick={this.handleCloseButton} id="login_close"> X </button>
          </div>
          <form id="login_form" onSubmit={this.handleSubmitLogin}>

            <div className="login_form_div" >
              <input className="login_input" placeholder="Enter email address..." type="text" name="email" onChange={this.handleChange}></input>
            </div>

            <div className="login_form_div" >
              <input className="login_input" placeholder="Enter password..."type={this.state.showpassword ? "text" : "password"} name="password" onChange={this.handleChange}></input>
              <div id="login_form_checkbox_div">
                <input id="login_checkbox" type="checkbox" onClick={this.onClickPassword}></input>
                <div id="login_show_password_div">show password</div>
              </div>
            </div>

            <div id="login_button_container">
              <button id="login_button">Login</button>
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
    login: user => login(user, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
