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
          <li className='navoption'><NavLink to='/home' className='navlink'> Profile </NavLink></li>
          <li className='navoption'><NavLink to='/categories' className='navlink'> Category </NavLink></li>
          <li className='navoption'><NavLink to='/budgets' className='navlink'> Budget </NavLink></li>
          <li className='navoption'><NavLink to='/expenses' className='navlink'> Expense </NavLink></li>
          <li className='navoption'><NavLink to='/weekmonth' className='navlink'> Week/Month </NavLink></li>
          <li className='navoption'><NavLink to='/year' className='navlink'> Year </NavLink></li>
        </div>
      )
    } else {
      return(
        <div id='navbar'>
          <li className='navoption'><NavLink to='/home' className='navlink'> Home </NavLink></li>
        </div>
      )
    }
    // if user not logged
  }

  // <div href="menu" id='dropdown' onClick={this.handleClickMenu}> &#9776; Menu </div>

  // <img src="data:image/png;base64,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" id="logo-image">
  // </img>
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
