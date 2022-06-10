import React from "react";
import styled from "styled-components";
import Animeshon from "../Animeshon";

import Button from "../Button"



const Section = styled.section`
min-height: 100vh;
width:100vw;
display:flex;
justify-content: center;
align-items: center;
position: relative;
background-color: #D2B4DE; 
`
const Container = styled.div`
width:75%;
min-height: 80vh;
margin: 0 auto;
display:flex;
justify-content: center;
align-items: center;
@media (max-width: 70em){
    width:85%;
}

@media (max-width:64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
        width:80%;
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

@media (max-width:40em){
   min-height: 50vh; 
}

`

const Title = styled.h2`
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
width: 85%;
color: #800080;
align-self: flex-start;
margin: 20 auto;

@media (max-width:64em){
    width:100%;
    text-align:center;
 }
 @media (max-width:40em){
   font-size: ${(props) => props.theme.fontxl};
 }
 @media (max-width:30em){
     font-size: ${(props) => props.theme.fontlg};
 }

`
const SubText = styled.h3`
font-size: ${props => props.theme.fontmd};
text-transform: capitalize;
width: 90%;
color: #000080	;
align-self: flex-start;
margin: 0  auto;
`
const AboutText = styled.h4`

font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
width: 90%;
color: #000000;
align-self: flex-start;
margin: 0  auto;
font-weight: 1111;
`







const About = () => {
    return(
        <Section id="about" >
            <Container>
                <Box>
                <Animeshon/>
                </Box>
                <Box>
                <Title>
                Metaverse Fellas's Club
                </Title>
                <SubText>
                Fellowship of pleasant fellas. You can find them anywhere in the metaverse. They were born in a wayless jungle of blockchain but managed to make a path out and now they just cheer you up. If you find one of them in the streets of metaverse, take him with you. They can make you smile or be your party partner.  What else can be said about the dudes, who love entertaining others. Their home is in Polygon but they spend most of the time in the streets of metaverse. Doing what fellas usually do. Attending festivals and exhibitions, partying all night long and sometimes they even go to the theater. In short they are the most gregarious palls you have ever met for whom fun is all that matters.                </SubText>
                <AboutText>
                If you ever feel sad and lonely, if you ever need someone to go out with, if you ever feel that you need some entertainment, find Metaverse Fellas, they need only a second to make you smile. Don’t have a party partner? Easy task for Fella. Want to go to the movies but hang back because your friends don’t have time? Metaverse Fella will come with you. To say no more, Metaverse Fella is your friend and journey mate into the digital universe. </AboutText>
                <Button text="Join to Instagram" link="https://www.instagram.com/metafellas_nft/?fbclid=IwAR1j9R4XsRXy4Eh2ixzIsOSG5m8QsXwFXYSzWqXyzv08J4JdSfqq7j7cEJU" type="button"/>

                </Box>
            </Container>
        </Section>
    )
}

export default About;