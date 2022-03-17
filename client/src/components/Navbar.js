import React from "react";

function Navbar({ pageLinks, setCurrentPage }) {
    return (
        <div> {pageLinks.map((link) => {
            return (
                <span eventKey={link} onClick={() => setCurrentPage(link)}>{link}</span>
            );
        })}

        </div>

    );
    }

export default Navbar;