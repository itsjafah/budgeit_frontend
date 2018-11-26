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

class BudgeIt extends Component {

  state = {
    date: Date(),
    home: false,
    category: false,
    budget: false,
    expense: false,
    weekmonth: false,
    year: false
  }

  render() {
    return (
      <Router>
        <div>
          <div> {this.state.date} </div>
          <Navbar />
            <Route exact path="/home" component={Home} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/budget" component={Budget} />
            <Route exact path="/expense" component={Expense} />
            <Route exact path="/weekmonth" component={WeekMonth} />
            <Route exact path="/year" component={Year} />
        </div>
      </Router>
    );
  }
}

export default BudgeIt;
