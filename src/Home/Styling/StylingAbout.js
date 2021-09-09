import styled from 'styled-components';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

export const ContainerDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const InfoWrapper = styled.div`
margin:150px 0 0 0;
text-align:center;
h2{
    color: #1B4D4A;
    font-style: normal;
font-weight: normal;
font-size: 56px;
@media screen and (max-width:500px) {
    padding:90px 0 10px 0;
    margin-top:0;
    font-size: 32px;
}
}
p{
    margin:40px 0 0 0;
    color:#292929;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 35px;
@media screen and (max-width:1050px) {
    text-align:center;
}
@media screen and (max-width:500px) {
    font-size: 16px;
    line-height: 30px;
    margin:0 10px 0 0;
}
}
@media screen and (max-width:1050px) {
    left:7%;
   margin:0 20px 0 20px;
}
@media screen and (max-width:500px) {
    left:9%;
}
h4{
    font-size: 32px;
    font-weight: normal;
    border-top:1px solid #9771A0;
    border-bottom:1px solid #9771A0;
    margin:15px 350px 15px 350px;
   padding:25px 0 25px 25px;
   @media screen and (max-width:1200px) {
    margin:15px 150px 15px 150px;
}
   @media screen and (max-width:900px) {
    margin:15px;
    font-size: 24px;
}
}
h3{
    margin-top:100px;
    color: #1B4D4A;
font-weight: 700;
font-size: 48px;

@media screen and (max-width:500px) {
    padding:90px 0 10px 0;
 
    font-size: 40px;
}
}
@media screen and (max-width:1100px) {
margin:90px 0 0 0;
}
`
export const AboutFooter =styled.div`
display:flex;
justify-content:center;
margin:50px 0 0 0;
div{
    margin:20px;
    padding:20px 0 50px 0;
    border:solid 1px #B2BFBE;
width:250px;
p{
    color:#292929;
font-size:16px;

@media screen and (max-width:500px) {
    font-size: 16px;
}
}
h5{
    margin:10px 0 0 0;
    color:#56315B;
    font-size:40px;
    @media screen and (max-width:1100px) {
    font-size: 32px;
}
}
@media screen and (max-width:1100px) {
    width:200px;
}
@media screen and (max-width:500px) {
    width:150px;
}
}
`
export const InstagramIcon = styled(FaInstagram)`
margin:15px 0 0 15px;
color:#56315B;
font-size:40px;
cursor:pointer;
&:hover{
color:#607A7A;
}
&:active{
    transform: scale(0.98);
}
@media screen and (max-width:1100px) {
    font-size:32px;
}
`

export const FacebookIcon = styled(FaFacebook)`
color:#56315B;
font-size:40px;
cursor:pointer;
&:hover{
color:#607A7A;
}
&:active{
    transform: scale(0.98);
}
@media screen and (max-width:1100px) {
    font-size:32px;
}
`
export const Stars = styled(BsStarFill)`
color:#56315B;
font-size:16px;
@media screen and (max-width:1100px) {
    font-size:8px;
}
`
export const CitatDiv = styled.div`
display:flex;
justify-content:space-around;
text-align:center;

h4{
    font-family: 'Tangerine', cursive;
    font-weight:200;
    max-width:350px;
    margin:100px 20px 100px 20px;
    font-size:64px;
    letter-spacing:5px;
    /* color:rgba(178, 191, 190, 0.4); */
    color:#5E6868;
    span{
        font-family: 'Tangerine', cursive;
    font-weight:200;
    font-size:48px;
    @media screen and (max-width:900px) {
        font-size:32px;
        margin:50px 10px 0 10px;
}
    @media screen and (max-width:500px) {
        font-size:16px;
        margin:0 10px 0 10px;
        letter-spacing:0;
}
    }
    @media screen and (max-width:1100px) {
        font-size:48px;
      
}
    @media screen and (max-width:900px) {
        font-size:32px;
        margin:50px 10px 0 10px;
}
    @media screen and (max-width:500px) {
        font-size:24px;
        margin:5px 10px 0 10px;
        justify-content:center;
        
}
`