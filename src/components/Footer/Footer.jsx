import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import WebsiteLogoBlue from "../Icons/WebsiteLogoBlue";
const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="explore-section">
        <h1 className="explore">Explore defiroot.io</h1>
        <div className="details">
          <p>what’s next</p>
          <p>ido</p>
          <p onClick={goToTop}>main</p>
          <a
            href="https://docs.defiroot.io"
            className="secondary"
            target="_blank"
            rel="noreferrer"
          >
            white paper
          </a>
        </div>
      </div>
      <div className="footer-content">
        <div className="website-logo">
          <Link to="/">
            <div>
              <WebsiteLogoBlue />
              <h1 className="website-name">defiroot.io</h1>
            </div>
            <p>Copyright @2022 Defitoot</p>
          </Link>
        </div>
        <div className="socials">
          <a
            href="https://t.me/+Ta9SRQuD8BhiMmVk"
            className="name"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
          <a
            href="https://discord.gg/8d9TRNspct"
            className="name"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
          <a
            href="https://www.reddit.com/r/DefiRoot/"
            className="name"
            target="_blank"
            rel="noreferrer"
          >
            Reddit
          </a>
          <a
            href="https://twitter.com/defiroot"
            className="name"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
