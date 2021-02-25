import React from "react";
import ProjectData from "../../data/projectData.json";
import ProjectItem from "./ProjectItem";
import HeadingSecondary from "../Headings/HeadingSecondary";

import { Container } from "@material-ui/core";

// ! iterate through the project list and pass each project as prop to ProjectItem
const ProjectList = () => {
  console.log("ProjectData=>", ProjectData);
  const content = ProjectData.map((p, index) => (
    <ProjectItem key={index} project={p} />
  ));

  return (
    <section className="section-projects">
      <Container>
        <HeadingSecondary>projects</HeadingSecondary>
        <div className="u-padding">{content}</div>
      </Container>
    </section>
  );
};

export default ProjectList;
