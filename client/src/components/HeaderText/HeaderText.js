import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 700,
    marginBottom: 20,
  },
  respText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 700,
    marginBottom: 20,
  },
  [theme.breakpoints.down('sm')]: {
    respText: {
      fontSize: theme.typography.pxToRem(28),
    },
  },
  [theme.breakpoints.down('xs')]: {
    respText: {
      fontSize: theme.typography.pxToRem(20),
      marginBottom: 10,
    },
  },
});

const HeaderText = ({ classes, text, resize }) => (
  <Typography variant="display1" className={resize ? classes.respText : classes.text}>
    {text}
  </Typography>
);

export default withStyles(styles)(HeaderText);
