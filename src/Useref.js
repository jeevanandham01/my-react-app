import React, { useRef  } from 'react'

const StyleElement =() => {
    const colorParagraph = useRef(null);
    const colors =['#F0F8FF','#00FFFF','#000000','#8A2BE2','#DEB887','#006400','#ADFF2F','#FFFF00','#8B4513']
    
   
    const StyleParagraph =() =>{
        const randomcolor =  Math.floor(Math.random () * colors.length);
        colorParagraph.current.style.color = colors[randomcolor];

    }

  return (
    <div>
        <button onClick={() => {StyleParagraph()}}>Click me</button>
        <h1 ref={colorParagraph}>WELCOME TO YAASH SCHOOL</h1>
    </div>
  )
};

export default StyleElement;