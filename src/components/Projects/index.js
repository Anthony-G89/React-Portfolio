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


function ChangeColor() {
    const appTitle = document.querySelector(".applicationTitle");
    appTitle.style.color = "#ED213A";
    
}

function changeColorBack() {
    const appTitle = document.querySelector(".applicationTitle");
    appTitle.style.color = "#e8e8e8";
    
}

// FIXES OTHER TITLES NOT TURNING RED WHEN HOVERING OVER IMAGES






function projects() {
    return (
        <div>
            <span id="project">
                <section className="projects">
                    <h1 className="projectTitle">Projects</h1>
                    <ul className="projectContainer">
                        <li>
                            {/* WORK HERE! */}
                            <a href="#" className="anchor" >
                                <p className="applicationTitle">Movie Search</p>
                                <img className="projectImage" onMouseEnter={ChangeColor} onMouseLeave={changeColorBack} src={MovieSearch} alt="Image of Movie Search" />
                            </a>
                        </li>

                        <li >
                            <a href="#" className="anchor">
                                <p className="applicationTitle">Local Wire</p>
                                <img className="projectImage"  onMouseEnter={ChangeColor} onMouseLeave={changeColorBack} src={LocalWire} alt="Image of Local Wire" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="anchor">
                                <p className="applicationTitle">Local Wire</p>
                                <img className="projectImage"  onMouseEnter={ChangeColor} onMouseLeave={changeColorBack} src={WeatherD} alt="Image of Weather Dashboard" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="anchor">
                                <p className="applicationTitle">Local Wire</p>
                                <img className="projectImage"  onMouseEnter={ChangeColor} onMouseLeave={changeColorBack} src={PasswordGen} alt="Image of Password Generator" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="anchor">
                                <p className="applicationTitle">Local Wire</p>
                                <img className="projectImage"  onMouseEnter={ChangeColor} onMouseLeave={changeColorBack} src={EmployeeDirectory} alt="Image of Employee Directory " />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="anchor">
                                <p className="applicationTitle">Code Quiz</p>
                                <img className="projectImage"  onMouseEnter={ChangeColor} onMouseLeave={changeColorBack} src={CodeQuiz} alt="Image of Code Quiz" />
                            </a>
                        </li>

                    </ul>
                </section>
            </span>
        </div>
    )
};


export default projects;