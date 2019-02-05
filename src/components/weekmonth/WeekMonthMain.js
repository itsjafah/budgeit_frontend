import React, { Component } from 'react';
import Weekly from './Weekly'
import Monthly from './Monthly'

class Main extends Component {

  render() {
    return (
      <div>

        <div>
          <Weekly />
        </div>

        <div>
          <Monthly />
        </div>
        
      </div>
    );
  }
}

export default Main;
