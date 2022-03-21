import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                <Link to="home">Dinder</Link>
                </li>
                <li>
                <Link to="settings">Settings</Link>
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