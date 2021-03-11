import React from "react";
import "./style.css";



function Modals({ openModal, closeModals }) {
    return (
        <div>
            {openModal ? <div className="modal-wrapper">
                <div onClick={closeModals} className="modal-background">
                    <div className="modal-box">
                        <div className="modalHeader"><h1>Modals Titles</h1></div>
                        <div className="closeIcon"><span onClick={closeModals} className="closeBtn">&times;</span></div>

                        <div className="modalContent">
                            <p>Donec placerat lobortis enim sed efficitur. Vivamus ullamcorper gravida pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dignissim ipsum ac maximus fermentum. Mauris tristique ex odio, nec posuere leo semper eu. Mauris vulputate placerat lacus, in aliquet odio.</p>

                        </div>
                        <div className="modalFooter">
                            <p>Links</p>
                            <p>Links</p>
                        </div>
                    </div>
                </div>

            </div>
                : null}


        </div>

    )
};


export default Modals;