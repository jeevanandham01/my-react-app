import React from 'react'
import Fulldetails from './Fulldetails';

function Skills(props) {
  return (
    <div>
        <h1 style={{color: "#8A2BE2"}}>My skill:{props.Skills}</h1>
        <Fulldetails location ="Madurai"></Fulldetails>
    </div>
  )
}

export default Skills;