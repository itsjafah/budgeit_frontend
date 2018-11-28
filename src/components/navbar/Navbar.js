import React, { Component } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'

class Nabvar extends Component {

  render() {
    return (
      <div>
        <div><a href="menu" id='dropdown'> &#9776; Menu </a></div>

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

      </div>
    );
  }
}

export default Nabvar;
