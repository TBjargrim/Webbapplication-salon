import React from 'react';
import Start from './Home/Start'
import About from './Home/About'
import Treatments from './Home/Treatments'
import Products from './Home/Products'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
      margin: 0;
      padding:0;
      font-family: Red Hat Text;;
      /* font-family: 'Work Sans', sans-serif; */
      /* background-color:black; */

}
  *, *::after, *::before {
    box-sizing: border-box;
  }

`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Start />
      <About />
      <Treatments />
      <Products />
    </div>
  );
}

export default App;
