import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const LogoText = styled.h1`
font-family: 'coiny', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.3s ease;
&:hover{
    transform:scale(1.1);
}
@media (max-width: 64em){
  font-size: ${props => props.theme.fontxxl};
}

`



const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
       M.Fellas
        </Link>
    </LogoText>
  )
}

export default Logo