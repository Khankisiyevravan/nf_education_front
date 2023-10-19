import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Select from "react-select";
function Header({ lang, setLang }) {
  const headerRef = useRef();
  const location = useLocation();
  const [countries, setCountries] = useState([]);
  const [navbarShow, setNavbarShow] = useState(false);
  const { i18n, t } = useTranslation(["common"]);
  // console.log(t);
  const changeHandleLanguage = (e) => {
    // console.log();
    i18next.changeLanguage(e.value);
    setLang(e.value);
  };
  const openDropdown = (e) => {
    // e.target.classList.toggle("show");
    // console.log();
    // console.log("header work");
    console.log([...e.target.classList].some((a) => a === "btn-drop"));
    if ([...e.target.classList].some((a) => a === "btn-drop")) {
      // console.log(e.target);
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
    // console.log(lang);
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
          setCountries(response?.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [lang]);
  useEffect(() => {
    [...document.querySelectorAll(".dropdown-menu")].map((a) => {
      return () => {
        a.classList.remove("show");
        setNavbarShow(false);
      };
    });
    document
      ?.querySelector(".mobile_menu_btn")
      ?.setAttribute("aria-expanded", "false");
    console.log(location);
  }, [location]);
  const options = [
    {
      value: "az",
      label: (
        <div>
          <img
            style={{
              width: "35px",
              height: "20px",
              objectFit: "cover",
              paddingRight: "5px",
            }}
            src="/images/flag/flag_az.png"
            alt=""
          />
          AZ
        </div>
      ),
    },
    {
      value: "en",
      label: (
        <div>
          <img
            style={{
              width: "35px",
              height: "20px",
              objectFit: "cover",
              paddingRight: "5px",
            }}
            src="/images/flag/flag_en.png"
            alt=""
          />
          EN
        </div>
      ),
    },
    {
      value: "uk",
      label: (
        <div>
          <img
            style={{
              width: "35px",
              height: "20px",
              objectFit: "cover",
              paddingRight: "5px",
            }}
            src="/images/flag/flag_uk.png"
            alt=""
          />
          UK
        </div>
      ),
    },
    {
      value: "tr",
      label: (
        <div>
          <img
            style={{
              width: "35px",
              height: "20px",
              objectFit: "cover",
              paddingRight: "5px",
            }}
            src="/images/flag/flag_tr.png"
            alt=""
          />
          TR
        </div>
      ),
    },
  ];
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#fff" : "#000",
      backgroundColor: state.isSelected ? "#a0a0a0" : "#fff",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#035ab2",
      padding: "2px 10px",
      border: "1px solid black",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };
  const openDrop = (e) => {
    // console.log(e.target.closest(".dropdown"));
    if (window.innerWidth < 500) {
      e.target
        .closest(".dropdown")
        .querySelector(".dropdown-menu")
        ?.classList.toggle("show");
    }
    console.log(window.innerWidth);

    // e.target.classList.add("show");
  };
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
                  <li
                    className={
                      location.pathname === "/"
                        ? "dropdown active none"
                        : "dropdown none"
                    }
                  >
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
                    className={
                      location.pathname.includes("/abroadstudy")
                        ? "dropdown active fff"
                        : "dropdown fff"
                    }
                    // className="dropdown fff"
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
                      // to="/abroadstudy"
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
                          onClick={(e) => {
                            e.defaultPrevented = true;
                            console.log(e.target);
                            
                          }}
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
                  <li className={location.pathname === "/news" ? "active" : ""}>
                    <Link to="/news" className="nav-link">
                      {t("news")}
                    </Link>
                  </li>
                  <li
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    <Link to="/contact" className="nav-link">
                      {t("contact")}
                    </Link>
                  </li>
                  <li
                    className={location.pathname === "/about" ? "active" : ""}
                  >
                    <Link to="/about" className="nav-link">
                      {t("about")}
                    </Link>
                  </li>
                  <li className={location.pathname === "/faq" ? "active" : ""}>
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
                    // console.log(
                    //   e.target.closest("button").getAttribute("aria-expanded")
                    // );
                    console.log(
                      [...e.target?.closest("button").classList].some(
                        (a) => a === "collapsed"
                      )
                    );
                    if (
                      [...e.target?.closest("button").classList].some(
                        (a) => a === "collapsed"
                      )
                    ) {
                      console.log([
                        ...document.querySelectorAll(".dropdown-menu"),
                      ]);
                      [...document.querySelectorAll(".dropdown-menu")].map(
                        (a) => {
                          a.classList?.remove("show");
                        }
                      );
                    }
                    // console.log(
                    //   [...e.target?.closest("button").classList].some(
                    //     (a) => a === "collapsed"
                    //   )
                    // );
                    if (
                      e.target.closest("button").getAttribute("aria-expanded")
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
                  }}
                >
                  <i className="far fa-bars"></i>
                </button>
              </li>
              <li>
                {/* <div id="change_language_div">
                  <div className="lang_option">
                    <img
                      src="/images/flag/Flag_of_the_United_Kingdom.svg.png"
                      alt=""
                    />
                    AZ
                  </div>
                </div> */}
                <Select
                  onChange={(e) => {
                    console.log(e);
                    changeHandleLanguage(e);
                  }}
                  // value={localStorage.getItem("i18nextLng")}
                  options={options}
                  styles={customStyles}
                  defaultValue={{
                    label: (
                      <div>
                        <img
                          src={`/images/flag/flag_${localStorage.getItem(
                            "i18nextLng"
                          )}.png`}
                          alt=""
                        />
                        {localStorage.getItem("i18nextLng").toUpperCase()}
                      </div>
                    ),
                    value: localStorage.getItem("i18nextLng"),
                  }}
                />
              </li>
            </ul>
            {/* <select
              defaultValue={"az"}
              onChange={changeHandleLanguage}
              value={localStorage.getItem("i18nextLng")}
            >
              <option value="en">EN</option>
              <option value="az">AZ</option>
              <option value="uk">UK</option>
              <option value="tr">TR</option>
            </select> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
