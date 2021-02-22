import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Fade } from "react-reveal";
import portfolioImage from "../images/portfolio-v2.png";
import potteryClubImage from "../images/sotrpc.png";
import expressChatImage from "../images/express-chat.png";
import farmerSmartImage from "../images/farmer-smart.png";
import weatherAppImage from "../images/weather-app.png";
import portfolioImageV1 from "../images/portfolio-v1.png";
import HeadingSecondary from "./HeadingSecondary";
import ProjectImage from "./ProjectImage";

const Projects = () => {
  return (
    <section className="section-projects">
      <Container>
        <HeadingSecondary>About me</HeadingSecondary>
        <div className="u-padding">
          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <ProjectImage
                ImageSrc={portfolioImage}
                ImageAlt="Portfolio version-2 website"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Fade right distance={"4rem"} delay={1000}>
                <h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam nemo qui soluta sunt rerum quidem beatae
                  praesentium odio vero quam quasi voluptates laudantium eveniet
                  rem sint, molestiae voluptatibus possimus doloremque.
                </h1>
              </Fade>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <ProjectImage
                ImageSrc={potteryClubImage}
                ImageAlt="South of the Rivers Potters Club website"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Fade right distance={"4rem"} delay={1000}>
                <h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam nemo qui soluta sunt rerum quidem beatae
                  praesentium odio vero quam quasi voluptates laudantium eveniet
                  rem sint, molestiae voluptatibus possimus doloremque.
                </h1>
              </Fade>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <ProjectImage
                ImageSrc={expressChatImage}
                ImageAlt="Express Chat ap"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Fade right distance={"4rem"} delay={1000}>
                <h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam nemo qui soluta sunt rerum quidem beatae
                  praesentium odio vero quam quasi voluptates laudantium eveniet
                  rem sint, molestiae voluptatibus possimus doloremque.
                </h1>
              </Fade>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <ProjectImage ImageSrc={weatherAppImage} ImageAlt="Weather app" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Fade right distance={"4rem"} delay={1000}>
                <h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam nemo qui soluta sunt rerum quidem beatae
                  praesentium odio vero quam quasi voluptates laudantium eveniet
                  rem sint, molestiae voluptatibus possimus doloremque.
                </h1>
              </Fade>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <ProjectImage
                ImageSrc={farmerSmartImage}
                ImageAlt="FarmerSmart website"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Fade right distance={"4rem"} delay={1000}>
                <h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam nemo qui soluta sunt rerum quidem beatae
                  praesentium odio vero quam quasi voluptates laudantium eveniet
                  rem sint, molestiae voluptatibus possimus doloremque.
                </h1>
              </Fade>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <ProjectImage
                ImageSrc={portfolioImageV1}
                ImageAlt="Portfolio version-1 website"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Fade right distance={"4rem"} delay={1000}>
                <h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam nemo qui soluta sunt rerum quidem beatae
                  praesentium odio vero quam quasi voluptates laudantium eveniet
                  rem sint, molestiae voluptatibus possimus doloremque.
                </h1>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
