import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Error from './Error';
import Site from './site';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/error" exact component={Error} />
      <Route path="/:siteSlug" component={Site} />
    </Switch>
  </Router>
);

export default Root;
