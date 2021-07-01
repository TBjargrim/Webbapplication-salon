import React from 'react'
import Salon from '../Images/Salon.jpg'
import { ContainerDiv, ImageWrapper, InfoWrapper } from './Styling/StylingAbout'
const About = () => {


    return (
        <ContainerDiv>
            <ImageWrapper>
                <img src={Salon} alt='Salon' />
            </ImageWrapper>
            <InfoWrapper>
                <h2>Om oss</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse arcu mi venenatis, convallis vitae fames tempus.</p>
            </InfoWrapper>
        </ContainerDiv>
    )
}

export default About