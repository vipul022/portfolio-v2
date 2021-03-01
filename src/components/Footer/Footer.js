import React from "react";
import { Container, Grid } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Grid container direction="column">
          <Grid itemProp className="footer__up-arrow">
            <KeyboardArrowUpIcon />
          </Grid>
          <Grid item>
            <h1 className="footer__heading">REACH OUT</h1>
          </Grid>

          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="footer__social-links"
          >
            <Grid item>
              <LinkedInIcon />
            </Grid>
            <Grid item>
              <GitHubIcon />
            </Grid>
            <Grid item>
              <EmailIcon />
            </Grid>
            <Grid item>
              <PhoneIcon />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
