/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";



function NavBar(props) {



    return (
        <div>
            <header>
                <nav>
                    <h1 className="logo">A.G.</h1>
                
                        <ul className="nav-links"
                            style={{ transform: props.show ? "translateX(0%)" : null }}>
                            <li onClick={props.close} className="nav-item"><a href="#project">Projects</a></li>
                            <li onClick={props.close} className="nav-item"><a href="#aboutME">About</a></li>
                            <li onClick={props.close} className="nav-item"><a href="#">Connect</a></li>
                        </ul>
                     
                    <div onClick={() => props.slideNav(true)} className="hamburger-menu">
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