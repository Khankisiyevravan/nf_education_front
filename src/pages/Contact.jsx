import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation(["contact"]);
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

    const config = {
      headers: { "Content-type": "application/json" },
    };
    console.log(contactData);
    axios
      .post("/api/elaqelers", {
        data: contactData,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get("/api/elaqelers")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <main className="page_content">
        <section className="page_banner">
          <div className="container">
            <div
              className="content_wrapper"
              style={{
                backgroundImage:
                  "url(nf_education_front/images/banner/page_banner_image.png)",
              }}
              //   style="
              //     background-image: url(nf_education_front/images/banner/page_banner_image.png);
              //   "
            >
              <div className="row align-items-center">
                <div className="col col-lg-6">
                  <ul className="breadcrumb_nav unordered_list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                  <h1 className="page_title">{t("title1")}</h1>
                  <p className="page_description">{t("text1")}</p>
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
                    <h2 className="heading_text">{t("contactInfo")}</h2>
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
                      <h3 className="item_title">{t("callUs")}</h3>
                      <p className="mb-0"> (+380) 63 450 86 13</p>
                      <p className="mb-0"> (+994) 77 325 93 04</p>
                    </div>
                  </div>
                  <div className="iconbox_item contact_info_iconbox">
                    <div className="item_icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">{t("emailAddress")}</h3>
                      <p className="mb-0">nnfeducation@gmail.com</p>
                      <p className="mb-0">nfeducation@gmail.com</p>
                    </div>
                  </div>
                  <div className="iconbox_item contact_info_iconbox">
                    <div className="item_icon">
                      <i className="fas fa-location-dot"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">{t("location")}</h3>
                      <p className="mb-0">Nizami</p>
                      <p className="mb-0">Caspian Plaza</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-7">
                <div className="gmap_canvas">
                  <iframe
                    id="gmap_canvas_iframe"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
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
                  <h2 className="heading_text mb-0">{t("title2")}</h2>
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
                          {t("full_name")}
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
                          {t("email")}
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
                          {t("phoneNumber")}
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
                          {t("subject")}
                        </label>
                        <select
                          name="title"
                          id="input_jubject"
                          onChange={handleChange}
                          defaultValue={"title"}
                        >
                          <option value="title" selected={"selected"}>
                            {t("choose")}
                          </option>
                          <option value="Xaricde Tehsil">
                            {t("abroadStudy")}
                          </option>
                          <option value="Ukraynada Tehsil">
                            {t("ukraine")}
                          </option>
                          <option value="Turkiyede Tehsil">
                            {t("turkey")}
                          </option>
                          <option value="Almaniyada Tehsil">
                            {t("germany")}
                          </option>
                          <option value="Polsada Tehsil">{t("poland")}</option>
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form_item">
                        <label htmlFor="input_message" className="input_title">
                          {t("message")}
                        </label>
                        <textarea
                          id="input_message"
                          name="messagee"
                          placeholder={t("writeAboutYourSubject")}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <button
                        className="btn btn_dark w-100 b-block"
                        onClick={sendData}
                      >
                        <span>
                          <small>{t("btn")}</small>
                          <small>{t("btn")}</small>
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
