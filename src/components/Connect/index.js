/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
import ConnectPicture from "../../images/Connect-Section-Media-Pic.jpg";
import LinkedIn from "../../images/LinkedIn-Icon.png";
import Github from "../../images/Github-Icon.png";



function Connection({show}) {



    return (
        <div>
            <span id="connectSection">
                <section onClick={show} className="Connect">
                    <h1 className="connectTitle">Connect</h1>
                    <div className="row connectRow">
                        <div className="col-lg-6 connect-col">
                            <img src={ConnectPicture} className="connectPicture" />
                        </div>
                        <div className="col-lg-6 connect-col ">
                            <p className="textConnectSection">
                                If you want to work on a project together, find out more about a project, or just chat. Don't hesitate. Just click on the links below.
                                </p>
                            <ul className="socialNetworkContainer">
                                <li className="liTagsForConnect">
                                    <a href="https://www.linkedin.com/in/anthony-guerrero-63a3a8199/" target="_blank" rel="noreferrer" > <img src={LinkedIn} className="socialNetwork-Icon" title="LinkedIn" /> </a>
                                </li>
                                <li className="liTagsForConnect">
                                    <a href="https://github.com/Anthony-G89" target="_blank" rel="noreferrer" ><img src={Github} className="socialNetwork-Icon" title="GitHub" /></a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </section>
            </span>
        </div>
    )
};

export default Connection;

