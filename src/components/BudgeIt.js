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
import { userProfile } from '../actions/home'


class BudgeIt extends Component {

  state = {
    date: Date()
  }

  componentDidMount(){
    if (localStorage.jwt) {
      this.props.userProfile()
    }
  }

  render() {
    return (
      <Router>
        <div>
          <div> {this.state.date} </div>
          <Navbar />
            <Route exact path="/home" component={Home} />
            <Route exact path="/budgets" component={Budget} />
            <Route exact path="/categories" component={Category} />
            <Route exact path="/expenses" component={Expense} />
            <Route exact path="/weekmonth" component={WeekMonth} />
            <Route exact path="/year" component={Year} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userProfile: user => userProfile(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgeIt)
