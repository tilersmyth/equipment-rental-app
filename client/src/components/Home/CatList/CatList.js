import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const HomeCatListComponent = ({
  classes, cats, catActive, handleClick,
}) => (
  <div>
    <List component="nav">
      {cats.map(cat => (
        <div key={cat.name}>
          <ListItem
            button
            onClick={() => {
              handleClick(cat.id);
            }}
          >
            <ListItemText primary={cat.name} />
            {catActive === cat.id ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {cat.productType.map(type => (
            <Collapse key={type.name} in={catActive === cat.id} timeout="auto" unmountOnExit>
              <List component="div">
                <ListItem button className={classes.nested}>
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

export default withStyles(styles)(HomeCatListComponent);
