import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";
function CountryStudy({ lang, setLang }) {
  console.log(useParams());
  let { country } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [universities, setUniversities] = useState([]);
  const { t } = useTranslation(["home"]);
  const getCountries = () => {
    axios
      .get(`/api/countries/${country}?populate=deep`)
      .then((response) => {
        console.log(response?.data?.data);
        setCountryData(response?.data?.data);
        setUniversities(response?.data?.data?.attributes?.universitets?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCountries();
  }, [country]);
  useEffect(() => {
    let locales = countryData?.attributes?.localizations?.data;
    console.log(countryData?.attributes?.localizations?.data);
    let langId = locales?.find((l) => l?.attributes?.locale == lang);
    console.log(langId?.id);
    axios
      .get(`/api/countries/${langId?.id}?populate=deep`)
      .then((response) => {
        console.log(response?.data?.data);
        setCountryData(response?.data?.data);
        setUniversities(response?.data?.data?.attributes?.universitets?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  return (
    <>
      <main>
        <section className="page_banner">
          <div className="container">
            <div
              className="content_wrapper"
              //   style={{
              //     backgroundImage: "url(nf_education_front/images/banner/page_banner_image.png)",
              //   }}
              //   style={{
              //     backgroundImage: `url(http://localhost:1337${countryData?.attributes?.logo?.data?.attributes?.url})`,
              //   }}
            >
              <div className="row align-items-center">
                <div className="col col-lg-8">
                  <ul className="breadcrumb_nav unordered_list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Courses</li>
                  </ul>
                  <h1 className="page_title">
                    {countryData?.attributes?.title?.toUpperCase()}
                  </h1>
                  <p className="page_description">
                    {countryData?.attributes?.about}
                  </p>
                  {/* <form action="#">
                    <div className="form_item mb-0">
                      <input
                        type="search"
                        name="search"
                        placeholder="What do you want to learn ?"
                      />
                      <button type="submit" className="btn btn_dark">
                        <span>
                          <small>Search</small> <small>Search</small>
                        </span>
                      </button>
                    </div>
                  </form> */}
                </div>
                <div className="col col-lg-4">
                  <img
                    src={`http://localhost:1337${countryData?.attributes?.logo?.data?.attributes?.url}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="courses_archive_section section_space_lg">
          <div className="container">
            <div className="row">
              <div className="col col-lg-12">
                {universities?.map((uni, index) => (
                  <Link
                    className="course_card list_layout"
                    key={index}
                    to={`/abroadstudy/${country}/${uni.id}`}
                  >
                    <div className="item_image">
                      <a data-cursor-text="View">
                        <img
                          //   src="/nf_education_front/images/course/course_image_1.jpg"
                          src={`http://localhost:1337${uni?.attributes?.image?.data?.attributes?.url}`}
                          alt=""
                        />
                        {}
                      </a>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            {uni?.attributes?.education_degree?.map(
                              (deg, index) => (
                                <a href="#!" key={index}>
                                  {deg}
                                </a>
                              )
                            )}
                          </li>
                        </ul>
                        <div className="item_price">
                          <span className="sale_price">
                            {uni?.attributes?.price &&
                              `$${uni?.attributes?.price}`}
                          </span>
                          <del className="remove_price">
                            {uni?.attributes?.dicount_price &&
                              `$${uni?.attributes?.dicount_price}`}
                          </del>
                        </div>
                      </div>
                      <ul className="meta_info_list unordered_list">
                        <li>
                          <i className="fas fa-globe"></i>{" "}
                          <span>{uni?.attributes?.city}</span>
                        </li>
                        {/* <li>
                          <i className="fas fa-chart-bar"></i>{" "}
                          <span>Beginner</span>
                        </li>
                        <li>
                          <i className="fas fa-clock"></i>{" "}
                          <span>120 Hours</span>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                          <span>3.5 (3k reviews)</span>
                        </li> */}
                      </ul>
                      <h3 className="item_title">
                        <a href="course_details.html">
                          {uni?.attributes?.name}
                        </a>
                      </h3>
                      <a className="btn_unfill" href="course_details.html">
                        <span className="btn_text">Ətraflı</span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </Link>
                ))}
                {/* <div className="course_card list_layout">
                  <div className="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="/nf_education_front/images/course/course_image_1.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div className="item_content">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <ul className="item_category_list unordered_list">
                        <li>
                          <a href="#!">marketing</a>
                        </li>
                      </ul>
                      <div className="item_price">
                        <span className="sale_price">$19.99</span>
                        <del className="remove_price">$29.99</del>
                      </div>
                    </div>
                    <ul className="meta_info_list unordered_list">
                      <li>
                        <i className="fas fa-chart-bar"></i>{" "}
                        <span>Beginner</span>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 className="item_title">
                      <a href="course_details.html">
                        Marketing Channel Strategy & B2B2C Routes to Market
                      </a>
                    </h3>
                    <a className="btn_unfill" href="course_details.html">
                      <span className="btn_text">View Course</span>
                      <span className="btn_icon">
                        <i className="fas fa-long-arrow-right"></i>
                        <i className="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="course_card list_layout">
                  <div className="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="/nf_education_front/images/course/course_image_2.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div className="item_content">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <ul className="item_category_list unordered_list">
                        <li>
                          <a href="#!">Programming</a>
                        </li>
                      </ul>
                      <div className="item_price">
                        <span className="sale_price">$14.99</span>
                      </div>
                    </div>
                    <ul className="meta_info_list unordered_list">
                      <li>
                        <i className="fas fa-chart-bar"></i>{" "}
                        <span>Beginner</span>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 className="item_title">
                      <a href="course_details.html">
                        Programming Foundations with JavaScript, HTML and CSS
                      </a>
                    </h3>
                    <a className="btn_unfill" href="course_details.html">
                      <span className="btn_text">View Course</span>
                      <span className="btn_icon">
                        <i className="fas fa-long-arrow-right"></i>
                        <i className="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="course_card list_layout">
                  <div className="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="/nf_education_front/images/course/course_image_3.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div className="item_content">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <ul className="item_category_list unordered_list">
                        <li>
                          <a href="#!">Programming</a>
                        </li>
                      </ul>
                      <div className="item_price">
                        <span className="sale_price">$15.69</span>
                      </div>
                    </div>
                    <ul className="meta_info_list unordered_list">
                      <li>
                        <i className="fas fa-chart-bar"></i>{" "}
                        <span>Beginner</span>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 className="item_title">
                      <a href="course_details.html">
                        Introduction to Computer Science and Programming
                      </a>
                    </h3>
                    <a className="btn_unfill" href="course_details.html">
                      <span className="btn_text">View Course</span>
                      <span className="btn_icon">
                        <i className="fas fa-long-arrow-right"></i>
                        <i className="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="course_card list_layout">
                  <div className="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="/nf_education_front/images/course/course_image_1.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div className="item_content">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <ul className="item_category_list unordered_list">
                        <li>
                          <a href="#!">bissines</a>
                        </li>
                      </ul>
                      <div className="item_price">
                        <span className="sale_price">$29.99</span>
                      </div>
                    </div>
                    <ul className="meta_info_list unordered_list">
                      <li>
                        <i className="fas fa-chart-bar"></i>{" "}
                        <span>Beginner</span>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 className="item_title">
                      <a href="course_details.html">
                        Project Management Principles and Practices
                      </a>
                    </h3>
                    <a className="btn_unfill" href="course_details.html">
                      <span className="btn_text">View Course</span>
                      <span className="btn_icon">
                        <i className="fas fa-long-arrow-right"></i>
                        <i className="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="course_card list_layout">
                  <div className="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="/nf_education_front/images/course/course_image_2.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div className="item_content">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <ul className="item_category_list unordered_list">
                        <li>
                          <a href="#!">programming</a>
                        </li>
                      </ul>
                      <div className="item_price">
                        <span className="sale_price">$12.99</span>
                        <del className="remove_price">$19.99</del>
                      </div>
                    </div>
                    <ul className="meta_info_list unordered_list">
                      <li>
                        <i className="fas fa-chart-bar"></i>{" "}
                        <span>Beginner</span>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 className="item_title">
                      <a href="course_details.html">
                        Java Programming: Principles of Software Design
                      </a>
                    </h3>
                    <a className="btn_unfill" href="course_details.html">
                      <span className="btn_text">View Course</span>
                      <span className="btn_icon">
                        <i className="fas fa-long-arrow-right"></i>
                        <i className="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div> */}
                <div className="pagination_wrap">
                  <ul className="pagination_nav unordered_list">
                    <li>
                      <a href="#!">
                        <i className="fas fa-long-arrow-left"></i>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#!">1</a>
                    </li>
                    <li>
                      <a href="#!">2</a>
                    </li>
                    <li>
                      <a href="#!">3</a>
                    </li>
                    <li>
                      <a href="#!">...</a>
                    </li>
                    <li>
                      <a href="#!">12</a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fas fa-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col col-lg-3">
                <aside className="sidebar filter_offcanvas">
                  <div className="widget">
                    <div
                      className="widget_title"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_category"
                      aria-expanded="true"
                      aria-controls="collapse_category"
                    >
                      Category
                    </div>
                    <div className="collapse show" id="collapse_category">
                      <div className="card card-body">
                        <div className="checkbox_item">
                          <input id="checkbox_design" type="checkbox" />
                          <label htmlFor="checkbox_design">
                            <span>Design</span>
                            <span>(18)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_it_software" type="checkbox" />
                          <label htmlFor="checkbox_it_software">
                            <span>IT & Software</span>
                            <span>(11)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_development" type="checkbox" />
                          <label htmlFor="checkbox_development">
                            <span>Development</span>
                            <span>(10)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_marketing" type="checkbox" />
                          <label htmlFor="checkbox_marketing">
                            <span>Marketing</span>
                            <span>(4)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_business" type="checkbox" />
                          <label htmlFor="checkbox_business">
                            <span>Business</span>
                            <span>(8)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ratings_widget widget">
                    <div
                      className="widget_title"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_ratings"
                      aria-expanded="true"
                      aria-controls="collapse_ratings"
                    >
                      Ratings
                    </div>
                    <div className="collapse show" id="collapse_ratings">
                      <div className="card card-body">
                        <div className="checkbox_item">
                          <input id="checkbox_star5" type="checkbox" />
                          <label htmlFor="checkbox_star5">
                            <span>
                              <i className="fas fa-star"></i> 5 stars{" "}
                            </span>
                            <span>(23)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_star4half" type="checkbox" />
                          <label htmlFor="checkbox_star4half">
                            <span>
                              <i className="fas fa-star"></i> 4.5 stars{" "}
                            </span>
                            <span>(22)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_star4" type="checkbox" />
                          <label htmlFor="checkbox_star4">
                            <span>
                              <i className="fas fa-star"></i> 4 stars{" "}
                            </span>
                            <span>(20)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_star3half" type="checkbox" />
                          <label htmlFor="checkbox_star3half">
                            <span>
                              <i className="fas fa-star"></i> 3.5 stars{" "}
                            </span>
                            <span>(18)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <div
                      className="widget_title"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_instructors"
                      aria-expanded="true"
                      aria-controls="collapse_instructors"
                    >
                      Instructors
                    </div>
                    <div className="collapse show" id="collapse_instructors">
                      <div className="card card-body">
                        <div className="checkbox_item">
                          <input id="checkbox_lisa_baker" type="checkbox" />
                          <label htmlFor="checkbox_lisa_baker">
                            <span>Lisa Baker</span>
                            <span>(18)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_brandy_carlson" type="checkbox" />
                          <label htmlFor="checkbox_brandy_carlson">
                            <span>Brandy Carlson</span>
                            <span>(10)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_kevin_taylor" type="checkbox" />
                          <label htmlFor="checkbox_kevin_taylor">
                            <span>Kevin Taylor</span>
                            <span>(11)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input
                            id="checkbox_catherine_parker"
                            type="checkbox"
                          />
                          <label htmlFor="checkbox_catherine_parker">
                            <span>Catherine Parker</span>
                            <span>(11)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <div
                      className="widget_title"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_price"
                      aria-expanded="true"
                      aria-controls="collapse_price"
                    >
                      Price
                    </div>
                    <div className="collapse show" id="collapse_price">
                      <div className="card card-body">
                        <div className="checkbox_item">
                          <input id="checkbox_all" type="checkbox" />
                          <label htmlFor="checkbox_all">
                            <span>All</span>
                            <span>(18)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_free" type="checkbox" />
                          <label htmlFor="checkbox_free">
                            <span>FREE</span>
                            <span>(10)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_paid" type="checkbox" />
                          <label htmlFor="checkbox_paid">
                            <span>Paid</span>
                            <span>(11)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <div
                      className="widget_title"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_level"
                      aria-expanded="true"
                      aria-controls="collapse_level"
                    >
                      Level
                    </div>
                    <div className="collapse show" id="collapse_level">
                      <div className="card card-body">
                        <div className="checkbox_item">
                          <input id="checkbox_all_levels" type="checkbox" />
                          <label htmlFor="checkbox_all_levels">
                            <span>All Levels</span>
                            <span>(18)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_beginner" type="checkbox" />
                          <label htmlFor="checkbox_beginner">
                            <span>Beginner</span>
                            <span>(10)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_intermediate" type="checkbox" />
                          <label htmlFor="checkbox_intermediate">
                            <span>Intermediate</span>
                            <span>(11)</span>
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_expert" type="checkbox" />
                          <label htmlFor="checkbox_expert">
                            <span>Expert</span>
                            <span>(11)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div> */}
            </div>
          </div>
        </section>
        <section className="newslatter_section">
          <div className="container">
            <div
              className="newslatter_box"
              style={{
                backgroundImage: "url(`nf_education_front/images/shape/shape_img_6.svg`)",
              }}
              //   style="background-image: url(assetsnf_education_front/images/shape/shape_img_6.svg)"
            >
              <div className="row justify-content-center">
                <div className="col col-lg-6">
                  <div className="section_heading text-center">
                    <h2 className="heading_text">
                    {t("slogan4")}
                    </h2>
                    <p className="heading_description mb-0">
                    {t("text4")}
                    </p>
                  </div>
                  <form action="#">
                    <div className="form_item m-0">
                      <input
                        type="email"
                        name="email"
                        placeholder={t("yourEmail")}
                      />
                      <button type="submit" className="btn btn_dark">
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
      </main>
    </>
  );
}

export default CountryStudy;
