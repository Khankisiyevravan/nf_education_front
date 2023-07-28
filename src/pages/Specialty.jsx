import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

function Specialty() {
  // /api/ixtisaslars/:id
  let { country } = useParams();
  let { university } = useParams();
  let { special } = useParams();
  const [specialtyData, setSpecialtyData] = useState([]);
  console.log(country, university, special);
  useEffect(() => {
    axios
      .get(`/api/ixtisaslars/${special}?populate=*`)
      .then((a) => {
        console.log(a?.data?.data?.attributes);
        setSpecialtyData(a?.data?.data?.attributes);
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
                    <li>Course Details V.2</li>
                  </ul>
                  <h1 className="page_title">{specialtyData?.ixtisas}</h1>
                  <ul className="info_list unordered_list_block pb-0">
                    <li>
                      <i className="fas fa-check"></i>
                      <span>{specialtyData?.haqqinda}</span>
                    </li>
                    {/* <li>
                      <i className="fas fa-check"></i>
                      <span>
                        At consectetur lorem donec massa sapien. Pulvinar sapien
                        et ligula ullamcorper malesuada proin
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="details_section course_details_section">
          <div className="container">
            <div className="row">
              <div className="col col-lg-8">
                <div className="section_space_lg pb-lg-0">
                  <div className="pe-lg-5">
                    <div className="course_info_card d-lg-none">
                      <div className="details_image">
                        <img
                          src="nf_education_front/images/course/course_details_image_1.jpg"
                          alt="Collab – Online Learning Platform"
                        />
                      </div>
                      <ul className="meta_info_list unordered_list">
                        <li>
                          <i className="fas fa-star"></i>
                          <span>3.5 (3k reviews)</span>
                        </li>
                      </ul>
                      <div className="item_price">
                        <span className="sale_price">
                          ${specialtyData?.qiymet}
                        </span>
                      </div>
                      <a href="pricing.html" className="btn btn_dark">
                        <span>
                          <small>Müraciət et</small>
                          <small>Müraciət et</small>
                        </span>
                      </a>
                      <ul className="course_info_list unordered_list_block">
                        {/* <li>
                          <span>
                            <i className="fas fa-user"></i> Created
                          </span>
                          <strong>Wendy Chandler</strong>
                        </li> */}
                        <li>
                          <span>
                            <i className="fas fa-chart-bar"></i> Dil səviyyəsi
                          </span>
                          <strong>
                            {specialtyData?.language_levels &&
                              specialtyData?.language_levels[0]}
                          </strong>
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-clock"></i> Müddət
                          </span>
                          <strong>{specialtyData?.muddet} il</strong>
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-video"></i> Dərs
                          </span>
                          <strong>3 Video</strong>
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-users"></i> Webinar
                          </span>
                          <strong>4 Hours</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="section_heading">
                      <h2 className="heading_text">Course Content</h2>
                    </div>
                    <div className="accordion_wrap mb-5">
                      <h3 className="details_info_title mb-3">
                        Section 1. Programming Foundations with JavaScript, HTML
                        and CSS
                      </h3>
                      <div
                        className="accordion style_2"
                        id="corse_details_accordion"
                      >
                        <div className="accordion-item">
                          <div className="checkbox_item accordion_item_checked">
                            <input type="checkbox" />
                          </div>
                          <div
                            className="accordion-button"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse_one"
                            aria-expanded="true"
                          >
                            Lesson 1. Course Overview
                          </div>
                          <div
                            id="collapse_one"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#corse_details_accordion"
                          >
                            <div className="accordion-body">
                              <p className="mb-3">
                                Morbi enim nunc faucibus a pellentesque sit amet
                                porttitor eget. Nunc mattis enim ut tellus
                                elementum sagittis vitae. Nisi lacus sed viverra
                                tellus in hac. Amet dictum sit amet justo donec
                                enim diam. Morbi non arcu risus quis varius quam
                                quisque id. Mi eget mauris pharetra et ultrices
                                neque.
                              </p>
                              <div className="intro_video mb-3">
                                <div className="video_wrap">
                                  <img
                                    src="nf_education_front/images/video/video_poster_3.jpg"
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
                              <a
                                className="btn border_dark btn_small"
                                href="#!"
                              >
                                <span>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip_white.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <div className="checkbox_item accordion_item_checked">
                            <input type="checkbox" />
                          </div>
                          <div
                            className="accordion-button collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse_two"
                            aria-expanded="false"
                          >
                            Lesson 2. Using CodePen. Formatting Text and Nesting
                            Tags
                          </div>
                          <div
                            id="collapse_two"
                            className="accordion-collapse collapse"
                            data-bs-parent="#corse_details_accordion"
                          >
                            <div className="accordion-body">
                              <p className="mb-3">
                                Morbi enim nunc faucibus a pellentesque sit amet
                                porttitor eget. Nunc mattis enim ut tellus
                                elementum sagittis vitae. Nisi lacus sed viverra
                                tellus in hac. Amet dictum sit amet justo donec
                                enim diam. Morbi non arcu risus quis varius quam
                                quisque id. Mi eget mauris pharetra et ultrices
                                neque.
                              </p>
                              <div className="intro_video mb-3">
                                <div className="video_wrap">
                                  <img
                                    src="nf_education_front/images/video/video_poster_3.jpg"
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
                              <a
                                className="btn border_dark btn_small"
                                href="#!"
                              >
                                <span>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip_white.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <div className="checkbox_item accordion_item_checked">
                            <input type="checkbox" />
                          </div>
                          <div
                            className="accordion-button collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse_three"
                            aria-expanded="false"
                          >
                            Lesson 3. Adding Images and Links. Images and
                            Storage
                          </div>
                          <div
                            id="collapse_three"
                            className="accordion-collapse collapse"
                            data-bs-parent="#corse_details_accordion"
                          >
                            <div className="accordion-body">
                              <p className="mb-3">
                                Morbi enim nunc faucibus a pellentesque sit amet
                                porttitor eget. Nunc mattis enim ut tellus
                                elementum sagittis vitae. Nisi lacus sed viverra
                                tellus in hac. Amet dictum sit amet justo donec
                                enim diam. Morbi non arcu risus quis varius quam
                                quisque id. Mi eget mauris pharetra et ultrices
                                neque.
                              </p>
                              <div className="intro_video mb-3">
                                <div className="video_wrap">
                                  <img
                                    src="nf_education_front/images/video/video_poster_3.jpg"
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
                              <a
                                className="btn border_dark btn_small"
                                href="#!"
                              >
                                <span>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip_white.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <div className="checkbox_item accordion_item_checked">
                            <input type="checkbox" />
                          </div>
                          <div
                            className="accordion-button collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse_four"
                            aria-expanded="false"
                          >
                            Lesson 4. CSS Basics. Colors and Names in CSS
                          </div>
                          <div
                            id="collapse_four"
                            className="accordion-collapse collapse"
                            data-bs-parent="#corse_details_accordion"
                          >
                            <div className="accordion-body">
                              <p className="mb-3">
                                Morbi enim nunc faucibus a pellentesque sit amet
                                porttitor eget. Nunc mattis enim ut tellus
                                elementum sagittis vitae. Nisi lacus sed viverra
                                tellus in hac. Amet dictum sit amet justo donec
                                enim diam. Morbi non arcu risus quis varius quam
                                quisque id. Mi eget mauris pharetra et ultrices
                                neque.
                              </p>
                              <div className="intro_video mb-3">
                                <div className="video_wrap">
                                  <img
                                    src="nf_education_front/images/video/video_poster_3.jpg"
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
                              <a
                                className="btn border_dark btn_small"
                                href="#!"
                              >
                                <span>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip_white.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion_wrap mb-5">
                      <h3 className="details_info_title mb-3">
                        Section 2. Algorithms and Programming Concepts
                      </h3>
                      <div
                        className="accordion style_2"
                        id="corse_details_accordion_2"
                      >
                        <div className="accordion-item">
                          <div className="checkbox_item accordion_item_checked">
                            <input type="checkbox" />
                          </div>
                          <div
                            className="accordion-button"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse_2_one"
                            aria-expanded="true"
                          >
                            Lesson 1. Developing an Algorithm
                          </div>
                          <div
                            id="collapse_2_one"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#corse_details_accordion_2"
                          >
                            <div className="accordion-body">
                              <p className="mb-3">
                                Morbi enim nunc faucibus a pellentesque sit amet
                                porttitor eget. Nunc mattis enim ut tellus
                                elementum sagittis vitae. Nisi lacus sed viverra
                                tellus in hac. Amet dictum sit amet justo donec
                                enim diam. Morbi non arcu risus quis varius quam
                                quisque id. Mi eget mauris pharetra et ultrices
                                neque.
                              </p>
                              <div className="intro_video mb-3">
                                <div className="video_wrap">
                                  <img
                                    src="nf_education_front/images/video/video_poster_3.jpg"
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
                              <a
                                className="btn border_dark btn_small"
                                href="#!"
                              >
                                <span>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip_white.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <div className="checkbox_item accordion_item_checked">
                            <input type="checkbox" />
                          </div>
                          <div
                            className="accordion-button collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse_2_two"
                            aria-expanded="false"
                          >
                            Lesson 2. A Step Approach to Solving Programming
                            Problems
                          </div>
                          <div
                            id="collapse_2_two"
                            className="accordion-collapse collapse"
                            data-bs-parent="#corse_details_accordion_2"
                          >
                            <div className="accordion-body">
                              <p className="mb-3">
                                Morbi enim nunc faucibus a pellentesque sit amet
                                porttitor eget. Nunc mattis enim ut tellus
                                elementum sagittis vitae. Nisi lacus sed viverra
                                tellus in hac. Amet dictum sit amet justo donec
                                enim diam. Morbi non arcu risus quis varius quam
                                quisque id. Mi eget mauris pharetra et ultrices
                                neque.
                              </p>
                              <div className="intro_video mb-3">
                                <div className="video_wrap">
                                  <img
                                    src="nf_education_front/images/video/video_poster_3.jpg"
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
                              <a
                                className="btn border_dark btn_small"
                                href="#!"
                              >
                                <span>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip_white.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <div className="checkbox_item accordion_item_checked">
                            <input type="checkbox" />
                          </div>
                          <div
                            className="accordion-button collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse_2_three"
                            aria-expanded="false"
                          >
                            Lesson 3. Thinking Critically about Your Program
                          </div>
                          <div
                            id="collapse_2_three"
                            className="accordion-collapse collapse"
                            data-bs-parent="#corse_details_accordion_2"
                          >
                            <div className="accordion-body">
                              <p className="mb-3">
                                Morbi enim nunc faucibus a pellentesque sit amet
                                porttitor eget. Nunc mattis enim ut tellus
                                elementum sagittis vitae. Nisi lacus sed viverra
                                tellus in hac. Amet dictum sit amet justo donec
                                enim diam. Morbi non arcu risus quis varius quam
                                quisque id. Mi eget mauris pharetra et ultrices
                                neque.
                              </p>
                              <div className="intro_video mb-3">
                                <div className="video_wrap">
                                  <img
                                    src="nf_education_front/images/video/video_poster_3.jpg"
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
                              <a
                                className="btn border_dark btn_small"
                                href="#!"
                              >
                                <span>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip_white.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion_wrap mb-5">
                      <h3 className="details_info_title mb-3">
                        Section 3. MiniProject: Image Filters on the Web
                      </h3>
                      <div
                        className="accordion style_2"
                        id="corse_details_accordion_3"
                      >
                        <div className="accordion-item">
                          <div className="checkbox_item accordion_item_checked">
                            <input type="checkbox" />
                          </div>
                          <div
                            className="accordion-button collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse_3_one"
                            aria-expanded="false"
                          >
                            Lesson 1. Developing an Algorithm
                          </div>
                          <div
                            id="collapse_3_one"
                            className="accordion-collapse collapse"
                            data-bs-parent="#corse_details_accordion_3"
                          >
                            <div className="accordion-body">
                              <p className="mb-3">
                                Morbi enim nunc faucibus a pellentesque sit amet
                                porttitor eget. Nunc mattis enim ut tellus
                                elementum sagittis vitae. Nisi lacus sed viverra
                                tellus in hac. Amet dictum sit amet justo donec
                                enim diam. Morbi non arcu risus quis varius quam
                                quisque id. Mi eget mauris pharetra et ultrices
                                neque.
                              </p>
                              <div className="intro_video mb-3">
                                <div className="video_wrap">
                                  <img
                                    src="nf_education_front/images/video/video_poster_3.jpg"
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
                              <a
                                className="btn border_dark btn_small"
                                href="#!"
                              >
                                <span>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip_white.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <div className="checkbox_item accordion_item_checked">
                            <input type="checkbox" />
                          </div>
                          <div
                            className="accordion-button collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse_3_two"
                            aria-expanded="false"
                          >
                            Lesson 2. A Step Approach to Solving Programming
                            Problems
                          </div>
                          <div
                            id="collapse_3_two"
                            className="accordion-collapse collapse"
                            data-bs-parent="#corse_details_accordion_3"
                          >
                            <div className="accordion-body">
                              <p className="mb-3">
                                Morbi enim nunc faucibus a pellentesque sit amet
                                porttitor eget. Nunc mattis enim ut tellus
                                elementum sagittis vitae. Nisi lacus sed viverra
                                tellus in hac. Amet dictum sit amet justo donec
                                enim diam. Morbi non arcu risus quis varius quam
                                quisque id. Mi eget mauris pharetra et ultrices
                                neque.
                              </p>
                              <div className="intro_video mb-3">
                                <div className="video_wrap">
                                  <img
                                    src="nf_education_front/images/video/video_poster_3.jpg"
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
                              <a
                                className="btn border_dark btn_small"
                                href="#!"
                              >
                                <span>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip_white.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <div className="checkbox_item accordion_item_checked">
                            <input type="checkbox" />
                          </div>
                          <div
                            className="accordion-button collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse_3_three"
                            aria-expanded="false"
                          >
                            Lesson 3. Thinking Critically about Your Program
                          </div>
                          <div
                            id="collapse_3_three"
                            className="accordion-collapse collapse"
                            data-bs-parent="#corse_details_accordion_3"
                          >
                            <div className="accordion-body">
                              <p className="mb-3">
                                Morbi enim nunc faucibus a pellentesque sit amet
                                porttitor eget. Nunc mattis enim ut tellus
                                elementum sagittis vitae. Nisi lacus sed viverra
                                tellus in hac. Amet dictum sit amet justo donec
                                enim diam. Morbi non arcu risus quis varius quam
                                quisque id. Mi eget mauris pharetra et ultrices
                                neque.
                              </p>
                              <div className="intro_video mb-3">
                                <div className="video_wrap">
                                  <img
                                    src="nf_education_front/images/video/video_poster_3.jpg"
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
                              <a
                                className="btn border_dark btn_small"
                                href="#!"
                              >
                                <span>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                  <small>
                                    <img
                                      src="nf_education_front/images/icon/icon_clip_white.svg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                    Resources
                                  </small>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="comments_list_wrap mb-5">
                      <div className="section_heading">
                        <h3 className="heading_text">Student Feedback</h3>
                      </div>
                      <ul className="comments_list unordered_list_block">
                        <li>
                          <div className="comment_item">
                            <div className="comment_author">
                              <div className="author_thumbnail">
                                <img
                                  src="nf_education_front/images/meta/student_thumbnail_6.jpg"
                                  alt="Collab – Online Learning Platform"
                                />
                              </div>
                              <div className="author_content">
                                <h4 className="author_name">Carolyn Wallace</h4>
                                <span className="comment_date">
                                  January 27, 2023
                                </span>
                              </div>
                            </div>
                            <p>
                              Platea dictumst vestibulum rhoncus est
                              pellentesque elit ullamcorper dignissim cras.
                              Vitae ultricies leo integer malesuada nunc vel.
                              Nibh cras pulvinar mattis nunc sed. Convallis a
                              cras semper auctor neque vitae tempus. Mattis
                              molestie a iaculis at erat pellentesque
                              adipiscing.
                            </p>
                            <a className="reply_btn" href="#!">
                              <i className="fas fa-reply"></i> Reply
                            </a>
                          </div>
                          <ul className="comments_list unordered_list_block">
                            <li>
                              <div className="comment_item">
                                <div className="comment_author">
                                  <div className="author_thumbnail">
                                    <img
                                      src="nf_education_front/images/meta/testimonial_thumbnail_1.jpg"
                                      alt="Collab – Online Learning Platform"
                                    />
                                  </div>
                                  <div className="author_content">
                                    <h4 className="author_name">Ray Cooper</h4>
                                    <span className="comment_date">
                                      January 27, 2023
                                    </span>
                                  </div>
                                </div>
                                <p>
                                  Platea dictumst vestibulum rhoncus est
                                  pellentesque elit ullamcorper dignissim cras.
                                  Vitae ultricies leo integer malesuada nunc
                                  vel. Nibh cras pulvinar mattis nunc sed.
                                  Convallis a cras semper auctor neque vitae
                                  tempus. Mattis molestie a iaculis at erat
                                  pellentesque adipiscing.
                                </p>
                                <a className="reply_btn" href="#!">
                                  <i className="fas fa-reply"></i> Reply
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="comment_item">
                            <div className="comment_author">
                              <div className="author_thumbnail">
                                <img
                                  src="nf_education_front/images/meta/student_thumbnail_7.jpg"
                                  alt="Collab – Online Learning Platform"
                                />
                              </div>
                              <div className="author_content">
                                <h4 className="author_name">
                                  Marrion Willsoriam
                                </h4>
                                <span className="comment_date">
                                  January 27, 2023
                                </span>
                              </div>
                            </div>
                            <p>
                              Platea dictumst vestibulum rhoncus est
                              pellentesque elit ullamcorper dignissim cras.
                              Vitae ultricies leo integer malesuada nunc vel.
                              Nibh cras pulvinar mattis nunc sed. Convallis a
                              cras semper auctor neque vitae tempus. Mattis
                              molestie a iaculis at erat pellentesque
                              adipiscing.
                            </p>
                            <a className="reply_btn" href="#!">
                              <i className="fas fa-reply"></i> Reply
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div> */}
                    {/* <div className="comment_form_wrap">
                      <div className="section_heading">
                        <h3 className="heading_text">Leave a Reply</h3>
                      </div>
                      <form action="#">
                        <div className="row">
                          <div className="col">
                            <div className="form_item mb-0">
                              <label
                                htmlFor="input_message"
                                className="input_title text-uppercase"
                              >
                                Message
                              </label>
                              <textarea
                                id="input_message"
                                name="comment"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col col-md-6">
                            <div className="form_item mb-0">
                              <label
                                htmlFor="input_name"
                                className="input_title"
                              >
                                Name
                              </label>
                              <input
                                id="input_name"
                                type="text"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div className="col col-md-6">
                            <div className="form_item mb-0">
                              <label
                                htmlFor="input_email"
                                className="input_title"
                              >
                                Email
                              </label>
                              <input
                                id="input_email"
                                type="email"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="checkbox_item">
                              <input id="checkbox_remember" type="checkbox" />
                              <label htmlFor="checkbox_remember">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </label>
                            </div>
                            <button type="submit" className="btn btn_dark">
                              <span>
                                <small>Submit Comment</small>
                                <small>Submit Comment</small>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col col-lg-4">
                <aside className="sidebar">
                  <div className="course_info_card d-none d-lg-block">
                    <div className="details_image">
                      <img
                        src="nf_education_front/images/course/course_details_image_1.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                    <ul className="meta_info_list unordered_list">
                      <li>
                        <i className="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <div className="item_price">
                      <span className="sale_price">
                        ${specialtyData?.qiymet}
                      </span>
                    </div>
                    <a href="pricing.html" className="btn btn_dark">
                      <span>
                        <small>Müraciət et</small>
                        <small>Müraciət et</small>
                      </span>
                    </a>
                    <ul className="course_info_list unordered_list_block">
                      {/* <li>
                        <span>
                          <i className="fas fa-user"></i> 
                        </span>
                        <strong>Wendy Chandler</strong>
                      </li> */}
                      <li>
                        <span>
                          <i className="fas fa-chart-bar"></i> Dil səviyyəsi
                        </span>
                        <strong>
                          {specialtyData?.language_levels &&
                            specialtyData?.language_levels[0]}
                        </strong>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-clock"></i> Müddət
                        </span>
                        <strong>{specialtyData?.muddet} il</strong>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-video"></i> Dərs
                        </span>
                        <strong>Online / Offline</strong>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-users"></i> Smestr
                        </span>
                        <strong>7 Təhsil 1 Praktika</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="callbox_wrap">
                    <h3 className="widget_title">
                      Get More Benefits with Our Plans
                    </h3>
                    <a className="btn border_dark w-100" href="pricing.html">
                      <span>
                        <small>Our Plans</small> <small>Our Plans</small>
                      </span>
                    </a>
                    <a className="btn btn_dark w-100" href="course.html">
                      <span>
                        <small>See Whole Course</small>
                        <small>See Whole Course</small>
                      </span>
                    </a>
                  </div>
                  <div className="widget course_list_wrap">
                    <h3 className="widget_title">Other Courses</h3>
                    <ul className="course_list unordered_list_block">
                      <li>
                        <a
                          className="course_small_layout"
                          href="course_details.html"
                        >
                          <span className="item_image">
                            <img
                              src="nf_education_front/images/course/course_image_15.jpg"
                              alt="Collab – Online Learning Platform"
                            />{" "}
                          </span>
                          <span className="item_content">
                            <strong className="item_title">
                              Foundations of User Experience (UX) Design
                            </strong>
                            <small className="item_price">
                              <b>$12.99</b>
                            </small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="course_small_layout"
                          href="course_details.html"
                        >
                          <span className="item_image">
                            <img
                              src="nf_education_front/images/course/course_image_16.jpg"
                              alt="Collab – Online Learning Platform"
                            />{" "}
                          </span>
                          <span className="item_content">
                            <strong className="item_title">
                              Management Principles and Practices
                            </strong>
                            <small className="item_price">
                              <del>$23.99</del> <b>$19.99</b>
                            </small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="course_small_layout"
                          href="course_details.html"
                        >
                          <span className="item_image">
                            <img
                              src="nf_education_front/images/course/course_image_17.jpg"
                              alt="Collab – Online Learning Platform"
                            />{" "}
                          </span>
                          <span className="item_content">
                            <strong className="item_title">
                              Programming for Everybody (Getting Started Python)
                            </strong>
                            <small className="item_price">
                              <b>$12.99</b>
                            </small>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
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
                      Xaricdə Təhsil Proqramlarına Endirim!
                    </h2>
                    <p className="heading_description mb-0">
                      Xaricdə Təhsilinizi Mükəmməlləşdirin - Limitlərinizi
                      Qırın, Gələcəyinizi Formalaşdırın
                    </p>
                  </div>
                  <form action="#">
                    <div className="form_item m-0">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                      <button type="submit" className="btn btn_dark">
                        <span>
                          <small>Göndər</small>
                          <small>Göndər</small>
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

export default Specialty;
