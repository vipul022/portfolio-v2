import React from "react";
//  @ts-ignore
import { Fade } from "react-reveal";

const HeadingSecondary = ({ children }: { children: String }): JSX.Element => {
  return (
    <Fade top distance={"4rem"} delay={300}>
      <div className="u-center-text u-margin-bottom-big">
        <h1 id="about-me" className="heading-secondary">
          {children}
        </h1>
      </div>
    </Fade>
  );
};

export default HeadingSecondary;
