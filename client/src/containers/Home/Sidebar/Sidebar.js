import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CatList from '../../../components/Home/CatList';

const styles = () => ({
  root: {
    minHeight: 500,
  },
  divider: {
    marginTop: 15,
  },
});

class HomeSidebarContainer extends React.Component {
  state = { catActive: null };

  handleClick = (index) => {
    const active = this.state.catActive === index ? null : index;
    this.setState({ catActive: active });
  };

  render() {
    const {
      classes,
      data: { loading, cats },
    } = this.props;
    const { catActive } = this.state;

    if (loading) {
      return null;
    }

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="headline">Browse By Category</Typography>
            <Divider className={classes.divider} />
            <CatList cats={cats} catActive={catActive} handleClick={this.handleClick} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const catsQuery = gql`
  query($id: ID!) {
    cats(id: $id) {
      id
      name
      productType {
        id
        name
      }
    }
  }
`;

const SidebarWithData = graphql(catsQuery, {
  options: props => ({ variables: { id: props.site.id } }),
})(HomeSidebarContainer);

export default withStyles(styles)(SidebarWithData);
