import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'


import { FormHandler } from '../../../middlewares/form_handler'

export default class DashCreateModal extends Component{
    constructor(props){
        super(props)

        this.state = {binName: ''}

        this.binChecker = FormHandler.checkBinName
    }

    onBinNameChange(name){
        this.setState({binName: name.target.value.trim()})
    }

    onBinClick(){
        let binName = this.state.binName
        let errors = this.binChecker(binName)


        if(errors){
            return errors.message
        }

        Meteor.call('bins.insert', binName, (error)=>{
            if(error){
                return error
            }
            console.log('bin created with bin name: ' + binName)
            browserHistory.push(`/workplace/${binName}`)
        })
    }

    render(){

        return(
            <div className="modal" id="createBinModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span                                       aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="creatBinLabel">NEW BIN</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div
                                    className="col-xs-6 modalFileSelector">
                                    <img src="/img/html5.png" className="modalImage"/>
                                </div>
                                <div
                                    className="col-xs-6 modalFileSelector">
                                    <img src="/img/markdown.png" className="modalImage"/>
                                </div>
                                <div className="modalFileHeader">
                                    <h4>Text -> Html & Markdown</h4>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="modalInput">
                                <div className="col-xs-12">
                                    <h5 className="col-xs-12">Bin Name</h5>

                                    <input onChange={this.onBinNameChange.bind(this)}
                                           type="text"
                                           className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 binName" />

                                </div>
                                <div className="col-xs-12">
                                    <span className="fullBinName">{this.state.binName}</span>
                                </div>
                            </div>
                            <div className="col-xs-12 modalButtons">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                                <button type="button"
                                        onClick={this.onBinClick.bind(this)}
                                        className="btn btn-primary form_button">Create Bin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}