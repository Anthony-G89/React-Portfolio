/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./style.css";



function Modals({ openModal, closeModals, currentProject }) {


    return (
        <div>
            {openModal ? <div className="modal-wrapper">
                <div onClick={closeModals} className="modal-background">
                    <div className="modal-box">

                        <div className="modalHeader"><h1>{currentProject.Title}</h1></div>
                        <div className="closeIcon"><span onClick={closeModals} className="closeBtn">&times;</span></div>

                        <div className="modalContent">
                            <p className={"modalText"}> {currentProject.Description}</p>
                            <img className={"ModalPicture"} src={`${process.env.PUBLIC_URL}${currentProject.modalPicture}`} alt={currentProject.Title} ></img>
                        </div>

                        <div className={"languageContainer"}>
                            <h3 className={"usedLanguages"}>Languages Used:</h3>
                            <div className={"iconContainer"}>
                                {
                                    currentProject.Languages.map((language, index) => (
                                        // console.log(language)
                                        <img key={index} src={`${process.env.PUBLIC_URL}${language}`} className={"languagesIcon"} alt={language} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className="modalFooter">
                            <h3 className={"linksTitle"}>Links</h3>
                            <a className={"links"} href={currentProject.GitHubLink} target={"_blank"}>GitHub Repository </a>
                            <br />
                            <a className={"links"} href={currentProject.LinkToApplication} target={"_blank"}>Link To Application</a>
                        </div>
                    </div>
                </div>

            </div>
                : null}


        </div>

    )
};


export default Modals;