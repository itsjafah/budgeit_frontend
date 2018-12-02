import React, { Component } from 'react';
// import './Navbar.css'
import { NavLink } from 'react-router-dom'

class Nabvar extends Component {
  state = {
    logged: true
  }

  dayOfWeek = () => {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
    let now = new Date();
    let day = now.getDayName();
    return day
  }

  month = () => {
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    Date.prototype.getMonthName = function() {
        return months[ this.getMonth() ];
    };
    let now = new Date();
    let month = now.getMonthName();
    return month
  }

  day = () => {
    let today = new Date();
    let day = today.getDate();
    return day
  }

  year = () => {
    let today = new Date();
    let year = today.getFullYear();
    return year
  }

  time = () => {
    var time = new Date();
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  navBar = () => {
    // if user logged
    if (this.state.logged === true) {
      return (
        <div className='navbar'>
          <div className='navoption'><NavLink to='/home' className='navlink'> Profile </NavLink></div>
          <div className='navoption'><NavLink to='/budgets' className='navlink'> Budget </NavLink></div>
          <div className='navoption'><NavLink to='/categories' className='navlink'> Category </NavLink></div>
          <div className='navoption'><NavLink to='/expenses' className='navlink'> Expense </NavLink></div>
          <div className='navoption'><NavLink to='/weekmonth' className='navlink'> Week/Month </NavLink></div>
          <div className='navoption'><NavLink to='/year' className='navlink'> Year </NavLink></div>
        </div>
      )
    } else {
      return(
        <div id='navbar'>
          <div className='navoption'><NavLink to='/home' className='navlink'> Home </NavLink></div>
        </div>
      )
    }
    // if user not logged
  }

  render() {
    return (
      <div>
        <div id='top'>

          <div id="name">
            BudgeIt
          </div>
          <div id="date"> {this.dayOfWeek()} {this.month()} {this.day()}, {this.year()} {this.time()} </div>
        </div>

        {this.navBar()}

      </div>
    );
  }
}

export default Nabvar;
