import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
function Header({ lang, setLang }) {
  const headerRef = useRef();
  const [countries, setCountries] = useState([]);
  const { i18n, t } = useTranslation(["common"]);
  // console.log(t);
  const changeHandleLanguage = (e) => {
    // console.log();
    i18next.changeLanguage(e.target.value);
    setLang(e.target.value);
  };
  useEffect(() => {
    let langCode = localStorage.getItem("i18nextLng");
    if (langCode?.length > 2) {
      i18next.changeLanguage("az");
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
    axios
      .get(`/api/countries?locale=${lang}&&populate=*`)
      .then((response) => {
        console.log(response);
        setCountries(response?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(lang);
  }, [lang]);
  return (
    <header className="site_header site_header_1" ref={headerRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-4 col-5">
            <div className="site_logo">
              <Link className="site_link" to="/">
                <img src="/images/logo/logo-f.png" alt="" />

                {/* <img
                  src={`http://localhost:1337${countries[0]?.attributes?.logo?.data?.attributes?.url}`}
                  alt=""
                /> */}
                <span>NF Education</span>
              </Link>
            </div>
          </div>
          <div className="col col-lg-7 col-2">
            <nav className="main_menu navbar navbar-expand-lg">
              <div
                className="main_menu_inner collapse navbar-collapse justify-content-center"
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
                    onMouseMove={(e) =>
                      e.target
                        ?.closest(".dropdown")
                        ?.querySelector(".dropdown-menu")
                        ?.classList.add("show")
                    }
                    onMouseLeave={(e) => {
                      e.target
                        ?.closest(".dropdown")
                        ?.querySelector(".dropdown-menu")
                        ?.classList.remove("show");
                      e.target
                        ?.closest(".dropdown.fff")
                        ?.querySelector(".dropdown-menu")
                        ?.classList.remove("show");
                    }}
                  >
                    <Link
                      to="/abroadstudy"
                      className="nav-link"
                      id="service_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {t("abroadstudy")}
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="service_submenu"
                    >
                      {countries.map((country, index) => (
                        <li
                          key={index}
                          className="dropdown"
                          onMouseMove={(e) =>
                            e.target
                              ?.closest(".dropdown")
                              ?.querySelector(".dropdown-menu")
                              ?.classList.add("show")
                          }
                          onMouseLeave={(e) => {
                            e.target
                              ?.closest(".dropdown")
                              ?.querySelector(".dropdown-menu")
                              ?.classList.remove("show");
                          }}
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
                  {/* <li
                    className="dropdown fff"
                    onMouseMove={(e) =>
                      e.target
                        .closest(".dropdown")
                        .querySelector(".dropdown-menu")
                        .classList.add("show")
                    }
                    onMouseLeave={(e) => {
                      e.target
                        .closest(".dropdown")
                        .querySelector(".dropdown-menu")
                        .classList.remove("show");
                      e.target
                        .closest(".dropdown.fff")
                        .querySelector(".dropdown-menu")
                        .classList.remove("show");
                    }}
                  >
                    <a
                      className="nav-link"
                      href="#"
                      id="pages_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="pages_submenu"
                    >
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li
                        className="dropdown"
                        onMouseMove={(e) =>
                          e.target
                            .closest(".dropdown")
                            .querySelector(".dropdown-menu")
                            .classList.add("show")
                        }
                        onMouseLeave={(e) => {
                          e.target
                            .closest(".dropdown")
                            .querySelector(".dropdown-menu")
                            .classList.remove("show");
                        }}
                      >
                        <a
                          className="nav-link"
                          href="#"
                          id="mentors_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Our Mentors
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="mentors_submenu"
                        >
                          <li>
                            <a href="mentor.html">Mentors</a>
                          </li>
                          <li>
                            <a href="mentor_details.html">Mentors Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="faq.html">F.A.Q.</a>
                      </li>
                      <li
                        className="dropdown"
                        onMouseMove={(e) =>
                          e.target
                            .closest(".dropdown")
                            .querySelector(".dropdown-menu")
                            .classList.add("show")
                        }
                        onMouseLeave={(e) => {
                          e.target
                            .closest(".dropdown")
                            .querySelector(".dropdown-menu")
                            .classList.remove("show");
                        }}
                      >
                        <a
                          className="nav-link"
                          href="#"
                          id="events_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Our Events
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="events_submenu"
                        >
                          <li>
                            <a href="event.html">Events</a>
                          </li>
                          <li>
                            <a href="event_details.html">Event Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="error.html">404 Error</a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li
                    className="dropdown"
                    onMouseMove={(e) =>
                      e.target
                        .closest(".dropdown")
                        .querySelector(".dropdown-menu")
                        .classList.add("show")
                    }
                    onMouseLeave={(e) => {
                      e.target
                        .closest(".dropdown")
                        .querySelector(".dropdown-menu")
                        .classList.remove("show");
                    }}
                  >
                    <a
                      className="nav-link"
                      href="#"
                      id="blog_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="blog_submenu"
                    >
                      <li>
                        <a href="blog.html">Our Blogs</a>
                      </li>
                      <li>
                        <a href="blog_details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li> */}

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
