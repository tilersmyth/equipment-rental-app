import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import { AUTH_TOKEN } from '../constant';
import { isTokenExpired } from '../utils/jwtHelper';

import Login from './Login';
import Signup from './Signup';
import Error from './Error';
import Site from './site';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: props.token,
    };
  }

  // verify localStorage check
  componentDidMount() {
    this.bootStrapData();
  }

  refreshTokenFn(data = {}) {
    const token = data.AUTH_TOKEN;

    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
    } else {
      localStorage.removeItem(AUTH_TOKEN);
    }

    this.setState({
      token: data.AUTH_TOKEN,
    });
  }

  bootStrapData() {
    try {
      const token = localStorage.getItem(AUTH_TOKEN);
      if (token !== null && token !== undefined) {
        const expired = isTokenExpired(token);
        if (!expired) {
          this.setState({ token });
        } else {
          localStorage.removeItem(AUTH_TOKEN);
          this.setState({ token: null });
        }
      }
    } catch (e) {
      console.log('');
    }
  }

  renderRoute() {
    const { token } = this.state;
    const {
      data: { loading, me },
    } = this.props;

    if (loading) {
      return null;
    }

    console.log(me);

    return (
      <div className="fl w-100 pl4 pr4">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/error" exact component={Error} />
          <Route path="/:siteSlug" user="test" component={Site} />
        </Switch>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <Fragment>{this.renderRoute()}</Fragment>
      </Router>
    );
  }
}

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

export default graphql(MeQuery)(Root);
