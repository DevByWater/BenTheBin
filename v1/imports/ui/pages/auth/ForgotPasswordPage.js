import _ from 'lodash'
import autobind from 'class-autobind'
import React, {Component} from 'react'
import { Accounts } from 'meteor/accounts-base'


export default class ForgotPasswordPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            incorrect_email: '',
            correct_email: '',
            email: ''
        }
        autobind(this)
    }

    _findEmail(email) {
        let email = Meteor.users.findOne({"emails.address": email})
        if(email === undefined){
            this.setState({incorrect_email: "Invalid email address", correct_email: ''})
        }
        return this.setState({email, correct_email: `Valid email:  ${email}`, incorrect_email: ''})
    }

    _emailSearch(email) {
        _.debounce(email => {
            this._findEmail(email)
        }, 350)
    }


    render(){

        return (
            <div className="auth-container">
                <div className="col-xs-12 auth-page-header"><Link to="/" className="goHome-link">Go Back</Link></div>
                <div className="forgot-container">
                    <h3>No Worries</h3>
                    <div>
                        <p>If you forgot your password fill in your email address and you should recieve
                            an email with a link to reset your password.
                        </p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input placeholder="Email" type="email"
                                       onChange={this._emailSearch}
                                       ref="email" className="form-control" required/>
                                <span className="bg-danger">{this.state.incorrect_email}</span>
                                <span className="bg-success">{this.state.correct_email}</span>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary form_button">
                                    Send Link
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}