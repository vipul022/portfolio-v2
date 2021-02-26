import React from "react";
import HeadingTertiary from "../Headings/HeadingTertiary";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";
import Icons from "./Icons";

import { Grid, Paper } from "@material-ui/core";
import { Fade } from "react-reveal";

const ProjectItem = ({ project }) => {
  const { image, imageAlt, name, description, icons } = project;
  return (
    <Grid container spacing={4} className="u-margin-bottom-big">
      <Grid item xs={12} md={7} sm={12}>
        <ProjectImage ImageSrc={image} ImageAlt={imageAlt} />
      </Grid>

      <Grid item xs={12} md={5} sm={12}>
        <Fade right distance={"4rem"} delay={1000}>
          <Paper elevation={3} className="card-project-info">
            <HeadingTertiary heading={name} />
            <ProjectDescription description={description} />
            <Icons iconList={icons} />
          </Paper>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default ProjectItem;
