import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "../api/axios";
import Modal from "./Modal";
function Discount() {
  const { t } = useTranslation(["home"]);
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [mail, setMail] = useState({
    mail: "",
  });
  const sendMail = (e) => {
    e.preventDefault();
    axios
      .post("/api/mails", {
        data: mail,
      })
      .then((response) => {
        console.log(response);
        setModalShow(true);
        setModalMessage("success");
        setMail({ mail: "" });
      })
      .catch((err) => {
        console.log(mail);
        console.log(err);
        setModalShow(true);
        setModalMessage("error");
      });
  };
  return (
    <>
      {modalShow ? (
        <Modal
          modalShow={modalShow}
          setModalShow={setModalShow}
          setModalMessage={setModalMessage}
          modalMessage={modalMessage}
        />
      ) : (
        ""
      )}
      <section className="newslatter_section">
        <div className="container">
          <div
            className="newslatter_box"
            style={{
              backgroundImage: "url(`/images/shape/shape_img_6.svg`)",
            }}
          >
            <div className="row justify-content-center">
              <div className="col col-lg-6">
                <div className="section_heading text-center">
                  <h2 className="heading_text">{t("slogan4")}</h2>
                  <p className="heading_description mb-0">{t("text4")}</p>
                </div>
                <form>
                  <div className="form_item m-0">
                    <input
                      type="email"
                      name="mail"
                      value={mail?.mail}
                      placeholder={t("yourEmail")}
                      onChange={(e) =>
                        setMail({ [e.target.name]: e.target.value })
                      }
                    />
                    <button onClick={sendMail} className="btn btn_dark">
                      <span>
                        <small>{t("send")}</small>
                        <small>{t("send")}</small>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Discount;
