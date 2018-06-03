import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Home from '@material-ui/icons/Home';

import Theme from '../../components/Theme';
import Header from '../../components/Header';
import Toolbar from '../../components/Toolbar';
import Action from '../../components/Toolbar/Action';
import HeaderText from '../../components/HeaderText';
import Content from '../../components/Content';
import SignupForm from '../../containers/SignupForm';
import Footer from '../../components/Footer';

const style = () => ({});

const Signup = ({ slug }) => {
  const { site } = slug;
  return (
    <Theme custom={site.custom}>
      <Header custom={site.custom}>
        <Toolbar>
          <Button
            variant="fab"
            aria-label="home"
            color="secondary"
            component={Link}
            to={`/${site.slug.value}`}
          >
            <Home />
          </Button>
          <Action />
        </Toolbar>
        <HeaderText text="Signup" />
      </Header>
      <Content>
        <SignupForm slug={site.slug.value} />
        <Footer />
      </Content>
    </Theme>
  );
};
export default withStyles(style)(Signup);
