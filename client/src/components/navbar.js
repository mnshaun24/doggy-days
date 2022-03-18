import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ModalContain from "../pages/ModalContain";

import Auth from '../utils/auth';

const NavBar = () => {
    return (
        <>
        <Navbar>
            <Container fluid>
                <Navbar.Brand as={Link} to='home'>
                    DinderHome
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
                <Navbar.Collapse id="navbar">
                    <Nav>
                        {/* if user is logged in show saved dogs and logout */}
                        {Auth.loggedIn() ? (
                            <>
                            <Nav.Link as={Link} to='/saved'>See Your Dogs</Nav.Link>
                            <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                            </>
                        ) : (
                            <Nav.Link onClick={() => ModalContain}></Nav.Link>
                        )
                    }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            </>
    )
}

export default NavBar;