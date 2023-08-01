import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "../api/axios";

function Footer({ lang, setLang }) {
  let { t } = useTranslation(["common"]);
  console.log(t("news"));
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/xebers?locale=${lang}&&populate=*`)
      .then((response) => {
        console.log(response?.data?.data);
        setNews(response?.data?.data.slice(0, 2));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  // useEffect(() => {
  //   t = useTranslation(["common"]);
  // }, []);
  return (
    <footer className="site_footer">
      <div className="footer_widget_area">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="footer_widget">
                <div className="site_logo">
                  <a className="site_link" href="index.html">
                    <img
                      src="/images/logo/logo.jpg"
                      alt="Collab - Online Learning Platform"
                    />
                  </a>
                </div>
                <p>{t("footerSlogan")}</p>
                <ul className="social_links unordered_list">
                  <li>
                    <a href="#!">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
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
                        <a href="about.html">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("about")}</span>
                        </a>
                      </li>
                      <li>
                        <a href="course.html">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("universities")}</span>
                        </a>
                      </li>
                      <li>
                        <a href="mentor.html">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("news")}</span>
                        </a>
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
                      <li>
                        <a href="#!">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("ukraine")}</span>
                        </a>
                      </li>
                      <li>
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
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col col-md-4 col-sm-4">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">{t("support")}</h3>
                    <ul className="page_list unordered_list_block">
                      <li>
                        <a href="contact.html">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("contact")}</span>
                        </a>
                      </li>
                      <li>
                        <a href="faq.html">
                          <span className="item_icon">
                            <i className="fas fa-caret-right"></i>
                          </span>
                          <span className="item_text">{t("faq")}</span>
                        </a>
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
                      <a className="blog_small" href="blog_details.html">
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
                      </a>
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
            <a href="https://themeforest.net/user/merkulove">Merkulove</a> ©
            <b>Collab</b> Template All rights reserved Copyrights 2023
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
