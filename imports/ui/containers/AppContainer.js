import React, {Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    // put userId in state
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  // is user logged in?
  getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null };
  }

  // before rendered check if logged in
    // if not, redirect to /login
  componentWillMount() {
    if (!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  // anytime component updates check if logged in
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  // when called use Meteor.logout to logout
   // throw errors if any and print to console
   // otherwise redirect to /login
  logout(e) {
    e.preventDefault();
    Meteor.logout( (err) => {
      if (err) {
        console.log( err.reason );
      } else {
        browserHistory.push('/login');
      }
    });
  }

  render() {
    return (
       <div>
         <nav className="navbar navbar-default navbar-static-top">
           <div className="container">
             <div className="navbar-header">
               <a href="#" className="navbar-brand">Auth App</a>
             </div>
             <div className="navbar-collapse">
               <ul className="nav navbar-nav navbar-right">
                 <li><a href="#" onClick={this.logout}>Logout</a></li>
               </ul>
             </div>
           </div>
         </nav>
         {this.props.children}
       </div>
    );
  }
};
