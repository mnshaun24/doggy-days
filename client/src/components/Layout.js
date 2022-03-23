import React from "react";
import { Outlet, Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";

import Settings from "../pages/Settings";

import Nav from "react-bootstrap/Nav";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <li>
          <Menu
            customBurgerIcon={
              <img
                src={require("../assets/images/settings.png")}
                alt="settingsicon"
              />
            }
          >
            {/* <div> */}
              <Settings></Settings>
            {/* </div> */}
          </Menu>
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
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
