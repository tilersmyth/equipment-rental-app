import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const SiteRoute = ({ component: Component, slug, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (slug ? (
        <Component slug={slug} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/error',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

export default SiteRoute;
