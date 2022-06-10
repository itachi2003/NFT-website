import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';



const Title = styled.h2`
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
width: 50vw;
color: white;
display:flex;
justify-content: center;
align-items: center;
align-self: flex-center;
span{
    text-transform: uppercase;
    font-family: 'coiny',sans-serif;
}
.text-1{
    color:white;
}
.text-2{
    color: #E9F71C;
}
.text-3{
    color:#000000;
}
.text-4{
  color:#CB0B0B;
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




const AnimateText = () => {
  return (
    <Title>
        <Typewriter
        options={{
            autoStart:true,
            loop:true,
        }

        }
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">SOLD OUT!!!</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-2">10000  /  10000</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-3">YOU CAN BYE ON OPENSEA</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-4">Good Luck!</span>')
      .pauseFor(2000)
      .deleteAll()
      .start()

  }}
/>
    </Title>
  )
}

export default AnimateText