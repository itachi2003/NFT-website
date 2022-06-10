import React from "react";
import styled from "styled-components";

import Cover from "../../assets/cover.jpg"
import AnimateText from "../AnimateText";

const Section = styled.section`
min-height: 100vh;
width:100%;
display:grid;
justify-content: center;
align-items: center;
position: relative;
background: url(${Cover}); 
background-position: center;
`

const Container = styled.div`
width:75%;
min-height: 80vh;
margin: 0 auto;
display:grid;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width:100%;
height:100%;
display:inline-block;
flex-direction: row;
justify-content:  center;
align-items:center;

@media (max-width:40em){
   min-height: 50vh; 
}

`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 100%;
color: black;
text-align:center;
margin-bottom: 60px;
font-family:'coiny';

&:hover{
    color:white;
  }


`

// const CountNumber = styled.h3`
// display: flex;
// flex-direction: column;
// justify-content:  center;
// align-items:center;
// font-size: ${props => props.theme.fontxxl};
// font-weight:100;

// @media (max-width:40em){
//    min-height: 50vh; 
// }

// `





const Mint = () => {
    return(
        <Section id="mint" >
        <Container>
            <Box>
            <Title>
            MINT
            </Title>
              <AnimateText />
            </Box>
        </Container>
    </Section>
    )
}

export default Mint;
