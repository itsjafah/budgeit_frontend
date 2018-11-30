import React, { Component } from 'react';
import { userProfile } from '../../actions/home'
import { connect } from 'react-redux'

class Profile extends Component {

  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  componentDidMount(){
    this.props.userProfile()
  }

  render() {
    // console.log(this.props);
    return (
      <div>

        <div>
          <img src='https://www.w3schools.com/howto/img_avatar.png' alt='' width="275" height="300"></img>
          <div></div>
            <div> First Name: {this.props.user.first_name}</div>
            <div> Last Name: {this.props.user.last_name}</div>
            <div> Email: {this.props.user.email}</div>
            <div> Password: </div>
          <div></div>
          <button> Edit </button>
        </div>

        <div>
          <div>
            <select>
              <option> Week </option>
              <option> Month </option>
            </select>
            <div> ChartJS </div>
          </div>
          <div> Description </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userProfile: user => userProfile(user, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
