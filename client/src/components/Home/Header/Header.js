import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Background from '../Background';

const styles = theme => ({
  background: {
    position: 'relative',
    paddingTop: 0,
    paddingBottom: 0,
    background: 'rgba(0,0,0,.55)',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  [theme.breakpoints.up('md')]: {
    background: {
      paddingTop: 40,
      paddingBottom: 40,
    },
  },
});

const HomeHeader = ({ classes, children, image }) => {
  const { url } = image;
  return (
    <div className={classes.background}>
      <Background image={url} />
      {children}
    </div>
  );
};

export default withStyles(styles)(HomeHeader);
