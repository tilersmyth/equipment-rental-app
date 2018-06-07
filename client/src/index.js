import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, concat } from 'apollo-boost';
import CssBaseline from '@material-ui/core/CssBaseline';

import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import { AUTH_TOKEN } from './constant';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const authMiddleware = new ApolloLink((operation, forward) => {
  const tokenValue = localStorage.getItem(AUTH_TOKEN);

  operation.setContext({
    headers: {
      Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
    },
  });

  return forward(operation);
});

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </React.Fragment>,
  document.getElementById('root'),
);
registerServiceWorker();
