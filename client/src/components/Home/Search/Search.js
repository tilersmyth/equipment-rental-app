import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import TextField from '@material-ui/core/TextField';

const styles = () => ({
  root: {
    marginBottom: 24,
  },
  textfield: {
    width: '100%',
  },
});

const HomeSearchComponent = ({ classes }) => (
  <div>
    <Card className={classes.root}>
      <CardContent>
        <TextField className={classes.textfield} label="Search equipment or solutions" />
      </CardContent>
    </Card>
  </div>
);

export default withStyles(styles)(HomeSearchComponent);
