import React from "react";
import { Outlet, Link } from "react-router-dom";
import Settings from "../pages/Settings";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Settings>Settings</Settings>
                </li>
                <li>
                    <Link to="home">Dinder</Link>
                </li>
                <li>
                    <Link to="saved">Saved Dogs</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
}

export default Layout;



