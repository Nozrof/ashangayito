import React from "react";
import AllItems from "./AllItems/AllItems";
import { makeStyles } from "@material-ui/core/styles";
import Offer from "./Offer";
import { Typography, Container } from "@material-ui/core";
import SpecialItems from "./SpecialItems/SpecialItems";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Privacy from "../../Pages/Privacy";
import Events from "../../Pages/Events";
import Security from "../../Pages/Security";
import PageInformation from "../../Pages/PageInformation";
import { Redirect,Route,Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  measured: {
    width: "100%",
    background: "#fff",
  },
  allitems: {
    marginTop: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(2),
  },
}));

export default function Middleproperty() {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.measured}>
        <Offer />
      </div>

      <Container>
        <Typography className={styles.title} variant="h4" component="h1">
          Special Items
        </Typography>
        <SpecialItems />
      </Container>
      <Container className={styles.allitems}>
        <Typography className={styles.title} variant="h4" component="h1">
          Ashongayito Store
        </Typography>
        <AllItems />
        <Typography className={styles.title} variant="h4" component="h1">
          Reviews
        </Typography>
      </Container>
      <div>
        <AboutUs />
      </div>
      <div>
        <Privacy />
      </div>
      <div>
        <Events />
      </div>
      <div>
        <Security />
      </div>
      <div>
        <PageInformation />
      </div>
    </div>
  );
}
