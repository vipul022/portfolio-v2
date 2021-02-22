import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Fade } from "react-reveal";
import portfolioImage from "../images/portfolio-v2.png";
import potteryClubImage from "../images/sotrpc.png";
import expressChatImage from "../images/express-chat.png";
import farmerSmartImage from "../images/farmer-smart.png";
import weatherAppImage from "../images/weather-app.png";
import portfolioImageV1 from "../images/portfolio-v1.png";
const Projects = () => {
  return (
    <section className="section-projects">
      <Container>
        <Fade big delay={300}>
          <div className="u-center-text u-margin-bottom-big">
            <h1 className="heading-secondary">Projects</h1>
          </div>
        </Fade>
        <div className="u-padding">
          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <div className="card">
                <div className="card__side"></div>
                <img
                  src={portfolioImage}
                  alt="Image of  portfolio version-2 website"
                  className="card__img"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam nemo qui soluta sunt rerum quidem beatae praesentium
                odio vero quam quasi voluptates laudantium eveniet rem sint,
                molestiae voluptatibus possimus doloremque.
              </h1>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <div className="card">
                <div className="card__side"></div>
                <img
                  src={potteryClubImage}
                  // src="../images/portfolio-v2.png"
                  alt="Image of South of the Rivers Potters Club website"
                  className="card__img"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam nemo qui soluta sunt rerum quidem beatae praesentium
                odio vero quam quasi voluptates laudantium eveniet rem sint,
                molestiae voluptatibus possimus doloremque.
              </h1>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <div className="card">
                <div className="card__side"></div>
                <img
                  src={expressChatImage}
                  alt="Image of Express Chat app"
                  className="card__img"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam nemo qui soluta sunt rerum quidem beatae praesentium
                odio vero quam quasi voluptates laudantium eveniet rem sint,
                molestiae voluptatibus possimus doloremque.
              </h1>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <div className="card">
                <div className="card__side"></div>
                <img
                  src={weatherAppImage}
                  alt="Image of weather app"
                  className="card__img"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam nemo qui soluta sunt rerum quidem beatae praesentium
                odio vero quam quasi voluptates laudantium eveniet rem sint,
                molestiae voluptatibus possimus doloremque.
              </h1>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <div className="card">
                <div className="card__side"></div>
                <img
                  src={farmerSmartImage}
                  alt="Image of FarmerSmart website"
                  className="card__img"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam nemo qui soluta sunt rerum quidem beatae praesentium
                odio vero quam quasi voluptates laudantium eveniet rem sint,
                molestiae voluptatibus possimus doloremque.
              </h1>
            </Grid>
          </Grid>

          <Grid container spacing={6} className="u-margin-bottom-big">
            <Grid item xs={12} sm={8}>
              <div className="card">
                <div className="card__side"></div>
                <img
                  src={portfolioImageV1}
                  alt="Image of portfolio version-1 website"
                  className="card__img"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam nemo qui soluta sunt rerum quidem beatae praesentium
                odio vero quam quasi voluptates laudantium eveniet rem sint,
                molestiae voluptatibus possimus doloremque.
              </h1>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
