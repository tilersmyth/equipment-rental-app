import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Background from './Background';
import Toolbar from '../Toolbar';

const styles = theme => ({
  header: {
    position: 'relative',
    background: 'rgba(0,0,0,.55)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
    marginBottom: theme.spacing.unit * 2,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 700,
    marginBottom: 20,
  },
  [theme.breakpoints.down('sm')]: {
    text: {
      fontSize: theme.typography.pxToRem(28),
    },
    header: {
      paddingBottom: 10,
    },
  },
  [theme.breakpoints.down('xs')]: {
    text: {
      fontSize: theme.typography.pxToRem(20),
      marginBottom: 10,
    },
    header: {
      paddingBottom: 0,
    },
  },
});

const Header = ({ children, classes, custom }) => {
  const { headerImage, headerText } = custom;
  return (
    <div className={classes.header}>
      <Background image={headerImage} />
      <Toolbar />
      <Typography variant="display1" className={classes.text}>
        {headerText}
      </Typography>

      {children}
    </div>
  );
};

export default withStyles(styles)(Header);
