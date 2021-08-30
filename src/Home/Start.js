import React from 'react'

import { ContainerDiv, WrapperDiv, ArrowDown } from './Styling/StylingStart'
const Start = () => {


    return (
        <ContainerDiv id="hem">
            <WrapperDiv>
                <h1>FEEL GREAT BEAUTY</h1>
                <h5>Välkommen till vår härliga Salong belägen i centrala Stockholm. Vi erbjuder hudvård och resultatinriktade, avancerade behandlingar för kropp och ansikte. </h5>
                <button
                    onClick={() => window.open("https://www.bokadirekt.se/places/feel-great-25951", "_blank")}
                >Boka nu </button>
            </WrapperDiv>
            <ArrowDown />
        </ContainerDiv>
    )
}

export default Start









