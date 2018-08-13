import React from 'react'


//This one will be the default
export default props => (
    <h1>Primeiro Componente!</h1>
)

//Doesnt need the parenthesis when is one line
export const Segundo = props => <h1>Segundo Componente!</h1>

//Can Export this way too
//export {Primeiro, Segundo}