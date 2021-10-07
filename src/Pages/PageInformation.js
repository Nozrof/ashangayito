import { Typography, Container, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Typo: {
    padding: theme.spacing(2),
    textAlign: "justify",
    marginBottom: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(2),
  },
  titlepad: {
    marginTop: theme.spacing(7),
  }
}));

export default function PageInformation() {
  const styles = useStyles();
  return (
    <div className={styles.titlepad}>
      <Container>
        <div className={styles.title}>
          <Typography variant="h2" component="p">
            Page Information
          </Typography>
        </div>
        <Paper className={styles.Typo}>
          <Typography variant="h4" component="p" className={styles.title}>
            History of Ashongayito
          </Typography>
          <Typography variant="h6" component="p" className={styles.Typo}>
            Alhamdulillah, today we can come up to this. If we share the
            previous words, then we will say that we started with 10 friends
            together,We thought a lot about naming our business then we decide
            it will be "8 bit Gift shop", but not everyone agrees. Still we
            unable to find a name, After searching finally we put a nameless
            word "Ashongayito". On that time and still now we had no sponsors,
            and only we had the remaining of pocket money in our own month on
            that time. Then we donated whatever we could and together we made
            the first shipment of hundreds of hardships in 21 November 2019. We
            sold a lot of things in our university, and all of us prayed and
            praised, Alhamdulillah we sell everything and then bring 2nd
            shipment. We sold 50% part at 2nd shipment. Suddenly some friends
            take leave from our business for financial problem. Everyone lost
            patience and continued to go out, but{" "}
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "orange" }}
            >
              we three friends
            </Link>
            can say that the three roommate, we tried to run it slow
            progressively.And we take 3rd,4th and 5th shipment and Inshaa Allah
            it will keep up. Alhamdulillah We earn a lot through Facebook online
            on this pendamic Situation. We want to do a perfect website now,
            Inshaa Allah we three as a Computer Science Engineer, we will create
            a big online business.If we keep it up, we can go far away Inshaa
            Allah.
            <br />
            <br />
          </Typography>
          <Typography variant="h4" component="p" className={styles.title}>
            About Ashongayito Product
          </Typography>
          <Typography variant="h6" component="p" className={styles.Typo}>
            Inside the gift item ("Valentine's Gift" , "Anniversary Gift") we
            have kept more for gifts.Also we have some gift products for
            childrens.
            <br />
          </Typography>
          <Typography variant="h6" component="p" className={styles.Typo}>
            We import all of our products from China, India and Japan, and we
            never connect to our online business unless all of our products are
            advanced.We can give 100% guarantee that our products are of high
            quality. Anyone who gets their hands on it will understand how much
            value is accomplished. To date, we have not received negative
            reviews on any product.
            <br />
            <br />
          </Typography>
          <Typography variant="h4" component="p" className={styles.title}>
            Future of Ashongayito Product
          </Typography>
          <Typography variant="h6" component="p" className={styles.Typo}>
            We are mainly dealing with more gift items, but in the future we
            want to do business with all product items like daraz,evaly.
            <br />
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}
