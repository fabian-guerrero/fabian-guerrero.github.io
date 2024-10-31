import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../../modalContext";
import "./modal.scss";

const Modal = () => {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div className="modal" style={{ background: "rgba(0,0,0,0.8)" }}>
        <div className="modal-container">
          <button className="modal-close" onClick={() => handleModal()}>
            <i></i>
            <i></i>
          </button>
          {modalContent}
        </div>
      </div>,
      document.querySelector("#modal-root"),
    );
  } else return null;
};

export default Modal;
