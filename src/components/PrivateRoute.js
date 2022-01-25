import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { component: Component, redirectTo = '/', ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          return <Component />;
        } else {
          return <Redirect to={redirectTo} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
