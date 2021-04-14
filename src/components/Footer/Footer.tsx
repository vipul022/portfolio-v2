import React from "react";
import SocialLink from "./SocialLink";
import { Container, Grid } from "@material-ui/core";
import { IoIosArrowDropup } from "react-icons/io";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

//  @ts-ignore
import Fade from "react-reveal/Fade";

export interface SocialLinksType {
  link: string;
  icon: JSX.Element;
}

const SocialLinksData: SocialLinksType[] = [
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
  const content = SocialLinksData.map((data: SocialLinksType, index) => (
    <Fade bottom distance={"2rem"} delay={900}>
      <Grid item className="footer__social-link">
        <SocialLink data={data} key={index} />
      </Grid>
    </Fade>
  ));
  return (
    <footer className="footer">
      <Container>
        <Grid container>
          {/* ! dummy gid container to adjust the layout */}
          <Grid container xs></Grid>

          <Grid container xs={10} direction="column" alignItems="center">
            <Fade bottom distance={"2rem"} delay={300}>
              <Grid item className="footer__back-to-top">
                {/* <IconContext.Provider value={{ color: "white" }}> */}
                <a href="#header">
                  <IoIosArrowDropup />
                </a>
                {/* </IconContext.Provider> */}
              </Grid>
            </Fade>
            <Fade delay={600}>
              <Grid item>
                <h1 className="footer__heading">Get In Touch</h1>
              </Grid>
            </Fade>

            <hr className="footer__divider"></hr>

            <Grid container direction="row" justify="center">
              {content}
            </Grid>
            <Grid item className="copyright">
              <p className="copyright__text"> © 2021 - Vipul Seth </p>
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
