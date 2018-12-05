import React, { Component } from 'react';
import './Main.css'

class Main extends Component {

  componentDidMount() {
    document.getElementById("parallelogram_1").style.display = "block";
    document.getElementById("parallelogram_2").style.display = "block";
    document.getElementById("parallelogram_3").style.display = "block";

    setTimeout(function() {
      document.getElementById("parallelogram_1").style.display = "none";
      document.getElementById("parallelogram_2").style.display = "none";
      document.getElementById("parallelogram_3").style.display = "none";
    }.bind(this), 4000)

    setTimeout(function() {
      document.getElementById("parallelogram1").style.display = "block";
      document.getElementById("parallelogram2").style.display = "block";
      document.getElementById("parallelogram3").style.display = "block";
    }.bind(this), 4000)
  }

  handleClickSignup = () => {
    document.getElementById("sign_up_form_container").style.display = "block";
    document.getElementById("login_form_container").style.display = "none";
  }

  handleClickLogin = () => {
    document.getElementById("login_form_container").style.display = "block";
    document.getElementById("sign_up_form_container").style.display = "none";
  }

  render() {
    return (
      <React.Fragment>
        <img id="image" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2018/09/07082544/iStock-682144388.jpg" />
        <div id="main_container">
          <div id="parallelogram_container">
            <div id="parallelogram_1"></div>
            <div id="parallelogram_2"></div>
            <div id="parallelogram_3"></div>

            <div id="parallelogram1"></div>
            <div id="parallelogram2"></div>
            <div id="parallelogram3"></div>
          </div>
          <div id="container">
            <div id="button_container">
              <button className="user_button" onClick={this.handleClickSignup}> Sign Up </button>
              <button className="user_button" onClick={this.handleClickLogin}> Log In </button>
            </div>
            <div id="app_logo"> Fuzzy WuzzIt was a BudgIt </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
