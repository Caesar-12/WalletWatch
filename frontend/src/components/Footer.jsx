import "../css/Footer.css";
import React from "react";
import { links } from "../data/links";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer__container">
      <hr className="footer__line" />
      <div className="footer__inner-container">
        <div className="footer__non-socials-container">
          <div className="footer__logo-container">
            <h1 className="footer__logo">
              <a className="footer__logo-link" href="/">
                WalletWatch
              </a>
            </h1>
            <p>Yes, it's an expense tracker.</p>
          </div>
          <div className="footer__links-container">
            {links.map(([url, text]) => (
              <a href={url} key={url} className="footer__link">
                {text}
              </a>
            ))}
          </div>
        </div>
        <div className="footer__socials-container">
          <a href="https://instagram.com" className="footer__social-link">
            <FaInstagram className="footer__social-icon" />
            Instagram
          </a>
          <a href="https://github.com" className="footer__social-link">
            <FaGithub className="footer__social-icon" />
            Github
          </a>
          <a href="https://twitter.com" className="footer__social-link">
            <FaTwitter className="footer__social-icon" />
            Twitter
          </a>
        </div>
      </div>
      <p className="footer_copyright">&copy; ALX</p>
    </div>
  );
}
