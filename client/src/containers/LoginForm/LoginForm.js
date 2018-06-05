import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { AUTH_TOKEN } from '../../constant';

const styles = theme => ({
  paper: {
    padding: 20,
    marginTop: 50,
  },
  formControl: {
    width: '100%',
    marginBottom: 15,
  },
  [theme.breakpoints.down('md')]: {
    paper: {
      marginTop: 20,
    },
  },
});

class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      email: '',
      password: '',
      errors: {},
    });
  }

  onSubmit = async () => {
    const { email, password } = this;

    const { slug, history } = this.props;

    const response = await this.props.mutate({
      variables: {
        email,
        password,
      },
    });

    const {
      login: { token },
    } = response.data;

    localStorage.setItem(AUTH_TOKEN, token);

    history.push(`/${slug}`);
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  render() {
    const {
      classes, slug, email, password,
    } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <form>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="email">E-mail Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={this.onChange}
                  value={email}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={this.onChange}
                  value={password}
                />
              </FormControl>
              <Button
                onClick={this.onSubmit}
                fullWidth
                variant="raised"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
            </form>
          </Paper>
          <Button color="primary" component={Link} to={`/${slug}/signup`}>
            Need an account? Signup here
          </Button>
        </Grid>
      </Grid>
    );
  }
}

const LoginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
      }
      token
    }
  }
`;

const loginWithData = graphql(LoginMutation)(observer(LoginFormContainer));

export default withRouter(withStyles(styles)(loginWithData));
