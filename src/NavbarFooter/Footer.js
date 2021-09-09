import React from 'react'
import BackgroundVideo from '../Video/BackgroundVideo.mp4'
import { FooterContainer, Wrapper, Adress, Social, FacebookIcon, InstagramIcon, VideoFooter } from './Styling'
const Footer = () => {
    return (
        <FooterContainer>
            <VideoFooter>
            <video autoPlay loop muted src={BackgroundVideo} type='video/mp4' />
</VideoFooter>
            <Wrapper>
                <Adress>
                    <p>Birkagatan 27</p>
                    <p>St Eriksplan, Vasastan</p>
                </Adress>
                <div>Logga</div>
                <Social>
                    <p>Följ oss för att ta del av nyheter och erbjudanden</p>
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
