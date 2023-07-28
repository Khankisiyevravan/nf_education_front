import React from "react";

function NotFound() {
  return (
    <>
      <main class="page_content">
        <section class="error_section text-center decoration_wrap">
          <div class="container decoration_wrap">
            <div class="error_image">
              <img
                src="/images/error_image.png"
                alt="Collab – Online Learning Platform"
              />
            </div>
            <h1 class="error_title">Page Not Found</h1>
            {/* <p class="error_description">
              Egestas sed tempus urna et pharetra. Leo integer malesuada nunc
              vel. Libero id faucibus nisl tincidunt eget nullam non nisi.
              Faucibus turpis in eu mi bibendum neque egestas
            </p> */}
            {/* <div class="form_item justify-content-center m-0">
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
            </div> */}
            <div
              class="deco_item shape_img_1 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <img
                src="/images/shape/shape_img_7.png"
                alt="Collab – Online Learning Platform"
              />
            </div>
            <div
              class="deco_item shape_img_2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <img
                src="/images/shape/shape_img_7.png"
                alt="Collab – Online Learning Platform"
              />
            </div>
          </div>
          <div
            class="deco_item shape_img_3 wow fadeInLeft"
            data-wow-delay=".2s"
          >
            <img
              src="/images/shape/shape_img_7.png"
              alt="Collab – Online Learning Platform"
            />
          </div>
          {/* <div
            class="deco_item shape_img_4 wow fadeInRight"
            data-wow-delay=".4s"
          >
            <img
              src="/images/shape/shape_img_7.png"
              alt="Collab – Online Learning Platform"
            />
          </div> */}
        </section>
      </main>
    </>
  );
}

export default NotFound;
