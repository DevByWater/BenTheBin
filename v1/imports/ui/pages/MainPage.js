import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dashboard from "./dash/Dashboard";

export default class MainPage extends Component {
  constructor(props) {
      super(props)
  }





  render() {
    let currentUser = this.props.currentUser
    let userDataAvailable = (currentUser !== undefined)
    let loggedIn = (currentUser && userDataAvailable)
    let bins = this.props.bins

    if(!loggedIn || !bins)  {
      return(
          <div className="binsMain">
            <h2>Loading...</h2>
          </div>
      )
    }

    return (
      <div className="binsMain">
          <Dashboard current_user={currentUser} binList={bins}/>
      </div>
    );
  }
};

MainPage.propTypes = {
  currentUser: PropTypes.object,
  bins: PropTypes.array
}