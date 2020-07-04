import React from 'react';
import { ThemeProvider, createTheme, Arwes } from "arwes";
import myTheme from '../theme/theme';
import TopHeader from './Header';
import Foot from './Footer';
import Homepage from './Homepage';

function App() {
  
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <TopHeader/>
        <Homepage/>
        <Foot/>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
