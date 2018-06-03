import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
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

/*eslint-disable */
class SearchContainer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Card className={classes.root}>
              <CardContent>
                <TextField className={classes.textfield} label="Search equipment or solutions" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
/* eslint-enable */

export default withStyles(styles)(SearchContainer);
