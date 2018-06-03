import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    minHeight: 350,
  },
});

const HomeExploreComponent = ({ classes }) => (
  <div>
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="headline">Popular Equipment Types</Typography>
        <Typography>Content here</Typography>
      </CardContent>
    </Card>
  </div>
);

export default withStyles(styles)(HomeExploreComponent);
