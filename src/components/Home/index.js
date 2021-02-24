/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import pictureOFMe from "../../images/Profile Pic 2020 (3).jpg";
import "./style.css";


var workBtn = document.querySelector(".workBtn");
var arrowBtn = document.querySelector(".arrowBtn");


workBtn.addEventListener("mouseenter", e => {
   arrowBtn.style.transform = "rotate(90deg)"
});


workBtn.addEventListener("mouseleave", e => {
    arrowBtn.style.transform = "rotate(0deg)"
 });
 




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
                        <h2 className="myTitle">I'm a <span className="workTitle">Full Stack Developer</span>, who builds interactive websites that run across platforms & devices</h2>
                        <button className="workBtn">View my work <img className="arrowBtn" src="https://img.icons8.com/windows/32/000000/arrow.png"/></button>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default LandingPage;