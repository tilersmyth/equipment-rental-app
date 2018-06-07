import React from 'react';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import { Subscribe } from 'unstated';
import { withStyles } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import UserContainer from '../../store/UserContainer';
import Theme from '../../components/Theme';
import Header from '../../components/Header';
import Toolbar from '../../components/Toolbar';
import Action from '../../components/Toolbar/Action';
import HeaderText from '../../components/HeaderText';
import Search from '../../containers/Search';
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import CatList from '../../containers/CatList';
import CatDrawer from '../../containers/CatDrawer';
import Carousel from '../../containers/Carousel';
import Footer from '../../components/Footer';
import UserPanel from '../../components/UserPanel';

const style = theme => ({
  loginBtnSm: {
    marginBottom: theme.spacing.unit * 2,
  },
  paper: {
    padding: 15,
  },
});

const LoginBtn = ({ margin, slug }) => (
  <Button
    fullWidth
    component={Link}
    to={`${slug}/login`}
    variant="raised"
    size="large"
    color="primary"
  >
    Login or Signup
  </Button>
);

const HandleAuth = ({ site, small }) => (
  <div style={{ marginBottom: small ? 15 : 0 }}>
    <Subscribe to={[UserContainer]}>
      {(user) => {
        const { state } = user;
        return state.isAuth ? (
          <UserPanel user={user} small={small} />
        ) : (
          <LoginBtn slug={site.slug.value} />
        );
      }}
    </Subscribe>
  </div>
);

const Home = ({ classes, slug }) => {
  const { site } = slug;
  return (
    <Theme custom={site.custom}>
      <Header custom={site.custom}>
        <Toolbar>
          <div />
          <Action />
        </Toolbar>
        <HeaderText text={site.custom.headerText} />
        <Search />
      </Header>
      <Content>
        <Hidden mdUp>
          <HandleAuth site={site} small />
          <CatDrawer>
            <CatList siteId={site.id} />
          </CatDrawer>
        </Hidden>
        <Grid container justify="center" spacing={24}>
          <Grid item xs={false} md={5} lg={4}>
            <Hidden smDown>
              <HandleAuth site={site} />
              <Sidebar>
                <CatList siteId={site.id} />
              </Sidebar>
            </Hidden>
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
            <Carousel siteId={site.id} />
          </Grid>
        </Grid>
        <Footer />
      </Content>
    </Theme>
  );
};
export default compose(withStyles(style), withWidth())(Home);
