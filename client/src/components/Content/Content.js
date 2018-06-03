import React from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const style = () => ({
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const Content = ({ children, classes }) => (
  <div className={classes.content}>
    <Grid container justify="center">
      <Grid item xs={12} sm={11} xl={10}>
        {children}
      </Grid>
    </Grid>
  </div>
);

export default withStyles(style)(Content);
