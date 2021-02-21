import React from "react";
import { Container } from "@material-ui/core";
import { Fade } from "react-reveal";

const Header = () => {
  return (
    <header className="header">
      <Container className="header__text-box">
        {/* <Fade delay={1000}> */}
        {/* <> */}
        <h1 className="heading-primary">
          <span className="heading-primary--main">VIPUL SETH</span>
          {/* Hi, my name is Vipul */}
          <span className="heading-primary--sub">
            full stack developer based in Melbourne
          </span>
        </h1>
        <a href="#about-me" className="btn btn--white">
          know more
        </a>
        {/* </> */}
        {/* </Fade> */}
      </Container>
    </header>
  );
};

export default Header;
