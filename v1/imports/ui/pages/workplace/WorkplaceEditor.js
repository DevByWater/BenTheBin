import React, {Component} from 'react'
import RichTextEditor, { EditorValue } from 'react-rte'
import autobind from 'class-autobind'



export default class WorkplaceEditor extends Component{
    constructor(props){
        super(props)

        autobind(this)

        this.state = {
            value: RichTextEditor.createEmptyValue(),
            format: 'html',
            readOnly: false
        }

    }

    render(){
        let { value, format } = this.state
        return(
            <div className="col-xs-12">
                <div className="row radio-row">
                    <label className="radio-item">
                        <input
                            type="radio"
                            name="format"
                            value="html"
                            checked={format === 'html'}
                            onChange={this._onChangeFormat}
                        />
                        <span>HTML</span>
                    </label>
                    <label className="radio-item">
                        <input
                            type="radio"
                            name="format"
                            value="markdown"
                            checked={format === 'markdown'}
                            onChange={this._onChangeFormat}
                        />
                        <span>Markdown</span>
                    </label>
                    <label className="radio-item">
                        <input
                            type="checkbox"
                            onChange={this._onChangeReadOnly}
                            checked={this.state.readOnly}
                        />
                        <span>Editor is read-only</span>
                    </label>
                </div>
                <div className="col-xs-12 col-sm-6 editor-pane">

                    <h3>Editor</h3>

                    <RichTextEditor
                        className="react-rte"
                        toolbarClassName="rte-toolbar"
                        editorClassName="rte-editor"
                        placeholder="Type away"
                        value={value}
                        onChange={this._onChange}
                        readOnly={this.state.readOnly}
                    />
                </div>
                <div className="col-xs-12 col-sm-6 source-pane">
                    <h3>Source</h3>
                    <textarea
                        className="col-xs-12 source"
                        placeholder="Source"
                        value={value.toString(format)}
                        onChange={this._onChangeSource}
                        cols="30"
                        rows="10"
                    />
                </div>
            </div>
        )
    }



    _logState() {
        let editorState = this.state.value.getEditorState();
        let contentState = window.contentState = editorState.getCurrentContent().toJS();
        console.log(contentState);
    }

    _logStateRaw() {
        let editorState = this.state.value.getEditorState();
        let contentState = editorState.getCurrentContent();
        let rawContentState = window.rawContentState = convertToRaw(contentState);
        console.log(JSON.stringify(rawContentState));
    }

    _onChange(value) {
        this.setState({value});
    }

    _onChangeSource(event) {
        let source = event.target.value;
        let oldValue = this.state.value;
        this.setState({
            value: oldValue.setContentFromString(source, this.state.format),
        });
    }

    _onChangeFormat(event) {
        this.setState({format: event.target.value});
    }

    _onChangeReadOnly(event) {
        this.setState({readOnly: event.target.checked});
    }
}