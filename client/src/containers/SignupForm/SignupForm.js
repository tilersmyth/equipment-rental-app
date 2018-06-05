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

class SignupFormContainer extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {},
    });
  }

  onSubmit = async (slug, history) => {
    const {
      firstName, lastName, email, password,
    } = this;

    const response = await this.props.mutate({
      variables: {
        firstName,
        lastName,
        email,
        password,
      },
    });

    const {
      signup: { token },
    } = response.data;

    localStorage.setItem('token', token);

    history.push(`/${slug}`);
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  render() {
    const {
      classes, history, slug, firstName, lastName, email, password,
    } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <form>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input id="firstName" name="firstName" onChange={this.onChange} value={firstName} />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input id="lastName" name="lastName" onChange={this.onChange} value={lastName} />
              </FormControl>
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
                onClick={() => {
                  this.onSubmit(slug, history);
                }}
                fullWidth
                variant="raised"
                color="primary"
                className={classes.button}
              >
                Create account
              </Button>
            </form>
          </Paper>
          <Button color="primary" component={Link} to={`/${slug}/login`}>
            Already have an account? Login here
          </Button>
        </Grid>
      </Grid>
    );
  }
}

const SignupMutation = gql`
  mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      user {
        id
      }
      token
    }
  }
`;

const signupWithData = graphql(SignupMutation)(observer(SignupFormContainer));

export default withRouter(withStyles(styles)(signupWithData));
