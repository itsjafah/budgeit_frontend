import React, { Component } from 'react';

class Profile extends Component {

  render() {
    return (
      <div>

        <div>
          <img src='' alt=''></img>
          <div></div>
            <div> First Name: </div>
            <div> Last Name: </div>
            <div> Email: </div>
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

export default Profile;
