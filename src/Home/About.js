import React from 'react'
import Salon from '../Images/Salon.jpg'
import { ContainerDiv, ImageWrapper, InfoWrapper, HeaderDiv, CitatDiv } from './Styling/StylingAbout'
const About = () => {


    return (
        <ContainerDiv>
            <HeaderDiv>

                <h3>Proffessionell hudvård </h3>
                <p>Ni hittar oss på <br /><span>Birkagatan 27, Vasastan</span></p>
            </HeaderDiv>
            <InfoWrapper>
                <ImageWrapper>
                    <img src={Salon} alt='Salon' />
                </ImageWrapper>
                <h2>Om oss</h2>
                <p>Med många års erfarenhet som hudterapeut och läkare jobbar jag idag i mysiga lokaler i härliga Vasastan. Skäm bort dig själv med klassika behandlingar eller de senaste på marknaden.</p>
                <p>Välkommen!</p>
                <h4>/ Farida </h4>
            </InfoWrapper>
            <CitatDiv>
                <h4>"Magisk, så noggrann och duktig!"<br /><span>/Alexandra</span></h4>
                <h4>"Jag är supernöjd!"<br /><span>/J E.</span></h4>
                <h4>"Väldigt trevligt bemötande, professionell och noggrann."<br /><span>/Linnea</span></h4>

            </CitatDiv>
        </ContainerDiv >
    )
}

export default About