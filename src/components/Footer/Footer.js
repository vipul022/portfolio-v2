import React from "react";
import { Container, Grid } from "@material-ui/core";

import { IoChevronUpSharp } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Grid container>
          <Grid container xs></Grid>

          <Grid container xs={8} direction={"column"} alignItems={"center"}>
            <Grid item className="footer__back-to-top">
              <IoChevronUpSharp />
            </Grid>
            <Grid item>
              <h1 className="footer__heading">REACH OUT</h1>
            </Grid>

            <hr class="footer__divider"></hr>

            <Grid
              container
              direction="row"
              justify="center"
              className="footer__social-links"
            >
              <Grid item className="footer__social-link">
                <a
                  href="https://www.linkedin.com/in/vipul-seth-a06730184/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </Grid>
              <Grid item className="footer__social-link">
                <a href="https://github.com/vipul022" target="_blank">
                  <FaGithub />
                </a>
              </Grid>

              <Grid item className="footer__social-link">
                <a href="mailto: vipul.seth022@gmail.com">
                  <IoMailOutline />
                </a>
              </Grid>
              <Grid item className="footer__social-link">
                <a href="tel: +61473837804">
                  <FaPhone />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs></Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
