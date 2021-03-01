/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";



function NavBar() {

    function showMenu() {
        const menu = document.querySelector(".hamburger-menu");
        const navBar = document.querySelector(".whole-Nav-Bar")
        menu.addEventListener("click", function () {
            // navBar.classList.toggle("change");
            console.log("clicked on one time");
        });
    };

    return (
        <div>
            <header>
                <nav>
                    <h1 className="logo">A.G.</h1>
                    <div className="whole-Nav-Bar">
                        <ul className="nav-links">
                            <li className="nav-item"><a href="#project">Projects</a></li>
                            <li className="nav-item"><a href="#">About</a></li>
                            <li className="nav-item"><a href="#">Connect</a></li>
                        </ul>

                        <div className="hamburger-menu" onClick={showMenu}>
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
};

export default NavBar;