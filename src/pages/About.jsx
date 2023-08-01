import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function About() {
  const { t } = useTranslation(["about"]);
  const [counterOn, setCounterOn] = useState(false);

  return (
    <main>
      <section class="page_banner">
        <div class="container">
          <div
            class="content_wrapper"
            // style="
            //     background-image: url(/images/banner/page_banner_image.png);
            //   "
            style={{
              backgroundImage: "url(/images/banner/page_banner_image.png)",
            }}
          >
            <div class="row align-items-center">
              <div class="col col-lg-6">
                <ul class="breadcrumb_nav unordered_list">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#!">Pages</a>
                  </li>
                  <li>About Us</li>
                </ul>
                <h1 class="page_title">{t("ourAbout")}</h1>
                <p class="page_description">{t("text1")}</p>
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
      <section class="testimonial_section section_space_lg pb-0">
        <div class="container">
          <div class="testimonial_carousel">
            <div
              class="common_carousel_1col"
              data-cursor-text="Drag"
              data-slick='{"dots":false}'
            >
              <div class="carousel_item">
                <div class="testimonial_item_2">
                  <div
                    class="testimonial_image image_widget order-last me-0"
                    // style="
                    //     background-image: url(/images/shape/shape_img_6.svg);
                    //   "
                    style={{
                      backgroundImage: "url(/images/shape/shape_img_6.svg)",
                    }}
                  >
                    <img
                      src="/images/about/about_image_3.jpg"
                      alt="Collab – Online Learning Platform"
                    />
                  </div>
                  <div class="testimonial_content">
                    <div class="quote_icon">
                      <img
                        src="/images/icon/icon_quote.svg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                    <h3 class="testimonial_title">
                      {t("title33")}
                    </h3>
                    {/* <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Et netus et
                      malesuada fames ac turpis egestas
                    </p> */}
                    {/* <div class="testimonial_admin">
                      <div class="admin_image">
                        <img
                          src="/images/meta/testimonial_thumbnail_1.jpg"
                          alt="Collab – Online Learning Platform"
                        />
                      </div>
                      <div class="admin_content">
                        <h5 class="testimonial_name">Ray Cooper</h5>
                        <span class="testimonial_designation">
                          Founder of colab courses, lecturer
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="getstart_section section_space_lg">
        <div class="container">
          <div class="row align-items-center">
            <div class="col col-lg-6">
              <div class="image_widget">
                <img
                  src="/images/about/about_image_4.jpg"
                  alt="Collab – Online Learning Platform"
                />
              </div>
            </div>
            <div class="col col-lg-6">
              <div class="content_wrap ps-lg-5">
                <div class="section_heading">
                  <h2 class="heading_text">{t("title22")}</h2>
                  <p class="heading_description mb-0">{t("text22")}</p>
                </div>
                {/* <div className="btn_wrap pt-0 d-none d-lg-flex justify-content-end">
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
                </div> */}
                <div class="btn_wrap p-0">
                  <a
                    class="btn btn_dark"
                    target="_blank"
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
        </div>
      </section>
      <section class="popular_event_section section_space_lg bg_dark decoration_wrap">
        <div class="container">
          <div class="row align-items-center">
            <div class="col col-lg-7">
              <div class="section_heading mb-lg-0">
                <h2 class="heading_text text-white">
                  Online Events are Amazing Opportunities to Have Fun and Learn
                </h2>
                <p class="heading_description mb-0 text-white">
                  Rhoncus dolor purus non enim praesent elementum facilisis. Nec
                  tincidunt praesent semper feugiat nibh sed pulvinar. Faucibus
                  interdum posuere lorem ipsum dolor sit amet consectetur
                  adipiscing. Iaculis eu non diam phasellus vestibulum lorem sed
                  risus.
                </p>
                <div class="btn_wrap pb-0">
                  <a class="btn btn_primary" href="event.html">
                    <span>
                      <small>All Events</small>
                      <small>All Events</small>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col col-lg-5">
              <div class="popular_event_list">
                <h3 class="wrap_title">Most Popular Events</h3>
                <ul class="unordered_list_block">
                  <li>
                    <div class="column">
                      <b class="day">12</b>
                      <span class="month">february</span>
                      <strong class="time">03:50 PM</strong>
                    </div>
                    <div class="column">
                      <h4 class="event_title">
                        Digital Transformation Conference
                      </h4>
                      <span class="event_name">
                        <strong>Prepare for:</strong>
                        <small>Lora Hill</small>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="column">
                      <b class="day">12</b>
                      <span class="month">february</span>
                      <strong class="time">03:50 PM</strong>
                    </div>
                    <div class="column">
                      <h4 class="event_title">
                        Digital Transformation Conference
                      </h4>
                      <span class="event_name">
                        <strong>Prepare for:</strong>
                        <small>Lora Hill</small>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="column">
                      <b class="day">12</b>
                      <span class="month">february</span>
                      <strong class="time">03:50 PM</strong>
                    </div>
                    <div class="column">
                      <h4 class="event_title">
                        Digital Transformation Conference
                      </h4>
                      <span class="event_name">
                        <strong>Prepare for:</strong>
                        <small>Lora Hill</small>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="column">
                      <b class="day">12</b>
                      <span class="month">february</span>
                      <strong class="time">03:50 PM</strong>
                    </div>
                    <div class="column">
                      <h4 class="event_title">
                        Digital Transformation Conference
                      </h4>
                      <span class="event_name">
                        <strong>Prepare for:</strong>
                        <small>Lora Hill</small>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="deco_item shape_img_1"
          data-parallax='{"y" : 130, "smoothness": 6}'
        >
          <img
            src="/images/shape/shape_img_3.png"
            alt="Collab – Online Learning Platform"
          />
        </div>
        <div
          class="deco_item shape_img_2"
          data-parallax='{"x" : -130, "smoothness": 6}'
        >
          <img
            src="/images/shape/shape_img_3.png"
            alt="Collab – Online Learning Platform"
          />
        </div>
        <div
          class="deco_item shape_img_3"
          data-parallax='{"y" : -130, "smoothness": 6}'
        >
          {/* <img
            src="/images/shape/shape_img_3.png"
            alt="Collab – Online Learning Platform"
          /> */}
        </div>
      </section>
      <section class="faq_section section_space_lg">
        <div class="container">
          {/* <div class="section_heading text-center mb-3">
            <div class="row justify-content-center">
              <div class="col col-lg-7">
                <h2 class="heading_text mb-0">
                  Popular Questions to Ask Before Choosing a Course
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col col-lg-10">
              <div class="accordion" id="faq_accordion">
                <div class="accordion-item">
                  <div
                    class="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_one"
                    aria-expanded="true"
                  >
                    What do Collab courses include?
                  </div>
                  <div
                    id="collapse_one"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#faq_accordion"
                  >
                    <div class="accordion-body">
                      <p class="mb-0">
                        Dictum non consectetur a erat. Odio morbi quis commodo
                        odio aenean. Blandit libero volutpat sed cras ornare
                        arcu. Tempus urna et pharetra pharetra. Enim ut sem
                        viverra aliquet. Nisl vel pretium lectus quam id. Augue
                        eget arcu dictum varius duis at consectetur. Egestas dui
                        id ornare arcu. Nec ullamcorper sit amet risus nullam
                        eget felis eget nunc.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div
                    class="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_two"
                    aria-expanded="false"
                  >
                    Do I have to start my course at a certain time?
                  </div>
                  <div
                    id="collapse_two"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faq_accordion"
                  >
                    <div class="accordion-body">
                      <p class="mb-0">
                        Dictum non consectetur a erat. Odio morbi quis commodo
                        odio aenean. Blandit libero volutpat sed cras ornare
                        arcu. Tempus urna et pharetra pharetra. Enim ut sem
                        viverra aliquet. Nisl vel pretium lectus quam id. Augue
                        eget arcu dictum varius duis at consectetur. Egestas dui
                        id ornare arcu. Nec ullamcorper sit amet risus nullam
                        eget felis eget nunc.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div
                    class="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_three"
                    aria-expanded="false"
                  >
                    How do I take a Collab course?
                  </div>
                  <div
                    id="collapse_three"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faq_accordion"
                  >
                    <div class="accordion-body">
                      <p class="mb-0">
                        Dictum non consectetur a erat. Odio morbi quis commodo
                        odio aenean. Blandit libero volutpat sed cras ornare
                        arcu. Tempus urna et pharetra pharetra. Enim ut sem
                        viverra aliquet. Nisl vel pretium lectus quam id. Augue
                        eget arcu dictum varius duis at consectetur. Egestas dui
                        id ornare arcu. Nec ullamcorper sit amet risus nullam
                        eget felis eget nunc.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div
                    class="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_four"
                    aria-expanded="false"
                  >
                    Do I receive anything after I complete a course?
                  </div>
                  <div
                    id="collapse_four"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faq_accordion"
                  >
                    <div class="accordion-body">
                      <p class="mb-0">
                        Dictum non consectetur a erat. Odio morbi quis commodo
                        odio aenean. Blandit libero volutpat sed cras ornare
                        arcu. Tempus urna et pharetra pharetra. Enim ut sem
                        viverra aliquet. Nisl vel pretium lectus quam id. Augue
                        eget arcu dictum varius duis at consectetur. Egestas dui
                        id ornare arcu. Nec ullamcorper sit amet risus nullam
                        eget felis eget nunc.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div
                    class="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_five"
                    aria-expanded="false"
                  >
                    Where can I go for help?
                  </div>
                  <div
                    id="collapse_five"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faq_accordion"
                  >
                    <div class="accordion-body">
                      <p class="mb-0">
                        Dictum non consectetur a erat. Odio morbi quis commodo
                        odio aenean. Blandit libero volutpat sed cras ornare
                        arcu. Tempus urna et pharetra pharetra. Enim ut sem
                        viverra aliquet. Nisl vel pretium lectus quam id. Augue
                        eget arcu dictum varius duis at consectetur. Egestas dui
                        id ornare arcu. Nec ullamcorper sit amet risus nullam
                        eget felis eget nunc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}

export default About;
