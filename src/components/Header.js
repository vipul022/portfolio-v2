import React from "react";
import { Container } from "@material-ui/core";

const Header = () => {
  return (
    <header className="header">
      <Container className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">VIPUL SETH</span>
          {/* Hi, my name is Vipul */}
          <span className="heading-primary--sub">
            full stack developer based in Melbourne
          </span>
        </h1>
        <a href="#" className="btn btn--white">
          know more
        </a>
      </Container>
    </header>
  );
};

export default Header;
