import React from "react";
import  HeadingTertiary  from "../Headings/HeadingTertiary";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";

import { Container, Grid, Paper } from "@material-ui/core";
import { Fade } from "react-reveal";

const ProjectItem = ({ project }) => {
  return (
    <Grid container spacing={6} className="u-margin-bottom-big">
      <Grid item xs={12} md={7} sm={12}>
        <ProjectImage ImageSrc={project.image} ImageAlt={project.imageAlt} />
      </Grid>

      <Grid item xs={12} md={5} sm={12}>
        <Fade right distance={"4rem"} delay={1000}>
          <Paper elevation={3} className="card-project-info">
            <HeadingTertiary>{project.name}</HeadingTertiary>
            <ProjectDescription>{project.description}</ProjectDescription>

            {/* <Grid container={true} justify={"space-evenly"} spacing={2}>
              <Grid item={true} className="icon">
                <i class="devicon-react-original-wordmark colored"></i>
              </Grid>
              <Grid item={true} className="icon">
                <i class="devicon-sass-original colored"></i>
              </Grid>
              <Grid item={true} className="icon">
                <i class="devicon-materialui-plain colored"></i>
              </Grid>
            </Grid> */}
          </Paper>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default ProjectItem;
