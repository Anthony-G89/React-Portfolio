/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";



function NavBar({ show, slideNav, close }) {



    return (
        <div>
            <header>
                <nav>
                    <h1 className="logo">A.G.</h1>

                    <ul style={{
                        transition: show ? "transform 0.5s ease-in" : "",
                        transform: show ? "translateX(0%)" : "translateX(100%)"
                    }} className="nav-links">
                        <li onClick={close} className="nav-item"><a href="#project">Projects</a></li>
                        <li onClick={close} className="nav-item"><a href="#">About</a></li>
                        <li onClick={close} className="nav-item"><a href="#">Connect</a></li>
                    </ul>

                    <div onClick={() => slideNav(true)}  className="hamburger-menu">
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