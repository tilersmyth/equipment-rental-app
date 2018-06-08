import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    minHeight: 500,
  },
  divider: {
    marginTop: 15,
  },
  nestedCat: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class CatListContainer extends React.Component {
  state = { catActive: null };

  handleClick = (index) => {
    const active = this.state.catActive === index ? null : index;
    this.setState({ catActive: active });
  };

  render() {
    const {
      classes,
      data: { loading, cats },
      site,
    } = this.props;
    const { catActive } = this.state;

    if (loading) {
      return null;
    }

    return (
      <div>
        <Typography variant="headline">Browse By Category</Typography>
        <Divider className={classes.divider} />
        <List component="nav">
          {cats.map(cat => (
            <div key={cat.name}>
              <ListItem
                button
                onClick={() => {
                  this.handleClick(cat.id);
                }}
              >
                <ListItemText primary={cat.name} />
                {catActive === cat.id ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {cat.productType.map(type => (
                <Collapse key={type.name} in={catActive === cat.id} timeout="auto" unmountOnExit>
                  <List component="div">
                    <ListItem
                      button
                      className={classes.nestedCat}
                      component={Link}
                      to={`${site.slug.value}/equipment/${cat.slug.value}/${type.slug.value}`}
                    >
                      <ListItemText primary={type.name} />
                    </ListItem>
                  </List>
                </Collapse>
              ))}
            </div>
          ))}
        </List>
      </div>
    );
  }
}

const catsQuery = gql`
  query($id: ID!) {
    cats(id: $id) {
      id
      name
      slug {
        value
      }
      productType {
        id
        name
        slug {
          value
        }
      }
    }
  }
`;

const CatListData = graphql(catsQuery, {
  options: props => ({ variables: { id: props.site.id } }),
})(CatListContainer);

export default withStyles(styles)(CatListData);
