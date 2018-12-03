import React, { Component } from 'react';
import Main from './Main'
import SignUp from './SignUp'
import Login from './Login'
import Profile from './Profile'
import ProfileEdit from './ProfileEdit'
import { connect } from 'react-redux'

class Home extends Component {

  showpages = () => {
    if (this.props.signup === true) {
      return <SignUp />
    } else if (this.props.login === true) {
      return <Login />
    }
  }

  render() {
    return (
      <React.Fragment>
        {localStorage.jwt
        ?
          <React.Fragment>
            <Profile />
            <ProfileEdit />
          </React.Fragment>
        :
          <React.Fragment>
            <Main handleClickSignup={this.props.handleClickSignup} handleClickLogin={this.props.handleClickLogin}/>
            {this.showpages()}
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
