import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Error from './Error';
import Site from './site';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/error" exact component={Error} />
      <Route path="/:siteSlug" component={Site} />
    </Switch>
  </BrowserRouter>
);
