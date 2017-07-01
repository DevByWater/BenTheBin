import React, {Component} from 'react'

class WorkplaceShare extends Component {
    constructor(props){
        super(props)
    }

    onShareClick(){
        const username = this.refs.username.value
        Meteor.call('bins.share', this.props.bin, username)
    }
    renderSharedList(){
        return this.props.bin.sharedWith.map(username => {
            return <button
                key={username}
                className="btn btn-default">
                {username}
            </button>
        })
    }

    render(){
        let bin = this.props.bin
        let binUp = (bin !== undefined)
        console.log("User up: ", binUp)
        console.log("Props from work share: ", this.props)
        if(!binUp){
            return(
                <div>shared bins</div>
            )
        }


        return (
            <div className="bins-share">
                <div className="input-group">
                    <input ref="username" className="form-control" />
                    <div className="input-group-btn">
                        <button
                            onClick={this.onShareClick.bind(this)}
                            className="btn btn-default share-btn">
                            Share Bin
                        </button>
                    </div>
                </div>
                <div>
                    Shared With:
                </div>
                <div className="btn-group">
                    {this.renderSharedList()}
                </div>
            </div>
        )
    }
}

export default WorkplaceShare