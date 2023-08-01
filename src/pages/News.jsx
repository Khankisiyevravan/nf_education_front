import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "../api/axios";
import ReactPaginate from "react-paginate";

function News({ lang, setLang }) {
  const { t } = useTranslation(["home"]);
  const [news, setNews] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = news.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(news.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % news.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  useEffect(() => {
    axios
      .get(`/api/xebers?locale=${lang}&&populate=*`)
      .then((response) => {
        console.log(response?.data?.data);
        setNews(response?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  return (
    <>
      <main className="page_content">
        <section class="page_banner">
          <div class="container">
            <div
              class="content_wrapper"
              // style="
              //   background-image: url(assetsnf_education_front/images/banner/page_banner_image.png);
              // "
              style={{
                backgroundImage: "url('/images/banner/page_banner_image.png')",
              }}
            >
              <div class="row align-items-center">
                <div class="col col-lg-6">
                  <ul class="breadcrumb_nav unordered_list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Courses</li>
                  </ul>
                  <h1 class="page_title">{t("news")}</h1>
                  <p class="page_description">{t("text4")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="courses_archive_section section_space_lg">
          <div class="container">
            <div class="row">
              {news?.map((n, index) => (
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
            <div class="pagination_wrap">
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="pagination_nav unordered_list"
              />
              {/* <ul class="pagination_nav unordered_list">
                <li>
                  <a href="#!">
                    <i class="fas fa-long-arrow-left"></i>
                  </a>
                </li>
                <li class="active">
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
                    <i class="fas fa-long-arrow-right"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default News;
