import styled from 'styled-components';

export const ContainerDiv = styled.div`
height:100vh;
`
export const TopDiv = styled.div`
position:relative;
left:15%;
h2{
    padding:150px 0 15px 0;
    color: #1B4D4A;
    font-style: normal;
font-weight: normal;
font-size: 52px;
line-height: 64px;
@media screen and (max-width:900px) {
    padding:120px 0 10px 0;
}
}
p{
    color:#292929;
    font-family: Red Hat Text;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 35px;
}
@media screen and (max-width:1050px) {
    left:7%;
    width:650px;
}
@media screen and (max-width:500px) {
    left:9%;
    width:350px;
}
`
export const ProductUL = styled.ul`
margin:0 140px 0 140px;
padding:50px;
display:flex;
flex-wrap:wrap;
list-style:none;
position:relative;
top:10%;
justify-content:center;

border-top:1px solid #9771A0;
border-bottom:1px solid #9771A0;
li{
    cursor:pointer;
    margin:25px 25px 25px 25px;
}
img{
    width:250px;
    @media screen and (max-width:1450px) {
        width:200px;
}
    @media screen and (max-width:1300px) {
        width:150px;
}
}
h5{
    margin-top:15px;
    font-style: normal;
font-weight: 500;
letter-spacing:1px;
font-size: 24px;
line-height: 32px;
text-align:center;
color: #1B4D4A;
}
@media screen and (max-width:1700px) {
    margin:0 50px 0 50px;
    top:5%;
}
@media screen and (max-width:1200px) {
    margin:0 50px 0 50px;
    max-width:650px;
}
`