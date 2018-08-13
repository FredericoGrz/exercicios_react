//Import the react
import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

//Using Html inside a js file, sendo the "h1" inside the div "app"
//When you instanciate a component you can pass a properties as parameter
ReactDOM.render(
    <Family lastName="Silva">
        <Member name='Guilherme'/>
        <Member name='Rafael'/>
        <Member name='Julia'/>
    </Family>
    , document.getElementById('app')
)