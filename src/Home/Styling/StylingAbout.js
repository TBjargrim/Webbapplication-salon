import styled from 'styled-components';

export const ContainerDiv = styled.div`
height:70vh;
display:flex;
justify-content:center;
align-items:center;
position:relative;
`
export const ImageWrapper = styled.div`
position:absolute;
right:60%;
width:450px;
height:300px;
border:1px solid #4D7370;
padding:10px;
img{
    z-index:100;
    width:350px;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
position:absolute;
}
`
export const InfoWrapper = styled.div`
background-color:rgba(178, 191, 190, 1);
position: absolute;
right:20%;
width: 750px;
height: 338px;
outline: 1px solid #ffffff;
        outline-offset: -30px;
padding:50px 50px 50px 150px;
h2{
    margin-bottom:15px;
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
`