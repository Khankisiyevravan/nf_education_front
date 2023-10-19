import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";

function NewsDetail({ lang, setLang }) {
  const [newsDetailData, setNewsDetailData] = useState({});
  const { id } = useParams();
  // console.log(id);
  const { t } = useTranslation(["news"]);
  useEffect(() => {
    axios
      .get(`/api/xebers/${id}?populate=deep`)
      .then((response) => {
        console.log(response);
        // console.log(response?.data?.data);
        if (lang === response?.data?.data?.attributes?.locale) {
          setNewsDetailData(response?.data?.data);
        } else {
          let localizations =
            response?.data?.data?.attributes?.localizations?.data;
          // console.log(response?.data?.data?.attributes?.localizations?.data)
          // axios.get()
          let findNews = localizations.find(
            (l) => l?.attributes?.locale === lang
          );
          axios
            .get(`/api/xebers/${findNews?.id}?populate=deep`)
            .then((response) => {
              setNewsDetailData(response?.data?.data);
              console.log(response);
            });
          // console.log(findNews);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [lang]);
  return (
    <main className="page_content news_page">
      <section className="page_banner">
        <div className="container">
          <div
            className="content_wrapper"
            style={{ backgroundColor: "rgb(235 235 235)" }}
          >
            <div className="row align-items-center" style={{ width: "100%" }}>
              <div className="col col-lg-12">
                <ul className="breadcrumb_nav unordered_list">
                  <li>
                    <Link to="/">{t("home")}</Link>
                  </li>
                  <li>
                    <Link to="/news">{t("news")}</Link>
                  </li>
                  <li>{t("detail")}</li>
                </ul>
                <h1 className="page_title mb-0">
                  {newsDetailData?.attributes?.Basliq}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="details_section blog_details_section section_space_lg pb-0">
        <div className="container">
          <div className="row">
            <div className="col col-lg-12">
              <div className="details_image">
                {console.log(newsDetailData)}
                <iframe
                  // style={{ width: "100%" }}
                  src={newsDetailData?.attributes?.video_link}
                ></iframe>
                {/* <img
                  style={{ width: "100%", objectFit: "cover" }}
                  src={
                    newsDetailData?.attributes?.image
                      ? `https://nfeducationback-z9ad3.ondigitalocean.app${newsDetailData?.attributes?.image?.data?.attributes?.url}`
                      : ""
                  }
                  // src="/images/blog/blog_details_image_1.jpg"
                  alt="Collab – Online Learning Platform"
                /> */}
              </div>
              <div className="details_content">
                <ul className="meta_info_list unordered_list">
                  <li>
                    <i className="fas fa-thumbtack"></i>
                    <span style={{ color: "#035ab2" }}>
                      {t(newsDetailData?.attributes?.xeber_tipi)}
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-calendar-day"></i>
                    <span style={{ color: "#035ab2" }}>
                      {newsDetailData?.attributes?.tarix?.slice(0, 10)}
                    </span>
                  </li>
                </ul>
                <p>{newsDetailData?.attributes?.haqqinda}</p>
                {/* <blockquote>
                  <div className="blockquote_icon">
                    <img
                      src="/images/icon/icon_quote.svg"
                      alt="Collab – Online Learning Platform"
                    />
                  </div>
                  <div className="blockquote_content">
                    <p className="mb-0">
                      Nec feugiat nisl pretium fusce id velit ut. Lobortis
                      mattis aliquam faucibus purus in. Ultricies integer quis
                      auctor elit sed. Lobortis scelerisque fermentum dui
                      faucibus in ornare quam
                    </p>
                  </div>
                </blockquote> */}
                {/* <p>
                  Senectus et netus et malesuada. Massa tincidunt dui ut ornare
                  lectus sit. Sed enim ut sem viverra. Fermentum odio eu feugiat
                  pretium. Interdum varius sit amet mattis vulputate enim.
                </p> */}
                {/* <h3 className="details_info_title">
                  Hard skills for a business analyst resume
                </h3>
                <p>
                  Amet cursus sit amet dictum sit amet justo. Morbi tincidunt
                  ornare massa eget. In nulla posuere sollicitudin aliquam
                  ultrices sagittis orci a. Diam donec adipiscing tristique
                  risus nec feugiat in fermentum posuere. In mollis nunc sed id
                  semper risus in hendrerit gravida. Pretium viverra suspendisse
                  potenti nullam ac tortor vitae purus faucibus. Aliquet lectus
                  proin nibh nisl condimentum id venenatis.
                </p> */}
                {/* <div className="row mb-4">
                  <div className="col col-md-6">
                    <div className="details_image m-0">
                      <img
                        src="/images/blog/blog_details_image_2.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="details_image m-0">
                      <img
                        src="/images/blog/blog_details_image_3.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </div>
                  </div>
                </div> */}
                {/* <h3 className="details_info_title">
                  Conduct research into the company you are applying to
                </h3>
                <p>
                  Non diam phasellus vestibulum lorem sed. Leo in vitae turpis
                  massa sed. Urna cursus eget nunc scelerisque. Elementum tempus
                  egestas sed sed risus. Aliquam sem et tortor consequat id
                  porta nibh venenatis. Egestas congue quisque egestas diam in
                  arcu cursus euismod.
                </p>
                <div className="row mb-4">
                  <div className="col col-lg-6">
                    <ul className="info_list unordered_list_block">
                      <li>
                        <i className="fas fa-square"></i>{" "}
                        <span>
                          Felis bibendum ut tristique et egestas quis ipsum
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>{" "}
                        <span>Aliquam faucibus purus in massa tempor</span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>{" "}
                        <span>
                          Interdum posuere lorem ipsum dolor consectetur
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>{" "}
                        <span>Aliquam malesuada bibendum vitae elementum</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col col-lg-6">
                    <ol type="1">
                      <li>
                        <span>
                          Gravida in fermentum et sollicitudin ac orci. Elit
                          duis tristique sollicitudin nibh sit.
                        </span>
                      </li>
                      <li>
                        <span>
                          Mauris vitae ultricies leo integer malesuada
                        </span>
                      </li>
                      <li>
                        <span>Lacus sed viverra tellus habitasse</span>
                      </li>
                    </ol>
                  </div>
                </div> */}
                {/* <p className="mb-0">
                  Libero enim sed faucibus turpis in. Condimentum vitae sapien
                  pellentesque habitant morbi tristique senectus et netus. Sit
                  amet nisl purus in mollis nunc sed id. Odio ut enim blandit
                  volutpat maecenas volutpat blandit aliquam etiam. Felis donec
                  et odio pellentesque diam volutpat commodo sed.
                </p> */}
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="blog_section section_space_lg">
        <div className="container">
          <div className="section_heading">
            <div className="row align-items-center">
              <div className="col col-lg-5">
                <h2 className="heading_text mb-lg-0">Articles</h2>
              </div>
              <div className="col col-lg-7 d-none d-lg-flex justify-content-end">
                <div className="btn_wrap p-0">
                  <a className="btn border_dark" href="blog.html">
                    <span>
                      <small>All Articles</small> <small>All Articles</small>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-lg-4">
              <div className="blog_item">
                <ul className="item_category_list unordered_list">
                  <li>
                    <a href="#!">Photography</a>
                  </li>
                </ul>
                <div className="item_image">
                  <a href="blog_details.html" data-cursor-text="View">
                    <img
                      src="/images/blog/blog_img_1.jpg"
                      alt="Collab – Online Learning Platform"
                    />
                  </a>
                </div>
                <div className="item_content">
                  <h3 className="item_title">
                    <a href="blog_details.html">
                      The Top Technical Skills All Employees Need in 2023
                    </a>
                  </h3>
                  <a className="btn_unfill" href="blog_details.html">
                    <span className="btn_text">Read Articles</span>{" "}
                    <span className="btn_icon">
                      <i className="fas fa-long-arrow-right"></i>{" "}
                      <i className="fas fa-long-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-lg-4">
              <div className="blog_item">
                <ul className="item_category_list unordered_list">
                  <li>
                    <a href="#!">Photography</a>
                  </li>
                </ul>
                <div className="item_image">
                  <a href="blog_details.html" data-cursor-text="View">
                    <img
                      src="/images/blog/blog_img_2.jpg"
                      alt="Collab – Online Learning Platform"
                    />
                  </a>
                </div>
                <div className="item_content">
                  <h3 className="item_title">
                    <a href="blog_details.html">
                      The Best Graphic Design Careers — for Beginners and
                      Professionals
                    </a>
                  </h3>
                  <a className="btn_unfill" href="blog_details.html">
                    <span className="btn_text">Read Articles</span>{" "}
                    <span className="btn_icon">
                      <i className="fas fa-long-arrow-right"></i>{" "}
                      <i className="fas fa-long-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-lg-4">
              <div className="blog_item">
                <ul className="item_category_list unordered_list">
                  <li>
                    <a href="#!">Photography</a>
                  </li>
                </ul>
                <div className="item_image">
                  <a href="blog_details.html" data-cursor-text="View">
                    <img
                      src="/images/blog/blog_img_3.jpg"
                      alt="Collab – Online Learning Platform"
                    />
                  </a>
                </div>
                <div className="item_content">
                  <h3 className="item_title">
                    <a href="blog_details.html">
                      Ubuntu vs. Windows: Which OS Should You Use in 2023?
                    </a>
                  </h3>
                  <a className="btn_unfill" href="blog_details.html">
                    <span className="btn_text">Read Articles</span>{" "}
                    <span className="btn_icon">
                      <i className="fas fa-long-arrow-right"></i>{" "}
                      <i className="fas fa-long-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_wrap d-block d-lg-none pb-0 text-center">
            <a className="btn border_dark" href="blog.html">
              <span>
                <small>All Articles</small> <small>All Articles</small>
              </span>
            </a>
          </div>
        </div>
      </section> */}
      <section className="newslatter_section">
        <div className="container">
          <div
            className="newslatter_box"
            style={{ backgroundImage: 'url("/images/shape/shape_img_6.svg")' }}
            // style="background-image:url(/images/shape/shape_img_6.svg)"
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
  );
}

export default NewsDetail;
