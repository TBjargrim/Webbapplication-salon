import styled from 'styled-components';
import BackgroundIMG from '../Images/Background.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export const StyledNav = styled.nav`
 background-color:${({ scrollNav }) => (scrollNav ? '#B2BFBE ' : 'transparent')};
/* height:80px; */
width:100%;
display:flex;
justify-content:center;
align-items:center;
/* font-size:1rem; */
position:fixed;
top:0;
z-index:10;

@media screen and (max-width:960px) {
    transition:0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
border-bottom:0.5px solid #ffffff;
margin:60px 0 20px 0;
@media screen and (max-width:768px) {
    margin:0;
}
`

export const NavLogo = styled.button`
color:#fff;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
`
export const MobileIcon = styled.div`
display:none;
@media screen and (max-width:768px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
}
`
export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;

@media screen and (max-width:768px) {
    display:none;
}
`
export const NavItem = styled.li`
height:80px;
font-size:20px;
color:#FFFFFF;
letter-spacing:2px;
font-weight:200;
margin-left:25px;
text-transform:uppercase;
cursor:pointer;
&:hover{
color:#607A7A;
}
&:active{
    transform: scale(0.98);
}
`
export const NavButton = styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:768px) {
    display:none;
}
`
export const NavBtnLink = styled.button`
border-radius:50px;
width:100px;
text-align:center;
background:#461E31;
white-space:nowrap;
padding:10px 22px;
color: #fff;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
&:hover {
    transition:all 0.2s ease-in-out;
    background: #fff;
    color:#461E31;
    border: 1px solid #461E31;
}
`
export const BurgerMenyIcon = styled(FaBars)`
color:#ffffff;`

//Styling Sidebar

export const SideBarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#4D7370;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top:${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color:#fff;
`
export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`
export const SidebarWrapper = styled.div`
color:#fff;
`
export const SidebarLink = styled.button`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
text-decoration:none;
color:#fff;
cursor:pointer;

&:hover {
    color:#01bf71;
    transition:0.2s ease-in-out;
    background:#fff;
}
`
export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;

letter-spacing:1.5px;
text-transform:uppercase;
font-size:24px;
font-weight:200;
cursor:pointer;
a{
    &:hover{
color:#D0D5D5;
}
&:active{
    transform: scale(0.98);
}
}
@media screen and(max-width:768px){
grid-template-rows:repeat(6,60px);
}
`


//Styling Footer
export const FooterContainer = styled.div`
margin:70px 0 20px 0;
height:15vh;
background-image: url(${BackgroundIMG});
background-size:cover;
width:100%;
`
export const Wrapper = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
height:13vh;
p{
    letter-spacing:1px;
    color:#FFFFFF;
    font-size:20px;
}
`
export const Adress = styled.div`
line-height:30px;

`
export const Social = styled.div`
text-align:right;
p{
    margin:0 0 10px 0;
max-width:400px;
font-size:20px;
letter-spacing:1px;
}
@media screen and (max-width:768px) {
    display:none;
}
`
export const SocialSidebar = styled.div`
text-align:center;
`
export const FacebookIcon = styled(FaFacebook)`
color:white;
font-size:40px;
cursor:pointer;
&:hover{
color:#607A7A;
}
&:active{
    transform: scale(0.98);
}
@media screen and(max-width:768px){
visibility:hidden;
}
`
export const InstagramIcon = styled(FaInstagram)`
color:white;
font-size:40px;
margin:0 20px 0 20px;
cursor:pointer;
&:hover{
color:#607A7A;
}
&:active{
    transform: scale(0.98);
}
@media screen and(max-width:768px){
visibility:hidden;
}
`