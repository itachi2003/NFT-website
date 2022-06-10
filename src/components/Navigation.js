import React,{useState} from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Twitter from '../Icons/Twitter'
import Instagram from '../Icons/Instagram'
import Discord from '../Icons/Discord'
import Opensea from '../Icons/Opensea'

const Section = styled.section`
width:100vw;
background-color:${props => props.theme.body};
`
const NavBar = styled.nav`
display:flex;
justify-content : space-between;
align-items: center;

width:85%;
height: ${props => props.theme.navHeight};
margin:0 auto;

.mobile{
    display: none;
}
@media (max-width:64em){
    .desktop{
        display:none;
    }
    .mobile{
        display: inline-block;
    }
}

`
const Menu = styled.ul`
display:flex;
justify-content:space-between;
align-item: center;
list-style:none;


@media (max-width: 64em){
    // 1024px ia igiveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee



    position: fixed;
    top: ${props => props.theme.navHeight};
    left:0;
    right:0;
    bottom:0;
    width:100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index:50;
    background-color: ${props => `rgba(${props => props.theme.bodyRgba},0.85)`};
    backdrop-filter:blur(2px);
    transform: ${props => props.click ? `translateY(0)` : `translateY(1000%)`};
    transition:all 0.3s ease;
    flex-direction:column;
    justify-content:center;
    text-align:center;
}



`


const MenuItem = styled.li`
margin:0 1rem;
color:${props => props.theme.text};
cursor: pointer;

&::after{
    content: ' ';
    display:block;
    width:0%;
    height: 3px;
    background: ${props => props.theme.text};
    transitions: width 0.4s ease;
}
&:hover::after{
    width:100%;
}
@media (max-width: 64em){
    // margin:1rem 0;
    color:white;
    border-radius:5%;
    background:black;
    width:100vw;
    height:6vh;
    margin-top:5px;
    
    &::after{
        display:none;
    }

}
`

const HamburgerMenu = styled.span`
width: ${props => props.click ? '2rem' : '1.5rem' };
height: 2px;
background: ${props => props.theme.text};
display:none;
background: absolute;
top:2rem;
left:50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)' };
justify-content:center;
align-items:center;

cursor:pointer;
transition: all 0.3s ease;

@media (max-width: 64em){
    // 1024px ia igiveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    display: flex;
}

&::after, &::before{
    content: '';
    width: ${props => props.click ? '0.3rem' : '1.5rem' };
    height:2px;
    right:${props => props.click ? '-2px' : '0' };

    background:black;
    position:absolute;
}

&::after{
    top: ${props => props.click ? '0.3rem' : '0.5rem' };
    transform: ${props => props.click ? 'rotate(-40deg)' : ' rotate(0)' };
}
&::before{
    bottom: ${props => props.click ? '0.3rem' : '0.5rem' };
    transform: ${props => props.click ? 'rotate(40deg)' : ' rotate(0)' };
}
`




const IconList = styled.div`
display: flex;
align-items: center;
margin: 0.2rem auto;

%>*{
  padding-right: 0.5rem;
  transiction: all 0.2s ease;
  &:hover{
    transform: scale(1.2);
  }
}

`







const Navigation = () => {

    const [click, setClick] = useState(false);
const scrollTo = (id) => {
    let element= document.getElementById(id);

    element.scrollIntoView({
        behavior: "smooth",
        block:'start',
        inline: 'nearest'
    })
    setClick(!click);
}





return (
  <Section id="navigation" >
      <NavBar>
      <Logo />
      <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
      </HamburgerMenu>
      <Menu click={click} >
      <MenuItem onClick={() => scrollTo('home')} >Home</MenuItem>
      <MenuItem onClick={() => scrollTo('about')}  >About</MenuItem>
      <MenuItem onClick={() => scrollTo('mint')}  >Mint</MenuItem>
      <MenuItem>
      <div class="mobile">
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
      <a href="https://opensea.io/collection/meta-fellas" target='_blank' rel="noopener noreferrer" >
        <Discord />
      </a>
    </IconList>
      </div>
      </MenuItem>
      </Menu>
      <div class="desktop">
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
      <a href="https://opensea.io/collection/meta-fellas" target='_blank' rel="noopener noreferrer" >
        <Discord />
      </a>
    </IconList>
      </div>
      </NavBar>
  </Section>
)
}


export default Navigation