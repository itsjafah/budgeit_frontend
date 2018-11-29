import React, { Component } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'

class Nabvar extends Component {

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

  handleClickMenu = () => {
    return(
    <div>
      <div className='navbar'>
        <li className='navoption'><NavLink to='/home' className='navlink'> Home </NavLink></li>
      </div>

      <div className='navbar'>
        <li className='navoption'><NavLink to='/home' className='navlink'> Profile </NavLink></li>
        <li className='navoption'><NavLink to='/categories' className='navlink'> Category </NavLink></li>
        <li className='navoption'><NavLink to='/budgets' className='navlink'> Budget </NavLink></li>
        <li className='navoption'><NavLink to='/expenses' className='navlink'> Expense </NavLink></li>
        <li className='navoption'><NavLink to='/weekmonth' className='navlink'> Week/Month </NavLink></li>
        <li className='navoption'><NavLink to='/year' className='navlink'> Year </NavLink></li>
      </div>
    </div>)
  }

  render() {
    return (
      <div>
        <div id='top'>
          <div href="menu" id='dropdown' onClick={this.handleClickMenu}> &#9776; Menu </div>
          <div id="name"> BudgeIt </div>
          <div id="date"> {this.dayOfWeek()} {this.month()} {this.day()}, {this.year()} {this.time()} </div>
        </div>




      </div>
    );
  }
}

export default Nabvar;
