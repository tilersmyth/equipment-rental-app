import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    padding: 20,
    marginTop: 50,
  },
  [theme.breakpoints.down('md')]: {
    paper: {
      marginTop: 20,
    },
  },
});

class SignupFormContainer extends React.Component {
  state = {
    open: false,
  };
  render() {
    const { classes, slug } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={4}>
          <Paper className={classes.paper}>this is the signup form</Paper>
          <Button color="primary" component={Link} to={`/${slug}/login`}>
            Already have an account? Login here
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignupFormContainer);
