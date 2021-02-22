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

const Projects = () => {
  return (
    <section className="section-projects">
      <Container>
        <HeadingSecondary>About me</HeadingSecondary>
        <div className="u-padding">
          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <Fade left distance={"4rem"} delay={500}>
                <div className="card">
                  <div className="card__side"></div>
                  <img
                    src={portfolioImage}
                    alt="Portfolio version-2 website"
                    className="card__img"
                  />
                </div>
              </Fade>
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
              <Fade left distance={"4rem"} delay={500}>
                <div className="card">
                  <div className="card__side"></div>
                  <img
                    src={potteryClubImage}
                    // src="../images/portfolio-v2.png"
                    alt="South of the Rivers Potters Club website"
                    className="card__img"
                  />
                </div>
              </Fade>
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
              <Fade left distance={"4rem"} delay={500}>
                <div className="card">
                  <div className="card__side"></div>
                  <img
                    src={expressChatImage}
                    alt="Express Chat app"
                    className="card__img"
                  />
                </div>
              </Fade>
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
              <Fade left distance={"4rem"} delay={500}>
                <div className="card">
                  <div className="card__side"></div>
                  <img
                    src={weatherAppImage}
                    alt="Weather app"
                    className="card__img"
                  />
                </div>
              </Fade>
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
              <Fade left distance={"4rem"} delay={500}>
                <div className="card">
                  <div className="card__side"></div>
                  <img
                    src={farmerSmartImage}
                    alt="FarmerSmart website"
                    className="card__img"
                  />
                </div>
              </Fade>
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
              <Fade left distance={"4rem"} delay={500}>
                <div className="card">
                  <div className="card__side"></div>
                  <img
                    src={portfolioImageV1}
                    alt="Portfolio version-1 website"
                    className="card__img"
                  />
                </div>
              </Fade>
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
