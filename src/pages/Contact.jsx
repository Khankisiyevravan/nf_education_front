import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "../api/axios";
function Contact() {
  const [contactData, setContactData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    title: "",
    messagee: "",
  });
  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const sendData = (e) => {
    e.preventDefault();

    const config = {
      headers: { "Content-type": "application/json" },
    };
    console.log(contactData);
    axios
      .post("/api/elaqelers", {
        data: contactData,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get("/api/elaqelers")
      .then((response) => {
        console.log(response);
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
            <div
              className="content_wrapper"
              style={{
                backgroundImage: "url(nf_education_front/images/banner/page_banner_image.png)",
              }}
              //   style="
              //     background-image: url(nf_education_front/images/banner/page_banner_image.png);
              //   "
            >
              <div className="row align-items-center">
                <div className="col col-lg-6">
                  <ul className="breadcrumb_nav unordered_list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                  <h1 className="page_title">Bizimlə Əlaqə</h1>
                  <p className="page_description">
                    Bizimlə əlaqə saxlayın və arzuladığınız təhsil təcrübəsini
                    reallığa çevirmək üçün bir addım atın. Ekspert
                    məsləhətçilərimiz suallarınızı cavablandırmaq və
                    ehtiyaclarınız üçün ən yaxşı həlli təmin etmək üçün
                    buradadır. Sizi dəstəkləməkdən və bələdçilik etməkdən məmnun
                    olarıq. Əlaqə formasını doldurun və ya aşağıdakı əlaqə
                    məlumatlarımız vasitəsilə bizimlə əlaqə saxlayın. Biz ən
                    qısa zamanda sizinlə əlaqə saxlayacağıq. Sizə kömək etməyi
                    səbirsizliklə gözləyirik!
                  </p>
                  {/* <form action="#">
                    <div className="form_item mb-0">
                      <input
                        type="search"
                        name="search"
                        placeholder="What do you want to learn ?"
                      />
                      <button type="submit" className="btn btn_dark">
                        <span>
                          <small>Search</small> <small>Search</small>
                        </span>
                      </button>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact_section section_space_lg">
          <div className="container">
            <div className="row">
              <div className="col col-lg-5">
                <div className="pe-lg-5">
                  <div className="section_heading">
                    <h2 className="heading_text">Əlaqə məlumatlarımız</h2>
                    {/* <p className="heading_description mb-0">
                      Viverra maecenas accumsan lacus vel facilisis volutpat.
                      Faucibus purus in massa tempor nec feugiat nisl
                    </p> */}
                  </div>
                  <div className="iconbox_item contact_info_iconbox">
                    <div className="item_icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Call Us</h3>
                      <p className="mb-0"> (+380) 63 450 86 13</p>
                      <p className="mb-0"> (+994) 77 325 93 04</p>
                    </div>
                  </div>
                  <div className="iconbox_item contact_info_iconbox">
                    <div className="item_icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Email Address</h3>
                      <p className="mb-0">nnfeducation@gmail.com</p>
                      <p className="mb-0">nfeducation@gmail.com</p>
                    </div>
                  </div>
                  <div className="iconbox_item contact_info_iconbox">
                    <div className="item_icon">
                      <i className="fas fa-location-dot"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Ünvan</h3>
                      <p className="mb-0">31 Sunset Road, Gales Ferry,</p>
                      <p className="mb-0">6335 United States</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-7">
                <div className="gmap_canvas">
                  <iframe
                    id="gmap_canvas_iframe"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact_form_section section_space_lg bg_light decoration_wrap overflow-hidden">
          <div className="container decoration_wrap">
            <div className="row justify-content-center">
              <div className="col col-lg-7">
                <div className="section_heading text-center">
                  <h2 className="heading_text mb-0">
                    Sizə kömək etmək üçün dəstək qrupumuzla əlaqə saxlayın
                  </h2>
                </div>
              </div>
            </div>
            <form>
              <div className="row justify-content-center">
                <div className="col col-lg-8">
                  <div className="row">
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_name" className="input_title">
                          Ad Soyad
                        </label>
                        <input
                          id="input_name"
                          type="text"
                          name="full_name"
                          placeholder="Faik Nasrullayev"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_email" className="input_title">
                          Email
                        </label>
                        <input
                          id="input_email"
                          type="email"
                          name="email"
                          placeholder="example@gmail.com"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_phone" className="input_title">
                          Telefon nömrə
                        </label>
                        <input
                          id="input_phone"
                          type="tel"
                          name="phone_number"
                          placeholder="+994 55 555 55 55"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_jubject" className="input_title">
                          Mövzu
                        </label>
                        <select
                          name="title"
                          id="input_jubject"
                          onChange={handleChange}
                          defaultValue={"title"}
                        >
                          <option value="title" selected={"selected"}>
                            Seçim
                          </option>
                          <option value="Xaricde Tehsil">Xaricdə Təhsil</option>
                          <option value="Ukraynada Tehsil">
                            Ukraynada Təhsil
                          </option>
                          <option value="Turkiyede Tehsil">
                            Türkiyədə Təhsil
                          </option>
                          <option value="Almaniyada Tehsil">
                            Almaniyada Təhsil
                          </option>
                          <option value="Polsada Tehsil">Polşada Təhsil</option>
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form_item">
                        <label htmlFor="input_message" className="input_title">
                          Mesaj
                        </label>
                        <textarea
                          id="input_message"
                          name="messagee"
                          placeholder="Mövzunuz haqqında yazın"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <button
                        className="btn btn_dark w-100 b-block"
                        onClick={sendData}
                      >
                        <span>
                          <small>Müraciətini göndər</small>
                          <small>Müraciətini göndər</small>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div
              className="deco_item shape_img_1 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <img
                src="nf_education_front/images/shape/shape_img_7.png"
                alt="Collab – Online Learning Platform"
              />
            </div>
            <div
              className="deco_item shape_img_2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <img
                src="nf_education_front/images/shape/shape_img_7.png"
                alt="Collab – Online Learning Platform"
              />
            </div>
          </div>
          <div
            className="deco_item shape_img_3 wow fadeInLeft"
            data-wow-delay=".2s"
          >
            <img
              src="nf_education_front/images/shape/shape_img_7.png"
              alt="Collab – Online Learning Platform"
            />
          </div>
          <div
            className="deco_item shape_img_4 wow fadeInRight"
            data-wow-delay=".4s"
          >
            <img
              src="nf_education_front/images/shape/shape_img_7.png"
              alt="Collab – Online Learning Platform"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
