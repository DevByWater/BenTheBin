import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Accounts } from 'meteor/accounts-base'

import FormValidator from '../../../middlewares/form_validator'

class SignupPage extends Component{
    constructor(props){
        super(props)

        this.state ={
            error_reason : {
                default: '',
                pwdFormat: '',
                pwdMatch: '',
                email: '',
                username: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
   
    handleSubmit(event){
        event.preventDefault()

            let email = this.refs.email.value
            let  username = this.refs.username.value
            let  password = this.refs.password.value
            let  confirm_password = this.refs.confirm_password.value
            let  url = `/bins`
              
        if(!FormValidator.checkEmailFormat(email)){
               FormValidator.emailFormatError()
               this.setState({error_reason: {email: FormValidator.error_message.email}})
               return
        } else if(!FormValidator.checkPasswordFormat(password)) {
            FormValidator.passwordFormatError()
            this.setState({error_reason: {pwdFormat: FormValidator.error_message.password}})
            return
        } else if(!FormValidator.matchPasswords(password, confirm_password)){
            FormValidator.matchError()
            this.setState({error_reason: {pwdMatch: FormValidator.error_message.confirm}})
            return
        }
        
        Accounts.createUser({ email, username, password}, (error)=>{
            if(error){
                 this.setState({error_reason: {default: error.reason} })
                 return
            } else {
                this.setState({error_reason : { default: '', pwdFormat: '', pwdMatch: '', email: '', username: ''}})
                return browserHistory.push(url)
            }

        })
    }
    render(){
        return (
            <form onSubmit={this.createUser}> 
                <div className="error-group danger error-span">{this.state.error_reason.default}</div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="email" id="signup-email" ref="email" className="form-control" required/>
                    <span className="error-span">{this.state.error_reason.email}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input placeholder="Username" type="text" id="signup-name" ref="username" className="form-control" required/>
                    <span className="error-span">{this.state.error_reason.username}</span>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input placeholder="Password" type="password" id="signup-password" ref="password" className="form-control" required/>
                    <span className="error-span">{this.state.error_reason.pwdFormat}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password:</label>
                    <input placeholder="Confirm Password" type="password" id="signup-confirm_password" ref="confirm_password" className="form-control" required/>
                    <span className="error-span">{this.state.error_reason.pwdMatch}</span>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary form_button">
                        Register
                    </button>
                </div>
                <div className="form-group">
                    <a href="/login">Already have an account?</a>
                </div>
            </form>
        )
    }
}

export default SignupPage
