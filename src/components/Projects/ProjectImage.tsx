import React from "react";
//  @ts-ignore
import { Fade } from "react-reveal";
import { Paper } from "@material-ui/core";

const ProjectImage = ({ ImageSrc, ImageAlt }:{ImageSrc: string, ImageAlt: string}) => {
  return (
    <Fade left distance={"4rem"} delay={500}>
      <Paper elevation={3} className="card" >
        <div className="card-project-image ">
          <img
            src={ImageSrc}
            alt={ImageAlt}
            className="card-project-image__img"
          />
        </div>
      </Paper>
    </Fade>
  );
};

export default ProjectImage;
