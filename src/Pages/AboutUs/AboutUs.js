import { Grid, Container } from "@material-ui/core";
import React from "react";
import "./AboutUS.css";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: "center",
  },
  div: {
    background: "#09061d",
  },
}));

export default function AboutUs() {
  const styles = useStyles();

  return (
    <div>
      <div className={styles.div}>
        <Container>
          <Grid container spacing={5} className={styles.main}>
            <Grid item md={3} sm={3}></Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div class="box">
                <div class="box-img">
                  <img src="images/shahriar.jpg" />
                </div>
                <div class="content">
                  <h3>Nozrof Shahriar Shuvo</h3>
                  <p>
                    Job : Professional Web Developer & Game Environment Creator
                    <br />
                    From : Khulna
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/nozrofshahriar.shuvo.7"
                        target="_blank"
                      >
                        <img
                          src="images/facebook.jpg"
                          class="border"
                          rel="noreferrer"
                          target="_blank"
                          alt="fb"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/SNozrof" target="_blank">
                        <img
                          src="images/twitter.jpg"
                          class="border"
                          rel="noreferrer"
                          target="_blank"
                          alt="twitter"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/nozrof_shahriar/"
                        target="_blank"
                      >
                        <img
                          src="images/instagram.png"
                          class="border"
                          rel="noreferrer"
                          target="_blank"
                          alt="insta"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item md={3} sm={3}></Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6}>
              <div class="box">
                <div class="box-img">
                  <img src="images/shayak.jpg" />
                </div>
                <div class="content">
                  <h3>Anisuzzaman Shayak</h3>
                  <p>
                    Job : Professional Web Developer & Flutter Developer
                    <br />
                    From : Mymensingh
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/azshayak"
                        target="_blank"
                      >
                        <img
                          src="images/facebook.jpg"
                          class="border"
                          rel="noreferrer"
                          target="_blank"
                          alt="fb"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/AzShayak"
                        target="_blank"
                      >
                        <img
                          src="images/twitter.jpg"
                          class="border"
                          rel="noreferrer"
                          target="_blank"
                          alt="twitter"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/az_shayak/"
                        target="_blank"
                      >
                        <img
                          src="images/instagram.png"
                          class="border"
                          rel="noreferrer"
                          target="_blank"
                          alt="insta"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={6} className={styles.rightdiv}>
              <div class="box">
                <div class="box-img">
                  <img src="images/morshed.jpg" />
                </div>
                <div class="content">
                  <h3>Hossain Mohammad Morshed</h3>
                  <p>
                    Job : Professional BusinessMan
                    <br />
                    From : Brahmanbaria
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/hossainmohammadmorshed"
                        target="_blank"
                      >
                        <img
                          src="images/facebook.jpg"
                          class="border"
                          rel="noreferrer"
                          target="_blank"
                          alt="fb"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/Hossain03393088"
                        target="_blank"
                      >
                        <img
                          src="images/twitter.jpg"
                          class="border"
                          rel="noreferrer"
                          target="_blank"
                          alt="twitter"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/hossainmohammadmorshed/"
                        target="_blank"
                      >
                        <img
                          src="images/instagram.png"
                          class="border"
                          rel="noreferrer"
                          target="_blank"
                          alt="insta"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
