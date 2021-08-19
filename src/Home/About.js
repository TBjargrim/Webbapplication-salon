import React from 'react'
import Salon from '../Images/Salon.jpg'
import { ContainerDiv, ImageWrapper, InfoWrapper, HeaderDiv, CitatDiv } from './Styling/StylingAbout'
const About = () => {


    return (
        <ContainerDiv>
            <HeaderDiv>

                <h3>Proffessionell hudvård </h3>
                <p>Ni hittar oss på Birkagatan 27, Vasastan</p>
            </HeaderDiv>
            <InfoWrapper>
                <ImageWrapper>
                    <img src={Salon} alt='Salon' />
                </ImageWrapper>
                <h2>Om oss</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse arcu mi venenatis, convallis vitae fames tempus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse arcu mi venenatis, convallis vitae fames tempus.</p>
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