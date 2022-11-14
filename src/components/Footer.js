import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as IconPhone } from "../assets/images/icon-phone.svg";
import { ReactComponent as IconLocation } from "../assets/images/icon-location.svg";
import { ReactComponent as IconEmail } from "../assets/images/icon-email.svg";
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__header">
        <Logo fill="white" />
      </div>
      <div className="footer__lists">
        <ul className="details-list">
          <li>
            <IconLocation />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
          </li>
          <li>
            <IconPhone />
            <span>+1-543-123-4567</span>
          </li>
          <li>
            <IconEmail />
            <span>example@huddle.com</span>
          </li>
        </ul>
        <ul className="nav-list">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">What We Do</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <ul className="nav-list">
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul className="social-list">
          <li>
            <a href="#">
              <CiFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <CiTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <CiInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
