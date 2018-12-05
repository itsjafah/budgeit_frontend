import React, { Component } from 'react';
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Category from './category/Category'
import Budget from './budget/Budget'
import Expense from './expense/Expense'
import WeekMonth from './weekmonth/WeekMonth'
import Year from './year/Year'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import { userProfile, logout } from '../actions/home'

class BudgeIt extends Component {
  state = {
    signup: false,
    login: false,
    profileEdit: false
  }

  componentDidMount(){
    if (localStorage.jwt || this.props.user.first_name) {
      this.props.userProfile()
    }
  }

  handleClickLogout = () => {
    this.props.logout()
    this.setState({signup: false, login:false})
  }

  handleClickSignup = () => {
    document.getElementById("sign_up_form_container").style.display = "block";
    document.getElementById("login_form_container").style.display = "none";
  }

  handleClickLogin = () => {
    document.getElementById("login_form_container").style.display = "block";
    document.getElementById("sign_up_form_container").style.display = "none";

  }

  handleClickHome = () => {
    this.setState({signup: false, login:false})
  }

  handleClickEditProfile = () => {
    this.setState({profileEdit: !this.state.profileEdit})
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar
            handleClickLogout={this.handleClickLogout}
            handleClickHome={this.handleClickHome}
          />
            <Route exact path="/home" render={props =>
              <Home
                handleClickSignup={this.handleClickSignup}
                signup={this.state.signup}
                handleClickLogin={this.handleClickLogin}
                login={this.state.login}
                handleClickEditProfile={this.handleClickEditProfile}
                profileEdit={this.state.profileEdit}
              />}
            />
            <Route exact path="/budgets" render={props =>
              <Budget

              />}
            />
          <Route exact path="/categories" render={props =>
              <Category

              />}
            />
          <Route exact path="/expenses" render={props =>
              <Expense

              />}
            />
          <Route exact path="/weekmonth" render={props =>
              <WeekMonth

              />}
            />
          <Route exact path="/year" render={props =>
              <Year

              />}
            />
        </React.Fragment>
      </Router>
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
    userProfile: user => userProfile(dispatch),
    logout: user => logout(user, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgeIt)
