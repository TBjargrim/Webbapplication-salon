import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../Images/Logo.jpg';

import {
    StyledNav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
    NavItem, BurgerMenyIcon, Social, FacebookIcon, InstagramIcon
} from './Styling';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    return (
        <StyledNav scrollNav={scrollNav}>
            <NavbarContainer>
                <Link
                    activeClass="active"
                    to="hem"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    {/* <img src={Logo} alt='Logo' /> */}
                </Link>
                <MobileIcon onClick={toggle}>
                    <BurgerMenyIcon />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <Link
                            activeClass="active"
                            to="hem"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Hem
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link
                            activeClass="active"
                            to="behandlingar"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Behandlingar
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link
                            activeClass="active"
                            to="produkter"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                            Produkter
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link
                            activeClass="active"
                            to="kontakt"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Kontakt
                        </Link>
                    </NavItem>
                </NavMenu>
                <Social>
                    <FacebookIcon
                        onClick={() => window.open("https://www.facebook.com/Feel-Great-AB-789663701096154/", "_blank")} />
                    <InstagramIcon
                        onClick={() => window.open("https://www.instagram.com/feelgreatab/", "_blank")} />
                </Social>
            </NavbarContainer>
        </StyledNav>
    )
}

export default Navbar