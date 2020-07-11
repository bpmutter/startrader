import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import appContext from "./Context";

function PrivateRoute({ children, ...rest }) {
  const loggedIn = JSON.parse(localStorage.getItem('id'))
  return (
    <Route
      {...rest}
      render={({ location }) =>
         loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;