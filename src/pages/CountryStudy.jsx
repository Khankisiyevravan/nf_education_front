import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
import Discount from "../components/Discount";
function CountryStudy({ lang, setLang }) {
  console.log(useParams());
  let { country } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = universities.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(universities.length / itemsPerPage);
  const { t } = useTranslation(["home"]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % universities.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
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
    // getCountries();
    console.log(countryData);
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
              //     backgroundImage: "url(/images/banner/page_banner_image.png)",
              //   }}
              //   style={{
              //     backgroundImage: `url(https://nfeducationback-z9ad3.ondigitalocean.app${countryData?.attributes?.logo?.data?.attributes?.url})`,
              //   }}
            >
              <div className="row align-items-center">
                <div className="col col-lg-8">
                  <ul className="breadcrumb_nav unordered_list">
                    <li>
                      <Link to="/">{t("home")}</Link>
                    </li>
                    <li>{countryData?.attributes?.title}</li>
                  </ul>
                  <h1 className="page_title">
                    {countryData?.attributes?.title?.toUpperCase()}
                  </h1>
                  <p className="page_description">
                    {countryData?.attributes?.about}
                  </p>
                </div>
                <div className="col col-lg-4">
                  <img
                    src={`https://nfeducationback-z9ad3.ondigitalocean.app${countryData?.attributes?.logo?.data?.attributes?.url}`}
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
                {currentItems?.map((uni, index) => (
                  <Link
                    className="course_card list_layout"
                    key={index}
                    to={`/abroadstudy/${country}/${uni.id}`}
                  >
                    <div className="item_image">
                      <a data-cursor-text="View">
                        <img
                          //   src="/images/course/course_image_1.jpg"
                          src={`https://nfeducationback-z9ad3.ondigitalocean.app${uni?.attributes?.image?.data?.attributes?.url}`}
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
                <div className="pagination_wrap">
                  {/* <ul > */}
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
                  {/* <li>
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
                    </li> */}
                  {/* </ul> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Discount />
      </main>
    </>
  );
}

export default CountryStudy;
