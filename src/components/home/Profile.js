import React, { Component } from 'react';
import { userProfile } from '../../actions/home'
import { connect } from 'react-redux'
import './Profile.css'

class Profile extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    image: ''
  }

  componentDidMount(){
    // if(this.props.user.first_name) this.props.userProfile()
    if(localStorage.jwt) this.props.userProfile()
  }

  render() {
    return (
      <React.Fragment>
        <div id="profile_container">

          <div id="user_container">
            <div>
              <div> Add Picture </div>
              <img src={this.props.user.image || "https://www.w3schools.com/howto/img_avatar.png"} alt="" width="275" height="300"/>
            </div>
            <div>
              <div>
                <div> First Name: {this.props.user.first_name}</div>
                <div> Last Name: {this.props.user.last_name}</div>
                <div> Email: {this.props.user.email}</div>
                <div> Password: {this.props.user.password}</div>
              </div>
              <div>
                <button> Edit </button>
              </div>
            </div>
          </div>

          <div id="profile_graph_container">
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userProfile: user => userProfile(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
