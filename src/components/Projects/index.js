/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import LocalWire from "../../images/Local-wire-HomePage.png";
import WeatherD from "../../images/showingFiveDayForeCast(2).png";
import PasswordGen from "../../images/password_generator.png";
import EmployeeDirectory from "../../images/employee_directory.png";
import MovieSearch from "../../images/movie-search-app.png";


function projects() {
    return (
        <div>
            <span id="project">
                <section className="projects">
                    <h1 className="projectTitle">Projects</h1>
                    <ul className="projectContainer">
                        <li>
                            <a href="#">
                                <img className="projectImage" src={MovieSearch} alt="Image of Movie Search" />
                                <p>Local Wire</p>
                            </a>
                        </li>
                        <li><a href="#"><img className="projectImage" src={LocalWire} alt="Image of Local Wire" /></a></li>
                        <li><a href="#"><img className="projectImage" src={WeatherD} alt="Image of Weather Dashboard" /></a></li>
                        <li><a href="#"><img className="projectImage" src={PasswordGen} alt="Image of Password Generator" /></a></li>
                        <li><a href="#"><img className="projectImage" src={EmployeeDirectory} alt="Image of Employee Directory " /></a></li>
                        <li><a href="#"><img className="projectImage" src={LocalWire} alt="Image of Local Wire" /></a></li>

                    </ul>
                </section>
            </span>
        </div>
    )
};


export default projects;