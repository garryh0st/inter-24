"use client";

import "@/public/styles/nav.css";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <div className="navbar">
            <div className="logo">
              <Image
                src="/wartex-logo.webp"
                alt="logo"
                height={60}
                width={60}
              />
            </div>
            <div
              className="menu-toggle"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                <span
                  className={navOpen ? "lineBottom spin" : "lineBottom"}
                ></span>
              </div>
            </div>
          </div>
          {/* <ReactLenis root wrapper duration={1.4} orientation="vertical"> */}
          <div
            className="nav-overlay"
            style={{
              top: navOpen ? "0" : "-100vh",
              transitionDelay: navOpen ? "0s" : "0s",
            }}
          >
            <div>
              <div
                className="menu-toggle menu-close-btn flex justify-end  translate-x-10 -translate-y-10"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                  <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                  <span
                    className={navOpen ? "lineBottom spin" : "lineBottom"}
                  ></span>
                </div>
              </div>
            </div>
            <ul className="nav-links">
              <li className="nav-item">
                <a
                  href="#"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0px" : "120px",
                    color: navOpen ? "white" : "#00000000",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1s" : "0s",
                  }}
                >
                  Legacy
                </a>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0px" : "120px",
                    color: navOpen ? "white" : "#00000000",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "0.8s" : "0s",
                  }}
                >
                  TEAM
                </a>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0px" : "120px",
                    color: navOpen ? "white" : "#00000000",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "0.6s" : "0s",
                  }}
                >
                  ARTICLES
                </a>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0px" : "120px",
                    color: navOpen ? "white" : "#00000000",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "0.4s" : "0s",
                  }}
                >
                  Contact
                </a>
                <div className="nav-item-wrapper"></div>
              </li>
            </ul>
            <div className="nav-footer">
              {/* <div
                className="location mr:0 md:mr-8"
                style={{
                  bottom: navOpen ? "0px" : "120px",
                  color: navOpen ? "white" : "#00000000",
                  opacity: navOpen ? "1" : "0",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                  fontSize: "1.3vw",
                }}
              >
                <span className="sf">Delhi, IN</span>
              </div> */}
              <div className="nav-social-media hidden sm:block">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/arnav.tsx/"
                      className="sf mr:0 md:mr-8 socialLinks hidden sm:block"
                      style={{
                        bottom: navOpen ? "0px" : "120px",
                        color: navOpen ? "white" : "#00000000",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "0.8s" : "0s",
                        fontSize: "1.3vw",
                      }}
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="sf socialLinks hidden sm:block"
                      href="https://github.com/ArnavVerma-2009"
                      style={{
                        bottom: navOpen ? "0px" : "120px",
                        color: navOpen ? "white" : "#00000000",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "0.8s" : "0s",
                        fontSize: "1.3vw",
                      }}
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-social-media block sm:hidden">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/arnav.tsx/"
                      className="mr:0 md:mr-8 socialLinks "
                      style={{
                        bottom: navOpen ? "0px" : "120px",
                        color: navOpen ? "white" : "#00000000",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "0.8s" : "0s",
                        fontSize: "5vw",
                      }}
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="socialLinks"
                      href="https://github.com/ArnavVerma-2009"
                      style={{
                        bottom: navOpen ? "0px" : "120px",
                        color: navOpen ? "white" : "#00000000",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "0.8s" : "0s",
                        fontSize: "5vw",
                      }}
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* </ReactLenis> */}
        </div>
      </div>
    </>
  );
};
