import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nabvar extends Component {

  render() {
    return (
      <div>

        <div>
          <NavLink to='/home'> Home </NavLink>
        </div>

        <div>
          <NavLink to='/home'> Profile </NavLink>
          <NavLink to='/category'> Category </NavLink>
          <NavLink to='/budget'> Budget </NavLink>
          <NavLink to='/expense'> Expense </NavLink>
          <NavLink to='/weekmonth'> Week/Month </NavLink>
          <NavLink to='/year'> Year </NavLink>
        </div>

      </div>
    );
  }
}

export default Nabvar;
