import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

import Header from '../pages/partials/Header'

export default class AppContainer extends Component {
    constructor(props){
        super(props)

        this.state = this.getMeteorData()
        this.logout = this.logout.bind(this)
    }

    getMeteorData(){
        return { isAuthenticated: Meteor.userId() !== null }
    }

    componentWillMount(){
        if(!this.state.isAuthenticated){
            browserHistory.push('/login')
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(!this.state.isAuthenticated){
            browserHistory.push('/login')
        }
    }

    render(){
        <div className='app-container'>
            <Header authenticated={this.state.isAuthenticated}/>
            {this.props.children}
        </div>
    }
}