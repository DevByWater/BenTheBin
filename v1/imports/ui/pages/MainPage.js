import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  render() {
    let currentUser = this.props.currentUser
    let userDataAvailable = (currentUser !== undefined)
    let loggedIn = (currentUser && userDataAvailable)

    return (
      <div className="binsMain">
        <div className="col-xs-12 col-sm-6">
          <h1 className="text-center">
            { loggedIn ? `Welcome ${currentUser.username}` : '' }
          </h1>
        </div>
          {this.props.children}
      </div>
    );
  }
};

MainPage.propTypes = {
  currentUser: PropTypes.object  
}