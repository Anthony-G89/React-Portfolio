/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";



function NavBar({ show, slideNav, close, open }) {



    return (
        <div>
            <header>
                <nav>
                    <h1 className="logo">A.G.</h1>

                    <ul className="nav-links"
                        style={{ transform: show ? "translateX(0%)" : null }}>
                        <li onClick={close} className="nav-item"><a className="navBar-Links" href="#project">Projects</a></li>
                        <li onClick={close} className="nav-item"><a className="navBar-Links" href="#aboutME">About</a></li>
                        <li onClick={close} className="nav-item"><a className="navBar-Links" href="#connectSection">Connect</a></li>
                    </ul>

                    <div onClick={open}  className="hamburger-menu">
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