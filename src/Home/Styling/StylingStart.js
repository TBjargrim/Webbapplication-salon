import styled from 'styled-components';
import { BsArrowDown } from "react-icons/bs";
import BackgroundIMG from '../../Images/Background.jpg'

export const ContainerDiv = styled.div`
height:99vh;
background-image: url(${BackgroundIMG});
background-size:cover;
width:100%;
`
export const WrapperDiv = styled.div`
position:relative;
top:40%;
    display:flex;
    flex-direction:column;
    align-items:center;
h1{
    font-family: Red Hat Text;
font-weight: normal;
font-size: 80px;
line-height: 127px;
color: #FFFFFF;
}
h5{
    margin:0 150px 0 150px;
    font-family: Red Hat Text;
color: #FFFFFF;
font-weight: 200;
font-size: 18px;
line-height: 24px;
}

button {
    margin-top:100px;
    padding:15px 25px 15px 25px;
    font-family: Red Hat Text;
    font-size: 24px;
    letter-spacing:1px;
    border: 1px solid #FFFFFF;
box-sizing: border-box;
background-color:transparent;
color: #FFFFFF;
cursor:pointer;
&:hover{
color:#1B4D4A;
background:#FFFFFF;
}
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