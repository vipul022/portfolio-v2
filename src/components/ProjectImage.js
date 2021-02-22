import React from "react";
import { Fade } from "react-reveal";

const ProjectImage = ({ ImageSrc, ImageAlt }) => {
  return (
    <Fade left distance={"4rem"} delay={500}>
      <div className="card">
        <img src={ImageSrc} alt={ImageAlt} className="card__img" />
      </div>
    </Fade>
  );
};

export default ProjectImage;
