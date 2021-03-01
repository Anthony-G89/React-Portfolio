/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";



function NavBar() {
    return (
        <div>
            <header>
                <nav>
                    <h1 className="logo">A.G.</h1>
                    <ul className="nav-links">
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Connect</a></li>
                    </ul>
                    <div className="hamburger-menu">
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>
                </nav>
            </header>
        </div>
    )
};

export default NavBar;