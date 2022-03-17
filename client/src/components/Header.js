import React from "react";
import Navbar from "./Navbar";

function Header(props) {
    const { setCurrentPage, pageLinks } = props

    return (
        <header>
            <Navbar pageLinks={pageLinks} setCurrentPage={setCurrentPage} />
        </header>
    )
}


export default Header;