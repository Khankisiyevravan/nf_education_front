import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "../components/Footer";
import axios from "../api/axios";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
function Homepage({ lang, setLang }) {
  const { t } = useTranslation(["home"]);
  const [counterOn, setCounterOn] = useState(false);
  const [news, setNews] = useState([]);
  // const newsType={
  //   Televizya:{
  //     az:
  //   }
  // }
  useEffect(() => {
    axios
      .get(`/api/xebers?locale=${lang}&&populate=*`)
      .then((response) => {
        console.log(response?.data?.data);
        setNews(response?.data?.data.slice(0, 6));
      })
      .catch((err) => {
        console.log(err);
      });
    // axios.get("/api/universitets/5").then((response) => {
    //   console.log(response?.data?.data);
    //   if (response?.data?.data) {
    //   }
    // });
  }, [lang]);
  return (
    <>
      <main>
        <section className="hero_banner style_1">
          <div className="container">
            <div className="content_wrap">
              <div className="row">
                <div className="col col-lg-7">
                  <h1 className="banner_small_title">
                    {t("learningexcellent")}
                  </h1>
                  <h2 className="banner_big_title">
                    {t("bestStudyExcellent")}
                  </h2>
                  <p className="banner_description">{t("text1")}</p>
                  <ul className="banner_btns_group unordered_list">
                    <li>
                      <a className="btn btn_primary" href="course.html">
                        <span>
                          <small>{t("discoverYourself")}</small>
                          <small>{t("discoverYourself")}</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="video_play_btn text-white popup_video"
                        href="https://www.youtube.com/watch?v=8619asKUWxE"
                      >
                        <span className="icon" data-magnetic>
                          <i className="fas fa-play"></i>
                        </span>
                        <span className="text">Təhsildə Sən</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-lg-5">
                  <div className="banner_image_1 decoration_wrap">
                    <div className="image_wrap">
                      <img
                        src="/images/banner/hero_banner_img_1.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                    <div className="satisfied_student">
                      <h3 className="wrap_title">
                        220+ {t("studentAdmission")}
                      </h3>
                      <ul className="students_thumbnail unordered_list_center">
                        <li>
                          <span>
                            <img
                              src="/images/meta/student_thumbnail_1.png"
                              alt="Collab – Online Learning Platform"
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img
                              src="/images/meta/student_thumbnail_2.png"
                              alt="Collab – Online Learning Platform"
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img
                              src="/images/meta/student_thumbnail_3.png"
                              alt="Collab – Online Learning Platform"
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img
                              src="/images/meta/student_thumbnail_4.png"
                              alt="Collab – Online Learning Platform"
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img
                              src="/images/meta/student_thumbnail_5.png"
                              alt="Collab – Online Learning Platform"
                            />
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="deco_item shape_img_1"
                      data-parallax='{"y" : -130, "smoothness": 6}'
                    >
                      <img
                        src="/images/shape/shape_img_1.png"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                    <div
                      className="deco_item shape_img_2"
                      data-parallax='{"y" : 160, "smoothness": 6}'
                    >
                      <img
                        src="/images/shape/shape_img_2.png"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="expect_from_course section_space_lg">
          <div className="container">
            <div className="row">
              <div className="col col-lg-5">
                <div className="section_heading">
                  <h2 className="heading_text">{t("ourServices")}</h2>
                  <p className="heading_description mb-0"></p>
                </div>
                <div className="image_widget">
                  <img
                    src="/images/about/about_image_1.jpg"
                    alt="Collab – Online Learning Platform"
                  />
                </div>
              </div>
              <div className="col col-lg-7">
                <div className="btn_wrap pt-0 d-none d-lg-flex justify-content-end">
                  <a
                    className="btn border_dark"
                    target="_blank"
                    href="https://wa.me/994507640009?text=Salam. Nömrənizi nf-edu.com saytından götürmüşəm, suallarımı cavablandıra bilərsiniz?"
                  >
                    <span>
                      <small>{t("contactWithWhatsapp")}</small>
                      <small>{t("contactWithWhatsapp")}</small>
                    </span>
                  </a>
                </div>
                <div className="row">
                  <div className="col col-md-6">
                    <div className="service_item" data-magnetic>
                      <div className="item_icon">
                        <img
                          src="/images/service/icon_academic_cap.svg"
                          alt="Collab – Online Learning Platform"
                        />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t("service1")}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="service_item" data-magnetic>
                      <div className="item_icon">
                        <img
                          src="/images/service/icon_physics.svg"
                          alt="Collab – Online Learning Platform"
                        />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t("service2")}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="service_item" data-magnetic>
                      <div className="item_icon">
                        <img
                          src="/images/service/icon_communication.svg"
                          alt="Collab – Online Learning Platform"
                        />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t("service3")}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="service_item" data-magnetic>
                      <div className="item_icon">
                        <img
                          src="/images/service/icon_diploma.svg"
                          alt="Collab – Online Learning Platform"
                        />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t("service4")}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn_wrap pb-0 d-block d-lg-none text-center">
                  <a
                    className="btn border_dark"
                    href="https://wa.me/994507640009?text=Salam. Nömrənizi nf-edu.com saytından götürmüşəm, suallarımı cavablandıra bilərsiniz?"
                  >
                    <span>
                      <small>{t("contactWithWhatsapp")}</small>
                      <small>{t("contactWithWhatsapp")}</small>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="counter_section bg_light section_space_md">
          <div className="container">
            <div className="row">
              <div className="col col-lg-3 col-md-6">
                <div className="counter_item">
                  <h3 className="counter_value">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      {counterOn && (
                        <span className="counter_value_text">
                          <CountUp start={0} end={50} duration={3} />
                        </span>
                      )}
                      <span>+</span>
                    </ScrollTrigger>
                  </h3>
                  <p className="mb-0">{t("professionalChoose")}</p>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6">
                <div className="counter_item">
                  <h3 className="counter_value">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      {counterOn && (
                        <span className="counter_value_text">
                          <CountUp start={0} end={320} duration={3} />
                        </span>
                      )}
                      <span>+</span>
                    </ScrollTrigger>
                  </h3>
                  <p className="mb-0">{t("successfulStudentAdmission")}</p>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6">
                <div className="counter_item">
                  <h3 className="counter_value">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      {counterOn && (
                        <span className="counter_value_text">
                          <CountUp start={0} end={45} duration={3} />
                        </span>
                      )}
                      <span>+</span>
                    </ScrollTrigger>
                  </h3>
                  <p className="mb-0">
                    {t("collaborationWithDifferentUniversities")}
                  </p>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6">
                <div className="counter_item">
                  <h3 className="counter_value">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      {counterOn && (
                        <span className="counter_value_text">
                          <CountUp start={0} end={6} duration={3} />
                        </span>
                      )}
                      <span>+</span>
                    </ScrollTrigger>
                  </h3>
                  <p className="mb-0">{t("collaborationWithCountries")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="courses_section section_space_lg">
          <div className="container">
            <div className="section_heading">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col col-lg-6">
                  <h2 className="heading_text mb-0">{t("news")}</h2>
                </div>
                <div className="col col-lg-5">
                  <p className="heading_description mb-0 text-lg-end">
                    {t("slogan1")}
                  </p>
                </div>
              </div>
            </div>
            <div className="tabs_wrapper">
              <ul className="nav" role="tablist">
                <li role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#teb_hr"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-users"></i> <span>{t("all")}</span>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#teb_photography"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="fas fa-camera"></i> <span>{t("tv")}</span>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#teb_programming"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="fas fa-chart-network"></i>
                    <span>{t("germany")}</span>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#teb_marketing"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="fas fa-lightbulb-on"></i>{" "}
                    <span>{t("ukraine")}</span>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#teb_design"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="fas fa-palette"></i>
                    <span>{t("poland")}</span>
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="teb_hr"
                  role="tabpanel"
                >
                  <div className="row">
                    {news?.map((n, index) => (
                      <div className="col col-lg-4" key={index}>
                        <div className="course_card">
                          <div className="item_image">
                            <a
                              href="course_details.html"
                              data-cursor-text="View"
                            >
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
                                  <a href="#!">
                                    {t(n?.attributes?.xeber_tipi)}
                                  </a>
                                </li>
                                {/* <li>
                                  <a href="">20.07.2023</a>
                                </li> */}
                              </ul>
                            </div>
                            <h3 className="item_title">
                              <a href="course_details.html">
                                {n?.attributes.Basliq}
                              </a>
                            </h3>
                            <a
                              className="btn_unfill"
                              href="course_details.html"
                            >
                              <span className="btn_text">{t("readmore")}</span>
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
              </div>
            </div>
          </div>
        </section>
        <section className="advertisement_section bg_dark">
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-lg-6">
                <div className="section_heading mb-lg-0">
                  <h2 className="heading_text text-white">{t("slogan2")}</h2>
                  <p className="heading_description mb-0 text-white">
                    {t("text2")}
                  </p>
                  <div className="btn_wrap pb-0">
                    <a className="btn btn_primary" href="course.html">
                      <span>
                        <small>{t("professional")}</small>
                        <small>{t("professional")}</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-6">
                <div className="row images_group decoration_wrap">
                  <div className="col col-md-6 col-sm-6 col-6">
                    <div className="image_wrap">
                      <img
                        src="/images/advertisement/grid_img_1.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                    <div className="image_wrap">
                      <img
                        src="/images/advertisement/grid_img_2.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6 col-sm-6 col-6">
                    <div className="image_wrap">
                      <img
                        src="/images/advertisement/grid_img_3.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                    <div className="image_wrap">
                      <img
                        src="/images/advertisement/grid_img_4.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                  </div>
                  <div
                    className="deco_item shape_img_1"
                    data-parallax='{"y" : -80, "smoothness": 6}'
                  >
                    <img
                      src="/images/shape/shape_img_3.png"
                      alt="Collab – Online Learning Platform"
                    />
                  </div>
                  <div
                    className="deco_item shape_img_2"
                    data-parallax='{"y" : 80, "smoothness": 6}'
                  >
                    <img
                      src="/images/shape/shape_img_3.png"
                      alt="Collab – Online Learning Platform"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="courses_info_section section_space_lg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-lg-6">
                <div className="image_widget">
                  <img
                    src="/images/about/about_image_2.jpg"
                    alt="Collab – Online Learning Platform"
                  />
                </div>
              </div>
              <div className="col col-lg-6">
                <div className="content_wrap ps-lg-3">
                  <div className="section_heading">
                    <h2 className="heading_text">{t("slogan3")}</h2>
                    <p className="heading_description mb-0">
                      {t("adventagesTitle")}
                    </p>
                  </div>
                  <ul className="info_list unordered_list_block">
                    <li>
                      <i className="fas fa-square"></i>
                      <span>{t("advantage1")}</span>
                    </li>
                    <li>
                      <i className="fas fa-square"></i>
                      <span>{t("advantage2")}</span>
                    </li>
                    <li>
                      <i className="fas fa-square"></i>
                      <span>{t("advantage3")}</span>
                    </li>
                    <li>
                      <i className="fas fa-square"></i>
                      <span>{t("advantage4")}</span>
                    </li>
                    <li>
                      <i className="fas fa-square"></i>
                      <span>{t("advantage5")}</span>
                    </li>
                    <li>
                      <i className="fas fa-square"></i>
                      <span>{t("advantage6")}</span>
                    </li>
                  </ul>
                  <div className="btn_wrap pb-0">
                    <a className="btn btn_dark" href="mentor.html">
                      <span>
                        <small>{t("university")}</small>
                        <small>{t("university")}</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing_section section_space_lg bg_light">
          <div className="container decoration_wrap">
            <div className="section_heading text-center">
              <h2 className="heading_text mb-0">{t("universityRating")}</h2>
            </div>
            <div className="pricing_cards_wrapper row align-items-center">
              <div className="col col-lg-4">
                <div className="pricing_card text-center tilt">
                  <h3 className="card_heading">
                    ХARKОV MİLLİ DAXİLİ İŞLƏR UNİVERSİTETİ
                  </h3>
                  <div className="pricing_wrap">
                    <span className="price_value">
                      <sup>$</sup> 1350
                    </span>
                    <small className="d-block">{t("yearPay")}</small>
                  </div>
                  <hr />
                  <ul className="info_list unordered_list_block text-start">
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>İstintaq fakültəsi</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Cinayət Polis Fakültəsi</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Profilaktika Polis bölmələri</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Kiberpolisiya fakültəsi</span>
                    </li>
                  </ul>
                  <div className="btn_wrap pb-0">
                    <a className="btn border_dark" href="#!">
                      <span>
                        <small>{t("readmore")}</small>
                        <small>{t("readmore")}</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4">
                <div className="pricing_card text-center bg_dark tilt">
                  <div className="card_badge">birinci</div>
                  <h3 className="card_heading">
                    YAROSLAV MUDRIY ADINA MİLLİ HÜQUQ UNİVERSİTETİ
                  </h3>
                  <div className="pricing_wrap">
                    <span className="price_value">
                      <sup>$</sup>1350
                    </span>
                    <small className="d-block">per 12 mounth</small>
                  </div>
                  <hr />
                  <ul className="info_list unordered_list_block text-start">
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Hukuk</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Hukuk</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Uluslararası Hukuk</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Ekonomi</span>
                    </li>
                  </ul>
                  <div className="btn_wrap pb-0">
                    <a className="btn btn_primary" href="#!">
                      <span>
                        <small>{t("readmore")}</small>
                        <small>{t("readmore")}</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4">
                <div className="pricing_card text-center tilt">
                  <h3 className="card_heading">
                    S. KUZNETS ADİNA XARKOV MİLLİ İQTİSADİYYAT UNİVERSİTETİ
                  </h3>
                  <div className="pricing_wrap">
                    <span className="price_value">
                      <sup>$</sup>1200
                    </span>
                    <small className="d-block">per 12 mounth</small>
                  </div>
                  <hr />
                  <ul className="info_list unordered_list_block text-start">
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Tourism Management</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Innovation Management</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Marketing</span>
                    </li>
                  </ul>
                  <div className="btn_wrap pb-0">
                    <a className="btn border_dark" href="#!">
                      <span>
                        <small>{t("readmore")}</small>
                        <small>{t("readmore")}</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="deco_item shape_img_1"
              data-parallax='{"y" : 130, "smoothness": 6}'
            >
              <img
                src="/images/shape/shape_img_4.png"
                alt="Collab – Online Learning Platform"
              />
            </div>
            <div
              className="deco_item shape_img_2"
              data-parallax='{"y" : -130, "smoothness": 6}'
            >
              <img
                src="/images/shape/shape_img_5.png"
                alt="Collab – Online Learning Platform"
              />
            </div>
          </div>
        </section>
        <section className="testimonial_section section_space_lg">
          <div className="container">
            <div className="section_heading">
              <div className="row align-items-center">
                <div className="col col-lg-7">
                  <h2 className="heading_text mb-0">{t("ourStudents")}</h2>
                </div>
                <div className="col col-lg-5 d-lg-flex d-none justify-content-end">
                  <div className="carousel_arrow">
                    <button type="button" className="cc2c_left_arrow">
                      <i className="far fa-arrow-left"></i>
                      <i className="far fa-arrow-left"></i>
                    </button>
                    <button type="button" className="cc2c_right_arrow">
                      <i className="far fa-arrow-right"></i>
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              navigation={true}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <div className="carousel_item">
                  <div className="testimonial_item">
                    <div className="testimonial_image">
                      <img
                        src="/images/testimonial/testimonial_img_1.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                    <div className="testimonial_content">
                      <ul className="rating_star unordered_list">
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <h3 className="testimonial_title">
                        Very interesting course
                      </h3>
                      <p>
                        Elit ut aliquam purus sit amet luctus venenatis lectus
                        magna. Sed nisi lacus sed viverra tellus in hac
                        habitasse platea
                      </p>
                      <h4 className="testimonial_designation">
                        Course: Academic Information Seeking
                      </h4>
                      <h5 className="testimonial_name">Matthew Lina</h5>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="carousel_item">
                  <div className="testimonial_item">
                    <div className="testimonial_image">
                      <img
                        src="/images/testimonial/testimonial_img_2.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                    <div className="testimonial_content">
                      <ul className="rating_star unordered_list">
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <h3 className="testimonial_title">
                        Very interesting course
                      </h3>
                      <p>
                        Elit ut aliquam purus sit amet luctus venenatis lectus
                        magna. Sed nisi lacus sed viverra tellus in hac
                        habitasse platea
                      </p>
                      <h4 className="testimonial_designation">
                        Course: Academic Information Seeking
                      </h4>
                      <h5 className="testimonial_name">Nahia Colunga</h5>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="carousel_item">
                  <div className="testimonial_item">
                    <div className="testimonial_image">
                      <img
                        src="/images/testimonial/testimonial_img_1.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                    <div className="testimonial_content">
                      <ul className="rating_star unordered_list">
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <h3 className="testimonial_title">
                        Very interesting course
                      </h3>
                      <p>
                        Elit ut aliquam purus sit amet luctus venenatis lectus
                        magna. Sed nisi lacus sed viverra tellus in hac
                        habitasse platea
                      </p>
                      <h4 className="testimonial_designation">
                        Course: Academic Information Seeking
                      </h4>
                      <h5 className="testimonial_name">Matthew Lina</h5>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="carousel_item">
                  <div className="testimonial_item">
                    <div className="testimonial_image">
                      <img
                        src="/images/testimonial/testimonial_img_2.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                    <div className="testimonial_content">
                      <ul className="rating_star unordered_list">
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <h3 className="testimonial_title">
                        Very interesting course
                      </h3>
                      <p>
                        Elit ut aliquam purus sit amet luctus venenatis lectus
                        magna. Sed nisi lacus sed viverra tellus in hac
                        habitasse platea
                      </p>
                      <h4 className="testimonial_designation">
                        Course: Academic Information Seeking
                      </h4>
                      <h5 className="testimonial_name">Nahia Colunga</h5>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="newslatter_section">
          <div className="container">
            <div
              className="newslatter_box"
              style={{
                backgroundImage: "url(`/images/shape/shape_img_6.svg`)",
              }}
            >
              <div className="row justify-content-center">
                <div className="col col-lg-6">
                  <div className="section_heading text-center">
                    <h2 className="heading_text">{t("slogan4")}</h2>
                    <p className="heading_description mb-0">{t("text4")}</p>
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
      {/* <div>Homepage</div> */}
    </>
  );
}

export default Homepage;
