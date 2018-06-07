import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { AUTH_TOKEN } from '../../constant';

const style = () => ({
  list: {
    width: '100%',
  },
});

const logout = async (user) => {
  await user.setUser(false, {});
  localStorage.removeItem(AUTH_TOKEN);
};

const UserPanel = ({ user, small, classes }) => {
  const { state } = user;
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant={small ? 'button' : 'headline'}>
          {`Welcome, ${state.user.firstName}`}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List component="nav" className={classes.list}>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              logout(user);
            }}
          >
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default withStyles(style)(UserPanel);
