/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import picture from "../../images/About-Me-Section-Picture.png";
import "./style.css";



function aboutMe({ close }) {

    return (
        <span id="aboutMESection">

            <section onClick={close} className="aboutMe">
                <h1 className="aboutMeTitle">About Me</h1>

                <div className="row aboutMeRow">
                    <div className="col-lg-6 aboutMeSection">
                        <p className="textAboutMe animate" data-animate="animTextAboutMe 5s">Hello young Padawan. Anthony is a driven Full Stack Developer who loves to code, learn new Libraries and frameworks. He has completed over 600 hours at UCF Coding Boot Camp - and continues to work and improve his skills daily. He is a hard worker and fast learner that can adapt to any changes. When he's not busy coding, he burns some energy at the gym or plays video games. Let's also not forget his favorites, soccer and football. Basically, he rocks and you would be lucky to work with him. May the Force be with you.
                        </p>
                        <a className="resumeBtn" href={"https://drive.google.com/file/d/1O9zzyrVccH8DBHWH41Pmq8M_ouAhxKAS/view?usp=sharing"} target="_blank" >My Resume
                            <img className="resumeIcon animate" data-animate="animResumeBtn 5s" src={"https://img.icons8.com/office/40/000000/open-resume.png"} alt={"Icon picture of a resume"} />
                        </a>

                    </div>
                    <div className="col-lg-6 aboutMeSection">
                        <img className="aboutMePicture" src={picture} alt={"Random image of people sitting at a table with their computers. "} />
                    </div>

                </div>
            </section>
        </span>
    )

};

export default aboutMe;
