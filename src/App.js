import React, { useState } from 'react';
import Navbar from './NavbarFooter/Navbar'
import Sidebar from './NavbarFooter/Sidebar'
import Start from './Home/Start'
import About from './Home/About'
import Treatments from './Home/Treatments'
import Products from './Home/Products'
import Contact from './Home/Contact'
import Footer from './NavbarFooter/Footer'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
      margin: 0;
      padding:0;
      font-family:sans-serif;
      /* overflow-x: hidden; */

}
  *, *::after, *::before {
    box-sizing: border-box;
  }

`

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Start />
      <About />
      <Treatments modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
