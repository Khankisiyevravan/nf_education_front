import React from "react";
import { useTranslation } from "react-i18next";

function Modal({ modalShow, setModalShow, modalMessage, setModalMessage }) {
  const { t } = useTranslation(["modal"]);
  return (
    <>
      <section className="nf-modal active">
        {/* <button class="show-modal">Show Modal</button>
        <span class="overlay"></span> */}
        <div class="modal-box">
          <div className="nf-alert-icon">
            {/* <i class="fa-solid fa-circle-check"></i> */}
            {modalMessage === "success" ? (
              <i
                className="fa-regular fa-circle-check"
                style={{ color: "green" }}
              ></i>
            ) : (
              <i
                className="fa-regular fa-circle-xmark"
                style={{ color: "red" }}
              ></i>
            )}
          </div>
          <h2>{t(modalMessage)}</h2>
          <h3>{t(`${modalMessage}Text`)}</h3>

          <div class="buttons">
            <button class="close-btn" onClick={() => setModalShow(false)}>
              Close
            </button>
            {/* <button>Open File</button> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Modal;
