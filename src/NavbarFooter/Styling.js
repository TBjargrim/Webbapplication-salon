import styled from 'styled-components';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export const StyledNav = styled.nav`
 background-color:${({ scrollNav }) => (scrollNav ? '#B2BFBE ' : 'transparent')};
width:100%;
display:flex;
justify-content:center;
align-items:center;
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
align-items:center;
z-index:1;
width:100%;
padding:0 24px;
border-bottom:0.5px solid #ffffff;
margin:0 20px 20px 20px;
@media screen and (max-width:1300px) {
    margin:25px 0 25px 0;
}
`
export const NavLogo = styled.div`
    color:#fff;
justify-self:flex-start;
cursor:pointer;
display:flex;
align-items:center;
img{
    max-height:200px;
    @media screen and (max-width:1700px) {
        max-height:150px;
}
    @media screen and (max-width:1300px) {
        max-height:100px;
}
    @media screen and (max-width:960px) {
        max-height:70px;
}
}
`
export const MobileIcon = styled.div`
display:none;
@media screen and (max-width:960px) {
    width:100%;
    margin:30px 10px 20px 0;
    font-size:32px;
    justify-content:flex-end;
display:flex;
    cursor:pointer;
}
`
export const NavMenu = styled.ul`
margin:auto;
display:flex;

list-style:none;
@media screen and (max-width:960px) {
    display:none;
}
`
export const NavItem = styled.li`
font-size:16px;
color:#FFFFFF;
letter-spacing:2px;
font-weight:200;
margin:10px;
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

@media screen and (max-width:960px) {
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
color:#ffffff;
`

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
font-size:24px;
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
display:flex;
flex-direction:column;
text-align:center;
letter-spacing:1.5px;
text-transform:uppercase;
font-size:24px;
font-weight:200;
cursor:pointer;
a{
    margin:20px 0 20px 0;
    &:hover{
color:#D0D5D5;
}
&:active{
    transform: scale(0.98);
}
}
`


//Styling Footer
export const FooterContainer = styled.div`
margin:70px 0 20px 0;
height:15vh;
width:100%;
`
export const VideoFooter=styled.div`
position: absolute;
width: 100%;
height:15vh;
overflow: hidden;
video{
    width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #fff;
}
`
export const Wrapper = styled.div`
display:flex;
position:relative;
top:15%;
padding:20px;
margin:0 100px 0 100px;
background:rgb(208,213,213, 0.5);
justify-content:space-around;
align-items:center;
p{
    letter-spacing:1px;
    color:#292929;
    font-size:16px;
font-weight:600;
@media screen and (max-width:960px) {
    font-size:12px;
}
}
@media screen and (max-width:960px) {
    margin:0 5px 0 5px;
    padding:5px;
}
`
export const FooterLogo = styled.div`
color:#fff;
cursor:pointer;
display:flex;
align-items:center;
img{
    max-height:100px;
}
`
export const Adress = styled.div`
line-height:30px;
@media screen and(max-width:960px){
    line-height:24px;
}

`
export const Social = styled.div`
text-align:right;
p{
    margin:0 0 10px 0;
max-width:400px;
font-size:16px;
font-weight:800;
letter-spacing:1px;
}
@media screen and (max-width:960px) {
    display:none;
}
`
export const SocialSidebar = styled.div`
text-align:center;
margin:60px 0 0 0;
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
@media screen and(max-width:960px){
    display:none;
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
@media screen and(max-width:960px){
    display:none;
}
`