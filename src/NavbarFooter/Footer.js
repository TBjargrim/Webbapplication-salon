import React from 'react'
import { FooterContainer, Wrapper, Adress, Social, FacebookIcon, InstagramIcon } from './Styling'
const Footer = () => {
    return (
        <FooterContainer>
            <Wrapper>
                <Adress>
                    <p>Birkagatan 27</p>
                    <p>St Eriksplan, Vasastan</p>
                </Adress>
                <div>Logga</div>
                <Social>
                    <FacebookIcon
                        onClick={() => window.open("https://www.facebook.com/Feel-Great-AB-789663701096154/", "_blank")} />
                    <InstagramIcon
                        onClick={() => window.open("https://www.instagram.com/feelgreatab/", "_blank")} />
                </Social>
            </Wrapper>
        </FooterContainer>
    )
}

export default Footer
