import styled from 'styled-components';

export const ContainerDiv = styled.div`
height:100vh;
`
export const TopDiv = styled.div`
position:relative;
/* top:7%; */
left:10%;
h2{
    padding:150px 0 15px 0;
    color: #1B4D4A;
    font-style: normal;
font-weight: normal;
font-size: 52px;
line-height: 64px;
}
p{
    color:#292929;
    font-family: Red Hat Text;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 35px;
}
`
export const ProductUL = styled.ul`
margin:0 140px 0 140px;
padding:50px;
display:flex;
flex-wrap:wrap;
list-style:none;
position:relative;
top:20%;
justify-content:space-around;
border-top:1px solid #4D7370;
border-bottom:1px solid #4D7370;
li{
    cursor:pointer;
}
img{
    width:250px;
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
`