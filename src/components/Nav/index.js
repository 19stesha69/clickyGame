import React from "react";
import "./style.css";

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="#">Clicky Game</a>
                </li>
                <li>Click an image to begin!</li>
                <li>Score: <span></span> | Top Score: <span></span></li>
            </ul>
        </nav>
    );
}

export default Nav;