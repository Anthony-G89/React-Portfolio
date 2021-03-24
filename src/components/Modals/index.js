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
                            {currentProject.Description}
                            {currentProject.Video}

                        </div>

                        <div className="modalFooter">
                            <p>GitHub Link {currentProject.GitHubLink}</p>
                            <p>Click on me to see application{currentProject.LinkToApplication}</p>
                        </div>
                    </div>
                </div>

            </div>
                : null}


        </div>

    )
};


export default Modals;