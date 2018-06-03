import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, concat } from 'apollo-boost';
import CssBaseline from '@material-ui/core/CssBaseline';

import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      'x-token': localStorage.getItem('token') || null,
    },
  });

  return forward(operation).map((response) => {
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;

    if (headers) {
      const token = headers.get('x-token');
      if (token) {
        localStorage.setItem('token', token);
      }
    }
    return response;
  });
});

const client = new ApolloClient({
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
