import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Paper} from "@material-ui/core";
import { Link } from "react-router-dom";


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

export default function Privacy() {
  const styles = useStyles();
  return (
    <div className={styles.titlepad}>
      <Container>
        <div className={styles.title}>
          <Typography className={styles.title} variant="h2" component="p">
            About Our Privacy
          </Typography>
          <Paper className={styles.paper}>
            <Typography variant="h6" component="p">
              Welcome to the Ashongayito.com.bd website operated by&nbsp;
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "orange" }}
              >
                We Ashongayito Bangladesh
              </Link>
              . We respect your privacy and want to protect your personal
              information. To learn more, please read this Privacy Policy.
              <br />
              <br />
            </Typography>
            <Typography variant="h6" component="p">
              This Privacy Policy explains how we collect, use and (under
              certain conditions) disclose your personal information. This
              Privacy Policy also explains the steps we have taken to secure
              your personal information. Finally, this Privacy Policy explains
              your options regarding the collection, use and disclosure of your
              personal information. By visiting the Site directly or through
              another site, you accept the practices described in this Policy.
              <br />
              <br />
            </Typography>
            <Typography variant="h6" component="p">
              We will only collect information where it is necessary for us to
              do so and we will only collect information if it is relevant to
              our dealings with you.We will only keep your information for as
              long as we are either required to by law or as is relevant for the
              purposes for which it was collected.You can visit the Site and
              browse without having to provide personal details. During your
              visit to the Site you remain anonymous and at no time can we
              identify you unless you have an account on the Site and log on
              with your user name and password.
              <br />
              <br />
            </Typography>
            <Typography className={styles.title} variant="h3" component="p">
              About Data collect
            </Typography>
            <Typography variant="h6" component="p">
              We collect, store and process your data for processing your
              purchase on the Site and any possible later claims, and to provide
              you with our services. We may collect personal information
              including, but not limited to, your title, name, gender, date of
              birth, email address, postal address,Bkash account,Nagode
              account,delivery address (if you changed), telephone number,
              mobile number,payment details.
              <br />
              <br />
            </Typography>
            <Typography className={styles.title} variant="h3" component="p">
              Third Parties Link
            </Typography>
            <Typography variant="h6" component="p">
              We may pass your details to other companies in our group. We may
              also pass your details to our agents and subcontractors to help us
              with any of our uses of your data set out in our Privacy Policy.
              For example, we may use third parties to assist us with delivering
              products to you, to help us to collect payments from you, to
              analyze data and to provide us with marketing or customer service
              assistance.
              <br />
              <br />
            </Typography>
            <Typography variant="h6" component="p">
              We may exchange information with third parties for the purposes of
              fraud protection and credit risk reduction. We may transfer our
              databases containing your personal information if we sell our
              business or part of it. Other than as set out in this Privacy
              Policy, we shall NOT sell or disclose your personal data to third
              parties without obtaining your prior consent unless this is
              necessary for the purposes set out in this Privacy Policy or
              unless we are required to do so by law. The Site may contain
              advertising of third parties and links to other sites or frames of
              other sites. Please be aware that we are not responsible for the
              privacy practices or content of those third parties or other
              sites, nor for any third party to whom we transfer your data in
              accordance with our Privacy Policy.
              <br />
              <br />
            </Typography>
            <Typography className={styles.title} variant="h3" component="p">
              Cookies
            </Typography>
            <Typography variant="h6" component="p">
              The acceptance of cookies is not a requirement for visiting the
              Site. However we would like to point out that the use of the
              'basket' functionality on the Site and ordering is only possible
              with the activation of cookies. Cookies are tiny text files which
              identify your computer to our server as a unique user when you
              visit certain pages on the Site and they are stored by your
              Internet browser on your computer's hard drive. Cookies can be
              used to recognize your Internet Protocol address, saving you time
              while you are on, or want to enter, the Site. We only use cookies
              for your convenience in using the Site (for example to remember
              who you are when you want to amend your shopping cart without
              having to re-enter your email address) and not for obtaining or
              using any other information about you (for example targeted
              advertising). Your browser can be set to not accept cookies, but
              this would restrict your use of the Site. Please accept our
              assurance that our use of cookies does not contain any personal or
              private details and are free from viruses. If you want to find out
              more information about cookies, go to
              http://www.allaboutcookies.org or to find out about removing them
              from your browser, go to
              http://www.allaboutcookies.org/manage-cookies/index.html.
              <br />
              <br />
            </Typography>
            <Typography className={styles.title} variant="h3" component="p">
              Security
            </Typography>
            <Typography variant="h6" component="p">
              We have in place appropriate technical and security measures to
              prevent unauthorized or unlawful access to or accidental loss of
              or destruction or damage to your information. When we collect data
              through the Site, we collect your personal details on a secure
              server. We use firewalls on our servers. Our security procedures
              mean that we may occasionally request proof of identity before we
              disclose personal information to you. You are responsible for
              protecting against unauthorized access to your password and to
              your computer.
              <br />
              <br />
            </Typography>
            <Typography className={styles.title} variant="h3" component="p">
              Your Permission
            </Typography>
            <Typography variant="h6" component="p">
              At any stage you also have the right to ask us to stop using your
              personal data for direct marketing purposes.
              <br />
              <br />
            </Typography>
          </Paper>
        </div>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}
