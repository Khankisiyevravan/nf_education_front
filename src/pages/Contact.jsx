import React, { useState } from "react";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
function Contact() {
  const { t } = useTranslation(["contact"]);
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [contactData, setContactData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    title: "",
    messagee: "",
  });
  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const sendData = (e) => {
    e.preventDefault();
    console.log(contactData);
    axios
      .post("/api/elaqelers", {
        data: contactData,
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
  // useEffect(() => {
  //   axios
  //     .get("/api/elaqelers")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
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
        <section className="page_banner">
          <div className="container">
            <div
              className="content_wrapper"
              style={{
                backgroundImage: "url(/images/banner/page_banner_image.png)",
                padding: "70px 25px 150px 25px",
              }}
              //   style="
              //     background-image: url(/images/banner/page_banner_image.png);
              //   "
            >
              <div className="row align-items-center">
                <div className="col col-lg-6">
                  <ul className="breadcrumb_nav unordered_list">
                    <li>
                      <Link to="/">{t("home:home")}</Link>
                    </li>
                    <li>{t("home:contact")}</li>
                  </ul>
                  <h1 className="page_title">{t("contact:title1")}</h1>
                  <p className="page_description">{t("contact:text1")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact_section section_space_lg">
          <div className="container">
            <div className="row">
              <div className="col col-lg-5">
                <div className="pe-lg-5">
                  <div className="section_heading">
                    <h2 className="heading_text">{t("contact:contactInfo")}</h2>
                    {/* <p className="heading_description mb-0">
                      Viverra maecenas accumsan lacus vel facilisis volutpat.
                      Faucibus purus in massa tempor nec feugiat nisl
                    </p> */}
                  </div>
                  <div className="iconbox_item contact_info_iconbox">
                    <div className="item_icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">{t("contact:callUs")}</h3>
                      <p className="mb-0"> (+380) 63 450 86 13</p>
                      <p className="mb-0"> (+994) 77 325 93 04</p>
                    </div>
                  </div>
                  <div className="iconbox_item contact_info_iconbox">
                    <div className="item_icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">
                        {t("contact:emailAddress")}
                      </h3>
                      <p className="mb-0">nnfeducation@gmail.com</p>
                      <p className="mb-0">nfeducation@gmail.com</p>
                    </div>
                  </div>
                  <div className="iconbox_item contact_info_iconbox">
                    <div className="item_icon">
                      <i className="fas fa-location-dot"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">{t("contact:location")}</h3>
                      <p className="mb-0">Nizami, </p>
                      <p className="mb-0">Məhəmməd Naxçıvani 15</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-7">
                <div className="gmap_canvas">
                  {/* <iframe
                    id="gmap_canvas_iframe"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  ></iframe> */}
                  <iframe
                    id="gmap_canvas_iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1348748564888!2d49.82316367554798!3d40.3837032576495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4a33d29223%3A0x6673075498d826a6!2sNF%20Education!5e0!3m2!1sen!2saz!4v1697535093430!5m2!1sen!2saz"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact_form_section section_space_lg bg_light decoration_wrap overflow-hidden">
          <div className="container decoration_wrap">
            <div className="row justify-content-center">
              <div className="col col-lg-7">
                <div className="section_heading text-center">
                  <h2 className="heading_text mb-0">{t("contact:title2")}</h2>
                </div>
              </div>
            </div>
            <form>
              <div className="row justify-content-center">
                <div className="col col-lg-8">
                  <div className="row">
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_name" className="input_title">
                          {t("contact:full_name")}
                        </label>
                        <input
                          id="input_name"
                          type="text"
                          name="full_name"
                          placeholder="Faik Nasrullayev"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_email" className="input_title">
                          {t("contact:email")}
                        </label>
                        <input
                          id="input_email"
                          type="email"
                          name="email"
                          placeholder="example@gmail.com"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_phone" className="input_title">
                          {t("contact:phoneNumber")}
                        </label>
                        <input
                          id="input_phone"
                          type="tel"
                          name="phone_number"
                          placeholder="+994 55 555 55 55"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_jubject" className="input_title">
                          {t("contact:subject")}
                        </label>
                        <select
                          name="title"
                          id="input_jubject"
                          onChange={handleChange}
                          defaultValue={"title"}
                        >
                          <option value="title" selected={"selected"}>
                            {t("contact:choose")}
                          </option>
                          <option value="Xaricde Tehsil">
                            {t("contact:abroadStudy")}
                          </option>
                          <option value="Ukraynada Tehsil">
                            {t("contact:ukraine")}
                          </option>
                          <option value="Turkiyede Tehsil">
                            {t("contact:turkey")}
                          </option>
                          <option value="Almaniyada Tehsil">
                            {t("contact:germany")}
                          </option>
                          <option value="Polsada Tehsil">
                            {t("contact:poland")}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form_item">
                        <label htmlFor="input_message" className="input_title">
                          {t("contact:message")}
                        </label>
                        <textarea
                          id="input_message"
                          name="messagee"
                          placeholder={t("contact:writeAboutYourSubject")}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <button
                        className="btn btn_dark w-100 b-block"
                        onClick={sendData}
                      >
                        <span>
                          <small>{t("contact:btn")}</small>
                          <small>{t("contact:btn")}</small>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div
              className="deco_item shape_img_1 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <img
                src="/images/shape/shape_img_7.png"
                alt="Collab – Online Learning Platform"
              />
            </div>
            <div
              className="deco_item shape_img_2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <img
                src="/images/shape/shape_img_7.png"
                alt="Collab – Online Learning Platform"
              />
            </div>
          </div>
          <div
            className="deco_item shape_img_3 wow fadeInLeft"
            data-wow-delay=".2s"
          >
            <img
              src="/images/shape/shape_img_7.png"
              alt="Collab – Online Learning Platform"
            />
          </div>
          <div
            className="deco_item shape_img_4 wow fadeInRight"
            data-wow-delay=".4s"
          >
            <img
              src="/images/shape/shape_img_7.png"
              alt="Collab – Online Learning Platform"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
