import React, { Component } from 'react';
import { editUser } from '../../actions/home'
import { connect } from 'react-redux'

class ProfileEdit extends Component {
  state = {
    user_id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    showpassword: false
  }

  componentDidUpdate(prevProps) {
    if (this.props.user.id !== prevProps.user.id) {
      this.setState({
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        email: this.props.user.email
      })
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmitEditProfile = (event) => {
    event.preventDefault()

    if (this.state.first_name && this.state.last_name && this.state.email && this.state.password) {
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

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmitEditProfile}>

          <button> Close </button>
          <img src='' alt=''></img>

          <div>
            <label> First Name: </label>
            <input type="text" name='first_name' value={this.state.first_name ? this.state.first_name : ''} onChange={this.handleChange}></input>

            <label> Last Name: </label>
            <input type="text" name='last_name' value={this.state.last_name ? this.state.last_name : ''} onChange={this.handleChange}></input>

            <label> Email: </label>
            <input type="text" name='email' value={this.state.email ? this.state.email : ''} onChange={this.handleChange}></input>

            <label> Password: </label>
            <input type={this.state.showpassword ? "text" : "password"} name='password' onChange={this.handleChange}></input>

            <label> show password </label>
            <input type="checkbox" onClick={this.onClickPassword}></input>
            <button> Save </button>

          </div>

        </form>
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
