//Import the react
import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, { Segundo } from './component'

//Using Html inside a js file, sendo the "h1" inside the div "app"
//When you instanciate a component you can pass a properties as parameter
ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
    , document.getElementById('app')
)