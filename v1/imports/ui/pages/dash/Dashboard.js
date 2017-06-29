import React, { Component } from 'react'

import DashProfile from './DashProfile'
import DashBinList from './DashBinList'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="dashboard-container ">
                <div className="col-xs-12 col-sm-6 container jumbotron">
                    <DashProfile currentUser={this.props.current_user}/>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <DashBinList bins={this.props.binList} currentUser={this.props.current_user}/>
                </div>
            </div>
        )
    }
}