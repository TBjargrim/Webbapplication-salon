import styled from 'styled-components';
import { GoLocation } from "react-icons/go";
import { GoMail } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";

export const ContainerDivContact = styled.div`
margin:80px 0 80px 0;
position:relative;
background: rgba(208, 213, 213, 0.5);
padding-bottom:10px;
display:flex;
justify-content:center;
align-items:center;
`

export const Wrapper = styled.div`
background-color:rgba(178, 191, 190, 0.8);
position:relative;
h2{
    margin:50px 0 0 0;
    font-size: 48px;
    color: #1B4D4A;
   font-weight:200;
    letter-spacing:2px;
    text-align:center;
    @media screen and (max-width:960px) {
        font-size:32px;
}
}
h4{
    margin:50px;
    font-size: 56px;
    color: #1B4D4A;
   font-weight:200;
    letter-spacing:2px;
    text-align:center;
    @media screen and (max-width:960px) {
        font-size:32px;
}
}
@media screen and (max-width:960px) {
    margin:100px 60px 100px 60px;
      outline:1px solid #1B4D4A;
      outline-offset: 15px;
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
@media screen and (max-width:960px) {
    margin:10px;
    justify-content:center;
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
        font-size:24px;
        @media screen and (max-width:960px) {
            display:none;
            font-size:12px;
}
    }
    @media screen and (max-width:960px) {
        margin:10px;
}
`
export const Adressp = styled.p`
        margin:20px 0 0 0;
        color: #1B4D4A;
        letter-spacing:0.5px;
        font-size:24px;

`
export const LocationIcon = styled(GoLocation)`
color:#56315B;
font-size:40px;
@media screen and (max-width:960px) {
    font-size:24px;
}
`
export const MailIcon = styled(GoMail)`
color:#56315B;
font-size:40px;
@media screen and (max-width:960px) {
            font-size:24px;
}
`
export const PhoneIcon = styled(AiOutlinePhone)`
color:#56315B;
font-size:40px;
@media screen and (max-width:960px) {
            font-size:24px;
}
`
