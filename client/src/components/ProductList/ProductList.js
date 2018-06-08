import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  container: {
    marginTop: 30,
  },
  paper: {
    padding: 20,
    width: '100%',
  },
  button: {
    width: '100%',
  },
});

const ProductList = ({ classes, productType }) => (
  <div className={classes.container}>
    {productType.products.map(product => (
      <ButtonBase
        className={classes.button}
        component={Link}
        to={`${productType.slug.value}/${product.slug.value}`}
        key={product.slug.value}
      >
        <Paper className={classes.paper} key={product.slug.value}>
          <Typography variant="title">{product.name}</Typography>
        </Paper>
      </ButtonBase>
    ))}
  </div>
);

export default withStyles(styles)(ProductList);
