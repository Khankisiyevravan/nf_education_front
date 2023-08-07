import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "../api/axios";
import { Link } from "react-router-dom";

function Footer({ lang, setLang }) {
  let { t } = useTranslation(["common"]);
  // console.log(t("news"));
  const [news, setNews] = useState([]);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/xebers?locale=${lang}&&populate=*`)
      .then((response) => {
        setNews(response?.data?.data.slice(0, 2));
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`/api/countries?locale=${lang}`)
      .then((response) => {
        console.log(response?.data?.data);
        setCountries(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [lang]);
  return (
    <footer className="site_footer">
      <div className="footer_widget_area">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="footer_widget">
                <div className="site_logo">
                  <Link to="/" className="site_link">
                    <img
                      src="/images/logo/logo.jpg"
                      alt="Collab - Online Learning Platform"
                    />
                  </Link>
                </div>
                <p>{t("footerSlogan")}</p>
                <ul className="social_links unordered_list">
                  <li>
                    <a
                      href="https://wa.me/380634508613?text=Salam. Nömrənizi nf-edu.com saytından götürmüşəm, suallarımı cavablandıra bilərsiniz?"
                      target="_blank"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/nf_education_/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/ukrainadatehsiil.az/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="row">
                <div className="col col-md-4 col-sm-4">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">{t("links")}</h3>
                    <ul className="page_list unordered_list_block">
                      <li>
                        <Link to="/contact">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("about")}</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/abroadstudy">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("universities")}</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/news">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("news")}</span>
                        </Link>
                      </li>
                      {/* <li>
                        <a href="pricing.html">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">Prices</span>
                        </a>
                      </li> */}
                      {/* <li>
                        <a href="event.html">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">Events</span>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col col-md-4 col-sm-4">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">{t("abroadstudy")}</h3>
                    <ul className="page_list unordered_list_block">
                      {countries?.map((country, index) => (
                        <li key={index}>
                          <Link to={`/abroadstudy/${country?.id}`}>
                            <span className="item_icon">
                              <i className="fas fa-caret-right"></i>
                            </span>
                            <span className="item_text">
                              {country?.attributes?.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                      {/* <li>
                        <a href="#!">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("germany")}</span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("turkey")}</span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("poland")}</span>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col col-md-4 col-sm-4">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">{t("support")}</h3>
                    <ul className="page_list unordered_list_block">
                      <li>
                        <Link to="/contact">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("contact")}</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/consultation">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("consultation")}</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("faq")}</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="footer_widget">
                <h3 className="footer_widget_title">{t("latestPosts")}</h3>
                <ul className="blog_small_group unordered_list_block">
                  {news?.map((n, index) => (
                    <li key={index}>
                      <Link className="blog_small" to={`/news/${n?.id}`}>
                        <span className="item_image">
                          <img
                            src={`https://nfeducationback-z9ad3.ondigitalocean.app${n?.attributes?.image?.data?.attributes?.url}`}
                            alt="Collab – Online Learning Platform"
                            style={{
                              width: "70px",
                              height: "70px",
                              objectFit: "cover",
                            }}
                          />
                        </span>
                        <span className="item_content">
                          {/* <span className="item_author">
                            <i className="fas fa-user-alt"></i> by Corabelle
                            Durrad
                          </span> */}
                          <strong className="item_title">
                            {n?.attributes?.Basliq}
                          </strong>
                          <small className="item_post_date">
                            {n?.attributes?.tarix.slice(0, 10)}
                          </small>
                        </span>
                      </Link>
                    </li>
                  ))}
                  {/* <li>
                    <a className="blog_small" href="blog_details.html">
                      <span className="item_image">
                        <img
                          src="/images/blog/blog_small_img_1.jpg"
                          alt="Collab – Online Learning Platform"
                        />{" "}
                      </span>
                      <span className="item_content">
                        <span className="item_author">
                          <i className="fas fa-user-alt"></i> by Corabelle
                          Durrad
                        </span>
                        <strong className="item_title">
                          See How Michaele Built a New Life and Career
                        </strong>
                        <small className="item_post_date">
                          October 12, 2023
                        </small>
                      </span>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_widget">
        <div className="container">
          <p className="copyright_text text-center mb-0">
            <a>NF Education</a> ©<b></b> reserved Copyrights 2023
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
