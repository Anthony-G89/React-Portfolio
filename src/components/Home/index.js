/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import Typewriter from 'typewriter-effect';
import pictureOFMe from "../../images/Profile Pic 2020 (3).jpg";
import "./style.css";


function handleMouseEnter() {
    var arrowBtn = document.querySelector(".arrowBtn");
    arrowBtn.style.transform = "rotate(90deg)";
};

function handleMouseLeave() {
    var arrowBtn = document.querySelector(".arrowBtn");
    arrowBtn.style.transform = "rotate(0deg)";
};


// window.addEventListener("scroll", () =>{
//     const scrolled = window.scrollY
//     // console.log(scrolled);
// })





function LandingPage() {


// var title = document.querySelector(".workTitle");

// var typewriter = new typewriter( "workTitle", {
//     loop: true,
//     delay:75
// });

// typewriter
//   .pauseFor(2500)
//   .typeString('A simple yet powerful native javascript')
//   .pauseFor(300)
//   .deleteChars(10)
//   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
//   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
//   .pauseFor(1000)
//   .start();



    return (
        <div>
            {/* < Typewriter onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
    }} />  */}
            <section className="home">
                <div className="row">
                    <div className="squareBackground"></div>
                    <div className="col-lg-6 pictureAndName">
                        <img src={pictureOFMe} className=" imgOfMe" alt="Image of me" />
                        {/* <span className="mee">HELLO</span> */}
                        <h3 className="introParagraph">Hello! My name is <br /><span className="name">Anthony Guerrero</span></h3>
                    </div>
                    <div className="col-lg-6 myTitleContainer">
                        <h2 className="myTitle">I'm a <span className="workTitle"></span>, who builds interactive websites that run across platforms & devices</h2>
                       <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="workBtn">View my work <img className="arrowBtn" src="https://img.icons8.com/windows/32/000000/arrow.png" /></button>
                    </div>
                </div>
            </section>


        </div>
    )
};

export default LandingPage;