import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'


import DashCreateModal from "./DashCreateModal"

export default class DashBinList extends Component{
    constructor(props){
        super(props)
    }


    onBinRemove(bin){
        Meteor.call('bins.remove', bin)
    }


    renderList(){
        return this.props.bins.map(bin => {
            const url = `/workplace/${bin.name}`
            return (
                <li className="list-group-item binList-item" key={bin.name}>
                    <Link className="list-bin-name" to={url}>{bin.name}</Link>
                    <span className="align-right pull-right">
                        <span className="shared-count">
                            <i className="fa fa-users" aria-hidden="true"></i>
                            {bin.sharedWith.length}
                        </span>
                        <button
                            className="btn btn-danger"
                            onClick={()=> this.onBinRemove(bin)}>
                            Remove
                        </button>
                    </span>
                </li>
            )
        })
    }




    render(){
        if(this.props.bins.length > 0){
            return (
                <div className='bin-list-container'>
                    <div className="binList">
                        <div className="create-bin-row">
                            <button className="btn form_button" data-toggle="modal" data-target="#createBinModal">
                                <i className="fa fa-plus"></i> Create Bin
                            </button>
                        </div>
                        <h1 className="bin-headers">Your Bins</h1>
                        <ul className="list-group">
                            {this.renderList()}
                        </ul>
                    </div>

                    <DashCreateModal user={this.props.currentUser} />

                </div>
            )
        }
        return (
            <div className="col-xs-12 container jumbotron emptyBin-container">
                <h2>Looks like you need a bin</h2>

                <button className="btn form_button" data-toggle="modal" data-target="#createBinModal">
                    <i className="fa fa-plus"></i> Create Bin
                </button>
                <DashCreateModal user={this.props.currentUser}/>

            </div>
        )

    }
}