import React from 'react'
import BackgroundVideo from '../Video/BackgroundVideo.mp4'

import { ContainerDiv, WrapperDiv, ArrowDown, Header, VideoBackground } from './Styling/StylingStart'
const Start = () => {


    return (
        <ContainerDiv id="hem">
<VideoBackground>
            <video autoPlay loop muted src={BackgroundVideo} type='video/mp4' />
</VideoBackground>
            <WrapperDiv>
                <Header>FEEL GREAT BEAUTY</Header>
                <h5>Välkommen till vår härliga Salong belägen i centrala Stockholm.<br/> <br />Vi erbjuder hudvård och resultatinriktade, avancerade behandlingar <br/>för kropp och ansikte. <br />  </h5>
                <button
                    onClick={() => window.open("https://www.bokadirekt.se/places/feel-great-25951", "_blank")}
                >Boka nu </button>
            </WrapperDiv>
            <ArrowDown />

        </ContainerDiv>
    )
}

export default Start









