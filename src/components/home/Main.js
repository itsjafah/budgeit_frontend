import React, { Component } from 'react';
import './Main.css'

class Main extends Component {
  state = {
    parallelogram: false
  }

  componentDidMount() {
    this.setState({parallelogram: true})
  }

  handleLogoClick = (event) => {
    event.preventDefault()
    if (this.state.parallelogram === true) {
      setTimeout(function() {
        this.setState({parallelogram: false})
      }.bind(this), 500)
    }
    this.setState({parallelogram: true})
  }

  render() {
    return (
      <React.Fragment>
        <img id="image" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2018/09/07082544/iStock-682144388.jpg" />
        <div id="main_container">
          <div id="parallelogram_container">
            {this.state.parallelogram
              ?
              <React.Fragment>
                <div id="parallelogram_1"></div>
                <div id="parallelogram_2"></div>
                <div id="parallelogram_3"></div>
              </React.Fragment>
              :
              <React.Fragment>
                <div id="parallelogram1"></div>
                <div id="parallelogram2"></div>
                <div id="parallelogram3"></div>
              </React.Fragment>
            }
          </div>
          <div id="container">
            <div id="button_container">
              <button className="user_button" onClick={this.props.handleClickSignup}> Sign Up </button>
              <button className="user_button" onClick={this.props.handleClickLogin}> Log In </button>
            </div>
            <div id="app_logo" onClick={this.handleLogoClick}> AppName </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
