/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
import ConnectPicture from "../../images/Connect-Section-Media-Pic.jpg";
import LinkedIn from "../../images/LinkedIn-Icon.png";
import Github from "../../images/Github-Icon.png";



function Connection() {



    return (
        <div>
            <span id="connectSection">
                <section className="Connect">
                    <h1 className="connectTitle">Connect</h1>
                    <div className="row connectRow">
                        <div className="col-lg-6">
                            <img src={ConnectPicture} className="connectPicture" />
                        </div>
                        <div className="col-lg-6 ">
                            <p className="textConnectSection">
                                If you want to work together, find out more about a project, or just chat. Don't hesitate. Just click on the links below.

                                <ul>
                                    <li><img src={LinkedIn} className="linkedIn-Icon" /></li>
                                    <li className="github-Icon" ><img src={Github}/></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </section>
            </span>
        </div>
    )
};

export default Connection;

