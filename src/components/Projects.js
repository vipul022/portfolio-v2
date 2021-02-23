import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { Fade } from "react-reveal";
import portfolioImage from "../images/portfolio-v2.png";
import potteryClubImage from "../images/sotrpc.png";
import expressChatImage from "../images/express-chat.png";
import farmerSmartImage from "../images/farmer-smart.png";
import weatherAppImage from "../images/weather-app.png";
import portfolioImageV1 from "../images/portfolio-v1.png";
import HeadingSecondary from "./HeadingSecondary";
import HeadingTertiary from "./HeadingTertiary";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";

const Projects = () => {
  return (
    <section className="section-projects">
      <Container>
        <HeadingSecondary>projects</HeadingSecondary>
        <div className="u-padding">
          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} md={7} sm={12}>
              <ProjectImage
                ImageSrc={portfolioImage}
                ImageAlt="Portfolio version-2 website"
              />
            </Grid>
            <Grid item xs={12} md={5} sm={12}>
              <Fade right distance={"4rem"} delay={1000}>
                <Paper elevation={3} className="card-project-info">
                  <HeadingTertiary>Portfolio Version-2</HeadingTertiary>
                  <ProjectDescription>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia, ipsam praesentium facilis atque, voluptate, eius
                    repellendus soluta iure corrupti veniam delectus! Soluta,
                    repellendus soluta iure corrupti veniam delectus! Soluta,
                    repellendus soluta iure corrupti veniam delectus! Soluta,
                  </ProjectDescription>

                  <Grid container spacing={6}>
                    <Grid item xs={4} className="icon">
                      <i class="devicon-react-original-wordmark colored"></i>
                    </Grid>
                    <Grid item xs={4} className="icon">
                      <i class="devicon-sass-original colored"></i>
                    </Grid>
                    <Grid item xs={4} className="icon">
                      <i class="devicon-materialui-plain colored"></i>
                    </Grid>
                  </Grid>
                </Paper>
              </Fade>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} md={7} sm={12}>
              <ProjectImage
                ImageSrc={potteryClubImage}
                ImageAlt="South of the Rivers Potters Club website"
              />
            </Grid>

            <Grid item xs={12} md={5} sm={12}>
              <Fade
                right
                distance={"4rem"}
                delay={1000}
                className="card-project-image"
              >
                <Paper elevation={3} className="card-project-info">
                  <HeadingTertiary>MERN Stack App</HeadingTertiary>
                  <ProjectDescription>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia,
                  </ProjectDescription>

                  <Grid container spacing={6}>
                    <Grid item xs={4} className="icon">
                      <i class="devicon-mongodb-plain-wordmark colored"></i>
                    </Grid>
                    <Grid item item xs={4} className="icon">
                      <i class="devicon-express-original colored"></i>
                    </Grid>
                    <Grid item xs={4} className="icon">
                      <i class="devicon-react-original-wordmark colored"></i>
                    </Grid>
                  </Grid>

                  <Grid container spacing={6}>
                    <Grid item xs={4} className="icon">
                      <i class="devicon-nodejs-plain-wordmark colored"></i>
                    </Grid>
                    <Grid item xs={4} className="icon">
                      <i class="devicon-amazonwebservices-plain-wordmark colored"></i>
                    </Grid>
                    <Grid item xs={4} className="icon">
                      <i class="devicon-sass-original colored"></i>
                    </Grid>
                  </Grid>
                </Paper>
              </Fade>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} md={7} sm={12}>
              <ProjectImage
                ImageSrc={expressChatImage}
                ImageAlt="Express Chat ap"
              />
            </Grid>
            <Grid item xs={12} md={5} sm={12}>
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
            <Grid item item xs={12} md={7} sm={12}>
              <ProjectImage ImageSrc={weatherAppImage} ImageAlt="Weather app" />
            </Grid>

            <Grid item item xs={12} md={5} sm={12}>
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
            <Grid item item xs={12} md={7} sm={12}>
              <ProjectImage
                ImageSrc={farmerSmartImage}
                ImageAlt="FarmerSmart website"
              />
            </Grid>
            <Grid item item xs={12} md={5} sm={12}>
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
            <Grid item item xs={12} md={7} sm={12}>
              <ProjectImage
                ImageSrc={portfolioImageV1}
                ImageAlt="Portfolio version-1 website"
              />
            </Grid>

            <Grid item item xs={12} md={5} sm={12}>
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
