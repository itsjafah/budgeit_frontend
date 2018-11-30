import React, { Component } from 'react';
import './Main.css'

class WeekMonthMain extends Component {

  render() {
    console.log(this.props.history);
    return (
      <div id="home-main">
        <div id="main-container">
          <div id="app-logo"> BudgeIt </div>
          <div id="button-container">
            <button className="user-button"> Sign Up </button>
            <button className="user-button"> Log In </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WeekMonthMain;
