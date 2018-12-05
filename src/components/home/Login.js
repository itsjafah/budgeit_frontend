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
      alert('Please use a valid email and password.')
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

          <div>
            <button onClick={this.handleCloseButton}> X </button>
          </div>

          <form id="login_form" onSubmit={this.handleSubmitLogin}>


            <div className="login_form_div" >
              <label className="login_label" > Email: </label>
              <input className="login_input" type="text" name="email" onChange={this.handleChange}></input>
            </div>

            <div className="login_form_div" >
              <label className="login_label" > Password: </label>
              <input className="login_input" type={this.state.showpassword ? "text" : "password"} name="password" onChange={this.handleChange}></input>
            </div>

            <div id="login_form_checkbox_div">
              <input type="checkbox" onClick={this.onClickPassword}></input>
              <label className="show_password_label"> show password </label>
            </div>

            <button id="login_button"> Login </button>

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
