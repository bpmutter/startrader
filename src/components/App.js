import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { ThemeProvider, createTheme, Arwes } from "arwes";
// import myTheme from '../theme/theme';
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import ListingPage from './ListingPage';
import UserProfile from './UserProfile';
import Background from './Background'
import Login from './Login';

function App() {
  
  return (
      <ThemeProvider theme={createTheme()}>
        <>
          <Arwes>
            <Router>
              <Header />
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route path="/listings/:id">
                  <ListingPage />
                </Route>
                <Route path="/profile">
                  <UserProfile personalProfile={true} />
                </Route>
                <Route path="/users/:id">
                  <UserProfile />
                </Route>
                <Route path="/logout">
                  {/* TODO: add logout functionality */}
                  <Redirect to="/" />
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="*">
                  {/* TODO: ADD 404 page */}
                  <div>404: resource not found :(</div>
                </Route>
              </Switch>
              <Footer />
              <Background />
            </Router>
          </Arwes>
        </>
      </ThemeProvider>
  );
}

export default App;
