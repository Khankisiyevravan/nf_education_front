import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
function Header({ lang, setLang }) {
  const headerRef = useRef();
  const location = useLocation();
  const [countries, setCountries] = useState([]);
  const [navbarShow, setNavbarShow] = useState(false);
  const { i18n, t } = useTranslation(["common"]);
  // console.log(t);
  const changeHandleLanguage = (e) => {
    // console.log();
    i18next.changeLanguage(e.target.value);
    setLang(e.target.value);
  };
  const openDropdown = (e) => {
    // e.target.classList.toggle("show");
    // console.log();
    if ([...e.target.classList].some((a) => a === "btn-drop")) {
      e.target
        ?.closest(".dropdown")
        ?.querySelector(".dropdown-menu")
        ?.classList.toggle("show");
    }
  };
  useEffect(() => {
    let langCode = localStorage.getItem("i18nextLng");
    if (langCode?.length > 2) {
      i18n.changeLanguage("az");
    }
    setLang(langCode);
    // if (!langCode) {
    //   localStorage.setItem("lang", "az");
    // } else {
    //   setLang(localStorage.getItem("lang"));
    // }
    document.addEventListener("scroll", () => {
      if (!headerRef.current) return;
      if (window.scrollY > 100) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    });
  }, []);
  useEffect(() => {
    console.log(lang);
    if (lang.length > 2) {
      axios
        .get(`/api/countries?locale=az&&populate=*`)
        .then((response) => {
          console.log(lang);
          console.log(response);
          setCountries(response?.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`/api/countries?locale=${lang}&&populate=*`)
        .then((response) => {
          console.log(lang);
          console.log(response);
          setCountries(response?.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [lang]);
  useEffect(() => {
    [...document.querySelectorAll(".dropdown-menu")].map((a) => {
      console.log(a);
      a.classList.remove("show");
      setNavbarShow(false);
    });
    document
      ?.querySelector(".mobile_menu_btn")
      ?.setAttribute("aria-expanded", "false");
  }, [location]);
  return (
    <header className="site_header site_header_1" ref={headerRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-4 col-5">
            <div className="site_logo">
              <Link className="site_link" to="/">
                <img src="/images/logo/logo-f.png" alt="" />
                <span>NF Education</span>
              </Link>
            </div>
          </div>
          <div className="col col-lg-7 col-2">
            <nav className="main_menu navbar navbar-expand-lg">
              <div
                className={
                  navbarShow
                    ? "main_menu_inner collapse navbar-collapse justify-content-center show"
                    : "main_menu_inner collapse navbar-collapse justify-content-center"
                }
                id="main_menu_dropdown"
              >
                <ul className="main_menu_list unordered_list_center">
                  <li className="dropdown active none">
                    <Link
                      to="/"
                      className="nav-link"
                      id="home_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {t("home")}
                    </Link>
                  </li>
                  <li
                    className="dropdown fff"
                    // onMouseMove={(e) =>
                    //   e.target
                    //     ?.closest(".dropdown")
                    //     ?.querySelector(".dropdown-menu")
                    //     ?.classList.add("show")
                    // }
                    // onMouseLeave={(e) => {
                    //   e.target
                    //     ?.closest(".dropdown")
                    //     ?.querySelector(".dropdown-menu")
                    //     ?.classList.remove("show");
                    //   e.target
                    //     ?.closest(".dropdown.fff")
                    //     ?.querySelector(".dropdown-menu")
                    //     ?.classList.remove("show");
                    // }}
                  >
                    <Link
                      onClick={(e) => {
                        console.log(e.target.classList);
                        openDropdown(e);
                        if (
                          [...e.target.classList].some((a) => a === "btn-drop")
                        ) {
                          e.preventDefault();
                        }
                      }}
                      to="/abroadstudy"
                      className="nav-link"
                      id="service_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {t("abroadstudy")}
                      <button className="btn-drop"></button>
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="service_submenu"
                    >
                      {countries.map((country, index) => (
                        <li
                          key={index}
                          className="dropdown"
                          onClick={openDropdown}
                          // onMouseMove={(e) =>
                          //   e.target
                          //     ?.closest(".dropdown")
                          //     ?.querySelector(".dropdown-menu")
                          //     ?.classList.add("show")
                          // }
                          // onMouseLeave={(e) => {
                          //   e.target
                          //     ?.closest(".dropdown")
                          //     ?.querySelector(".dropdown-menu")
                          //     ?.classList.remove("show");
                          // }}
                        >
                          <Link
                            className="nav-link"
                            to={`/abroadstudy/${country?.id}`}
                            id="courses_layout_submenu"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {country?.attributes?.title}
                          </Link>
                          {country?.attributes?.universitets?.data?.length >
                            0 && (
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="courses_layout_submenu"
                            >
                              {country?.attributes?.universitets?.data.map(
                                (universitet, index) => (
                                  <li key={index}>
                                    <Link
                                      to={`/abroadstudy/${country.id}/${universitet.id}`}
                                    >
                                      {" "}
                                      {universitet?.attributes?.name?.slice(
                                        0,
                                        28
                                      )}
                                      {" ... "}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link to="/news" className="nav-link">
                      {t("news")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="nav-link">
                      {t("contact")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-link">
                      {t("about")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="nav-link">
                      {t("faq")}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col col-lg-1 col-5">
            <ul className="header_btns_group unordered_list_end">
              <li>
                <button
                  className="mobile_menu_btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_menu_dropdown"
                  aria-controls="main_menu_dropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={(e) => {
                    e.target.closest("button").classList.toggle("collapsed");
                    console.log(
                      e.target.closest("button").getAttribute("aria-expanded")
                    );
                    if (
                      e.target
                        .closest("button")
                        .getAttribute("aria-expanded") == "true"
                    ) {
                      e.target
                        .closest("button")
                        .setAttribute("aria-expanded", "false");
                      setNavbarShow(false);
                    } else {
                      e.target
                        .closest("button")
                        .setAttribute("aria-expanded", "true");
                      setNavbarShow(true);
                    }
                    // e.target
                    //   .closest("button")
                    //   .setAttribute(
                    //     "aria-expanded",
                    //     !e.target
                    //       .closest("button")
                    //       .getAttribute("aria-expanded")
                    //   );
                  }}
                >
                  <i className="far fa-bars"></i>
                </button>
              </li>
              <li>
                <select
                  defaultValue={"az"}
                  onChange={changeHandleLanguage}
                  value={localStorage.getItem("i18nextLng")}
                >
                  <option value="en">En</option>
                  <option value="az">Az</option>
                  <option value="uk">Uk</option>
                  {/* <option value="ru">Ru</option> */}
                  <option value="tr">Tr</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
