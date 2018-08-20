import React, { Component } from 'react'

//Class Component must have a render function with return
export default class ClassComponent extends Component {
    render(){
        return (
            //The Props here its not parameter, it comes from Component using hierarchy
            <h1>{this.props.value}</h1>
        )
    }
}