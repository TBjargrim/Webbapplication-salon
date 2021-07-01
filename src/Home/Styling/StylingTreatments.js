import styled from 'styled-components';

export const ContainerDiv = styled.div`
/* height:100vh; */
background: rgba(208, 213, 213, 0.5);
padding-bottom:10px;
`
export const DescritionDiv = styled.div`
position:relative;
top:7%;
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
export const AllTreatmentsUL = styled.ul`
margin:150px 150px 150px 150px;
/* padding-bottom:50px; */
list-style:none;
border-bottom:1px solid #4D7370;
li{
   padding:25px 0 25px 50px;
    position:relative;
    display:flex;
    border-top:1px solid #4D7370;
    /* justify-content:space-around; */
    /* &:nth-child(even){
        flex-direction:row-reverse;
    } */
}
img{
    position:relative;
    margin:20px 30px 20px 20px;
    width:200px;
}
h5{
    position:relative;
    top:16%;
    color: #1B4D4A;
    font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 32px;
}
p{
    position:absolute;
    top:50%;
    color: #292929;

}

`
export const BookButton = styled.button`
    width:150px;

    color:#FFFFFF;
    position:absolute;
    right:10%;
    top:55%;
    border: 1px solid #1B4D4A;
box-sizing: border-box;
background:#1B4D4A;
padding:10px;
font-size:18px;
cursor:pointer;
&:hover{
    color: #1B4D4A;
    background:#B2BFBE;
}
`
export const InfoButton = styled.button`
    width:150px;
    color: #1B4D4A;
    position:absolute;
    right:10%;
    top:31%;

    border: 1px solid #1B4D4A;
box-sizing: border-box;
background:transparent;
padding:10px;
font-size:18px;
cursor:pointer;
&:hover{
    color:#FFFFFF;
    background:#B2BFBE;
}
`