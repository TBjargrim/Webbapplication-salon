import styled from 'styled-components';

export const ContainerDiv = styled.div`
margin:0;
padding:0;
height:70vh;
position:relative;
`
export const HeaderDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
h3{
    margin-top:100px;
    font-size:56px;
    color:  #4D7370;
}
h4{
    font-family: 'Tangerine', cursive;
    font-weight:200;
    margin-top:50px;
    position:absolute;
    left:20%;
    font-size:500px;
    letter-spacing:10px;
    color:rgba(178, 191, 190, 0.4);
}
p{
    font-size:24px;
    margin-top:20px;
    color:#292929;
    opacity:90%;
    letter-spacing:1px;
}
`
export const InfoWrapper = styled.div`
background-color:rgba(178, 191, 190, 0.8);
position: absolute;
top:35%;
right:20%;
width: 950px;
height: 500px;
outline: 1px solid #ffffff;
        outline-offset: -30px;
padding:50px 50px 50px 150px;
h2{
    margin:25px 0 15px 0;
    color: #1B4D4A;
font-style: normal;
font-weight: 200;
letter-spacing:1px;
font-size: 40px;
line-height: 48px;
}
p{
    color: #1B4D4A;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 35px;
}
h4{
    position:absolute;
    bottom:20%;
    right:20%;
    font-family: 'Tangerine', cursive;
    font-size:75px;
    font-weight:200;
    color:#ffffff;
    opacity:50%;
    letter-spacing:4px;
}
`
export const ImageWrapper = styled.div`
position:absolute;
top:10%;
right:90%;
width:550px;
height:400px;
border:1px solid #4D7370;
padding:10px;
img{
    z-index:100;
    width:450px;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
position:absolute;
}
`