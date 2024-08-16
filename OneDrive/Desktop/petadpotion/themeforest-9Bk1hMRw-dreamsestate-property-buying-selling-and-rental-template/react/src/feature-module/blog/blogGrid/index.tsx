import React, { useEffect } from 'react'
import ImageWithBasePath from '../../../core/img'
import Aos from 'aos';
import BreadCrumb from '../../../core/common/breadCrumb'
;
import { Link } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';
// import BreadCrumb from '../../../core/common/breadCrumb'
;

const BlogGrid = () => {
  const routes = all_routes
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <BreadCrumb title="Blog Grid" pageTitle="Home" />
      {/* Breadcrumb */}
      {/* Blog Grid*/}
      <div className="section blog-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/* Blog */}
              <div
                className="blog-card"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="blog-img">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath src="assets/img/blog/blog-1.jpg" alt="Blog Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-property">
                    <span>Property</span>
                  </div>
                  <div className="blog-title">
                    <h3>
                      <Link to={routes.blogDetails}>
                        How to achieve financial independence
                      </Link>
                    </h3>
                    <p>
                      There are many variations of passages of lorem ipsum
                      available.
                    </p>
                  </div>
                  <ul className="property-category d-flex justify-content-between align-items-center">
                    <li className="user-info">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-01.jpg"
                          className="img-fluid avatar"
                          alt="User"
                        />
                      </Link>
                      <div className="user-name">
                        <Link to="#">Rafael</Link>
                        <p>Posted on : 15 Jan 2023</p>
                      </div>
                    </li>
                    <li>
                      <Link to={routes.blogDetails}>
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Blog */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/* Blog */}
              <div
                className="blog-card"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="blog-img">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath src="assets/img/blog/blog-2.jpg" alt="Blog Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-property">
                    <span>Villa</span>
                  </div>
                  <div className="blog-title">
                    <h3>
                      <Link to={routes.blogDetails}>
                        The most popular cities for homebuyers
                      </Link>
                    </h3>
                    <p>
                      There are many variations of passages of lorem ipsum
                      available.
                    </p>
                  </div>
                  <ul className="property-category d-flex justify-content-between align-items-center">
                    <li className="user-info">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-03.jpg"
                          className="img-fluid avatar"
                          alt="User"
                        />
                      </Link>
                      <div className="user-name">
                        <Link to="#">John</Link>
                        <p>Posted on : 15 Jan 2023</p>
                      </div>
                    </li>
                    <li>
                      <Link to={routes.blogDetails}>
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Blog */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/* Blog */}
              <div
                className="blog-card"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="blog-img">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath src="assets/img/blog/blog-3.jpg" alt="Blog Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-property">
                    <span>Godown</span>
                  </div>
                  <div className="blog-title">
                    <h3>
                      <Link to={routes.blogDetails}>
                        Learn how real estate really shapes our future
                      </Link>
                    </h3>
                    <p>
                      There are many variations of passages of lorem ipsum
                      available.
                    </p>
                  </div>
                  <ul className="property-category d-flex justify-content-between align-items-center">
                    <li className="user-info">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-05.jpg"
                          className="img-fluid avatar"
                          alt="User"
                        />
                      </Link>
                      <div className="user-name">
                        <Link to="#">Eric Krok</Link>
                        <p>Posted on : 15 Jan 2023</p>
                      </div>
                    </li>
                    <li>
                      <Link to={routes.blogDetails}>
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Blog */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/* Blog */}
              <div
                className="blog-card"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="blog-img">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath src="assets/img/blog/blog-4.jpg" alt="Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-property">
                    <span>Factory</span>
                  </div>
                  <div className="blog-title">
                    <h3>
                      <Link to={routes.blogDetails}>
                        30 Real Estate Blogs Every Realtor Should....
                      </Link>
                    </h3>
                    <p>
                      There are many variations of passages of lorem ipsum
                      available.
                    </p>
                  </div>
                  <ul className="property-category d-flex justify-content-between align-items-center">
                    <li className="user-info">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-07.jpg"
                          className="img-fluid avatar"
                          alt="User"
                        />
                      </Link>
                      <div className="user-name">
                        <Link to="#">Anif</Link>
                        <p>Posted on : 15 Jan 2023</p>
                      </div>
                    </li>
                    <li>
                      <Link to={routes.blogDetails}>
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Blog */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/* Blog */}
              <div
                className="blog-card"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="blog-img">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath src="assets/img/blog/blog-5.jpg" alt="Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-property">
                    <span>Guest house</span>
                  </div>
                  <div className="blog-title">
                    <h3>
                      <Link to={routes.blogDetails}>
                        Here Are Easy Ways To Know How To...
                      </Link>
                    </h3>
                    <p>
                      There are many variations of passages of lorem ipsum
                      available.
                    </p>
                  </div>
                  <ul className="property-category d-flex justify-content-between align-items-center">
                    <li className="user-info">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-08.jpg"
                          className="img-fluid avatar"
                          alt="Image"
                        />
                      </Link>
                      <div className="user-name">
                        <Link to="#">Ramos</Link>
                        <p>Posted on : 14 Jan 2023</p>
                      </div>
                    </li>
                    <li>
                      <Link to={routes.blogDetails}>
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Blog */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/* Blog */}
              <div
                className="blog-card aos"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="blog-img">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath src="assets/img/blog/blog-6.jpg" alt="Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-property">
                    <span>House</span>
                  </div>
                  <div className="blog-title">
                    <h3>
                      <Link to={routes.blogDetails}>
                        Importance of Virtual Reality in Real Estate
                      </Link>
                    </h3>
                    <p>
                      There are many variations of passages of lorem ipsum
                      available.
                    </p>
                  </div>
                  <ul className="property-category d-flex justify-content-between align-items-center">
                    <li className="user-info">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-10.jpg"
                          className="img-fluid avatar"
                          alt="User"
                        />
                      </Link>
                      <div className="user-name">
                        <Link to="#">Patrick</Link>
                        <p>Posted on : 12 Jan 2023</p>
                      </div>
                    </li>
                    <li>
                      <Link to={routes.blogDetails}>
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Blog */}
            </div>
          </div>
        </div>
      </div>
      {/* /Blog Grid*/}
    </>
  )
}

export default BlogGrid
