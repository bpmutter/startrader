import React from 'react';
import { ThemeProvider, createTheme, Arwes } from "arwes";
import myTheme from '../theme/theme';
import TopHeader from './Header';
import Foot from './Footer';

function App() {
  
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <TopHeader/>
        <p>main site content</p>
        <Foot/>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
