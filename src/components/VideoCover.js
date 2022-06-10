import React from 'react'
import styled from 'styled-components'
import GIF  from "../assets/metafellas.mp4"


const VideoContainer = styled.div`
width:100%;
video{
  width: 100%;
  height:auto;
  border-radius:30px;
}

@media (max-width: 64em){
  min-width:40vh;
}








`





const VideoCover = () => {
  return (
    <VideoContainer>
      <video  src={GIF} type="video/gif/" autoPlay muted loop />
      </VideoContainer>
  )
}

export default VideoCover