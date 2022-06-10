import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';



const Title = styled.h2`
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
width: 85%;
color: white;
align-self: flex-start;
span{
    text-transform: uppercase;
    font-family: 'coiny',sans-serif;
}
.text-1{
    color:Yellow;
}
.text-2{
    color: orange;
}
.text-3{
    color:magenta;
}

@media (max-width: 70em){
  font-size: ${(props) => props.theme.fontxl};
}
@media (max-width: 48em){
  align-self:center;
  text-align:center;

}
@media (max-width: 40em){
  width:90%;
}
`




const TypeWriterText = () => {
  return (
    <Title>
        Metaverse Fellas invite you!!!
        <Typewriter
        options={{
            autoStart:true,
            loop:true,
        }

        }
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">Come on and Join us!</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-2">Collect my Fellas</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-3">Good Luck!</span>')
      .pauseFor(2000)
      .deleteAll()
      .start()

  }}
/>
    </Title>
  )
}

export default TypeWriterText