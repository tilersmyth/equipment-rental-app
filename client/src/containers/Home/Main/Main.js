import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import Explore from '../../../components/Home/Explore';

const styles = () => ({});

class HomeMainContainer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Explore />
      </div>
    );
  }
}

export default withStyles(styles)(HomeMainContainer);
