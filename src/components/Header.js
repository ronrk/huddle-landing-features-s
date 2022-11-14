import React from "react";
import logo from "../assets/images/logo.svg";
import mockups from "../assets/images/illustration-mockups.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={logo} alt="huddle logo" className="logo" />
        <button className="header__btn">Try It Free</button>
      </nav>
      <div className="header__content">
        <div className="header__content-content">
          <h1 className="header__content-title">
            Build The Community Your Fans Will Love
          </h1>
          <p className="header__content-text">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="header__content-btn">Get Started For Free</button>
        </div>
        <img className="header__photo" src={mockups} alt="" />
      </div>
    </header>
  );
};

export default Header;
