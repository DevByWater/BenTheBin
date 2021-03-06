import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Accounts from './Accounts'


class Header extends Component {
    constructor(props){
        super(props)
    }
    
    // renderCreateBin(){
    //     if(Meteor.userId()){
    //         return(
    //             <li onClick={this.onBinClick.bind(this)}>+ Create Bin</li>
    //         )
    //     }
    // }

    renderAccountLink(){
        if(!this.props.authenticated){
            return(
                <li>
                    <a href="/auth/login">Log In</a>
                </li>    
            )
        }
        return(
            <li>
                <Accounts/>

            </li>   
        )
    }
    // renderBinCreator(){
    //     if(Meteor.userId()){
    //         return (
    //             <li className="nav-pill" data-toggle="modal" data-target="#createBinModal"><a href="#">
    //                         <i className="fa fa-plus"></i> Create Bin
    //                 </a>
                    
    //             </li>
    //         )
    //     }
    // }
    
    // onBinClick(event){
    //     event.preventDefault()
    //     Meteor.call('bins.insert', (error, binId)=>{
    //         browserHistory.push(`/bins/${binId}`)
    //     }) 
    // }
    render(){
        return (
            <nav className="nav navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand navbrand">
                            <img src="/img/ben2.png"/>
                        </Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">

                        {this.renderAccountLink()}
                    </ul>
                </div>
            </nav>
        )
    }
}


export default Header

