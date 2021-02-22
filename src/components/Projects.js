import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Fade } from "react-reveal";
import portfolioImage from "../images/portfolio-v2.png";
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div className="item new ">
                <h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam nemo qui soluta sunt rerum quidem beatae
                  praesentium odio vero quam quasi voluptates laudantium eveniet
                  rem sint, molestiae voluptatibus possimus doloremque.
                </h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <div className="card">
                <div className="card__side"></div>
                <img
                  src={portfolioImage}
                  alt="portfolio"
                  className="card__img"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
