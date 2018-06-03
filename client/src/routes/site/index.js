import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import SiteRoute from './SiteRoute';
import Home from './Home';

const Routes = ({ data: { loading, slug } }) => {
  if (loading) {
    return null;
  }

  return (
    <div>
      <SiteRoute path="/" slug={slug} component={Home} />
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
