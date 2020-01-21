import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authenticate from './Authenticate';

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={rest =>
        Authenticate() === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;
