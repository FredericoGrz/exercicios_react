//Import the react
import React from 'react'
import ReactDOM from 'react-dom'
import Component from './component'

//Using Html inside a js file, sendo the "h1" inside the div "app"
//When you instanciate a component you can pass a properties as parameter
ReactDOM.render(<Component value="Show!"/>, document.getElementById('app'))