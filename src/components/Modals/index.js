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
                        <h3 className="description">Description</h3>
                        <div className="closeIcon"><span onClick={closeModals} className="closeBtn">&times;</span></div>

                        <div className="modalContent">

                            <p className={"modalText"}> {currentProject.Description}</p>

                            <img className={"ModalPicture"} src={`${process.env.PUBLIC_URL}${currentProject.modalPicture}`} alt={currentProject.Title} style={{ width: "100%", height: "100%" }}></img>
                        </div>

                        <div className={"languageContainer"}>
                            <h3 className={"usedLanguages"}>Languages Used:</h3>
                            <div className={"iconContainer"}>
                                <img className={"languagesIcon"} src={`${process.env.PUBLIC_URL}${currentProject.reactLanguages}`} title={"React.js"} >
                                </img>

                                <img className={"languagesIcon"} src={`${process.env.PUBLIC_URL}${currentProject.htmlLanguages}`} title={"HTML 5"} >
                                </img>

                                <img className={"languagesIcon"} src={`${process.env.PUBLIC_URL}${currentProject.cssLanguages}`} title={"CSS 3"} >
                                </img>

                                <img className={"languagesIcon"} src={`${process.env.PUBLIC_URL}${currentProject.javascriptLanguages}`} title={"JavaScript"} >
                                </img>
                            </div>
                        </div>

                        <div className="modalFooter">
                            <h3 className={"linksTitle"}>Links</h3>
                            <a className={"links"} href={currentProject.GitHubLink} target={"_blank"}>GitHub Link </a>
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