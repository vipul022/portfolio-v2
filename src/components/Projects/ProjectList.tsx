import React from "react";
import ProjectData from "../../data/projectData.json";
import ProjectItem from "./ProjectItem";
import HeadingSecondary from "../Headings/HeadingSecondary";

import { Container } from "@material-ui/core";

export interface Project {
  name: string;
  description: string;
  icons: string[];
  github: string;
  deployed: string;
  image: string;
  imageAlt: string;
  currentWebsite: string;
}

// ! iterate through the project list and pass each project as prop to ProjectItem
const ProjectList = (): JSX.Element => {
  const content: JSX.Element[] = ProjectData.map((p: Project, index) => (
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
