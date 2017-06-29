import React, { Component } from 'react'

class HomeLinks extends Component {
    render(){
        return (
             <div className="container auth-links-container">
                   <div className="col-xs-6 col-sm-3 col-sm-offset-3">
                        <a className="btn btn-lg btn-home-reg" href="/auth/signup">Sign Up</a>
                   </div>
                    <div className="col-xs-6 col-sm-3">
                        <a className="btn btn-lg btn-home-login" href="/auth/login">Log In</a>
                   </div>
            </div>
        )
    }
}

export default HomeLinks