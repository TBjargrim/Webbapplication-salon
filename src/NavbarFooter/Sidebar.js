
import React from 'react';


import { Link } from 'react-scroll';

import {
    SideBarContainer, CloseIcon, Icon, SidebarWrapper,
 SidebarMenu, SocialSidebar, FacebookIcon, InstagramIcon
} from './Styling';


const Sidebar = ({ isOpen, toggle }) => {


    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link
                        activeClass="active"
                        to="hem"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}

                        onClick={toggle}>
                        Hem
                    </Link>
                    <Link
                        activeClass="active"
                        to="behandlingar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                        onClick={toggle}>
                        Behandlingar
                    </Link>
                    <Link
                        activeClass="active"
                        to="produkter"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                        onClick={toggle}>
                        Produkter
                    </Link>
                    <Link
                        activeClass="active"
                        to="kontakt"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                        onClick={toggle}>
                        Kontakt
                    </Link>
                </SidebarMenu>

                <SocialSidebar>
                    <FacebookIcon
                        onClick={() => window.open("https://www.facebook.com/Feel-Great-AB-789663701096154/", "_blank")} />
                    <InstagramIcon
                        onClick={() => window.open("https://www.instagram.com/feelgreatab/", "_blank")} />
                </SocialSidebar>
            </SidebarWrapper>

        </SideBarContainer >

    )
}

export default Sidebar
