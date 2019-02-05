import React, { Component } from 'react';
import './Main.css'

class Main extends Component {

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
        <div id="main_container">
          <div id="container">
            <div id="button_container">
              <button className="user_button" onClick={this.handleClickSignup}>Sign Up</button>
              <button className="user_button" onClick={this.handleClickLogin}>Log In</button>
            </div>
            <img id="image1" src="https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
            <div id="main_image_container">
              <div className="main_images_container">
                <div className="image"><img className="main_image" src="https://images.unsplash.com/photo-1533094700036-70ecccc6f047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/></div>
                <div className="main_info_container"><div className="main_info"></div><div className="main_details">SET A BUDGET</div></div>
              </div>
              <div className="main_images_container">
                <div className="image"><img className="main_image" src="https://images.unsplash.com/photo-1536659622540-0b4c2331489c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/></div>
                <div className="main_info_container"><div className="main_info"></div><div className="main_details">CREATE A CATEGORY</div></div>
              </div>
              <div className="main_images_container">
                <div className="image"><img className="main_image" src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/></div>
                <div className="main_info_container"><div className="main_info"></div><div className="main_details">TRACK EXPENSES</div></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
