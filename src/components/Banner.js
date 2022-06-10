import React from 'react'
import styled from 'styled-components'


import img4 from '../assets/Nfts/4.png'
import img5 from '../assets/Nfts/5.png'
import img6 from '../assets/Nfts/6.png'
import img7 from '../assets/Nfts/7.png'
import img8 from '../assets/Nfts/8.png'
import img1 from '../assets/Nfts/1.png'
import img2 from '../assets/Nfts/2.png'
import img3 from '../assets/Nfts/3.png'
import img9 from '../assets/Nfts/9.png'
import img10 from '../assets/Nfts/10.png'


const Section = styled.section`
width: 100vw;
height: 100vh;
position: relative;
border-top: 2px solid yellow ;
background-color: black;
display: flex;
justify-content: center;
align-items: center;

overflow: hidden;

`

const ImgContainer = styled.div`
width: 100%;
height:100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: fles;
justify-content: center;
align-items: center;
opacity: 0.4;

img{
  width: 20%;
  height: 50%;
}




// @media (max-width:64em){
  
// }
// @media (max-width:40em){
 
// }
// @media (max-width:30em){
//    height:100vh;
// }

`


// const BtnContainer = styled.div`
// width:35%;
// justify-content: flex-end;
// display: flex;

// `
// const FollowNow = styled.button`
// display: inline-block;
// background-color: black;
// color: white;
// font-weight:900;
// font-size: 40px;
// text-align:center;
// border-radius:50px;
// cursor:pointer;
// transition: all 0.3s ease;
// &:hover{
//     transform: scale(0.9);
// }


// `


const Banner = () => {
  return (
    <Section>
      <ImgContainer>
      <img src={img1} alt='banner' />
      <img src={img2} alt='banner' />
      <img src={img3} alt='banner' />
      <img src={img4} alt='banner' />
      <img src={img5} alt='banner' />
      <img src={img6} alt='banner' />
      <img src={img7} alt='banner' />
      <img src={img8} alt='banner' />
      <img src={img9} alt='banner' />
      <img src={img10} alt='banner' />

      </ImgContainer>
      {/* <BtnContainer>
      <FollowNow>
        Metaverse Fellas
        
      </FollowNow>
      </BtnContainer> */}
      </Section>
  )
}

export default Banner