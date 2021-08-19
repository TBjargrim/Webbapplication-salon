import React from 'react'
import { ContainerDivContact, ImageWrapper, InfoWrapper, HeaderDiv } from './Styling/StylingAbout'
const Contact = () => {


    return (
        <ContainerDivContact id="kontakt">
            <HeaderDiv>
                <h4>Kontakt</h4>
                {/* <h3>FeelGreat & Beauty </h3> */}
                {/* <p>Ni hittar oss på Birkagatan 27, Vasastan</p> */}
            </HeaderDiv>
            <InfoWrapper>
                <ImageWrapper>
                    {/* <img src={Salon} alt='Salon' /> */}
                </ImageWrapper>
                <h2>Välkommen till oss ! </h2>
                <p>Birkagatan 27</p>
                <p>St Eriksplan, Stockholm</p>
                <h4>/ Farida </h4>
            </InfoWrapper>
        </ContainerDivContact >
    )
}

export default Contact