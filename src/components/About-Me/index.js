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
                        <p className="textAboutMe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit ut diam sit amet lobortis. Sed ut leo a elit luctus condimentum sed ultricies ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Aenean iaculis posuere urna, fermentum faucibus magna pretium sed. Nam euismod augue ac consectetur condimentum. Donec ut dolor maximus, facilisis mi non, vehicula arcu. Nam a ligula sit amet est viverra tincidunt. Nunc in lacus massa. In varius at odio sed accumsan. Vestibulum semper eleifend ante et sagittis. Curabitur a molestie eros. Pellentesque nulla felis, elementum id nunc at, gravida gravida ligula.

                    Curabitur mi odio, tristique non consectetur in, cursus a mauris. Etiam cursus ornare erat sed vulputate. Duis pellentesque pharetra purus ac ultrices. Phasellus lobortis, ipsum vitae lobortis euismod, nisl odio ultrices justo, vel volutpat odio tellus vel mauris. Nulla pharetra ipsum non nulla blandit scelerisque. Mauris vestibulum semper blandit. Integer risus sem, eleifend et pretium eu, efficitur cursus arcu. Donec diam urna, tempus ut mi in, consectetur varius nunc. Integer iaculis porttitor felis, quis ultricies enim porttitor non. Vestibulum sed purus vel orci laoreet tempus. Donec imperdiet lacus ex, vitae venenatis ligula viverra ac.</p>
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
