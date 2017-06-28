import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data' 

export default class LoginPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            error: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()

        let email = this.refs.email.value
        let password = this.refs.password.value
        let url = '/bins/dashboard'
        Meteor.loginWithPassword(email, password, (err) =>{
            if(err){
                this.setState({
                    error: err.reason
                })
                console.log(this.state.error)
            } else {
                console.log('user logged in')
                browserHistory.push(url)
            }
        })
    }

    render(){
        const error = this.state.error
         return (
            <form onSubmit={this.handleSubmit}>
               <span className="error-span">{this.state.error}</span>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="email" id="login-email" ref="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input placeholder="Password" type="password" id="login-password" ref="password" className="form-control"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary form_button">
                        Log In
                    </button>
                </div>
                <div className="form-group container form-redirect-link-container">
                    <div className="col-xs-6">
                        <a href="/auth/signup">Need to register?</a>
                    </div>
                    <div className="col-xs-6">
                         <a href="#">Forgot password?</a>
                    </div>
                </div>
            </form>
        )
    }
}