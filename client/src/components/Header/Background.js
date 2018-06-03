import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: '-1',
    overflow: 'hidden',
  },
});

const HeaderBackground = ({ classes, image }) => (
  <div className={classes.background}>
    <img src={image} alt="brand background" />
  </div>
);

export default withStyles(styles)(HeaderBackground);
