import React from 'react';
import { Route } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Provider as StateProvider } from 'unstated';

import UserContainer from '../store/UserContainer';

const AuthRoute = ({
  component: Component, data: { loading, me }, slug, ...rest
}) => {
  if (loading) {
    return null;
  }

  const user = new UserContainer({ initAuth: !!me, initUser: me });

  return (
    <StateProvider inject={[user]}>
      <Route {...rest} render={props => <Component slug={slug} {...props} />} />
    </StateProvider>
  );
};

const MeQuery = gql`
  query MeQuery {
    me {
      id
      email
      firstName
      lastName
    }
  }
`;

export default graphql(MeQuery)(AuthRoute);
