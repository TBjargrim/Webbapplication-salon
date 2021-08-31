import styled from 'styled-components';
import { BsArrowDown } from "react-icons/bs";
import BackgroundIMG from '../../Images/Background.jpg'

export const ContainerDiv = styled.div`
height:99vh;
background-image: url(${BackgroundIMG});
background-size:cover;
width:100%;
@media screen and (max-width:500px) {
    height:89vh;
}

`
export const WrapperDiv = styled.div`
position:relative;
top:40%;
    display:flex;
    flex-direction:column;
    align-items:center;
h1{
    font-family: Red Hat Text;
font-weight: 300;
font-size: 130px;
line-height: 127px;
color: #FFFFFF;
letter-spacing:3px;
text-align:center;
@media screen and (max-width:1100px) {
    font-size: 80px;
    text-align:center;
}
@media screen and (max-width:600px) {
    font-size: 30px;
}
}
h5{
    margin:50px 250px 0 250px;
color: #FFFFFF;
font-weight:100;
letter-spacing:1px;
font-size: 24px;
line-height: 30px;
text-align:center;
@media screen and (max-width:960px) {
    margin:50px 100px 0 100px;
    font-size: 18px;
    
}
@media screen and (max-width:600px) {
    font-size: 12px;
    margin:30px 25px 0 25px;
}
}

button {
    width:250px;
    margin-top:100px;
    padding:15px 25px 15px 25px;
    font-size: 30px;
    letter-spacing:3px;
    border: 1px solid #FFFFFF;
box-sizing: border-box;
background-color:transparent;
color: #FFFFFF;
text-transform:uppercase;
cursor:pointer;
&:hover{
color:#1B4D4A;
background:#FFFFFF;
}
&:active{
    transform: scale(0.98);
}
@media screen and (max-width:960px) {
    font-size: 20px;
}
@media screen and (max-width:500px) {
    font-size: 15px;
    width:220px;
    margin-top:70px;
}
}
@media screen and (max-width:500px) {
    top:30%;
}

`
export const ArrowDown = styled(BsArrowDown)`
position:absolute;
bottom:2%;
left:35%;
color: #FFFFFF;
width:100%;
z-index:100;
height:50px;
font-weight:200;
`