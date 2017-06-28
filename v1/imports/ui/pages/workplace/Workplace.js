import React, { Component } from 'react'
import WorkplaceEditor from "./WorkplaceEditor";
import WorkplaceViewer from "./WorkplaceViewer";



export default class Workplace extends Component {
    constructor(props){
        super(props)
    }

    render(){
        render(
            <div>
                <h1>Workplace</h1>
                <div className="col-xs-12 col-sm-6">
                    <WorkplaceEditor/>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <WorkplaceViewer/>
                </div>
            </div>
        )
    }
}