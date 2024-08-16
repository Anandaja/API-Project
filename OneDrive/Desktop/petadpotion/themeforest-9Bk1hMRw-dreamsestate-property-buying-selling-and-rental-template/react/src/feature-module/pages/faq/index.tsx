import React, { useEffect } from "react";
import BreadCrumb from "../../../core/common/breadCrumb";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div>
      <>
        {/* Breadcrumb */}
        <BreadCrumb title="FAQ" pageTitle="Home" />
        {/* Breadcrumb */}
        {/* FAQ  */}
        <section className="faq-section bg-white section">
          <div className="container">
            <div className="faq-info">
              <div className="faq-card bg-white aos" data-aos="fade-down">
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqOne"
                    aria-expanded="false"
                  >
                    1. What are the costs to buy a house?
                  </Link>
                </h4>
                <div id="faqOne" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-card bg-white aos" data-aos="fade-down">
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqTwo"
                    aria-expanded="false"
                  >
                    2. What are the steps to sell a house?
                  </Link>
                </h4>
                <div id="faqTwo" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-card bg-white aos" data-aos="fade-down">
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqThree"
                    aria-expanded="false"
                  >
                    3. Do you have loan consultants?
                  </Link>
                </h4>
                <div id="faqThree" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-card bg-white aos" data-aos="fade-down">
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqFour"
                    aria-expanded="false"
                  >
                    4. When will the project be completed?
                  </Link>
                </h4>
                <div id="faqFour" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-card bg-white aos" data-aos="fade-down">
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqFive"
                    aria-expanded="false"
                  >
                    5. When will the project be completed?
                  </Link>
                </h4>
                <div id="faqFive" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-card bg-white aos" data-aos="fade-down">
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqSix"
                    aria-expanded="false"
                  >
                    6. Lorem ipsum dolor sit amet, elit?
                  </Link>
                </h4>
                <div id="faqSix" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-card bg-white aos" data-aos="fade-down">
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqSeven"
                    aria-expanded="false"
                  >
                    7. Lorem ipsum dolor sit amet, elit?
                  </Link>
                </h4>
                <div id="faqSeven" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-card bg-white aos" data-aos="fade-down">
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqEight"
                    aria-expanded="false"
                  >
                    8. Lorem ipsum dolor sit amet, elit?
                  </Link>
                </h4>
                <div id="faqEight" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-card bg-white aos" data-aos="fade-down">
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqNine"
                    aria-expanded="false"
                  >
                    9. Lorem ipsum dolor sit amet, elit?
                  </Link>
                </h4>
                <div id="faqNine" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-card bg-white aos" data-aos="fade-down">
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqTen"
                    aria-expanded="false"
                  >
                    10. Lorem ipsum dolor sit amet, elit?
                  </Link>
                </h4>
                <div id="faqTen" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /FAQ */}
      </>
    </div>
  );
};

export default Faq;
