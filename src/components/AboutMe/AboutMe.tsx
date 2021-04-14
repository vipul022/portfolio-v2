import React from "react";
import { Container, Grid } from "@material-ui/core";
//  @ts-ignore
import { Fade } from "react-reveal";

import  HeadingSecondary  from "../Headings/HeadingSecondary";

const AboutMe = (): JSX.Element => {
  return (
    <section className="section-about">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeadingSecondary>About me</HeadingSecondary>

            <Fade bottom distance={"4rem"} delay={600}>
              <div className="u-padding">
                <p className="text-primary">
                  I am a recent graduate from Coder Academy, Melbourne. The
                  course is focused on most in-demand tech stacks like Rails and
                  MERN. I am an enthusiastic and self-starting software
                  developer with a strong background in business.
                </p>
                <p className="text-primary">
                  In the year 2019, I got my knee injured while playing cricket
                  and due to that I could not work for four months. I always had
                  a desire to make my career in IT, so I utilized that time very
                  well in doing some research and started doing self-study. I
                  obtained ISTQB certification for software testing during that
                  period. I continued studying HTML, CSS, and JavaScript from
                  various online resources. Later, I took a step forward and
                  enrolled in this course to learn more about Software
                  development.
                </p>
                <p className="text-primary">
                  I like treating challenges as opportunities and failures as
                  lessons. I am passionate about Software development and enjoy
                  working on personal projects. In my leisure, I enjoy watching
                  tech videos, doing frontend-related online courses and playing
                  cricket. I thrive on learning new things.
                </p>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutMe;
