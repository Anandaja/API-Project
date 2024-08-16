import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../../img";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { header } from "../../json/headerData";
import { all_routes } from "../../../feature-module/router/all_routes";
import { Unlock, UserPlus } from "react-feather";

const Header = () => {
  const navigate = useNavigate();

  const [searchPopup, setSearchPopup] = useState(false);

  const showSearchPopup = () => {
    setSearchPopup(!searchPopup); // Toggle the searchPopup state
  };

  const handleNavigate = () => {
    // Navigate to the desired route
    navigate(routes.rentGridWithSidebar);
    // Hide the search popup
    setSearchPopup(false);
  };
  const routes = all_routes;
  const location = useLocation();
  const pagesActiveClassArray = [
    "/listing/buy-property-grid",
    // "/pages/aboutus",
    // "/authentication/register",
    // "/authentication/login",
    // "/authentication/forgot-password",
    // "/authentication/reset-password",
    // "/pages/booking-payment",
    // "/pages/booking-payment",
    // "/pages/invoice-details",
    // "/pages/error-404",
    // "/pages/error-500",
    // "/pages/pricing",
    // "/pages/faq",
    // "/pages/gallery",
    // "/pages/our-team",
    // "/pages/testimonial",
    // "/pages/terms-condition",
    // "/pages/privacy-policy",
    // "/pages/maintenance",
    // "/pages/coming-soon",
  ];
  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle("slide-nav");
    document.getElementsByTagName("html")[0].classList.toggle("menu-opened");
    document
      .getElementsByClassName("sidebar-overlay")[0]
      .classList.toggle("opened");
  };
  const isHomePage =
    location.pathname === "/" || location.pathname === "/index";

  const [headerClass, setHeaderClass] = useState("header header-fix");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        setHeaderClass("header header-fix nav-fixed");
      } else {
        setHeaderClass("header header-fix");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run this effect only once on component mount
  
  return (
    <div>
      <header className={headerClass} style={{ position: "sticky" }}>
        {/* Header content goes here */}
        {isHomePage && (
          <div className="header-top">
            <div className="template-ad">
              <ImageWithBasePath
                src="assets/img/icons/badge-icon.svg"
                alt="icon"
              />
              <h5>
                No 1, Real Estate Website to Buy / Sell Your Place{" "}
                <span>First Listing Free!!!</span>
              </h5>
            </div>
          </div>
        )}
        <div className="header header-trans">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={handlesidebarmobilemenu}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to={routes.home} className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to={routes.home} className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link id="menu_close" className="menu-close" to="#">
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                {header.map((mainMenus, mainIndex) => {
                  return (
                    <React.Fragment key={mainIndex}>
                      {mainMenus.separateRoute ? (
                        <li
                          key={mainIndex}
                          className={
                            location.pathname.includes(
                              mainMenus.routes || ""
                            ) ||
                            (mainMenus.title === "" &&
                              pagesActiveClassArray?.map((name) =>
                                name.includes(location.pathname)
                              ))
                              ? "active"
                              : ""
                          }
                        >
                          {/* {checkActiceClass(mainMenus)} */}
                          {/* <Link to={mainMenus.routes}>{mainMenus.title}</Link> */}
                          <Link to={mainMenus.routes || routes.home}>
                            {mainMenus.title}
                          </Link>
                        </li>
                      ) : (
                        <li
                          className={`has-submenu ${
                            mainMenus?.menu
                              ?.map((item) => item?.routes)
                              .includes(location.pathname) ||
                            (location.pathname.startsWith("/listing/") &&
                              mainMenus.title === "Listing")
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link to="#">
                            {mainMenus.title}{" "}
                            <i className="fas fa-chevron-down"></i>
                          </Link>
                          <ul
                            className={`submenu ${
                              mainMenus.showAsTab ? "d-block" : ""
                            }`}
                          >
                            {mainMenus.menu?.map((menu, menuIndex) => (
                              <li
                                key={menuIndex}
                                className={`${
                                  menu.hasSubRoute ? "has-submenu" : ""
                                } ${
                                  menu?.subMenus
                                    ?.map((item) => item?.routes)
                                    .includes(location.pathname)
                                    ? "active"
                                    : ""
                                }`}
                              >
                                {menu.hasSubRoute ? (
                                  <React.Fragment>
                                    <Link to="#">{menu.menuValue}</Link>
                                    <ul
                                      className={`submenu ${
                                        menu.showSubRoute ? "d-block" : ""
                                      }`}
                                    >
                                      {menu.subMenus?.map(
                                        (subMenu, subMenuIndex) => (
                                          <li
                                            key={subMenuIndex}
                                            className={
                                              location.pathname ===
                                              subMenu.routes
                                                ? "active"
                                                : ""
                                            }
                                          >
                                            <Link to={subMenu.routes}>
                                              {subMenu.menuValue}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </React.Fragment>
                                ) : (
                                  <li
                                    className={
                                      location.pathname.includes(
                                        menu.routes || ""
                                      )
                                        ? "active"
                                        : ""
                                    }
                                  >
                                    <Link to={menu.routes ?? routes.home}>
                                      {menu.menuValue}
                                    </Link>
                                  </li>
                                )}
                              </li>
                            ))}
                          </ul>
                        </li>
                        
                      )}
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
            <div className="searchbar ms-3">
              <Link to="#" onClick={showSearchPopup}>
                <ImageWithBasePath
                  src="assets/img/icons/search-icon.svg"
                  alt="img"
                />
              </Link>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="new-property-btn">
                <Link to={routes.addNewProperty}>
                  <i className="bx bxs-plus-circle" /> Add New Property
                </Link>
              </li>
              <li>
                <Link to={routes.register} className="btn btn-primary">
                  <UserPlus size={15} className="me-1" />
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to={routes.login} className="btn sign-btn">
                  <Unlock size={15} className="me-1" />
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* /Header */}
      <>
        <div
          className={`search-popup js-search-popup ${
            searchPopup ? "visible" : ""
          }`}
        >
          <Link
            to="#"
            className="close-button"
            id="search-close"
            aria-label="Close search"
            onClick={showSearchPopup}
          >
            <i className="fa fa-close"></i>
          </Link>
          <div className="popup-inner">
            <div className="inner-container">
              <form className="search-form" id="search-form">
                <h3>What Are You Looking for?</h3>
                <div className="search-form-box flex">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Type a Keyword...."
                    id="search-input"
                    aria-label="Type to search"
                    role="searchbox"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className="search-icon"
                    onClick={handleNavigate}
                  >
                    <i className="bx bx-search"></i>
                  </button>
                </div>
                <h5>Popular Properties</h5>
                <ul>
                  <li>
                    {/* Use Link component to navigate */}
                    <Link to={routes.rentGridWithSidebar} onClick={handleNavigate}>
                      Beautiful Condo Room
                    </Link>
                    </li>
                    <li>
                    <Link to={routes.rentGridWithSidebar} onClick={handleNavigate}>
                    Royal Apartment
                    </Link>
                    </li>
                    <li>
                    <Link to={routes.rentGridWithSidebar} onClick={handleNavigate}>
                    Grand Villa House
                    </Link>
                    </li>
                    <li>
                    <Link to={routes.rentGridWithSidebar} onClick={handleNavigate}>
                    Grand Mahaka
                    </Link>
                    </li>
                    <li>
                    <Link to={routes.rentGridWithSidebar} onClick={handleNavigate}>
                    Lunaria Residence
                    </Link>
                    </li>
                    <li>
                    <Link to={routes.rentGridWithSidebar} onClick={handleNavigate}>
                    Stephen Alexander Homes
                    </Link>
                    </li>
                  
                  {/* Add other list items */}
                </ul>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Header;
