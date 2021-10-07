import { Typography, Container, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    marginBottom: theme.spacing(2),
  },
  data: {
    marginLeft: theme.spacing(0),
  },
  titlepad: {
    marginTop: theme.spacing(7),
  }
}));

export default function Security() {
  const styles = useStyles();
  return (
    <div className={styles.titlepad}>
      <Container>
        <Typography variant="h2" component="p" className={styles.title}>
          System Of Process
        </Typography>
        <Paper className={styles.paper}>
          <Typography variant="h6" component="p">
            We may use your personal information for opinion and market
            research. Your details are anonymous and will only be used for
            statistical purposes. You can choose to opt out of this at any time.
            Any answers to surveys or opinion polls we may ask you to complete
            will not be forwarded on to third parties. Disclosing your email
            address is only necessary if you would like to take part in
            competitions. We save the answers to our surveys separately from
            your email address.
            <br />
            <br />
          </Typography>
          <Typography variant="h6" component="p">
            We may also send you other information about us, the Site, our other
            websites, our products or anything.If your instruction is unclear we
            will contact you for clarification.
            <br />
            <br />
          </Typography>
          <Typography variant="h6" component="p">
            We may further anonymize data about users of the Site generally and
            use it for various purposes, including ascertaining the general
            location of the users and usage of certain aspects of the Site or a
            link contained in an email to those registered to receive them, and
            supplying that anonymized data to third parties such as publishers.
            However, that anonymized data will not be capable of identifying you
            personally.
            <br />
            <br />
          </Typography>
          <Typography variant="h3" component="p" className={styles.title}>
            Our Security System
          </Typography>
          <Typography variant="h6" component="p">
            We have in place appropriate technical and security measures to
            prevent unauthorized or unlawful access to or accidental loss of or
            destruction or damage to your information. When we collect data
            through the Site, we collect your personal details on a secure
            server. We use firewalls on our servers. Our security procedures
            mean that we may occasionally request proof of identity before we
            disclose personal information to you. You are responsible for
            protecting against unauthorized access to your password and to your
            computer.
            <br />
            <br />
          </Typography>
        </Paper>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}
