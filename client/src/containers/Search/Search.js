import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import SearchBar from '../../components/SearchBar';
import LocationBar from '../../components/LocationBar';

const styles = theme => ({
  card: {
    marginBottom: 24,
    overflow: 'visible',
  },
  searchCard: {
    '&:last-child': {
      paddingBottom: 16,
    },
  },
  zipCard: {
    '&:last-child': {
      paddingBottom: 16,
    },
  },
  [theme.breakpoints.up('md')]: {
    zipCard: {
      borderLeft: '1px solid #CCC',
    },
  },
  [theme.breakpoints.down('sm')]: {
    zipCard: {
      borderTop: '1px solid #CCC',
    },
  },
});

const SearchContainer = ({ classes }) => (
  <Grid container justify="center">
    <Grid item xs={12} sm={10} md={10} lg={8}>
      <Card className={classes.card}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <CardContent className={classes.searchCard}>
              <SearchBar />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardContent className={classes.zipCard}>
              <LocationBar />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  </Grid>
);

export default withStyles(styles)(SearchContainer);
