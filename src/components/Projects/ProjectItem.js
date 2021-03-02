import React from "react";
import HeadingTertiary from "../Headings/HeadingTertiary";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";
import Icons from "./Icons";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Grid, Paper } from "@material-ui/core";
import { Fade } from "react-reveal";

const ProjectItem = ({ project }) => {
  const {
    image,
    imageAlt,
    name,
    description,
    icons,
    github,
    deployed,
    currentWebsite,
  } = project;
  return (
    <Grid container spacing={4} className="u-margin-bottom-big">
      <Grid item xs={12} md={7} sm={12}>
        <ProjectImage ImageSrc={image} ImageAlt={imageAlt} />
      </Grid>

      <Grid item xs={12} md={5} sm={12}>
        <Fade right distance={"4rem"} delay={1000}>
          <Paper elevation={3} className="card-project-info">
            <HeadingTertiary heading={name} />
            <ProjectDescription
              description={description}
              currentWebsite={currentWebsite}
            />
            <Icons iconList={icons} />
            {/* <ArrowRightAltIcon /> */}
            <Grid container={true} spacing={2} justify="flex-start">
              <Grid item={true}>
                <a href={deployed} target="_blank" className="btn-text">
                  GO LIVE
                </a>
              </Grid>
              <Grid item={true}>
                <a href={github} target="_blank" className="btn-text">
                  SOURCE CODE
                </a>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default ProjectItem;
