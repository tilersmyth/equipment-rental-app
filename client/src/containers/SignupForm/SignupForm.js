import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
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

const input = ({
  input: {
    name, onChange, value, ...restInput
  }, meta, ...rest
}) => (
  <Input
    {...rest}
    name={name}
    error={meta.error && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    value={value}
  />
);

class SignupFormContainer extends React.Component {
  onSubmit = async (values) => {
    const { slug, history } = this.props;

    const response = await this.props.mutate({
      variables: values,
    });

    const {
      signup: { token },
    } = response.data;

    localStorage.setItem(AUTH_TOKEN, token);

    history.push(`/${slug}`);
  };

  render() {
    const { classes, slug } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={12} md={8} lg={4}>
          <Paper className={classes.paper}>
            <Form
              onSubmit={this.onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Field name="firstName" component={input} type="text" />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <Field name="lastName" component={input} type="text" />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="email">E-mail Address</InputLabel>
                    <Field name="email" component={input} type="email" />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Field name="password" component={input} type="password" />
                  </FormControl>
                  <Button type="submit" fullWidth variant="raised" color="primary">
                    Login
                  </Button>
                </form>
              )}
            />
          </Paper>
          <Button color="primary" component={Link} to={`/${slug}/signup`}>
            Need an account? Signup here
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
const signupWithData = graphql(SignupMutation)(SignupFormContainer);

export default withRouter(withStyles(styles)(signupWithData));
