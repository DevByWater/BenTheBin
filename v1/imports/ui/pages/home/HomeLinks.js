import React, { Component } from 'react'

class HomeLinks extends Component {
    render(){
        return (
             <div className="container">
                   <div className="col-sm-6">
                        <a className="btn btn-lg btn-home-reg" href="/signup">Sign Up</a>
                   </div>
                    <div className="col-sm-6">
                        <a className="btn btn-lg btn-home-login" href="/login">Log In</a>
                   </div>
            </div>
        )
    }
}

export default HomeLinks