import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    height: "520px",
    textAlign: "center",
    transitionProperty: "all",
    transitionDuration: "300ms",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "10px 10px 10px rgba(149, 149, 149, 0.5)",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    width: "100%",
  },
  header: {
    height: "100px",
  },
  react: {
    marginTop: "10px",
  },
}));

export default function SpecialMainItems(props) {
  const { products, itemSelect } = props;

  const classes = useStyles();

  const [color, setcolor] = useState({
    bgColor: "",
    react: products.react,
  });

  const favbuttonclick = (e) => {
    setcolor({
      bgColor: "red",
      react: parseInt(products.react) + 1,
    });
  };
  const percentage = Math.floor(100 - (products.price / products.del) * 100);

  return (
    <Grid item xs={12} md={4} sm={6} xl={3}>
      <Card className={classes.root}>
       
          <CardHeader
            avatar={
              <Avatar>
                <img
                  alt="Ashangayito Logo"
                  className={classes.avatar}
                  src="images/cardLogo.png"
                />
              </Avatar>
            }
            title={products.name}
            onClick={itemSelect}
            className={classes.header}
          />
        
        
          <CardMedia
            className={classes.media}
            image={products.image}
            title={products.name}
            onClick={itemSelect}
          />
      
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <Typography>🎁৳{products.price}🎁</Typography>
            <del> ৳{products.del}</del>&nbsp;-{percentage}%
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Grid container>
            <Grid item xs={12} container>
              <Grid item xs={3}>
                <IconButton
                  aria-label="add to favorites"
                  style={{ backgroundColor: color.bgColor }}
                  onClick={favbuttonclick}
                >
                  <FavoriteIcon />
                </IconButton>
              </Grid>
              <Grid item xs={1} className={classes.react}>
                {color.react}
              </Grid>

              <Grid item xs={5}></Grid>
              <Grid item xs={3}>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
