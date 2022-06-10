import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'
import Twitter from '../Icons/Twitter'
import Instagram from '../Icons/Instagram'
import Discord from '../Icons/Discord'
import Opensea from '../Icons/Opensea'

const Section = styled.section`
min-height: 100vh;
height: 100vh;
width:100vw;
background-color: ${props => props.theme.body};
position:relative;
color: red;
display: flex;
// justify-content: center;
// align-item: center;
flex-direction: column;
`
const Container = styled.div`
width:75%;
margin:2rem auto;
display:flex;
justify-content:space-between;
align-items: center;
border-bottom: 1px solid black;
`
const Left = styled.div`

display:flex;
flex-direction: column;
justify-content: center;
align-items:center;

`
const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

%>*{
  padding-right: 0.5rem;
  transiction: all 0.2s ease;
  &:hover{
    transform: scale(1.2);
  }
}

`

const MenuItems = styled.ul`
list-style:none;
width:50%;
display:block;
`

const Item = styled.li`
width: fit-content;
cursor: pointer;
margin-top: 10px;
&::after{
  content: ' ';
  display: block;
  width:0%;
  height: 3px;
  background: white;
  transitions: all 0.4s ease;
}
&:hover::after{
  width:100%;
}

`

const Bottom = styled.div`
width:75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items:center;

a{
  text-decoration; underline;
}
`



const Footer = () => {

  const scrollTo = (id) => {
    let element= document.getElementById(id);

    element.scrollIntoView({
        behavior: "smooth",
        block:'start',
        inline: 'nearest'
    })
}


  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
          <a href="https://opensea.io/collection/meta-fellas" target='_blank' rel="noopener noreferrer" >
              <Opensea />
            </a>
            <a href="https://twitter.com/metafellas_nft" target='_blank' rel="noopener noreferrer" >
              <Twitter />
            </a>
            <a href="https://www.instagram.com/metafellas_nft/" target='_blank' rel="noopener noreferrer" >
              <Instagram />
            </a>
            <a href="#" target='_blank' rel="noopener noreferrer" >
              <Discord />
            </a>
          </IconList>
        </Left>
        <MenuItems>
        <Item onClick={() => scrollTo('home')} >Home</Item>
            <Item onClick={() => scrollTo('about')}  >About</Item>
            <Item onClick={() => scrollTo('mint')}  >Mint</Item>

        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Metaverse Fellas.
        </span>
        <span>Made with &#10084; by <a href="https://twitter.com/metafellas_nft?fbclid=Iw" rel="noopener noreferrer" target="_blank" >Fellas </a>

        </span>
      </Bottom>
    </Section>
  )
}

export default Footer