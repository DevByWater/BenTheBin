import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

class Accounts extends Component {
    constructor(props){
        super(props)

        this.logOut = this.logOut.bind(this)
    }


    

    logOut(event){
        event.preventDefault()
        Meteor.logout((error)=>{
            if(error){
                 console.log(error.reason)
            } else {
                browserHistory.push('/')
            }
           
        })
    }

    render(){
        return (
            
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i className="fa fa-user-o fa-lg"></i>
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Edit Profile</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#" onClick={this.logOut}>Sign Out</a></li>
                </ul>
            </div>
        )
    }
}
export default Accounts