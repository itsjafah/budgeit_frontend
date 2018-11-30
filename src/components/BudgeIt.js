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
  Route,
  withRouter
} from 'react-router-dom'

class BudgeIt extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
            <Route exact path="/home" component={Home} />
            <Route exact path="/categories" component={Category} />
            <Route exact path="/budgets" component={Budget} />
            <Route exact path="/expenses" component={Expense} />
            <Route exact path="/weekmonth" component={WeekMonth} />
            <Route exact path="/year" component={Year} />
        </div>
      </Router>
    );
  }
}

export default BudgeIt;
