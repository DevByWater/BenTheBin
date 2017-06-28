import React, { Component } from 'react'

import LoginPage from './LoginPage'
import SignupPage from './SignupPage'

class AuthPage extends Component {
    render(){
        let action = this.props.params.action
        if(action === 'signup'){
            return(
                <div className="auth-container">
                    <div className="col-sm-6 col-sm-offset-3 form_wrapper">
                        <h1>Sign Up</h1>
                        <SignupPage />
                    </div>
                </div>
            )
        }
        if(action === 'login'){
            return (
                <div className="auth-container">
                    <div className="col-sm-6 col-sm-offset-3 form_wrapper">
                        <h1>Log In</h1>
                        <LoginPage />
                    </div>
                </div>
            )
        }
    }
}
