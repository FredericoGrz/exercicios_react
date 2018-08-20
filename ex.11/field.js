import React, { Component } from 'react'

//UNCONTROLED COMPONENT
class Field extends Component {
    
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
        //garantir que o this la no bundle.js seja essa funcao
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label><br />
                <input value={this.state.value} />
            </div>
        )
    }
}
export default Field
