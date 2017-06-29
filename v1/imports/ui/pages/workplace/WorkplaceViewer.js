import React, {Component} from 'react'
import P5Wrapper from 'react-p5-wrapper'

export default class WorkplaceViewer extends Component{
    constructor(props){
        super(props)

        this.state = { code: '' }


    }







    render() {

        console.log(this.props.content)
        if (this.props.content === undefined) {
            return (
                <div>
                    <h2>Preview</h2>
                    <div>
                        Loading...
                    </div>
                </div>
            )
        }
        return(
            <div>
                <h2>Preview</h2>
                <div className="code-preview-box">
                    <P5Wrapper sketch={this.props.content}/>
                </div>
            </div>
        )

    }
}