//Import the react
import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field'

//Using Html inside a js file, sendo the "h1" inside the div "app"
//When you instanciate a component you can pass a properties as parameter
ReactDOM.render(
    <Field initialValue='Teste' />
    , document.getElementById('app')
)