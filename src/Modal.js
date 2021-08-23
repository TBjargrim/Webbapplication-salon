import React, { children } from 'react';
// import REACTDOM from 'react-dom';
import styled from "styled-components";
import { GrClose } from 'react-icons/gr'
// import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const portalRoot = document.getElementById('portal-root');

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  cursor:pointer;
`
const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 70%;
  width:60%;
  background-color: white;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 1999;
  padding: 40px;
`
const CloseButton = styled(GrClose)`
position:absolute;
top:7%;
right:7%;
width:100px;
font-size:20px;
cursor:pointer;
`
const Content = styled.div`
border:solid 1px blue;
margin:100px 0 0 0;
min-height: 100%;
  width:80%;
  display:flex;
  flex-direction:column;
  align-items:center;

`
export const ModalH2 = styled.h2`
font-size:34px;
margin:40px 0 0 0;
color:#1B4D4A;
`

const Modal = ({ modalOpen, children, onClose }) => {
  if (!modalOpen) return null

  return (
    <Background>
      <ModalBackdrop onClick={onClose} />
      <ModalBox>
        <CloseButton onClick={onClose} />
        <Content>
          {children}
        </Content>
      </ModalBox>
    </Background>
  )
}

export default Modal
