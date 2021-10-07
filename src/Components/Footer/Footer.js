import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";


const usestyles = makeStyles((theme) => ({
  footer: {
    background: "linear-gradient(to right bottom, #430089, #82ffa1)",
    color: 'white',
    padding: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3,5),
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function Footer() {
  const styles = usestyles();
  return (
    <footer className={styles.footer}>
      
        <Container maxwidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact
                </Link>
              </Box>
              <Box>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Support
                </Link>
              </Box>
              <Box>
                <Link
                  to="/privacy"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Privacy & Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              </Box>
              <Box>
                <Link
                  to="/massages"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Massages
                </Link>
              </Box>
              <Box>
                <Link
                  to="/security"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Security
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Information</Box>
              <Box>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About Us
                </Link>
              </Box>
              <Box>
                <Link
                  to="/info"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Page Information
                </Link>
              </Box>
              <Box>
                <Link
                  to="/events"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Events
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            {" "}
            AshongayitoShop @{new Date().getFullYear()}
          </Box>
        </Container>
     
    </footer>
  );
}
