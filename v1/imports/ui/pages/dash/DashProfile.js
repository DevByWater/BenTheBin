import React, { Component } from 'react'

export default class DashProfile extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return(
            <div className="profile-wrapper">
                <h2>{this.props.currentUser.username}</h2>
            </div>
        )
    }
}