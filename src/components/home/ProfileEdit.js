import React, { Component } from 'react';
import { editUser } from '../../actions/home'
import { connect } from 'react-redux'
import './ProfileEdit.css'

class ProfileEdit extends Component {
  state = {
    user_id: '',
    first_name: '',
    last_name: '',
    email: '',
    image: '',
    password: '',
    showpassword: false
  }

  componentDidUpdate(prevProps) {
    if (this.props.user.id !== prevProps.user.id) {
      this.setState({
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        email: this.props.user.email,
        image: this.props.user.image
      })
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmitEditProfile = (event) => {
    event.preventDefault()
    if (this.state.first_name && this.state.last_name && this.state.email && this.state.password && this.state.image) {
      let user = { ...this.props.user, ...this.state }
      this.props.editUser(user)
      event.target.reset()
    } else {
      alert('Please fill out all information.');
    }
  }

  onClickPassword = () => {
    this.setState({showpassword: !this.state.showpassword})
  }

  handleClickClose = () => {
    document.getElementById("profile_edit_container").style.display = "none";
  }

  dragElement = (elmnt) => {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onMouseDown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onMouseDown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

  render() {
    return (
      <React.Fragment>
        <div id="profile_edit_container">
          <div id="profile_close_container">
            <button id="profile_close" onClick={this.handleClickClose}>X</button>
          </div>
          <form id="profile_edit_form" onSubmit={this.handleSubmitEditProfile}>
            <div id="profile_edit_information_container">
              <div className="profile_edit_form_div">
                <label className="profile_info_label">First Name:</label>
                <input className="profile_info_input" type="text" name='first_name' value={this.state.first_name ? this.state.first_name : ''} onChange={this.handleChange}></input>
              </div>
              <div className="profile_edit_form_div">
                <label className="profile_info_label">Last Name:</label>
                <input className="profile_info_input" type="text" name='last_name' value={this.state.last_name ? this.state.last_name : ''} onChange={this.handleChange}></input>
              </div>
              <div className="profile_edit_form_div">
                <label className="profile_info_label">Email:</label>
                <input className="profile_info_input" type="text" name='email' value={this.state.email ? this.state.email : ''} onChange={this.handleChange}></input>
              </div>
              <div className="profile_edit_form_div">
                <label className="profile_info_label">Image URL:</label>
                <input className="profile_info_input" type="text" name='image' value={this.state.image ? this.state.image : ''} onChange={this.handleChange}></input>
              </div>
              <div className="profile_edit_form_div">
                <label className="profile_info_label">Password:</label>
                <input className="profile_info_input" type={this.state.showpassword ? "text" : "password"} name='password' onChange={this.handleChange}></input>
              </div>
              <div id="profile_edit_form_chckbox_div">
                <input id="profile_edit_password_checkbox" type="checkbox" onClick={this.onClickPassword}></input>
                <label id="profile_edit_show_password_label">show password</label>
              </div>
              <div id="profile_edit_save_button_container">
                <button id="profile_edit_save_button">Save</button>
              </div>
            </div>
          </form>
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
    editUser: user => editUser(user, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)
