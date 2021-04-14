import React from "react";
import { Container } from "@material-ui/core";

const Header = (): JSX.Element => {
  return (
    <header id="header" className="header">
      <Container className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">VIPUL SETH</span>
          <span className="heading-primary--sub">
            full stack developer based in Melbourne
          </span>
        </h1>
        <a href="#about-me" className="btn btn--white">
          about me
        </a>
      </Container>
    </header>
  );
};

export default Header;
