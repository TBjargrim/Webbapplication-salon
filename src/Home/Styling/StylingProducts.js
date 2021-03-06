import styled from 'styled-components';

export const ContainerDiv = styled.div`
margin-top:15px;
`
export const TopDiv = styled.div`
    text-align:center;
h2{
    padding:150px 0 15px 0;
    color: #1B4D4A;
    font-style: normal;
font-weight: normal;
font-size: 56px;
@media screen and (max-width:1050px) {
    padding:100px 0 10px 0;
    text-align:center;
}
@media screen and (max-width:500px) {
    font-size: 32px;
}
}
p{
    padding:0 0 50px 0;
    color:#292929;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 35px;
@media screen and (max-width:1050px) {
    text-align:center;
}
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
    @media screen and (max-width:500px) {
        /* margin:5px 25px 0 0; */
}

}
div{

    img{
     
    width:250px;
    box-shadow: 4px 4px 3px 3px rgba(0, 0, 0, 0.2);
    &:hover{
        box-shadow: 4px 4px 3px 3px rgba(27, 77, 74, 0.5);
    }
    @media screen and (max-width:1450px) {
        width:200px;
}
    @media screen and (max-width:1300px) {
        width:150px;
}
    @media screen and (max-width:600px) {
        width:90px;
}
}
@media screen and (max-width:600px) {
        width:90px;
}
}

h5{
    margin-top:15px;
    font-style: normal;
font-weight: 500;
letter-spacing:1px;
font-size: 24px;
text-align:center;
color: #1B4D4A;
@media screen and (max-width:600px) {
    font-size: 16px;
}
}
@media screen and (max-width:1700px) {
    margin:0 50px 0 50px;
    top:5%;
}
@media screen and (max-width:1200px) {
    margin:0 50px 0 50px;
}
@media screen and (max-width:1200px) {
padding:0;
}
`