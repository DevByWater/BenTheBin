import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Bins } from '../../collections/bins'
import WorkplaceEditor from '../pages/workplace/WorkplaceEditor'
import WorkplaceShare from '../pages/workplace/WorkplaceShare'

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
        console.log('Props from work container: ', this.props)
        return(
            <div className="workplace-container">
                <h1 className="header">Workplace</h1>
                <div className="col-xs-12">
                    <WorkplaceEditor bin={bin} currentUser={this.props.currentUser}  />
                </div>
                    <WorkplaceShare bin={bin}/>
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