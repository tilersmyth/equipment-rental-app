import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Category from './Category';
import ProductType from './ProductType';
import Product from './Product';

import AuthRoute from '../AuthRoute';

const Routes = ({ data: { loading, slug }, match: { path } }) => {
  if (loading) {
    return null;
  }

  if (!slug || !slug.site) {
    return <Redirect to="/error" />;
  }

  return (
    <Switch>
      <AuthRoute path={`${path}`} exact slug={slug} component={Home} />
      <AuthRoute path={`${path}/equipment/:catSlug`} exact slug={slug} component={Category} />
      <AuthRoute
        path={`${path}/equipment/:catSlug/:typeSlug`}
        exact
        slug={slug}
        component={ProductType}
      />
      <AuthRoute
        path={`${path}/equipment/:catSlug/:typeSlug/:productSlug`}
        exact
        slug={slug}
        component={Product}
      />
      <Route path={`${path}/login`} exact render={() => <Login slug={slug} />} />
      <Route path={`${path}/signup`} exact render={() => <Signup slug={slug} />} />
      <Route render={() => <Redirect to="/error" />} />
    </Switch>
  );
};

const siteQuery = gql`
  query($value: String!) {
    slug(value: $value) {
      id
      site {
        id
        name
        slug {
          value
        }
        custom {
          headerImage
          headerText
          theme {
            color
            shade
          }
        }
      }
    }
  }
`;

export default graphql(siteQuery, {
  options: props => ({ variables: { value: props.match.params.siteSlug } }),
})(Routes);
