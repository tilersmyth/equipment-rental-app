import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
  textfield: {
    width: '100%',
  },
});

const Toolbar = ({ classes }) => (
  <TextField
    className={classes.textfield}
    InputProps={{ disableUnderline: true }}
    placeholder="Enter job site city/zip code"
  />
);

export default withStyles(styles)(Toolbar);
