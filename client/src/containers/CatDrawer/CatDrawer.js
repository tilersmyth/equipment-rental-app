import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  inner: {
    width: 350,
    padding: 10,
  },
  [theme.breakpoints.up('sm')]: {
    inner: {
      width: 400,
    },
  },
});

class CatDrawerContainer extends React.Component {
  state = {
    open: false,
  };

  toggleDrawer = open => () => {
    this.setState({
      open,
    });
  };

  render() {
    const { classes, children } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <Button
          onClick={this.toggleDrawer(true)}
          fullWidth
          variant="raised"
          size="large"
          color="secondary"
        >
          Browse By Category
        </Button>
        <Drawer anchor="right" open={open} onClose={this.toggleDrawer(false)}>
          <div className={classes.inner}>{children}</div>
        </Drawer>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CatDrawerContainer);
