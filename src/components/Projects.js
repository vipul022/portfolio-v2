import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Fade } from "react-reveal";
const Projects = () => {
  return (
    <section className="section-projects">
      <Container>
        <Fade big delay={300}>
          <div className="u-center-text u-margin-bottom-big">
            <h1 className="heading-secondary">Projects</h1>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Projects;
