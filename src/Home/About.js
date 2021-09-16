import React from 'react'
import Cidesco from '../Images/cidesco.jpg'
import Itec from '../Images/itec.jpg'
import SHR from '../Images/shr.jpg'
import { ContainerDiv, LocationIcon,LocationDiv, InfoWrapper, AboutFooter, FacebookIcon,InstagramIcon,Stars } from './Styling/StylingAbout'

const About = () => {

    const showLocation = () => {
        // window.location ="http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003"
        window.location ="http://maps.google.com/?q=Birkagatan 27, Stockholm, Sweden"
    }

    return (
        <ContainerDiv>
            <InfoWrapper>
                {/* <ImageWrapper>
                    <img src={Salon} alt='Salon' />
                </ImageWrapper> */}
                <h2>Om oss</h2>
                <p>Med många års erfarenhet som hudterapeut och läkare både i Sverige och utomlands, jobbar jag idag i mysiga lokaler i härliga Vasastan. <br/>Med vidareutbildnigar inom medicinsk hudvård och estetiska behandlingar, diplomerad och certifierad så kan du lita på att jag tar hand om din hud på bästa sätt. </p>
                <img src={Cidesco} alt='Cidesco Logga' />
                <img src={Itec} alt='Itec Logga' style={{marginRight:10}}/>
                <img src={SHR} alt='SHR Logga' />
          <LocationDiv onClick={showLocation}>
                <LocationIcon /> 
                <h4>Ni hittar oss på Birkagatan 27<br/> S:t Eriksplan</h4>
             </LocationDiv>
                <AboutFooter>
                    <div>
                    <FacebookIcon
                        onClick={() => window.open("https://www.facebook.com/Feel-Great-AB-789663701096154/", "_blank")} />

                    <InstagramIcon
                        onClick={() => window.open("https://www.instagram.com/feelgreatab/", "_blank")} />
                    <p>Följ oss för att ta del av nyheter och erbjudanden</p>
                    </div>
                    <div>
                    <h5>4.9 </h5>
                    <Stars/>
                    <Stars/>
                    <Stars/>
                    <Stars/>
                    <Stars/>
                    <p>i betyg på Bokadirekt</p>
                    </div>
                </AboutFooter>
                {/* <h3>Varmt välkommen!!</h3> */}
                {/* <h2>Om oss: </h2>

                <h4>/ Farida </h4> */}
            </InfoWrapper>
            {/* <CitatDiv>
                <h4>"Magisk, så noggrann och duktig!"<br /><span>/Alexandra</span></h4>
                <h4>"Jag är supernöjd!"<br /><span>/J E.</span></h4>
                <h4>"Väldigt trevligt bemötande, professionell och noggrann."<br /><span>/Linnea</span></h4>

            </CitatDiv> */}
        </ContainerDiv >
    )
}

export default About