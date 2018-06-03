import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: {
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    display: 'flex',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('md')]: {
    toolbar: {
      paddingTop: 15,
      paddingBottom: 15,
    },
  },
});

const Toolbar = ({ classes, children }) => <div className={classes.toolbar}>{children}</div>;

export default withStyles(styles)(Toolbar);
