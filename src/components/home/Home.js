import React, { Component } from 'react';
import Main from './Main'
import SignUp from './SignUp'
import Login from './Login'
import Profile from './Profile'
import ProfileEdit from './ProfileEdit'
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        {localStorage.jwt && this.props.user.first_name
        ?
          <React.Fragment>
            <Profile />
            <ProfileEdit />
          </React.Fragment>
        :
          <React.Fragment>
            <Main />
            <SignUp />
            <Login />
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(Home);
