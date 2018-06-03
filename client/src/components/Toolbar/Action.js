import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const styles = theme => ({
  action: {
    display: 'inline-block',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const Action = ({ classes }) => (
  <div className={classes.action}>
    <Button variant="fab" aria-label="delete" color="secondary" className={classes.button}>
      <ShoppingCart />
    </Button>
  </div>
);

export default withStyles(styles)(Action);
