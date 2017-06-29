import React, { Component } from 'react'
import { Link } from 'react-router'

import LoginPage from './LoginPage'
import SignupPage from './SignupPage'

import '../../style/main.css'
import '../../style/auth.css'

class AuthPage extends Component {
    render(){
        let action = this.props.params.action
        if(action === 'signup'){
            return(
                <div className="auth-container">
                    <div className="col-xs-12 auth-page-header"><Link to="/" className="goHome-link">Go Back</Link></div>
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
                    <div className="col-xs-12 auth-page-header"><Link to="/" className="goHome-link">Go Back</Link></div>
                    <div className="col-sm-6 col-sm-offset-3 form_wrapper">
                        <h1>Log In</h1>
                        <LoginPage />
                    </div>
                </div>
            )
        }
    }
}

export default AuthPage
