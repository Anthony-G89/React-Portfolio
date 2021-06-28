/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import closeBtn from "../../images/closeIcon.png"
import "./style.css";



function NavBar({ show, slideNav, close, }) {

   

    return (

        <div>
            <header>
                <nav>
                    {/* <h1 className="logo">A.G.</h1> */}

                    <ul className="nav-links"
                        style={{ transform: show ? "translateX(0%)" : null }}>
                        <li onClick={close} className={"nav-item "}><a className={"navBar-Links"} href="#projectSection">Projects</a></li>
                        <li onClick={close} className={"nav-item "}><a className={"navBar-Links"} href="#aboutMESection">About</a></li>
                        <li onClick={close} className={"nav-item "}><a className={"navBar-Links"} href="#connectSection">Connect</a></li>
                    </ul>

                    <img onClick={() => slideNav(!show)} className={"xBtn"} alt={"close button"} src={closeBtn} style={{ display: !show ? "none" : null }} />

                    <div onClick={() => slideNav(!show)} className={"hamburger-menu"}
                        style={{ display: show ? "none" : null }} >
                        <div className={"line line-1"}></div>
                        <div className={"line line-2"}></div>
                        <div className={"line line-3"}></div>
                    </div>
                </nav>
            </header>
        </div>
    )
};

export default NavBar;