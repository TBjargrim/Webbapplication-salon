import React from 'react'
import { ContainerDivContact, Wrapper, InfoWrapper, InfoDiv, Adressp, LocationIcon, MailIcon, PhoneIcon } from './Styling/StylingContact'
const Contact = () => {

    const sendEmail = () => {
        window.location = "mailto:fridaby@gmail.com";
    }
    const makeCall = () => {
        window.location = "tel:+468335080";
    }

    return (
        <ContainerDivContact id="kontakt">
            <Wrapper>
                <h2>Kontakta oss </h2>
                <InfoWrapper>
                    <InfoDiv>
                        <LocationIcon/>
                        
                        <Adressp><span>Salong Arnalids</span> <br />Birkagatan 27 <br />St Eriksplan</Adressp>
                    </InfoDiv>
                    <InfoDiv onClick={sendEmail}>
                        <MailIcon /><p>fridaby@gmail.com</p>
                    </InfoDiv>
                    <InfoDiv onClick={makeCall}>
                        <PhoneIcon /><p>08- 33 50 80</p>
                    </InfoDiv>
                </InfoWrapper>
                <h4>Varmt välkommen! </h4>
            </Wrapper>
        </ContainerDivContact >
    )
}

export default Contact