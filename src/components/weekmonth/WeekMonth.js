import React, { Component } from 'react';
import WeekMonthMain from './WeekMonthMain'
import { connect } from 'react-redux'

class WeekMonth extends Component {

  render() {
    return (
      <React.Fragment>
        {!!this.props.user.first_name
        ?
        <React.Fragment>
          <WeekMonthMain />
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

export default connect(mapStateToProps)(WeekMonth);
