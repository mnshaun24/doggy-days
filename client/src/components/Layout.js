import React from "react";
import { Outlet, Link } from "react-router-dom";

import Settings from "../pages/Settings";

import Nav from "react-bootstrap/Nav";

const Layout = () => {
  return (
    <>
      <nav className="nav">
        <li>
          <Settings />
          </li>
          <li>
            <Link to="home">
              <img
                className="headerlogo"
                src={require("../assets/images/logo.png")}
                alt="logo"
              />
            </Link>
          </li>
          <li>
            <Link to="saved">
              <img
                className="circle"
                src={require("../assets/images/circle.png")}
                alt="saved"
              />
            </Link>
          </li>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
