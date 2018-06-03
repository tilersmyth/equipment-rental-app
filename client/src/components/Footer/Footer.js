import React from 'react';
import { withStyles } from '@material-ui/core';

const style = () => ({
  footer: {
    marginTop: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
const Footer = ({ classes }) => <div className={classes.footer} />;

export default withStyles(style)(Footer);
