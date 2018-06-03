import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Slider from 'react-slick';
import chunk from 'lodash/chunk';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/KeyboardArrowRight';
import ArrowBack from '@material-ui/icons/KeyboardArrowLeft';

import './carousel.css';

const styles = () => ({
  carousel: {
    margin: 20,
  },
  carouselItem: {
    padding: 5,
    '&:focus': {
      outline: 'none',
    },
  },
  nextArrow: {
    color: '#999999',
    right: -25,
    lineHeight: 0,
    position: 'absolute',
    top: '50%',
    padding: 0,
    transform: 'translate(0, -50%)',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    background: 'transparent',
  },
  prevArrow: {
    color: '#999999',
    left: -25,
    lineHeight: 0,
    position: 'absolute',
    top: '50%',
    padding: 0,
    transform: 'translate(0, -50%)',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    background: 'transparent',
  },
  media: {
    height: 0,
    paddingTop: '70%', // 16:9
    backgroundSize: 'contain',
    marginBottom: 20,
  },
  cardActions: {
    justifyContent: 'center',
  },
});

const NextArrow = ({ onClick, customStyle }) => (
  <ArrowForward
    className={customStyle}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    tabIndex={0}
  />
);

const PrevArrow = ({ onClick, customStyle }) => (
  <ArrowBack
    className={customStyle}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    tabIndex={0}
  />
);

class CarouselContainer extends React.Component {
  state = {};

  render() {
    const {
      classes,
      data: { loading, featured },
    } = this.props;

    if (loading) {
      return null;
    }

    const featuredArray = chunk(featured, 6);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      nextArrow: <NextArrow customStyle={classes.nextArrow} />,
      prevArrow: <PrevArrow customStyle={classes.prevArrow} />,
    };

    return (
      <Fragment>
        <Typography variant="headline">Popular Equipment Types</Typography>
        <Slider className={classes.carousel} {...settings}>
          {featuredArray.map(featuredSingle => (
            <div className={classes.carouselItem} key={featuredSingle}>
              <Grid container spacing={16}>
                {featuredSingle.map(type => (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={type.name}>
                    <Card className={classes.card}>
                      <CardContent>
                        <CardMedia
                          className={classes.media}
                          image={type.image.url}
                          title="Product type image"
                        />
                        <Typography variant="title">{type.name}</Typography>
                      </CardContent>
                      <CardActions className={classes.cardActions}>
                        <Button color="primary" size="small" className={classes.button}>
                          {`View ${type.name}`}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </Slider>
      </Fragment>
    );
  }
}

const catsQuery = gql`
  query($id: ID!) {
    featured(id: $id) {
      id
      name
      image {
        url
      }
    }
  }
`;

const CarouselData = graphql(catsQuery, {
  options: props => ({ variables: { id: props.siteId } }),
})(CarouselContainer);

export default withStyles(styles)(CarouselData);
