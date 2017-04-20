import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

export default class LoginPage extends Component {
  constructor(props) {
    super();
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = this.refs.loginEmail.value;
    let password = this.refs.loginPassword.value;

    // overriding the form’s submit event and calling Meteor’s loginWithPassword() function to create a session
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        // also showing
        // authentication errors by modifying the component’s state when there’s an error logging in
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
               <h1 className="text-center">Login</h1>
             </div>
             <div className="modal-body">
               { error.length > 0  ?
                 <div className="alert alert-danger fade in">{error}</div>
                 : '' }
               <form id="login-form"
                     className="form col-md-12 center-block"
                     onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input type="email"
                           ref="loginEmail"
                          className="form-control input-lg"
                           placeholder="email" />
                  </div>
                  <div className="form-group">
                    <input type="password"
                            ref="loginPassword"
                            className="form-control input-lg"
                            placeholder="password" />
                  </div>
                  <div className="form-group text-center">
                    <input type="submit"
                            id="login-button"
                            className="btn btn-primary btn-lg btn-block"
                            value="Login" />
                  </div>
                  <div className="form-group text-center">
                    <p className="text-center">
                      Don't have an account?
                      Register <Link to="/signup">here</Link>
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
}