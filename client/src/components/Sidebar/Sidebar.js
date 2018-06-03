import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  toolbar: {
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    toolbar: {
      paddingTop: 15,
      paddingBottom: 15,
    },
  },
});

const Sidebar = ({ children, classes }) => (
  <div className={classes.toolbar}>
    <Card className={classes.card}>
      <CardContent>{children}</CardContent>
    </Card>
  </div>
);

export default withStyles(styles)(Sidebar);
