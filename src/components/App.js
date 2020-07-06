import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider, createTheme, Arwes } from "arwes";
// import myTheme from '../theme/theme';
import TopHeader from './Header';
import Foot from './Footer';
import Homepage from './Homepage';
import ListingPage from './ListingPage';

function App() {
  
  return (
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <Router>
            <TopHeader />
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/listings/:id">
                <ListingPage/>
              </Route>
              <Route path="*">
                <div>404: resource not found :(</div>
              </Route>
            </Switch>
            <Foot />
          </Router>
        </Arwes>
      </ThemeProvider>
  );
}

export default App;
