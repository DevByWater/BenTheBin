import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Bins } from '../../collections/bins'
import WorkplaceEditor from '../pages/workplace/WorkplaceEditor'

import '../style/workplace.css'


class WorkplaceContainer extends Component {
    constructor(props){
        super(props)

    }
    render(){

        let bin = this.props.bin
        let binUp = (bin !== undefined)
        console.log('Bin and Bin Up', binUp)
        if(!binUp){
            return (
                <div className="workplace-container">
                    <h3>Workplace Container Loading...</h3>
                </div>
            )
        }
        return(
            <div className="workplace-container">
                <h1 className="header">Workplace</h1>
                <div className="col-xs-12">
                    <WorkplaceEditor bin={bin} />
                </div>
            </div>
        )
    }
}

export default createContainer((props) =>{

    const binName  = props.params.binName

    const currentUser = Meteor.user()
    Meteor.subscribe('bins')
    Meteor.subscribe('sharedBins')
    const bin = Bins.findOne({name: binName})


    return { bin, currentUser}
}, WorkplaceContainer)