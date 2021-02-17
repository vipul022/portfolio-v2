import React from "react";

const Header = () => {
  return (
    <header class="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Hi, my name is Vipul</span>
          <span className="heading-primary--sub">
            full stack developer based in melbourne
          </span>
        </h1>
        <a href="#" className="btn btn--white">About me</a>
      </div>
    </header>
  );
};

export default Header;
