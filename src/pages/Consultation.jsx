import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "../api/axios";
import Modal from "../components/Modal";
function Consultation() {
  const { t } = useTranslation(["consultation"]);
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [consultationData, setConsultationData] = useState({
    full_name: "",
    phone_number: "",
    date: "",
  });
  const getConsultation = (e) => {
    e.preventDefault();
    axios
      .post("/api/consultations", {
        data: consultationData,
      })
      .then((response) => {
        console.log(response);
        setModalShow(true);
        setModalMessage("success");
      })
      .catch((err) => {
        console.log(err);
        setModalShow(true);
        setModalMessage("error");
      });
  };
  const handleChange = (e) => {
    setConsultationData({
      ...consultationData,
      [e.target.name]: e.target.value,
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
      <main className="page_content">
        <section
          className="calltoaction_section section_space_lg bg_dark decoration_wrap"
          style={{ margin: "50px 0 100px 0" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-lg-7">
                <div className="section_heading mb-lg-0">
                  <h2 className="heading_text text-white">{t("title1")}</h2>
                  <p className="heading_description mb-0 text-white">
                    {t("text1")}
                  </p>
                </div>
              </div>
              <div className="col col-lg-5">
                <div className="calltoaction_form">
                  <form action="#">
                    <h3 className="form_title">{t("formTitle")}</h3>
                    <div className="form_item">
                      <label
                        htmlFor="input_name"
                        className="input_title text-uppercase"
                      >
                        {t("fullName")}
                      </label>
                      <input
                        id="input_name"
                        type="text"
                        name="full_name"
                        placeholder="Input Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form_item">
                      <label
                        htmlFor="input_email"
                        className="input_title text-uppercase"
                      >
                        {t("phone_number")}
                      </label>{" "}
                      <input
                        id="input_email"
                        type="email"
                        name="phone_number"
                        placeholder="Input Email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form_item">
                      <label
                        htmlFor="input_question"
                        className="input_title text-uppercase"
                      >
                        {t("date")}
                      </label>{" "}
                      <input
                        type="datetime-local"
                        min={"2023-08-06T16:15:23"}
                        name="date"
                        onChange={handleChange}
                      />
                      {/* <textarea
                      id="input_question"
                      name="Message"
                      placeholder="Input Your Question"
                    ></textarea> */}
                    </div>
                    <button
                      onClick={getConsultation}
                      className="btn btn_dark w-100"
                    >
                      <span>
                        <small>{t("book")}</small> <small>{t("book")}</small>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className="deco_item shape_img_1"
            data-parallax='{"x" : 130, "smoothness": 6}'
          >
            <img
              src="/images/shape/shape_img_5.png"
              alt="Collab – Online Learning Platform"
            />
          </div>
          <div
            className="deco_item shape_img_2"
            data-parallax='{"x" : -130, "smoothness": 6}'
          >
            <img
              src="/images/shape/shape_img_4.png"
              alt="Collab – Online Learning Platform"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Consultation;
