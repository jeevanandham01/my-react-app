import React from 'react'
import Skills from './Skills';

const Phone =(props) => {
  return (
    <div>
        <h1>Mobile :{props.name}</h1>
        <h1>Mobile model:{props.model} </h1>
    <Skills Skills="Full stock devolper"></Skills>
    </div>
  )
}

export default Phone;