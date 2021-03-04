/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import picture from "../../images/About-Me-Section-Picture.jpg";
import "./style.css";



function aboutMe() {
    return (
        <span id="aboutME">
            <section className="aboutMe">
                <h1 className="aboutMeTitle">About Me</h1>

                <div className="row aboutMeRow">
                    <div className="col-lg-6 aboutMeSection">
                        <p className="textAboutMe">I'm a driven Full Stack Developer who love to code and learn new Libraries and frameworks. I completed over 600 hours at UCF Coding Boot Camp. I'm Fast learner, hard worker, can adapt to any changes, and a team player who is proficient in an array of programming languages. On my free time, I like to go to the gym, play Fifa, and watch soccer or football.</p>
                    </div>
                    <div className="col-lg-6 aboutMeSection">
                        <img className="aboutMePicture" src={picture} />
                    </div>

                </div>
            </section>
        </span>
    )

};

export default aboutMe;
