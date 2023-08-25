import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";
import Discount from "../components/Discount";

function University({ lang, setLang }) {
  let { country } = useParams();
  let { university } = useParams();
  const { t } = useTranslation(["university", "home"]);
  console.log(university);
  const [universityData, setUniversityData] = useState([]);
  const [specialties, setSpeacialties] = useState([]);
  const [news, setNews] = useState([]);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/universitets/${university}?populate=deep`)
      .then((a) => {
        // console.log(a?.data?.data);
        setUniversityData(a?.data?.data);
        console.log(a?.data?.data?.attributes);
        setSpeacialties(a?.data?.data?.attributes?.ixtisas?.data);
        console.log(a);
        setStudents(a?.data?.data?.attributes?.telebelers?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [university]);
  useEffect(() => {
    let locales = universityData?.attributes?.localizations?.data;
    console.log(universityData?.attributes?.localizations?.data);
    let langId = locales?.find((l) => l?.attributes?.locale == lang);
    console.log(langId?.id);
    axios
      .get(`/api/universitets/${langId?.id}?populate=deep`)
      .then((a) => {
        // console.log(a?.data?.data);
        setUniversityData(a?.data?.data);
        console.log(a?.data?.data?.attributes);
        setSpeacialties(a?.data?.data?.attributes?.ixtisas?.data);
        console.log(a);
        setStudents(a?.data?.data?.attributes?.telebelers?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`/api/xebers?locale=${lang}&&populate=*`)
      .then((response) => {
        console.log(response?.data?.data);
        setNews(response?.data?.data.slice(0, 6));
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
            <div className="content_wrapper">
              <div className="row align-items-center">
                <div className="col col-lg-7">
                  <ul className="breadcrumb_nav unordered_list">
                    <li>
                      <Link to="/">{t("home:home")}</Link>
                    </li>
                    <li>
                      <Link
                        to={`/abroadstudy/${universityData?.attributes?.country?.data?.id}`}
                      >
                        {
                          universityData?.attributes?.country?.data?.attributes
                            ?.title
                        }
                      </Link>
                    </li>
                    <li>{t("home:university")}</li>
                  </ul>
                  <h1 className="page_title">
                    {universityData?.attributes?.name}
                  </h1>
                  <ul className="item_category_list unordered_list">
                    <li style={{ display: "flex", gap: "10px" }}>
                      {universityData?.attributes?.education_degree?.map(
                        (deg, index) => (
                          <a
                            href="#!"
                            key={index}
                            style={{ borderRadius: "8px" }}
                          >
                            {deg}
                          </a>
                        )
                      )}
                    </li>
                  </ul>
                  <ul className="meta_info_list unordered_list">
                    <li>
                      <i className="fas fa-globe"></i>{" "}
                      <span>{universityData?.attributes?.city}</span>
                    </li>
                    {/* <li>
                      <i className="fas fa-chart-bar"></i> <span>Beginner</span>
                    </li>
                    <li>
                      <i className="fas fa-clock"></i> <span>120 Hours</span>
                    </li>
                    <li>
                      <i className="fas fa-star"></i> <span>3.5 (3k reviews)</span>
                    </li> */}
                  </ul>
                  <ul className="btns_group unordered_list">
                    <li>
                      <div className="item_price">
                        <del className="remove_price">
                          ${universityData?.attributes?.dicount_price}
                        </del>
                        <span className="sale_price">
                          ${universityData?.attributes?.price}
                        </span>
                      </div>
                    </li>
                    <li>
                      <a href="pricing.html" className="btn btn_dark">
                        <span>
                          <small>{t("university:apply")}</small>
                          <small>{t("university:apply")}</small>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-lg-5">
                  <div className="image_widget page_banner_image uni">
                    <img
                      src={`https://nfeducationback-z9ad3.ondigitalocean.app${
                        universityData?.attributes?.university_image?.data &&
                        universityData?.attributes?.university_image?.data[0]
                          ?.attributes?.url
                      }`}
                      // src="/images/banner/page_banner_image_1.jpg"
                      alt="NF_education"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginTop: "50px" }}>
          <div className="container">
            <div className="row">
              <p className="col col-lg-7">
                {universityData?.attributes?.about}
              </p>
              <iframe
                className="col col-lg-5"
                // width="560"
                // height="315"
                height={300}
                src={universityData?.attributes?.video_link}
                title="YouTube video player"
                frameBorder="0"
                allow={
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                }
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        <section className="details_section courses_info_section section_space_lg">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6">
                <div className="content_wrap">
                  <div className="section_heading">
                    <h2 className="heading_text mb-0">
                      {" "}
                      {t("university:specialties")}:
                    </h2>
                  </div>
                  <ul className="info_list unordered_list_block specialist">
                    {specialties?.map((s) => (
                      <li>
                        <Link
                          to={`/abroadstudy/${country}/${university}/${s?.id}`}
                        >
                          <i className="fas fa-check"></i>
                          <span>{s?.attributes?.ixtisas}</span>
                        </Link>
                      </li>
                    ))}
                    {/* <li>
                      <i className="fas fa-check"></i>
                      <span>
                        At consectetur lorem donec massa sapien. Pulvinar sapien
                        et ligula ullamcorper malesuada proin
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        Quisque id diam vel quam elementum pulvinar. Eget felis
                        eget nunc lobortis mattis aliquam faucibus purus.
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6">
                <div className="service_item" data-magnetic>
                  <div className="item_icon">
                    <img
                      src="/images/icon/icon_desktop.svg"
                      alt="Collab – Online Learning Platform"
                    />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">{t("university:courseType")}</h3>
                    <ul className="info_list unordered_list_block">
                      {universityData?.attributes?.teshil_formati?.map((u) => (
                        <li>
                          <i className="fas fa-square"></i>
                          <span>{t(u)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6">
                <div className="service_item" data-magnetic>
                  <div className="item_icon">
                    <img
                      src="/images/icon/icon_calendar.svg"
                      alt="Collab – Online Learning Platform"
                    />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">
                      {t("university:universityDuration")}
                    </h3>
                    <ul className="info_list unordered_list_block">
                      <li>
                        <i className="fas fa-square"></i>{" "}
                        <span>
                          {universityData?.attributes?.minimum_tehsil} -{" "}
                          {universityData?.attributes?.maximum_tehsil} il
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {students.length ? (
          <section className="details_section mentor_details_section section_space_lg">
            <div className="container">
              <div className="row">
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "40px",
                    margin: "20px 0",
                  }}
                >
                  {t("university:students")}
                </h2>
              </div>
              <div className="row">
                {students.map((s) => (
                  <div className="col col-lg-4">
                    <div className="mentor_item">
                      <div className="mentor_image">
                        <a href="">
                          <img
                            src={`https://nfeducationback-z9ad3.ondigitalocean.app${s?.attributes?.sekil?.data?.attributes?.url}`}
                            alt="Collab – Online Learning Platform"
                            style={{ aspectRatio: 1 / 1, objectFit: "cover" }}
                          />
                        </a>
                      </div>
                      <div className="mentor_content">
                        <h3 className="mentor_name">
                          <a href="">
                            {s?.attributes?.ad} {s?.attributes?.soyad}
                          </a>
                        </h3>
                        <p className="mentor_designation">
                          {s?.attributes?.ixtisas}
                        </p>
                        <ul className="meta_info_list unordered_list_center mb-0">
                          {/* <li>
                          <i className="fas fa-clock"></i>{" "}
                          <span>120 Hours</span>
                        </li> */}
                          <li>
                            <i className="fas fa-star"></i>
                            <span>{s?.attributes?.tehsil_pillesi}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="col col-lg-4">
                <div className="mentor_item">
                  <div className="mentor_image">
                    <a href="mentor_details.html">
                      <img
                        src="/images/mentor/mentor_image_1.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div className="mentor_content">
                    <h3 className="mentor_name">
                      <a href="mentor_details.html">Carolyn Jackson</a>
                    </h3>
                    <p className="mentor_designation">Fullstack developer</p>
                    <ul className="meta_info_list unordered_list_center mb-0">
                      <li>
                        <i className="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                        <span>4.9 (22 reviews)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4">
                <div className="mentor_item">
                  <div className="mentor_image">
                    <a href="mentor_details.html">
                      <img
                        src="/images/mentor/mentor_image_2.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div className="mentor_content">
                    <h3 className="mentor_name">
                      <a href="mentor_details.html">William Morgan</a>
                    </h3>
                    <p className="mentor_designation">Python Mentor</p>
                    <ul className="meta_info_list unordered_list_center mb-0">
                      <li>
                        <i className="fas fa-clock"></i> <span>100 Hours</span>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>{" "}
                        <span>5 (10 reviews)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4">
                <div className="mentor_item">
                  <div className="mentor_image">
                    <a href="mentor_details.html">
                      <img
                        src="/images/mentor/mentor_image_3.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div className="mentor_content">
                    <h3 className="mentor_name">
                      <a href="mentor_details.html">Christine Nelson</a>
                    </h3>
                    <p className="mentor_designation">AQ/Mentor</p>
                    <ul className="meta_info_list unordered_list_center mb-0">
                      <li>
                        <i className="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                        <span>4.9 (22 reviews)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
        <section className="courses_section section_space_lg">
          <div className="container">
            <div className="section_heading text-center">
              <h2 className="heading_text mb-0">{t("university:news")}</h2>
            </div>
            <div className="row">
              {news.map((n, index) => (
                <div className="col col-lg-4" key={index}>
                  <div className="course_card">
                    <div className="item_image">
                      <a href="course_details.html" data-cursor-text="View">
                        <img
                          src={`https://nfeducationback-z9ad3.ondigitalocean.app${n?.attributes?.image?.data?.attributes?.url}`}
                          alt="Collab – Online Learning Platform"
                        />
                      </a>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <a href="#!">{t(n?.attributes?.xeber_tipi)}</a>
                          </li>
                          {/* <li>
                                  <a href="">20.07.2023</a>
                                </li> */}
                        </ul>
                      </div>
                      <h3 className="item_title">
                        <a href="course_details.html">{n?.attributes.Basliq}</a>
                      </h3>
                      <a className="btn_unfill" href="course_details.html">
                        <span className="btn_text">
                          {t("university:readmore")}
                        </span>
                        <span className="btn_icon">
                          <i className="fas fa-long-arrow-right"></i>
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Discount />
      </main>
    </>
  );
}

export default University;
