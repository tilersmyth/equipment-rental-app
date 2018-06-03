import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Background from './Background';

const styles = theme => ({
  header: {
    position: 'relative',
    background: 'rgba(0,0,0,.55)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginBottom: theme.spacing.unit * 2,
  },
});

const Header = ({ children, classes, custom }) => {
  const { headerImage } = custom;
  return (
    <div className={classes.header}>
      <Background image={headerImage} />
      {children}
    </div>
  );
};

export default withStyles(styles)(Header);
