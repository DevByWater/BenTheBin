import React, { Component } from 'react'

export default class DashProfile extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return(
            <div className="panel panel-default profile-wrapper">
                <h2>{this.props.currentUser.username}</h2>
                <h5>{this.props.currentUser.emails[0].address}</h5>
            </div>
        )
    }
}