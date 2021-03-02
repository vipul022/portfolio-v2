import React from "react";
import SocialLink from "./SocialLink";
import { Container, Grid } from "@material-ui/core";
import { IoChevronUpSharp } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const SocialLinksData = [
  {
    link: "https://www.linkedin.com/in/vipul-seth-a06730184/",
    icon: <FaLinkedin />,
  },
  {
    link: "https://github.com/vipul022",
    icon: <FaGithub />,
  },
  {
    link: "mailto: vipul.seth022@gmail.com",
    icon: <IoMailOutline />,
  },
  {
    link: "tel: +61473837804",
    icon: <FaPhone />,
  },
];
const Footer = () => {
  const content = SocialLinksData.map((s, index) => (
    <Grid item className="footer__social-link">
      <SocialLink data={s} key={index} />
    </Grid>
  ));
  return (
    <footer className="footer">
      <Container>
        <Grid container>
          {/* ! dummy gid container to adjust the layout */}
          <Grid container xs></Grid>

          <Grid container xs={10} direction="column" alignItems="center">
            <Grid item className="footer__back-to-top">
              <a href="#header" className="footer__back-to-top">
                <IoChevronUpSharp />
              </a>
            </Grid>
            <Grid item>
              <h1 className="footer__heading">REACH OUT</h1>
            </Grid>

            <hr class="footer__divider"></hr>

            <Grid container direction="row" justify="center">
              {content}
            </Grid>
            <Grid item className="copyright">
              <p className="copyright__text">Copyright © Vipul Seth 2021</p>
            </Grid>
          </Grid>
          {/* ! dummy gid container to adjust the layout */}
          <Grid container xs></Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
