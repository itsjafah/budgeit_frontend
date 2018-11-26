import React, { Component } from 'react';
import Main from './Main'
import SignUp from './SignUp'
import Login from './Login'
import Profile from './Profile'
import ProfileEdit from './ProfileEdit'

class Home extends Component {

  render() {
    return (
      <div>
        <Main />
        <SignUp />
        <Login />
        <Profile />
        <ProfileEdit />
      </div>
    );
  }
}

export default Home;
