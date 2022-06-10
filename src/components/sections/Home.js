import React from "react";
import styled from 'styled-components'
import TypeWriterText from "../TypeWriterText";
import VideoCover from "../VideoCover";
import LogoR from '../../assets/LogoR.png'


const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
width: 100vw;
position:relative;
background-color: ${props => props.theme.text};
`
const Container = styled.div`
width:75%;
min-height: 80vh;
margin: 0 auto;
// background-color: black;
display:flex;
justify-content: center;
align-items: center;

@media (max-width: 64em){
    width:85%;
  }
  @media (max-width: 48em){
    flex-direction:column-reverse;
    width:100%;
    &>*:first-child{
        width:100%;
        margin-top:2rem;
    }

  }
`

const Box = styled.div`
width:50%;
height:100%;
display:flex;
flex-direction: column;
justify-content:  center;
align-items:center;
`

const Round = styled.div`




img{
    position:absolute;
    width:6rem;
    height:6rem;
    bottom:2rem;
    right:90%;
    border-radius:50%;
}
 @media (max-width: 64em){
     img{
         position:absolute;
         left:2%;
     }
 }
  
`

const Home = () => {
    return(
        <Section id="home" >
            <Container>
         <Box> <TypeWriterText /> </Box>  
         <Box> <VideoCover/> </Box>  

        <Round>
            <img className="img-hid" src={LogoR} alt="NFT" />
        </Round>



            </Container>


        </Section>
    )
}

export default Home;