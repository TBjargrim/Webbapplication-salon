import styled from 'styled-components';
import { BsArrowDown } from "react-icons/bs";

export const ContainerDiv = styled.div`
margin:auto;
height:99vh;
width:100%;
overflow:hidden;
`
export const VideoBackground =styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
video{
    width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #fff;
}
`
export const Header = styled.h1`
    font-family: Red Hat Text;
font-weight: 300;
font-size: 98px;
color: #FFFFFF;
letter-spacing:3px;
text-align:center;
@media screen and (max-width:1300px) {
    font-size: 72px;
    text-align:center;
}
@media screen and (max-width:750px) {
    font-size: 38px;
}
`
export const WrapperDiv = styled.div`
background:rgb(94,104,104, 0.8);
position:relative;
padding:50px;
margin:0 250px 0 250px;
top:25%;
border-radius:10px;
outline: 10px solid rgba(255,255,255,0.05);
        outline-offset: -30px;
    display:flex;
    flex-direction:column;
    align-items:center;
h5{
    margin:50px 80px 0 80px;
    color: #FFFFFF;
font-weight:700;
letter-spacing:1px;
font-size: 24px;
text-align:center;
@media screen and (max-width:1600px) {
    margin:50px 10px 0 10px;
    font-size: 18px;
}
@media screen and (max-width:600px) {
    font-size: 16px;
    margin:30px 25px 0 25px;

}
}
button {
    width:250px;
    margin-top:90px;
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
@media screen and (max-width:1600px) {
    /* margin-top:20px; */
    font-size: 20px;
}
@media screen and (max-width:500px) {
    width:220px;
}
}
@media screen and (max-width:960px) {
    top:20%;
    margin:0 50px 0 50px;
}
@media screen and (max-width:490px) {
    top:15%;
    margin:5px;
}
`
export const ArrowDown = styled(BsArrowDown)`
position:absolute;
bottom:2%;
left:80%;
color: #FFFFFF;
font-size:24px;
z-index:100;
height:50px;
font-weight:200;
`