import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import compose from 'recompose/compose';
import { Subscribe } from 'unstated';
import { withStyles } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import UserContainer from '../../store/UserContainer';
import Theme from '../../components/Theme';
import Header from '../../components/Header';
import Toolbar from '../../components/Toolbar';
import Action from '../../components/Toolbar/Action';
import HeaderText from '../../components/HeaderText';
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import CatDrawer from '../../containers/CatDrawer';
import Footer from '../../components/Footer';
import UserPanel from '../../components/UserPanel';
import Breadcrumb from '../../components/Breadcrumb';

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

const Category = ({
  classes, siteSlug, data: { loading, slug }, match,
}) => {
  if (loading) {
    return null;
  }

  const { site } = siteSlug;

  if (!slug) {
    return <Redirect to={`/${site.slug.value}`} />;
  }

  const { category } = slug;

  return (
    <Theme custom={site.custom}>
      <Header custom={site.custom}>
        <Toolbar>
          <div />
          <Action />
        </Toolbar>
        <HeaderText text={category.name} />
      </Header>
      <Content>
        <Hidden mdUp>
          <HandleAuth site={site} small />
          <CatDrawer />
        </Hidden>
        <Grid container justify="center" spacing={24}>
          <Hidden smDown>
            <Grid item md={5} lg={4}>
              <HandleAuth site={site} />
              <Sidebar />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={7} lg={8}>
            <Breadcrumb match={match} links={[{ name: category.name, type: 'catSlug' }]} />
          </Grid>
        </Grid>
        <Footer />
      </Content>
    </Theme>
  );
};

const catQuery = gql`
  query($value: String!) {
    slug(value: $value) {
      id
      category {
        id
        name
        slug {
          value
        }
      }
    }
  }
`;

const catWithData = graphql(catQuery, {
  options: props => ({ variables: { value: props.match.params.catSlug } }),
})(Category);

export default compose(withStyles(style), withWidth())(catWithData);
