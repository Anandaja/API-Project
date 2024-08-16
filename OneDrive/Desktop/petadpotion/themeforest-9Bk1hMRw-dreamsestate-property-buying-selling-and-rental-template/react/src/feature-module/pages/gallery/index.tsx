/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../../core/common/breadCrumb";

import "aos/dist/aos.css";
import AOS from "aos";
import ImageWithBasePath from "../../../core/img";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [open, setOpen] = React.useState(false);
  
  
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div>
      <>
        {/* Breadcrumb */}
        <BreadCrumb title="Gallery" pageTitle="Home" />
        {/* Breadcrumb */}
        <>
          <>
            {/* Gallery section*/}
            <div className="gallery-section">
              <div className="container">
                <div className="row">
                  <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                      { src: "/react/assets/img/gallery/gallery-01.jpg" },
                      { src: "/react/assets/img/gallery/gallery-02.jpg" },
                      { src: "/react/assets/img/gallery/gallery-03.jpg" },
                      { src: "/react/assets/img/gallery/gallery-04.jpg" },
                      { src: "/react/assets/img/gallery/gallery-05.jpg" },
                      { src: "/react/assets/img/gallery/gallery-06.jpg" },
                      { src: "/react/assets/img/gallery/gallery-07.jpg" },
                      { src: "/react/assets/img/gallery/gallery-08.jpg" },
                      { src: "/react/assets/img/gallery/gallery-09.jpg" },
                      { src: "/react/assets/img/gallery/gallery-10.jpg" },
                    ]}
                  />
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                         to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid" 
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-01.jpg"
                        />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-02.jpg"
                        />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-03.jpg"
                        />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-04.jpg"
                        />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-05.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-06.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-07.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-08.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-09.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-10.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-11.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-12.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-13.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-14.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-15.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-16.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-17.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 aos"
                    data-aos="fade-down"
                  >
                    <div className="gallery-widget">
                      <Link
                        to="#"
                        data-fancybox="gallery"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Image"
                          src="assets/img/gallery/gallery-thum-18.jpg"
                        />
                     </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Gallery section*/}
          </>
        </>
      </>
    </div>
  );
};

export default Gallery;
