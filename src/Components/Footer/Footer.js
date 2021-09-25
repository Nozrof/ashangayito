import { Box, Container, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";


const usestyles = makeStyles((theme) => ({
  footer: {
    background: "linear-gradient(to right bottom, #430089, #82ffa1)",
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
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxwidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Support
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
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
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Massages
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
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
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About Us
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Page Information
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
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
      </Box>
    </footer>
  );
}
