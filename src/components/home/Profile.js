import React, { Component } from 'react';
import { userProfile } from '../../actions/home'
import { connect } from 'react-redux'
import './Profile.css'
import DoughnutChart from './DoughnutChart'

class Profile extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }

  componentDidMount(){
    if(localStorage.jwt || this.props.user.first_name) this.props.userProfile()
  }

  handleClickOpen = () => {
    document.getElementById("profile_edit_container").style.display = "block";
  }

  render() {
    return (
      <React.Fragment>
        {localStorage.jwt && this.props.user.first_name
        ?
          <div id="profile_container">

            <div id="user_container">
              <div id="profile_label">My Profile</div>
              <div id="profile_picture_container">
                <img id="profile_picture" src={this.props.user.image || "https://www.w3schools.com/howto/img_avatar.png"} alt="" width="275" height="300"/>
              </div>
              <div id="profile_information_container">
                <div id="profile_information">
                  <div className="profile_info">First Name: {this.props.user.first_name}</div>
                  <div className="profile_info">Last Name: {this.props.user.last_name}</div>
                  <div className="profile_info">Email: {this.props.user.email}</div>
                  <div className="profile_info">Password: {this.props.user.password}</div>
                </div>
                <div id="profile_edit_button_container">
                  <button id="profile_edit_button" onClick={this.handleClickOpen}>Edit</button>
                </div>
              </div>
            </div>

            <div id="profile_graph_container">
              <div id="profile_graph">
                <div id="profile_graph_chart_container">
                  <div id="profile_chart_title">My Budgets</div>
                </div>
                <div id="graph_container">
                  <DoughnutChart />
                </div>
              </div>
            </div>

          </div>
        :
          null
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

const mapDispatchToProps = dispatch => {
  return {
    userProfile: user => userProfile(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
