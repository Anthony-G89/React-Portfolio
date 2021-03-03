/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
import ConnectPicture from "../../images/Connect-Section-Picture.jpg";



function Connection() {
    return (
        <div>
            <section className="Connect">
                <h1 className="connectTitle">Connect</h1>
                <div className="row connectRow">
                    <div className="col-lg-6">
                        <img src={ConnectPicture} className="connectPicture" />
                    </div>
                    <div className="col-lg-6 ">
                        <p className="textConnectSection">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit ut diam sit amet lobortis. Sed ut leo a elit luctus condimentum sed ultricies ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Aenean iaculis posuere urna, fermentum faucibus magna pretium sed. Nam euismod augue ac consectetur condimentum. Donec ut dolor maximus, facilisis mi non, vehicula arcu. Nam a ligula sit amet est viverra tincidunt. Nunc in lacus massa. In varius at odio sed accumsan. Vestibulum semper eleifend ante et sagittis. Curabitur a molestie eros. Pellentesque nulla felis, elementum id nunc at, gravida gravida ligula.

                            Curabitur mi odio, tristique non consectetur in, cursus a mauris. Etiam cursus ornare erat sed vulputate. Duis pellentesque pharetra purus ac ultrices. Phasellus lobortis, ipsum vitae lobortis euismod, nisl odio ultrices justo, vel volutpat odio tellus vel mauris. Nulla pharetra ipsum non nulla blandit scelerisque. Mauris vestibulum semper blandit. Integer risus sem, eleifend et pretium eu, efficitur cursus arcu. Donec diam urna, tempus ut mi in, consectetur varius nunc. Integer iaculis porttitor felis, quis ultricies enim porttitor non. Vestibulum sed purus vel orci laoreet tempus. Donec imperdiet lacus ex, vitae venenatis ligula viverra ac.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    )
};

export default Connection;

