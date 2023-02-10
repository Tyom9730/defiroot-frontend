import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import Discord from "../Icons/Discord.jsx";
import Telegram from "../Icons/Telegram";
import Twitter from "../Icons/Twitter";
import WebsiteLogoBlue from "../Icons/WebsiteLogoBlue";
import Helpful from "../Icons/Helpful";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  console.log("location.pathname", location.pathname);
  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
    if (sidebarOpen) {
      document
        .querySelector(".sidebar-root")
        .classList.remove("sidbar-container");
      document.querySelector("body").classList.remove("fixed");
    } else {
      document.querySelector(".sidebar-root").classList.add("sidbar-container");
      document.querySelector("body").classList.add("fixed");
      document.querySelector(".mobile-menu-logo").style.zIndex = "1";
    }
  };
  useEffect(() => {
    if (location.pathname === "/nft") {
      document.querySelector("body").classList.add("dark-nft");
      document.querySelector(".website-header").classList.add("dark");
      document.querySelector(".footer-section").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark-nft");
      document.querySelector(".website-header").classList.remove("dark");
      document.querySelector(".footer-section").classList.remove("dark");
    }
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <header className="website-header">
      <div className="container">
        <div className="navbar">
          <div className="website-logo">
            <Link to="/">
              <WebsiteLogoBlue />
              <h1 className="website-name">defiroot.io</h1>
            </Link>
          </div>
          <ul className="nav">
            <li>
              <a
                href="https://discord.gg/8d9TRNspct"
                target="_blank"
                rel="noreferrer"
              >
                <Discord />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/+Ta9SRQuD8BhiMmVk"
                target="_blank"
                rel="noreferrer"
              >
                <Telegram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/defiroot"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.reddit.com/r/DefiRoot/"
                target="_blank"
                rel="noreferrer"
              >
                <Helpful />
              </a>
            </li>
          </ul>
        </div>
        <div className="header-buttons">
          <Link className="primary nft-link" to="/nft">
            NFT
          </Link>
          <a
            href="https://docs.defiroot.io"
            className="secondary"
            target="_blank"
            rel="noreferrer"
          >
            Whitepaper
          </a>
          <a
            href="https://defiroot.gitbook.io/defiroot/more/token-and-tokenomics"
            className="primary"
            target="_blank"
            rel="noreferrer"
          >
            Tokenomics
          </a>
        </div>
        <div className="mobile-menu">
          <div
            className={`mobile-icon ${sidebarOpen ? "mobile-close-icon" : ""}`}
            onClick={() => onSetSidebarOpen(true)}
          >
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <Sidebar
            sidebar={
              <div className="sidbar-content">
                <div />
                <div className="header-buttons-mobile">
                  <a
                    href="https://docs.defiroot.io"
                    className="secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    White Paper
                  </a>
                  <a
                    href="https://omniform1.com/signup/v1/62a84b3f4da2b939ae5147a3_62a988fe5235111a4af057c8.html"
                    className="primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pre Sale
                  </a>
                </div>
                <ul className="nav">
                  <li>
                    <a
                      href="https://discord.gg/8d9TRNspct"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Discord />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/+Ta9SRQuD8BhiMmVk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Telegram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/defiroot"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reddit.com/r/DefiRoot/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Helpful />
                    </a>
                  </li>
                </ul>
              </div>
            }
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
            rootClassName={"sidebar-root"}
            sidebarClassName={"sidebar"}
            contentClassName={"sidebar-content"}
            overlayClassName={"sidbar-overlay"}
          >
            <button
              className="sidebar-action"
              onClick={() => onSetSidebarOpen(true)}
            ></button>
          </Sidebar>
        </div>
      </div>
    </header>
  );
};

export default Header;
