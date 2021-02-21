import React from "react";
import { Container, Grid } from "@material-ui/core";

const AboutMe = () => {
  return (
    <section className="section-about">
      <Container maxWidth={"md"}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="u-center-text u-margin-bottom-big">
              <h1 id="about-me" className="heading-secondary">About Me</h1>
            </div>
            <p class="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sed
              animi quod! A obcaecati delectus ipsa excepturi asperiores
              exercitationem eos labore fugit sint! Nesciunt quam corporis
              debitis? Sint ipsam tenetur laudantium magnam. Tempora recusandae,
              ipsum a dolores error similique doloremque.
            </p>
            <p class="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sed
              animi quod! A obcaecati delectus ipsa excepturi asperiores
              exercitationem eos labore fugit sint! Nesciunt quam corporis
              debitis? Sint ipsam tenetur laudantium magnam. Tempora recusandae,
              ipsum a dolores error similique doloremque.
            </p>
            <p class="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sed
              animi quod! A obcaecati delectus ipsa excepturi asperiores
              exercitationem eos labore fugit sint! Nesciunt quam corporis
              debitis? Sint ipsam tenetur laudantium magnam. Tempora recusandae,
              ipsum a dolores error similique doloremque.
            </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutMe;
