//Import the react
import React from 'react'
import ReactDOM from 'react-dom'
import SilvaFamily from './silvaFamily'

//Using Html inside a js file, sendo the "h1" inside the div "app"
//When you instanciate a component you can pass a properties as parameter
ReactDOM.render(
    <SilvaFamily />
    , document.getElementById('app')
)