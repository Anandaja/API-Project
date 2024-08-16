import React, { useEffect } from "react";
import BreadCrumb from "../../../core/common/breadCrumb";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import "aos/dist/aos.css";
import AOS from "aos";


const OurTeam = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);
  return (
    <div>
      <>
        {/* Breadcrumb */}
        <BreadCrumb title="Our Team" pageTitle="Home" />
        {/* Breadcrumb */}
        {/* Meet our Team */}
        <section className="our-team-section">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-12 aos"
                data-aos="fade-down"
                data-aos-duration={1200}
                data-aos-delay={100}
              >
                <div className="our-team">
                  <div className="profile-pic">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/our-team/team-01.jpg"
                        alt="Our Team"
                      />
                    </Link>
                  </div>
                  <div className="team-prof">
                    <h6>
                      <Link to="#">Joseph Evans</Link>
                    </h6>
                    <span className="team-designation">CEO</span>
                    <div className="footer-social-links m-0">
                      <ul className="nav">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-instagram" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-behance" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 aos"
                data-aos="fade-down"
                data-aos-duration={1200}
                data-aos-delay={200}
              >
                <div className="our-team">
                  <div className="profile-pic">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/our-team/team-02.jpg"
                        alt="Our Team"
                      />
                    </Link>
                  </div>
                  <div className="team-prof">
                    <h6>
                      <Link to="#">Thomas Stine</Link>
                    </h6>
                    <span className="team-designation">COO</span>
                    <div className="footer-social-links m-0">
                      <ul className="nav">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-instagram" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-behance" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 aos"
                data-aos="fade-down"
                data-aos-duration={1200}
                data-aos-delay={300}
              >
                <div className="our-team">
                  <div className="profile-pic">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/our-team/team-03.jpg"
                        alt="Our Team"
                      />
                    </Link>
                  </div>
                  <div className="team-prof">
                    <h6>
                      <Link to="#">Dawn Richardson</Link>
                    </h6>
                    <span className="team-designation">Marketing Head</span>
                    <div className="footer-social-links m-0">
                      <ul className="nav">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-instagram" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-behance" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 aos"
                data-aos="fade-down"
                data-aos-duration={1200}
                data-aos-delay={400}
              >
                <div className="our-team">
                  <div className="profile-pic">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/our-team/team-04.jpg"
                        alt="Our Team"
                      />
                    </Link>
                  </div>
                  <div className="team-prof">
                    <h6>
                      <Link to="#">Belva Gonzalez</Link>
                    </h6>
                    <span className="team-designation">Designer</span>
                    <div className="footer-social-links m-0">
                      <ul className="nav">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-instagram" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-behance" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 aos"
                data-aos="fade-down"
                data-aos-duration={1200}
                data-aos-delay={500}
              >
                <div className="our-team">
                  <div className="profile-pic">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/our-team/team-05.jpg"
                        alt="Our Team"
                      />
                    </Link>
                  </div>
                  <div className="team-prof">
                    <h6>
                      <Link to="#">Willie Cropper</Link>
                    </h6>
                    <span className="team-designation">Developer</span>
                    <div className="footer-social-links m-0">
                      <ul className="nav">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-instagram" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-behance" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 aos"
                data-aos="fade-down"
                data-aos-duration={1200}
                data-aos-delay={600}
              >
                <div className="our-team">
                  <div className="profile-pic">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/our-team/team-06.jpg"
                        alt="Our Team"
                      />
                    </Link>
                  </div>
                  <div className="team-prof">
                    <h6>
                      <Link to="#">Maria Steinke</Link>
                    </h6>
                    <span className="team-designation">Lead Developer</span>
                    <div className="footer-social-links m-0">
                      <ul className="nav">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-instagram" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-behance" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Meet our Team */}
      </>
    </div>
  );
};

export default OurTeam;
