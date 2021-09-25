import React from "react";
import { Grid, Link, Paper, Typography, Button } from "@material-ui/core";
import { Selectedproduct } from "./Selectedproduct";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  first: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Singleproduct(props) {
  console.log(props);
  const { products } = props;

  const classes = useStyles();

  let ratingsystem = products.ratings;
  const percentage = Math.floor(100 - (products.price / products.del) * 100);

  if (products === null) {
    return <div></div>;
  }

  return (
    <div className={classes.first}>
      <Selectedproduct slidepics={products.slidepictures} />

      <div className={classes.first}>
        <Paper elevation={3} variant="outlined" square>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" component="h2">
                {products.name}
              </Typography>
              <Typography variant="h6" component="h2">
                {ratingsystem} Ratings
              </Typography>
              <Typography variant="h6" component="h2">
                Brand: No Brand | <Link>More this type from No Brand</Link>
              </Typography>
              <Typography variant="h4" component="h2">
                ৳ {products.price}
              </Typography>
              <Typography variant="h4" component="h2">
                <del>৳ {products.del}</del>
                &nbsp;-{percentage}%
              </Typography>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Buy Now
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Add to Cart
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
