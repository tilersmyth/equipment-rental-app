import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Theme from '../../components/Theme';
import Header from '../../components/Header';
import Search from '../../containers/Search';
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import CatList from '../../containers/CatList';
import Carousel from '../../containers/Carousel';

const style = theme => ({
  button: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    sidebar: {
      display: 'none',
    },
  },
});

const Home = ({ classes, slug }) => {
  const { site } = slug;
  return (
    <Theme custom={site.custom}>
      <Header custom={site.custom}>
        <Search />
      </Header>
      <Content>
        <Grid container justify="center" spacing={24}>
          <Grid item xs={false} md={5} lg={4}>
            <div className={classes.sidebar}>
              <Button className={classes.button} variant="raised" size="large" color="primary">
                Login or Signup
              </Button>
              <Sidebar>
                <CatList siteId={site.id} />
              </Sidebar>
            </div>
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
            <Carousel siteId={site.id} />
          </Grid>
        </Grid>
      </Content>
    </Theme>
  );
};

export default withStyles(style)(Home);
