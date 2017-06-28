import React, { Component } from 'react'

export default class DashBinList extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.bin)
        return(
            <div>DashBinList</div>
        )
    }
}