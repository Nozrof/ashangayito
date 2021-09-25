import { Typography, Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Typo: {
    textAlign: "center",
  },
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

export default function Events() {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.div}>
        <Container>
          <Typography variant="h2" component="p" className={styles.Typo}>
            No upcoming Events is available for right now....
          </Typography>
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
