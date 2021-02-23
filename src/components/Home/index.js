/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import pictureOFMe from "../../images/Profile Pic 2020 (3).jpg";
import "./style.css";


function LandingPage() {
    return (
        <div>
            <section className="home">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={pictureOFMe} className=" imgOfMe" alt="Image of me" />
                        <h3 className="">Hello! My name is <br /><span className="name">Anthony Guerrero</span></h3>
                    </div>
                    <div className="col-lg-6">
                        <h2>I'm a front-end developer who codes with React.js</h2>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default LandingPage;