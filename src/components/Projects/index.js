/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import LocalWire from "../../images/Local-wire-HomePage.png";
import WeatherD from "../../images/showingFiveDayForeCast(2).png";
import PasswordGen from "../../images/password_generator.png";
import EmployeeDirectory from "../../images/employee_directory.png";
import MovieSearch from "../../images/movie-search-app.png";
import CodeQuiz from "../../images/code-quiz-home.png";




// FIXES OTHER TITLES NOT TURNING RED WHEN HOVERING OVER IMAGES

// function ShowBtn() {
//     var liElm = document.querySelector(".anchor")
//     var btn = document.querySelector(".learnMoreBtn");

//     liElm.addEventListener("mouseenter", function() {
//         btn.style.display = "block"
//     });

// }



function projects() {


    return (
        <div>
            <span  id="project">
                <section className="projects">
                    <h1 className="projectTitle">Projects</h1>
                    <p className="pTag">These are some of the work I have done</p>
                    <ul className="projectContainer">
                        <li>
                            <a href="#" className="anchor"  >
                                <p className="applicationTitle">Movie Search</p>
                                <button className="learnMoreBtn">Learn More</button>
                                <img className="projectImage" src={MovieSearch} alt="Image of Movie Search" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="anchor" >
                                <p className="applicationTitle">Local Wire</p>
                                <button className="learnMoreBtn">Learn More</button>
                                <img className="projectImage" src={LocalWire} alt="Image of Local Wire" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="anchor">
                                <p className="applicationTitle">Weather Dashboard</p>
                                <button className="learnMoreBtn">Learn More</button>
                                <img className="projectImage" src={WeatherD} alt="Image of Weather Dashboard" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="anchor">
                                <p className="applicationTitle">password Generator</p>
                                <button className="learnMoreBtn">Learn More</button>
                                <img className="projectImage" src={PasswordGen} alt="Image of Password Generator" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="anchor">
                                <p className="applicationTitle">Employee Directory</p>
                                <button className="learnMoreBtn">Learn More</button>
                                <img className="projectImage" src={EmployeeDirectory} alt="Image of Employee Directory " />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="anchor">
                                <p className="applicationTitle">Code Quiz</p>
                                <button className="learnMoreBtn">Learn More</button>
                                <img className="projectImage" src={CodeQuiz} alt="Image of Code Quiz" />
                            </a>
                        </li>

                    </ul>
                </section>
            </span>
        </div>
    )
};


export default projects;