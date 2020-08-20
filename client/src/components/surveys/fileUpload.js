import React, { Component } from 'react'

export default class FieldFileInput extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        const { input: { value, onChange } } = this.props
        console.log('xiwenli ' + value)
        onChange(e.target.files[0])
    }

    render() {
        // const { input: { value } } = this.props
        //const { input, label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
        return (
            <div>
                <div>
                    <input
                        type='file'
                        id='upload-csv'
                        accept='.csv'
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}
