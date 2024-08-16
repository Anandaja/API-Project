import React, { useEffect } from "react";
import BreadCrumb from "../../../core/common/breadCrumb";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import ImageWithBasePath from "../../../core/img";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div>
      <>
        {/* Breadcrumb */}
        <BreadCrumb title="Testimonials" pageTitle="Home" />
        {/* Breadcrumb */}
        {/* Testimonials*/}
        <div className="listing-section">
          <div className="container">
            <div className="testimonial-group m-0">
              <div className="row">
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={100}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-01.jpg"
                          alt="User"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Horace Cole</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={200}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-02.jpg"
                          alt="User"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Karen Maria</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={300}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-03.jpg"
                          alt="User"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Jack Nitzsche</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={400}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-04.jpg"
                          alt="User"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Sofia Retz</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={500}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-05.jpg"
                          alt="User"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">John Doe</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={500}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-06.jpg"
                          alt="User"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Valerie L. Ellis</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={500}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-07.jpg"
                          alt="User"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Courtland Artois</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={500}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-08.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Rabien Ustoc</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={500}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-09.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Laverne Marier</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={500}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-10.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Doe Biden</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={500}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-11.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Sofie Retza</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
                {/* Col */}
                <div
                  className="col-lg-4 col-12 d-flex aos"
                  data-aos="fade-down"
                  data-aos-duration={1200}
                  data-aos-delay={500}
                >
                  <div className="card testimonial-card flex-fill">
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-12.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Nick Joe</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="quotes-head" />
                  </div>
                </div>
                {/* /Col */}
              </div>
            </div>
          </div>
        </div>
        {/* /Testimonials*/}
      </>
    </div>
  );
};

export default Testimonial;
