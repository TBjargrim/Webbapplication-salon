import styled from 'styled-components';
import { GoLocation } from "react-icons/go";
import { GoMail } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";

export const ContainerDivContact = styled.div`
margin:80px 0 80px 0;
/* padding:0 0 10px 0; */
height:60vh;
position:relative;
background: rgba(208, 213, 213, 0.5);
padding-bottom:10px;
display:flex;
justify-content:center;
align-items:center;
`

export const Wrapper = styled.div`
background-color:rgba(178, 191, 190, 0.8);
min-width:900px;
height:550px;
position:relative;
h2{
    margin:50px 0 0 0;
    font-family: 'Tangerine', cursive;
    font-size:90px;
    color:#ffffff;
   font-weight:200;
   opacity:70%;
    letter-spacing:4px;
    text-align:center;
    @media screen and (max-width:500px) {
        font-size:50px;
}
}
h4{
    margin:50px 0 50px 0;
    font-family: 'Tangerine', cursive;
    font-size:95px;
    color:#ffffff;
   font-weight:200;
   opacity:70%;
    letter-spacing:4px;
    text-align:center;
    @media screen and (max-width:500px) {
        font-size:60px;
}
}
@media screen and (max-width:500px) {
    min-width:400px;
    height:450px;
}
`
export const InfoWrapper = styled.div`
display:flex;
justify-content:space-around;
margin:20px 70px 0 70px;
text-align:center;
background-color:rgba(178, 191, 190, 0.9);
border-radius:20px;
padding:15px 0 15px 0;
@media screen and (max-width:500px) {
    margin:20px 20px 0 20px;
}

`
export const InfoDiv = styled.div`
    margin:10px 0 0 0;
    cursor:pointer;
  padding:15px;
  border-radius:20px;
    &:hover{
        background-color:#D0D5D5;
}
&:active{
    transform: scale(0.98);
}
    p{
        margin:20px 0 0 0;
        color: #1B4D4A;
        letter-spacing:0.5px;
        font-size:21px;
        @media screen and (max-width:500px) {
            /* display:none; */
            font-size:10px;
}
    }
    @media screen and (max-width:500px) {

}
`
export const Adressp = styled.p`
        margin:20px 0 0 0;
        color: #1B4D4A;
        letter-spacing:0.5px;
        font-size:21px;
        @media screen and (max-width:500px) {
}
`
export const LocationIcon = styled(GoLocation)`
color:#56315B;
font-size:40px;
@media screen and (max-width:500px) {
            font-size:25px;
}
`
export const MailIcon = styled(GoMail)`
color:#56315B;
font-size:40px;
@media screen and (max-width:500px) {
            font-size:25px;
}
`
export const PhoneIcon = styled(AiOutlinePhone)`
color:#56315B;
font-size:40px;
@media screen and (max-width:500px) {
            font-size:25px;
}
`
