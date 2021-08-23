import styled from 'styled-components';

export const ContainerDiv = styled.div`
margin:0;
padding:0;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
@media screen and (max-width:500px) {
    height:113vh;
}
`
export const HeaderDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
h3{
    margin:150px 0 30px 0;
    font-size:56px;
    color:  #4D7370;
    @media screen and (max-width:500px) {
        margin-top:100px;
    font-size:35px;
}
}
p{
 
    font-size:20px;
    color:#292929;
    opacity:90%;
    letter-spacing:1px;
    text-align:center;
    @media screen and (max-width:500px) {
        margin-top:10px;
    font-size:17px;
}
}
span{
    margin-top:10px;
    font-size:28px;
    color:#56315B;
    letter-spacing:1px;
    @media screen and (max-width:500px) {
        margin-top:10px;
    font-size:25px;
}
}
@media screen and (max-width:500px) {
text-align:center;
padding:20px;
}
`
export const InfoWrapper = styled.div`
position:relative;
margin:80px 0 0 0;
background-color:rgba(178, 191, 190, 0.8);
display:flex;
flex-direction:column;
max-width: 1150px;
max-height: 1000px;
outline: 1px solid #ffffff;
        outline-offset: -30px;

h2{
    padding:30px 50px 35px 250px;
    margin:25px 0 15px 0;
    color: #1B4D4A;
font-style: normal;
font-weight: 200;
letter-spacing:1px;
font-size: 40px;
line-height: 48px;
@media screen and (max-width:1600px) {
    padding:30px 50px 35px 50px;
}
@media screen and (max-width:700px) {
        font-size:35px;
}
@media screen and (max-width:500px) {
    margin:25px 0 0 0;
    font-size: 30px;
text-align:center;
padding:18px;
}
}
p{
    padding:0 50px 50px 250px;
    color: #1B4D4A;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 35px;
@media screen and (max-width:1600px) {
    padding:30px 50px 35px 50px;
}
@media screen and (max-width:700px) {
        /* margin:0 0 30px 450px; */
        font-size:20px;
        line-height: 30px;
        padding:10px 35px 35px 10px;
}
@media screen and (max-width:500px) {
text-align:center;
padding:15px;
}
}
h4{
    margin:0 0 30px 750px;
    font-family: 'Tangerine', cursive;
    font-size:75px;
    font-weight:200;
    color:#ffffff;
    opacity:70%;
    letter-spacing:4px;
    @media screen and (max-width:1600px) {
        margin:0 0 30px 750px;
}
    @media screen and (max-width:900px) {
        margin:0 0 30px 450px;
}
    @media screen and (max-width:700px) {
        margin:0 0 30px 450px;
        font-size:35px;
}
    @media screen and (max-width:500px) {
        margin:0 0 30px 230px;
}
}
@media screen and (max-width:500px) {
        margin:0;
}
`
export const ImageWrapper = styled.div`
position:absolute;
left:-25%;
top:10%;
width:550px;
height:400px;
padding:10px;
img{
    border:1px solid #4D7370;
    z-index:1;
    width:500px;
    padding:15px;
@media screen and (max-width:1600px) {
visibility:hidden;
}
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
    margin:100px 20px 0 20px;
    font-size:60px;
    letter-spacing:5px;
    /* color:rgba(178, 191, 190, 0.4); */
    color:#9771A0;
    span{
        font-family: 'Tangerine', cursive;
    font-weight:200;
    font-size:50px;
    @media screen and (max-width:900px) {
        font-size:35px;
        margin:50px 10px 0 10px;
}
    @media screen and (max-width:500px) {
        font-size:20px;
        margin:0 10px 0 10px;
        letter-spacing:0;
}
    }
    @media screen and (max-width:1100px) {
        font-size:50px;
      
}
    @media screen and (max-width:900px) {
        font-size:35px;
        margin:50px 10px 0 10px;
}
    @media screen and (max-width:500px) {
        font-size:25px;
        margin:5px 10px 0 10px;
        justify-content:center;
        
}
`