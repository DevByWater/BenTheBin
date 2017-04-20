import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let username = this.refs.signupName.value;
    let email = this.refs.signupEmail.value;
    let password = this.refs.signupPassword.value;
    // this.setState({ error: 'test' });
    // similar to login page, only instead of calling loginWithPassword(), we’ll be creating a user with the createUser() function
    // This will insert a new user account document into our app’s database.
    Accounts.createUser({ email, username, password }, (err) => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        browserHistory.push('/');
      }
    });
  }

  render() {
    const error = this.state.error;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Sign up</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                : ''
              }
              <form ref="loginForm"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text"
                         ref="signupName"
                         className="form-control input-lg"
                         placeholder="name"
                  />
                </div>
                <div className="form-group">
                  <input type="email"
                         ref="signupEmail"
                         className="form-control input-lg"
                         placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <input type="password"
                         ref="signupPassword"
                         className="form-control input-lg" placeholder="password"
                   />
                </div>
                <div className="form-group">
                  <input type="submit"
                          ref="loginButton"
                          className="btn btn-lg btn-primary btn-block"
                          value="Sign Up"
                   />
                 </div>
                   <div className="form-group">
                     <p className="text-center">
                       Already have an account? Login <Link to="/login">here</Link>
                     </p>
                   </div>
              </form>
            </div>
            <div className="modal-footer" style={{borderTop: 0}} />
          </div>
        </div>
      </div>
    );
  }
};