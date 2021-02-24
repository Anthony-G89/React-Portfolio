/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import pictureOFMe from "../../images/Profile Pic 2020 (3).jpg";
import "./style.css";


function LandingPage() {
    return (
        <div>
            <section className="home">
                <div className="row">
                    <div className="squareBackground"></div>
                    <div className="col-lg-6 pictureAndName">
                        <img src={pictureOFMe} className=" imgOfMe" alt="Image of me" />
                        <h3 className="introParagraph">Hello! My name is <br /><span className="name">Anthony Guerrero</span></h3>
                    </div>
                    <div className="col-lg-6 myTitleContainer">
                        <h2 className="myTitle">I'm a Full Stack Developer 💻</h2>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default LandingPage;