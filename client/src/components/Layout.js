import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                    <Link to="settings"><img className="settings" src={require('../assets/images/settings.png')} alt="settings" /></Link>
                        
                    </li>
                    <li>
                    <Link to="home"><img className="headerlogo" src={require('../assets/images/logo.png')} alt="logo" /></Link>
                    </li>
                    <li>
                    <Link to="saved"><img className="circle" src={require('../assets/images/circle.png')} alt="saved" /></Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;