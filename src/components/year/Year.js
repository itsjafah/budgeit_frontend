import React, { Component } from 'react';
import YearMain from './YearMain'
import { connect } from 'react-redux'

class Year extends Component {

  render() {
    return (
      <React.Fragment>
        {localStorage.jwt
        ?
        <React.Fragment>
          <YearMain />
        </React.Fragment>
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

export default connect(mapStateToProps)(Year);
