import styled from 'styled-components';

export const ContainerDiv = styled.div`
position:relative;
margin:150px 0 0 0;
background: rgba(208, 213, 213, 0.5);
padding-bottom:10px;
@media screen and (max-width:1000px) {
    margin:150px 0 0 0;
    }
@media screen and (max-width:500px) {
    margin:0;
    }
`
export const DescritionDiv = styled.div`
    text-align:center;
h2{
    padding:150px 0 15px 0;
    color: #1B4D4A;
    font-style: normal;
font-weight: normal;
font-size: 56px;
@media screen and (max-width:1050px) {
    padding:120px 0 10px 0;
}
@media screen and (max-width:500px) {
    padding:70px 0 10px 0;
    margin-top:0;
    font-size: 40px;
  
}
}
p{
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
`
export const AllTreatmentsUL = styled.ul`

display:flex;
flex-wrap:wrap;
justify-content:center;
margin:50px 0 150px 0;
list-style:none;
li{
    margin:15px;
   padding:25px 0 25px 25px;
   max-width:750px;
    display:flex;
    border-top:1px solid #9771A0;
    border-bottom:1px solid #9771A0;
    @media screen and (max-width:900px) {
        flex-direction:column;
        align-items:center;
        margin:5px;
        min-height:350px;
}
}
li:last-child{
    border-bottom:1px solid #B2BFBE;
}
img{
    position:relative;
    margin:0 5px 0 0;
    width:200px;
    right:2%;
    @media screen and (max-width:900px) {
        width:150px;
        margin:0 10px 0 15px;
}
}
h5{
    position:relative;
    top:5%;
    color:#1B4D4A;
    font-style: normal;
font-weight: 700;
font-size: 32px;
@media screen and (max-width:900px) {
    width:350px;
    top:2%;
}
@media screen and (max-width:900px) {
text-align:center;
font-size: 24px;
top:7%;
}
}
p{
margin:25px 0 0 0;
    color: #292929;
    width:350px;
flex-wrap:wrap;
font-size: 16px;
}
@media screen and (max-width:500px) {
    text-align:center;
}
`
export const Buttons = styled.div`
display:flex;
flex-direction:column;
margin:0 20px 0 20px;
width:200px;
justify-content:center;

@media screen and (max-width:500px) {
    margin:20px 20px 0 20px;
}
`
export const BookButton = styled.button`
margin:5px 0 0 0;
    color:#FFFFFF;
    position:relative;
    border: 1px solid #1B4D4A;
box-sizing: border-box;
background:#1B4D4A;
padding:10px;
font-size:16px;
letter-spacing:1px;
cursor:pointer;
&:hover{
    color: #1B4D4A;
    background:#B2BFBE;
}
&:active{
    transform: scale(0.98);
}
@media screen and (max-width:900px) {
    margin:20px 0 0 0;
}
@media screen and (max-width:500px) {
    padding:7px;
font-size:12px;
}
`
export const InfoButton = styled.button`
    color: #1B4D4A;
    position:relative;
    border: 1px solid #1B4D4A;
box-sizing: border-box;
background:transparent;
padding:10px;
font-size:16px;
letter-spacing:1px;
cursor:pointer;
&:hover{
    color:#FFFFFF;
    background:#B2BFBE;
}
&:active{
    transform: scale(0.98);
}
@media screen and (max-width:900px) {
    margin:35px 0 0 0;
}
@media screen and (max-width:500px) {
    padding:7px;
font-size:12px;
}
`