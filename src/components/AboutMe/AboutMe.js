import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Fade } from "react-reveal";
import HeadingSecondary from "../Headings/HeadingSecondary";

const AboutMe = () => {
  return (
    <section className="section-about">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeadingSecondary>About me</HeadingSecondary>

            <Fade bottom distance={"4rem"} delay={600}>
              <div className="u-padding">
                <p class="text-primary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  sed animi quod! A obcaecati delectus ipsa excepturi asperiores
                  exercitationem eos labore fugit sint! Nesciunt quam corporis
                  debitis? Sint ipsam tenetur laudantium magnam. Tempora
                  recusandae, ipsum a dolores error similique doloremque.
                </p>
                <p class="text-primary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  sed animi quod! A obcaecati delectus ipsa excepturi asperiores
                  exercitationem eos labore fugit sint! Nesciunt quam corporis
                  debitis? Sint ipsam tenetur laudantium magnam. Tempora
                  recusandae, ipsum a dolores error similique doloremque.
                </p>
                <p class="text-primary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  sed animi quod! A obcaecati delectus ipsa excepturi asperiores
                  exercitationem eos labore fugit sint! Nesciunt quam corporis
                  debitis? Sint ipsam tenetur laudantium magnam. Tempora
                  recusandae, ipsum a dolores error similique doloremque.
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
