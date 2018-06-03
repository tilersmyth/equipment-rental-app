import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import SiteRoute from './SiteRoute';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const Routes = ({ data: { loading, slug }, match: { path } }) => {
  if (loading) {
    return null;
  }
  return (
    <div>
      <SiteRoute path={`${path}`} exact slug={slug} component={Home} />
      <SiteRoute path={`${path}/login`} exact slug={slug} component={Login} />
      <SiteRoute path={`${path}/signup`} exact slug={slug} component={Signup} />
    </div>
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
