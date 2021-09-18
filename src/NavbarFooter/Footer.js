import React from 'react'
import { Link } from 'react-scroll';
import BackgroundVideo from '../Video/BackgroundVideo.mp4'
import Logo from '../Images/Logo.png';
import { FooterContainer, Wrapper, Adress, Social, FacebookIcon, InstagramIcon, VideoFooter, FooterLogo} from './Styling'
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
                <FooterLogo>
                <Link
                    activeClass="active"
                    to="hem"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <img src={Logo} alt='Logo' />
                </Link>
                </FooterLogo>
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
