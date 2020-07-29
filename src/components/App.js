import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider, createTheme, Arwes } from "arwes";
// import myTheme from '../theme/theme';
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import ListingPage from './ListingPage';
import UserProfile from './UserProfile';
import Background from './Background'
import Login from './Login';
import SignUp from './SignUp';
import CreateListing from './CreateListing';
import EditProfile from './EditProfile';
import EditListingModal from './EditListingModal';
import FourOhFour from './FourOhFour';
import ProtectedRoute from './ProtectedRoute';
import altThemes from '../theme/altThemes';

function App() {
  const theme = createTheme(altThemes.rey);
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <Arwes>
          <Router>
            <div style={{ minHeight: "91vh" }}>
              <Header />
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route path="/listings/:id">
                  <ListingPage />
                </Route>
                <ProtectedRoute exact path="/profile">
                  <UserProfile personalProfile={true} />
                </ProtectedRoute>
                <Route path="/users/:id">
                  <UserProfile />
                </Route>
                <Route path="/logout">
                  <Redirect to="/" />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <ProtectedRoute path="/sell-ship">
                  <CreateListing />
                </ProtectedRoute>
                <Route path="*">
                  <FourOhFour />
                </Route>
              </Switch>
            </div>
            <Footer />
            <Background />
          </Router>
        </Arwes>
      </>
    </ThemeProvider>
  );
}

export default App;
