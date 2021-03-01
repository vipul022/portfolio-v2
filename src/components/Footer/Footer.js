import React from "react";
import { Container, Grid } from "@material-ui/core";

import { IoChevronUpSharp } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Grid container direction="column">
          <Grid itemProp className="footer__back-to-top">
            <IoChevronUpSharp />
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
            <Grid item className="footer__social-link">
              <FaLinkedin />
            </Grid>
            <Grid item>
              <FaGithub />
            </Grid>
            <Grid item>
              <IoMailOutline />
            </Grid>
            <Grid item>
              <FaPhone />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
