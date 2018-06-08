import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ChevronRight from '@material-ui/icons/ChevronRight';

const style = theme => ({
  icon: {
    lineHeight: '.8em',
    verticalAlign: 'middle',
    display: 'inline-block',
    color: theme.palette.primary.main,
  },
  button: {
    paddingRight: 4,
    paddingLeft: 4,
    minWidth: 'auto',
  },
  container: {
    textAlign: 'left',
  },
  [theme.breakpoints.down('md')]: {
    button: {
      fontSize: '.7em',
    },
    container: {
      textAlign: 'center',
      marginTop: 15,
    },
  },
});

const Breadcrumb = ({ links, match, classes }) => {
  const { params, url } = match;

  const linkArray = [];

  links.forEach((link) => {
    const slug = params[link.type];
    const urlSplit = url.split('/');
    const remove = urlSplit.indexOf(slug);

    urlSplit.splice(remove + 1);

    linkArray.push({ name: link.name, url: urlSplit.join('/') });
  });

  return (
    <div className={classes.container}>
      <Button
        color="primary"
        component={Link}
        to={`/${params.siteSlug}`}
        className={classes.button}
      >
        Equipment
      </Button>
      <div className={classes.icon}>
        <ChevronRight />
      </div>
      {linkArray.map((link, i, arr) => (
        <Fragment key={link.name}>
          <Button
            color="primary"
            component={Link}
            disabled={arr.length - 1 === i}
            to={link.url}
            className={classes.button}
          >
            {link.name}
          </Button>
          <div
            className={classes.icon}
            style={{ display: arr.length - 1 === i ? 'none' : 'inline-block' }}
          >
            <ChevronRight />
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default withStyles(style)(Breadcrumb);
