/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import pictureOFMe from "../../images/Profile Pic 2020 (3).jpg";
// import Arrow from "../../images/icons8-up-64.png";
import Typewriter from "typewriter-effect";
import "./style.css";




// window.addEventListener("scroll", () =>{
//     const scrolled = window.scrollY
//     // console.log(scrolled);
// })

// window.addEventListener("scroll", () => {
//     const arrowBtn = document.querySelector(".upArrow");
//     arrowBtn.classList.toggle("active", window.scrollY > 2100);
// });








function LandingPage({ close }) {

    return (
        <div>

            <section onClick={close} className="home">
                {/* <img className="upArrow" src={Arrow} alt={"image of an up arrow"}/> */}
                <div className="row">
                    <div className="squareBackground"></div>
                    <div className="col-lg-6 pictureAndName">
                        <img src={pictureOFMe} className=" imgOfMe" alt="Image of me" />
                        <h3 className="introParagraph">Hello! My name is <br /><span className="name">Anthony Guerrero</span></h3>
                    </div>
                    <div className="col-lg-6 myTitleContainer">
                        <h2 className="myTitle">I'm a <Typewriter className="workTitle"
                            onInit={(typewriter) => {
                                typewriter.typeString('Front-End Developer')
                                    .pauseFor(2000)
                                    .deleteAll()
                                typewriter.typeString('Back-End Developer')
                                    .pauseFor(2000)
                                    .deleteAll()
                                typewriter.typeString('Full Stack Developer')
                                    .start();
                            }}
                        /> who builds interactive websites that run across platforms & devices</h2>
                        <a className="workBtn" href="#projectSection" > View my work <img className="arrowBtn" src="https://img.icons8.com/windows/32/000000/arrow.png" alt={"Image of an arrow"} /></a>
                    </div>
                </div>
            </section>


        </div>
    )
};

export default LandingPage;