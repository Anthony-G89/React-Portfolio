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

                            <iframe className={"modalVideos"}>{currentProject.Video} </iframe>

                        </div>

                        <div className="modalFooter">
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