import React, { Component } from 'react'

import DashProfile from './DashProfile'
import DashBinList from './DashBinList'

import '../../style/dash.css'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="dashboard-container ">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 container">
                    <DashProfile currentUser={this.props.current_user}/>
                </div>
                <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                    <DashBinList bins={this.props.binList} currentUser={this.props.current_user}/>
                </div>
            </div>
        )
    }
}