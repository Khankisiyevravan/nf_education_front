import React from "react";

function News() {
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
              style={{backgroundImage:"url('nf_education_front/images/banner/page_banner_image.png')"}}
            >
              <div class="row align-items-center">
                <div class="col col-lg-6">
                  <ul class="breadcrumb_nav unordered_list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Courses</li>
                  </ul>
                  <h1 class="page_title">Course Grid</h1>
                  <p class="page_description">
                    Egestas sed tempus urna et pharetra. Leo integer malesuada
                    nunc vel. Libero id faucibus nisl tincidunt eget nullam non
                    nisi. Faucibus turpis in eu mi bibendum neque egestas
                  </p>
                  <form action="#">
                    <div class="form_item mb-0">
                      <input
                        type="search"
                        name="search"
                        placeholder="What do you want to learn ?"
                      />
                      <button type="submit" class="btn btn_dark">
                        <span>
                          <small>Search</small> <small>Search</small>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="courses_archive_section section_space_lg">
          <div class="container">
            <div class="filter_topbar">
              <p class="filter_result">
                Showing <span>1-9</span> of <span>30</span> results
              </p>
              <ul class="filter_buttons_list unordered_list">
                <li>
                  <button type="button" class="offCanvas_open_btn">
                    <i class="fas fa-filter"></i> <span>Filter</span>
                  </button>
                </li>
                <li>
                  <div class="form_item m-0">
                    <select name="sorting">
                      <option value="sorting" selected="selected">
                        Sorting
                      </option>
                      <option value="newest">Newest</option>
                      <option value="popularity">Popularity</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
            <div class="row">
              <div class="col col-lg-4">
                <div class="course_card">
                  <div class="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="nf_education_front/images/course/course_image_7.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div class="item_content">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <ul class="item_category_list unordered_list">
                        <li>
                          <a href="#!">marketing</a>
                        </li>
                      </ul>
                      <div class="item_price">
                        <span class="sale_price">$19.99</span>
                        <del class="remove_price">$29.99</del>
                      </div>
                    </div>
                    <ul class="meta_info_list unordered_list">
                      <li>
                        <i class="fas fa-chart-bar"></i> <span>Beginner</span>
                      </li>
                      <li>
                        <i class="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 class="item_title">
                      <a href="course_details.html">
                        Marketing Channel Strategy & B2B2C Routes to Market
                      </a>
                    </h3>
                    <a class="btn_unfill" href="course_details.html">
                      <span class="btn_text">View Course</span>
                      <span class="btn_icon">
                        <i class="fas fa-long-arrow-right"></i>
                        <i class="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col col-lg-4">
                <div class="course_card">
                  <div class="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="nf_education_front/images/course/course_image_6.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div class="item_content">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <ul class="item_category_list unordered_list">
                        <li>
                          <a href="#!">Programming</a>
                        </li>
                      </ul>
                      <div class="item_price">
                        <span class="sale_price">$14.99</span>
                      </div>
                    </div>
                    <ul class="meta_info_list unordered_list">
                      <li>
                        <i class="fas fa-chart-bar"></i> <span>Beginner</span>
                      </li>
                      <li>
                        <i class="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 class="item_title">
                      <a href="course_details.html">
                        Programming Foundations with JavaScript, HTML and CSS
                      </a>
                    </h3>
                    <a class="btn_unfill" href="course_details.html">
                      <span class="btn_text">View Course</span>
                      <span class="btn_icon">
                        <i class="fas fa-long-arrow-right"></i>
                        <i class="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col col-lg-4">
                <div class="course_card">
                  <div class="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="nf_education_front/images/course/course_image_12.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div class="item_content">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <ul class="item_category_list unordered_list">
                        <li>
                          <a href="#!">Programming</a>
                        </li>
                      </ul>
                      <div class="item_price">
                        <span class="sale_price">$15.69</span>
                      </div>
                    </div>
                    <ul class="meta_info_list unordered_list">
                      <li>
                        <i class="fas fa-chart-bar"></i> <span>Beginner</span>
                      </li>
                      <li>
                        <i class="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 class="item_title">
                      <a href="course_details.html">
                        Introduction to Computer Science and Programming
                      </a>
                    </h3>
                    <a class="btn_unfill" href="course_details.html">
                      <span class="btn_text">View Course</span>
                      <span class="btn_icon">
                        <i class="fas fa-long-arrow-right"></i>
                        <i class="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col col-lg-4">
                <div class="course_card">
                  <div class="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="nf_education_front/images/course/course_image_13.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div class="item_content">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <ul class="item_category_list unordered_list">
                        <li>
                          <a href="#!">bissines</a>
                        </li>
                      </ul>
                      <div class="item_price">
                        <span class="sale_price">$29.99</span>
                      </div>
                    </div>
                    <ul class="meta_info_list unordered_list">
                      <li>
                        <i class="fas fa-chart-bar"></i> <span>Beginner</span>
                      </li>
                      <li>
                        <i class="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 class="item_title">
                      <a href="course_details.html">
                        Project Management Principles and Practices
                      </a>
                    </h3>
                    <a class="btn_unfill" href="course_details.html">
                      <span class="btn_text">View Course</span>
                      <span class="btn_icon">
                        <i class="fas fa-long-arrow-right"></i>
                        <i class="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col col-lg-4">
                <div class="course_card">
                  <div class="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="nf_education_front/images/course/course_image_8.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div class="item_content">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <ul class="item_category_list unordered_list">
                        <li>
                          <a href="#!">programming</a>
                        </li>
                      </ul>
                      <div class="item_price">
                        <span class="sale_price">$12.99</span>
                        <del class="remove_price">$19.99</del>
                      </div>
                    </div>
                    <ul class="meta_info_list unordered_list">
                      <li>
                        <i class="fas fa-chart-bar"></i> <span>Beginner</span>
                      </li>
                      <li>
                        <i class="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 class="item_title">
                      <a href="course_details.html">
                        Java Programming: Principles of Software Design
                      </a>
                    </h3>
                    <a class="btn_unfill" href="course_details.html">
                      <span class="btn_text">View Course</span>
                      <span class="btn_icon">
                        <i class="fas fa-long-arrow-right"></i>
                        <i class="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col col-lg-4">
                <div class="course_card">
                  <div class="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="nf_education_front/images/course/course_image_9.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div class="item_content">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <ul class="item_category_list unordered_list">
                        <li>
                          <a href="#!">Design</a>
                        </li>
                      </ul>
                      <div class="item_price">
                        <span class="sale_price">FREE</span>
                      </div>
                    </div>
                    <ul class="meta_info_list unordered_list">
                      <li>
                        <i class="fas fa-chart-bar"></i> <span>Beginner</span>
                      </li>
                      <li>
                        <i class="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 class="item_title">
                      <a href="course_details.html">
                        Foundations of User Experience (UX) Design
                      </a>
                    </h3>
                    <a class="btn_unfill" href="course_details.html">
                      <span class="btn_text">View Course</span>
                      <span class="btn_icon">
                        <i class="fas fa-long-arrow-right"></i>
                        <i class="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col col-lg-4">
                <div class="course_card">
                  <div class="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="nf_education_front/images/course/course_image_14.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div class="item_content">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <ul class="item_category_list unordered_list">
                        <li>
                          <a href="#!">Computer Science</a>
                        </li>
                      </ul>
                      <div class="item_price">
                        <span class="sale_price">$19.99</span>
                        <del class="remove_price">$29.99</del>
                      </div>
                    </div>
                    <ul class="meta_info_list unordered_list">
                      <li>
                        <i class="fas fa-chart-bar"></i> <span>Beginner</span>
                      </li>
                      <li>
                        <i class="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 class="item_title">
                      <a href="course_details.html">
                        Strategy and Information Architecture
                      </a>
                    </h3>
                    <a class="btn_unfill" href="course_details.html">
                      <span class="btn_text">View Course</span>
                      <span class="btn_icon">
                        <i class="fas fa-long-arrow-right"></i>
                        <i class="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col col-lg-4">
                <div class="course_card">
                  <div class="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="nf_education_front/images/course/course_image_10.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div class="item_content">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <ul class="item_category_list unordered_list">
                        <li>
                          <a href="#!">design</a>
                        </li>
                      </ul>
                      <div class="item_price">
                        <span class="sale_price">$29.99</span>
                      </div>
                    </div>
                    <ul class="meta_info_list unordered_list">
                      <li>
                        <i class="fas fa-chart-bar"></i> <span>Beginner</span>
                      </li>
                      <li>
                        <i class="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 class="item_title">
                      <a href="course_details.html">
                        Create a Process Map using a Canva Template
                      </a>
                    </h3>
                    <a class="btn_unfill" href="course_details.html">
                      <span class="btn_text">View Course</span>
                      <span class="btn_icon">
                        <i class="fas fa-long-arrow-right"></i>
                        <i class="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col col-lg-4">
                <div class="course_card">
                  <div class="item_image">
                    <a href="course_details.html" data-cursor-text="View">
                      <img
                        src="nf_education_front/images/course/course_image_11.jpg"
                        alt="Collab – Online Learning Platform"
                      />
                    </a>
                  </div>
                  <div class="item_content">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <ul class="item_category_list unordered_list">
                        <li>
                          <a href="#!">Computer Science</a>
                        </li>
                      </ul>
                      <div class="item_price">
                        <span class="sale_price">FREE</span>
                      </div>
                    </div>
                    <ul class="meta_info_list unordered_list">
                      <li>
                        <i class="fas fa-chart-bar"></i> <span>Beginner</span>
                      </li>
                      <li>
                        <i class="fas fa-clock"></i> <span>120 Hours</span>
                      </li>
                      <li>
                        <i class="fas fa-star"></i>
                        <span>3.5 (3k reviews)</span>
                      </li>
                    </ul>
                    <h3 class="item_title">
                      <a href="course_details.html">
                        Software Engineering Fundamentals
                      </a>
                    </h3>
                    <a class="btn_unfill" href="course_details.html">
                      <span class="btn_text">View Course</span>
                      <span class="btn_icon">
                        <i class="fas fa-long-arrow-right"></i>
                        <i class="fas fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="pagination_wrap">
              <ul class="pagination_nav unordered_list">
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
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default News;
