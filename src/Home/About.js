import React from 'react'
import Salon from '../Images/Salon.jpg'
import { ContainerDiv, ImageWrapper, InfoWrapper, HeaderDiv } from './Styling/StylingAbout'
const About = () => {


    return (
        <ContainerDiv>
            <HeaderDiv>
                <h4>Amazing</h4>
                <h3>Proffessionell hudvård </h3>
                <p>Ni hittar oss på Birkagatan 27, Vasastan</p>
            </HeaderDiv>
            <InfoWrapper>
                <ImageWrapper>
                    <img src={Salon} alt='Salon' />
                </ImageWrapper>
                <h2>Om oss</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse arcu mi venenatis, convallis vitae fames tempus.</p>
                <h4>/ Farida </h4>
            </InfoWrapper>
        </ContainerDiv >
    )
}

export default About