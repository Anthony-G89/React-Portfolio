/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";



// FIXES OTHER TITLES NOT TURNING RED WHEN HOVERING OVER IMAGES



function projects({ close, open, projectsItems }) {



    return (
        <div>
            <span id="projectSection">
                <section onClick={close} className="projects">
                    <h1 className="projectTitle">Projects</h1>
                    <p className="pTag">Check out my work</p>

                    <ul className="projectContainer">
                        {
                            projectsItems.map(project => (
                                <li key={project.id} className="projectContainers">
                                    <a className="anchor"  >
                                        <p className="applicationTitle">{project.Title}</p>
                                        <img className="projectImage" src={`${process.env.PUBLIC_URL}${project.picture}`} alt={project.Title} />
                                        <button onClick={() => { open(project) }} className="learnMoreBtn">Detail & More</button>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </span>
        </div>
    )
};


export default projects;