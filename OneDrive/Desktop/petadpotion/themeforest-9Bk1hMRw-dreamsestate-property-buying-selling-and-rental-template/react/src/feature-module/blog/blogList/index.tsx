import React from 'react'
import ImageWithBasePath from '../../../core/img'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../../core/common/breadCrumb'
import { all_routes } from '../../router/all_routes'


const BlogList = () => {
    const routes = all_routes
    return (
        <div>
            {/* Breadcrumb */}
            <BreadCrumb title="Blog List" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Blog List*/}
            <div className="section blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 d-lg-flex">
                                    <div className="blog grid-blog">
                                        <div className="blog-image-list">
                                            <Link to={routes.blogDetails}>
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    src="assets/img/blog/blog-list-01.jpg"
                                                    alt='img'
                                                />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-list-date">
                                                <ul className="meta-item-list">
                                                    <li className="blog-category mb-0">
                                                        <Link to="#">
                                                            <span>Property</span>
                                                        </Link>
                                                    </li>
                                                    <li className="date-icon">
                                                        <div className="post-author">
                                                            <div className="post-author-img">
                                                                <ImageWithBasePath
                                                                    src="assets/img/profiles/avatar-01.jpg"
                                                                    alt="author"
                                                                />
                                                            </div>
                                                            <Link to="#">
                                                                {" "}
                                                                <span> Alphonsa Daniel </span>
                                                            </Link>
                                                        </div>
                                                        <i className="fa-solid fa-calendar-days" />{" "}
                                                        <span>Feb 6, 2023</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="blog-title">
                                                <Link to={routes.blogDetails}>
                                                    The most popular cities for homebuyers
                                                </Link>
                                            </h3>
                                            <p className="blog-description border-0 mb-0 pb-0">
                                                There are many variations of passages of lorem ipsum
                                                available, but the majority have...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 d-lg-flex">
                                    <div className="blog grid-blog">
                                        <div className="blog-image-list">
                                            <Link to={routes.blogDetails}>
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    src="assets/img/blog/blog-list-02.jpg"
                                                    alt='img'
                                                />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-list-date">
                                                <ul className="meta-item-list">
                                                    <li className="blog-category mb-0">
                                                        <Link to="#">
                                                            <span>Villa</span>
                                                        </Link>
                                                    </li>
                                                    <li className="date-icon">
                                                        <div className="post-author">
                                                            <div className="post-author-img">
                                                                <ImageWithBasePath
                                                                    src="assets/img/profiles/avatar-02.jpg"
                                                                    alt="author"
                                                                />
                                                            </div>
                                                            <Link to="#">
                                                                {" "}
                                                                <span>Francis </span>
                                                            </Link>
                                                        </div>
                                                        <i className="fa-solid fa-calendar-days" />{" "}
                                                        <span>Feb 8, 2023</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="blog-title">
                                                <Link to={routes.blogDetails}>
                                                    How to achieve financial independence
                                                </Link>
                                            </h3>
                                            <p className="blog-description border-0 mb-0 pb-0">
                                                Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                                                beatae asperiores dolor magnam fuga. Sed fuga est harum quo
                                                nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis
                                                et cupiditate. Voluptatum beatae..
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 d-lg-flex">
                                    <div className="blog grid-blog">
                                        <div className="blog-image-list">
                                            <Link to={routes.blogDetails}>
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    src="assets/img/blog/blog-list-03.jpg"
                                                    alt='img'
                                                />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-list-date">
                                                <ul className="meta-item-list">
                                                    <li className="blog-category mb-0">
                                                        <Link to="#">
                                                            <span>House</span>
                                                        </Link>
                                                    </li>
                                                    <li className="date-icon">
                                                        <div className="post-author">
                                                            <div className="post-author-img">
                                                                <ImageWithBasePath
                                                                    src="assets/img/profiles/avatar-03.jpg"
                                                                    alt="author"
                                                                />
                                                            </div>
                                                            <Link to="#">
                                                                {" "}
                                                                <span> Eric Krok </span>
                                                            </Link>
                                                        </div>
                                                        <i className="fa-solid fa-calendar-days" />{" "}
                                                        <span>Feb 9, 2023</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="blog-title">
                                                <Link to={routes.blogDetails}>
                                                    Learn how real estate really shapes our future
                                                </Link>
                                            </h3>
                                            <p className="blog-description border-0 mb-0 pb-0">
                                                There are many variations of passages of lorem ipsum
                                                available, but the majority have...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination */}
                            <div className="grid-pagination">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item prev">
                                        <Link className="page-link" to="#">
                                            <i className="fa-solid fa-arrow-left" /> Prev
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            1
                                        </Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link className="page-link" to="#">
                                            2
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            3
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            4
                                        </Link>
                                    </li>
                                    <li className="page-item next">
                                        <Link className="page-link" to="#">
                                            Next <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* /Pagination */}
                        </div>
                        <div className="col-lg-4 theiaStickySidebar">
                            <div className='stickybar'>
                                <div className="rightsidebar">
                                    <div className="card">
                                        <h4>Filter</h4>
                                        <div className="filter-content looking-input form-group mb-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                            />
                                        </div>
                                    </div>
                                    <div className="card">
                                        <h4>Categories</h4>
                                        <ul className="blogcategories-list">
                                            <li>
                                                <Link to="#">Property</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Villa</Link>
                                            </li>
                                            <li>
                                                <Link to="#">House</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Guest House</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Factory</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Godown</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card">
                                        <h4>Top Article</h4>
                                        <div className="article">
                                            <div className="article-blog">
                                                <Link to={routes.blogDetails}>
                                                    <ImageWithBasePath
                                                        className="img-fluid"
                                                        src="assets/img/blog/blog-7.jpg"
                                                        alt="Blog"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="article-content">
                                                <h5>
                                                    <Link to={routes.blogDetails}>Great Business Tips in 2023</Link>
                                                </h5>
                                                <div className="article-date">
                                                    <i className="fa-solid fa-calendar-days" />
                                                    <span>Jan 6, 2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="article">
                                            <div className="article-blog">
                                                <Link to={routes.blogDetails}>
                                                    <ImageWithBasePath
                                                        className="img-fluid"
                                                        src="assets/img/blog/blog-8.jpg"
                                                        alt="Blog"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="article-content">
                                                <h5>
                                                    <Link to={routes.blogDetails}>
                                                        Excited News About Buildings.
                                                    </Link>
                                                </h5>
                                                <div className="article-date">
                                                    <i className="fa-solid fa-calendar-days" />
                                                    <span>Feb 5, 2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="article">
                                            <div className="article-blog">
                                                <Link to={routes.blogDetails}>
                                                    <ImageWithBasePath
                                                        className="img-fluid"
                                                        src="assets/img/blog/blog-9.jpg"
                                                        alt="Blog"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="article-content">
                                                <h5>
                                                    <Link to={routes.blogDetails}>
                                                        8 Amazing Tricks About Build Dream..
                                                    </Link>
                                                </h5>
                                                <div className="article-date">
                                                    <i className="fa-solid fa-calendar-days" />
                                                    <span>October 6, 2022</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Blog Grid*/}
        </div>
    )
}

export default BlogList
