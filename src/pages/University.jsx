import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";

function University() {
  let { country } = useParams();
  let { university } = useParams();
  console.log(university);
  const [universityData, setUniversityData] = useState([]);
  const [specialties, setSpeacialties] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/universitets/${university}?populate=*`)
      .then((a) => {
        // console.log(a?.data?.data);
        setUniversityData(a?.data?.data);
        console.log(a?.data?.data?.attributes);
        setSpeacialties(a?.data?.data?.attributes?.ixtisas?.data);
        // setCountryData(a?.data?.data);
        // setUniversities(a?.data?.data?.attributes?.universitets?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [university]);
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
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="course.html">Course</a>
                    </li>
                    <li>Course Details V.1</li>
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
                          <small>Müraciət et</small>
                          <small>Müraciət et</small>
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
                      // src="/nf_education_front/images/banner/page_banner_image_1.jpg"
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
                    <h2 className="heading_text mb-0">Ixtisaslar:</h2>
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
                      src="/nf_education_front/images/icon/icon_desktop.svg"
                      alt="Collab – Online Learning Platform"
                    />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">Kurs Formatı</h3>
                    <ul className="info_list unordered_list_block">
                      {universityData?.attributes?.teshil_formati?.map((u) => (
                        <li>
                          <i className="fas fa-square"></i>
                          <span>{u}</span>
                        </li>
                      ))}
                      {/* <li>
                        <i className="fas fa-square"></i>
                        <span>Video Tutorials</span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>
                        <span>Checking the Task</span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>
                        <span>Pulvinar sapien</span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i> <span>Software</span>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6">
                <div className="service_item" data-magnetic>
                  <div className="item_icon">
                    <img
                      src="/nf_education_front/images/icon/icon_calendar.svg"
                      alt="Collab – Online Learning Platform"
                    />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">Universitet müddəti</h3>
                    <ul className="info_list unordered_list_block">
                      <li>
                        <i className="fas fa-square"></i>{" "}
                        <span>
                          {universityData?.attributes?.minimum_tehsil} -{" "}
                          {universityData?.attributes?.maximum_tehsil} il
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>
                        <span>5 Video Tutorials</span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>
                        <span>3 Hours of Consultations</span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>
                        <span>1.5 Hours Webinar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="details_section course_details_section">
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 order-lg-last">
                <div className="ps-lg-5">
                  <div className="section_heading">
                    <h2 className="heading_text">Course Content</h2>
                  </div>
                  <div className="intro_video mb-4">
                    <div className="video_wrap">
                      <img
                        src="/nf_education_front/images/video/video_poster_2.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                      <a
                        className="video_play_btn popup_video"
                        href="https://www.youtube.com/watch?v=7e90gBu4pas"
                      >
                        <span className="icon">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <p>
                    Nunc mattis enim ut tellus elementum sagittis vitae. Nisi
                    lacus sed viverra tellus in hac. Amet dictum sit amet justo
                    donec enim diam. Morbi non arcu risus quis varius quam
                    quisque id. Mi eget mauris pharetra et ultrices neque.
                    Natoque penatibus et magnis dis parturient montes nascetur.
                  </p>
                  <p>
                    Elit ullamcorper dignissim cras tincidunt lobortis feugiat.
                    Vitae sapien pellentesque habitant morbi tristique senectus
                    et netus.
                  </p>
                  <a className="btn border_dark btn_small" href="#!">
                    <span>
                      <small>
                        <img
                          src="/nf_education_front/images/icon/icon_clip.svg"
                          alt="Collab – Online Learning Platform"
                        />
                        Resources
                      </small>
                      <small>
                        <img
                          src="/nf_education_front/images/icon/icon_clip_white.svg"
                          alt="Collab – Online Learning Platform"
                        />
                        Resources
                      </small>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col col-lg-4">
                <div className="accordion style_2" id="corse_details_accordion">
                  <div className="accordion-item">
                    <div
                      className="accordion-button"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_one"
                      aria-expanded="true"
                    >
                      Section 1. Python Express Course
                    </div>
                    <div
                      id="collapse_one"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#corse_details_accordion"
                    >
                      <div className="accordion-body">
                        <p className="completed_progress">
                          <span>1/4</span> Completed
                        </p>
                        <div className="checkbox_item">
                          <input
                            id="checkbox_1_1"
                            type="checkbox"
                            checked="checked"
                          />
                          <label for="checkbox_1_1">
                            1. Basic Python Syntax introduction
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_1_2" type="checkbox" />
                          <label for="checkbox_1_2">
                            2. Expressions, Numbers, and Type Conversions
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_1_3" type="checkbox" />
                          <label for="checkbox_1_3">
                            3. Morbi Non Arcu Risus Numbers Varius Quam
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_1_4" type="checkbox" />
                          <label for="checkbox_1_4">
                            4. Branching with if Statements
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_two"
                      aria-expanded="false"
                    >
                      Section 2. Introduction to Loops
                    </div>
                    <div
                      id="collapse_two"
                      className="accordion-collapse collapse"
                      data-bs-parent="#corse_details_accordion"
                    >
                      <div className="accordion-body">
                        <p className="completed_progress">
                          <span>1/4</span> Completed
                        </p>
                        <div className="checkbox_item">
                          <input
                            id="checkbox_2_1"
                            type="checkbox"
                            checked="checked"
                          />
                          <label for="checkbox_2_1">
                            1. Basic Python Syntax introduction
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_2_2" type="checkbox" />
                          <label for="checkbox_2_2">
                            2. Expressions, Numbers, and Type Conversions
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_2_3" type="checkbox" />
                          <label for="checkbox_2_3">
                            3. Morbi Non Arcu Risus Numbers Varius Quam
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_2_4" type="checkbox" />
                          <label for="checkbox_2_4">
                            4. Branching with if Statements
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_three"
                      aria-expanded="false"
                    >
                      Section 3. Strings, Lists and Dictionaries
                    </div>
                    <div
                      id="collapse_three"
                      className="accordion-collapse collapse"
                      data-bs-parent="#corse_details_accordion"
                    >
                      <div className="accordion-body">
                        <p className="completed_progress">
                          <span>1/4</span> Completed
                        </p>
                        <div className="checkbox_item">
                          <input
                            id="checkbox_3_1"
                            type="checkbox"
                            checked="checked"
                          />
                          <label for="checkbox_3_1">
                            1. Basic Python Syntax introduction
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_3_2" type="checkbox" />
                          <label for="checkbox_3_2">
                            2. Expressions, Numbers, and Type Conversions
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_3_3" type="checkbox" />
                          <label for="checkbox_3_3">
                            3. Morbi Non Arcu Risus Numbers Varius Quam
                          </label>
                        </div>
                        <div className="checkbox_item">
                          <input id="checkbox_3_4" type="checkbox" />
                          <label for="checkbox_3_4">
                            4. Branching with if Statements
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="details_section mentor_details_section section_space_lg">
          <div className="container">
            <div className="section_space_md pt-0">
              <div className="row align-items-center">
                <div className="col col-lg-6">
                  <div className="details_image image_widget">
                    <img
                      src="/nf_education_front/images/mentor/mentor_details_image_1.jpg"
                      alt="Collab – Online Learning Platform"
                    />
                  </div>
                </div>
                <div className="col col-lg-6">
                  <div className="details_content ps-lg-5">
                    <h2 className="details_item_title">Course Instructors</h2>
                    <h3 className="mentor_name">Alex Edwards</h3>
                    <h4 className="mentor_designation">Fullstack developer</h4>
                    <ul className="meta_info_list unordered_list">
                      <li>
                        <i className="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                        <span>4.9 (22 reviews)</span>
                      </li>
                    </ul>
                    <p>
                      Scelerisque viverra mauris in aliquam. Mauris pharetra et
                      ultrices neque ornare aenean. Diam quis enim lobortis
                      scelerisque fermentum dui faucibus in. Venenatis lectus
                      magna fringilla urna porttitor rhoncus dolor. Sem
                      fringilla ut morbi tincidunt augue interdum velit euismod
                      in. Blandit volutpat maecenas volutpat blandit aliquam
                      etiam erat velit
                    </p>
                    <div className="row">
                      <div className="col col-lg-4">
                        <div className="counter_item pe-0">
                          <h3 className="counter_value">
                            <span className="counter_value_text">45</span>
                            <span>+</span>
                          </h3>
                          <p className="mb-0">Persons Mentored</p>
                        </div>
                      </div>
                      <div className="col col-lg-4">
                        <div className="counter_item pe-0">
                          <h3 className="counter_value">
                            <span className="counter_value_text">10</span>
                            <span>+</span>
                          </h3>
                          <p className="mb-0">Workshops Attended</p>
                        </div>
                      </div>
                      <div className="col col-lg-4">
                        <div className="counter_item pe-0">
                          <h3 className="counter_value">
                            <span className="counter_value_text">8</span>
                            <span>+</span>
                          </h3>
                          <p className="mb-0">Coaching Certificates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-4">
                <div className="mentor_item">
                  <div className="mentor_image">
                    <a href="mentor_details.html">
                      <img
                        src="/nf_education_front/images/mentor/mentor_image_1.jpg"
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
                        src="/nf_education_front/images/mentor/mentor_image_2.jpg"
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
                        src="/nf_education_front/images/mentor/mentor_image_3.jpg"
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
              </div>
            </div>
          </div>
        </section>
        <section className="course_deals_section section_space_lg bg_light decoration_wrap overflow-hidden">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col col-lg-5 order-lg-last">
                <div className="image_widget">
                  <img
                    src="/nf_education_front/images/about/about_image_5.jpg"
                    alt="Collab – Online Learning Platform"
                  />
                </div>
              </div>
              <div className="col col-lg-6">
                <div className="content_wrap">
                  <div className="section_heading">
                    <h2 className="heading_text">
                      Data Warehouse Concepts, Design, and Data Integration
                    </h2>
                    <p className="heading_description mb-0">
                      Tincidunt praesent semper feugiat nibh sed pulvinar proin
                      gravida hendrerit. Consectetur purus ut faucibus pulvinar
                      elementum
                    </p>
                  </div>
                  <div className="deals_countdown">
                    <ul
                      className="countdown_timer unordered_list"
                      data-countdown="2023/12/31"
                    ></ul>
                    <div className="discount_value">
                      <strong>40%</strong> <span>Sale</span>
                    </div>
                  </div>
                  <div className="btn_wrap pb-0">
                    <a className="btn border_dark" href="course.html">
                      <span>
                        <small>Explore Courses</small>
                        <small>Explore Courses</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="deco_item shape_img_1"
            data-parallax='{"y" : 130, "smoothness": 6}'
          >
            <img
              src="/nf_education_front/images/shape/shape_img_7.png"
              alt="Collab – Online Learning Platform"
            />
          </div>
          <div
            className="deco_item shape_img_2"
            data-parallax='{"x" : -130, "smoothness": 6}'
          >
            <img
              src="/nf_education_front/images/shape/shape_img_7.png"
              alt="Collab – Online Learning Platform"
            />
          </div>
          <div
            className="deco_item shape_img_3"
            data-parallax='{"y" : -130, "smoothness": 6}'
          >
            <img
              src="/nf_education_front/images/shape/shape_img_7.png"
              alt="Collab – Online Learning Platform"
            />
          </div>
        </section>
        <section className="courses_section section_space_lg">
          <div className="container">
            <div className="section_heading text-center">
              <h2 className="heading_text mb-0">Students Also Bought</h2>
            </div>
            <div className="row">
              <div className="col col-lg-4">
                <div className="course_card">
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
                          <a href="#!">Computer Science</a>
                        </li>
                      </ul>
                      <div className="item_price">
                        <span className="sale_price">$29.99</span>
                        <del className="remove_price">$39.99</del>
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
                        Programming for Everybody (Getting Started with Python)
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
              </div>
              <div className="col col-lg-4">
                <div className="course_card">
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
                          <a href="#!">Photography</a>
                        </li>
                      </ul>
                      <div className="item_price">
                        <span className="sale_price">$9.99</span>
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
                        Photography Masterclass: A Complete Guide to Photography
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
              </div>
              <div className="col col-lg-4">
                <div className="course_card">
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
                          <a href="#!">Business</a>
                        </li>
                      </ul>
                      <div className="item_price">
                        <span className="sale_price">FREE</span>
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default University;
