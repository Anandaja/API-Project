import React from "react";
import { Route, Navigate } from "react-router-dom";
import Home from "../home";
import { all_routes } from "./all_routes";
import AboutUs from "../aboutUs";
import AddNewProperty from "../listing/addNewProperty";
import AddNewPropertyRental from "../listing/addNewPropertyRental";
import AgencyDetails from "../agency/agencydetails";
import AgencyGrid from "../agency/agencygrid";
import AgencyGridSidebar from "../agency/agencygridsidebar";
import AagencyList from "../agency/agencylist";
import AgencyListSidebar from "../agency/agencylistsidebar";
import AgentDetails from "../agent/agentDetails";
import AgentGrid from "../agent/agentGrid";
import AgentGridSidebar from "../agent/agentGridSidebar";
import AgentList from "../agent/agentList";
import AgentListSidebar from "../agent/agentListSidebar";
import BlogDetails from "../blog/blogDetails";
import BlogGrid from "../blog/blogGrid";
import BlogList from "../blog/blogList";
import BuyDetails from "../listing/buyProperty/buyDetails";
import BuyPropertyGrid from "../listing/buyProperty/buyPropertyGrid";
import BuyPropertyGridWithSideBar from "../listing/buyProperty/buyGridWithSidebar";
import BuyGridWithMap from "../listing/buyProperty/buyGridWithMap";
import Error404 from "../pages/error/error404";
import Error500 from "../pages/error/error500";
import ComingSoon from "../pages/comingSoon";

import Compare from "../listing/compare";
import Faq from "../pages/faq";
import ContactUs from "../contactUs";
import InvoiceDetails from "../pages/invoiceDetails";
import OurTeam from "../pages/ourTeam";
import Pricing from "../pages/pricing";
import Maintenace from "../pages/maintenance";
import RentDetails from "../listing/rentProperty/rentDetails";
import PrivacyPolicy from "../pages/privacyPolicy";
import Gallery from "../pages/gallery";
import RentalOrderStep1 from "../listing/rentalOrderStep1";
import RentalOrderStep2 from "../listing/rentalOrderStep2";
import RentalOrderStep3 from "../listing/rentalOrderStep3";
import Login from "../pages/authentication/login";
import RentPropertyGrid from "../listing/rentProperty/rentPropertyGrid";
import RentGridWithSidebar from "../listing/rentProperty/rentPropertyGridWithSideBar";
import RentGridMap from "../listing/rentProperty/rentGridMap";
import RentListMap from "../listing/rentProperty/rentListMap";
import Register from "../pages/authentication/register";
import BuyDetilsView from "../listing/buyProperty/buyDetilsView";
import BuyListMap from "../listing/buyProperty/buyListWithMap";
import BuyPropertyListSidebar from "../listing/buyProperty/buyPropertyListWithSidebar";
import ForgotPassword from "../pages/authentication/forgotPassword";
import ResetPassword from "../pages/authentication/resetPassword";
import BuyPropertyList from "../listing/buyProperty/buyPropertyList";
import TermsCondition from "../pages/termsCondition";
import Testimonial from "../pages/testimonial";
import RentalOrder from "../listing/rentalOrder";
import RentPropertyList from "../listing/rentProperty/rentPropertyList";
import RentPropertyListSidebar from "../listing/rentProperty/rentPropertyListSidebar";

const routes = all_routes;
console.log(routes, "routes");

export const publicRoutes = [
    {
      path: "/",
      exact: true,
      element: <Navigate to={routes.home} />, // Redirect to the home route
    },
    {
      path: routes.home,
      element: <Home />,
      route: Route,
    },
    {
      path: routes.aboutUs,
      element: <AboutUs />,
      route: Route,
    },
    {
      path: routes.addNewProperty,
      element: <AddNewProperty />,
      route: Route,
    },
    {
      path: routes.addNewPropertyRental,
      element: <AddNewPropertyRental />,
      route: Route,
    },
    {
      path: routes.agencyDetails,
      element: <AgencyDetails />,
      route: Route,
    },
    {
      path: routes.agencyGrid,
      element: <AgencyGrid />,
      route: Route,
    },
    {
      path: routes.agencyGridSidebar,
      element: <AgencyGridSidebar />,
      route: Route,
    },
    {
      path: routes.agencyList,
      element: <AagencyList />,
      route: Route,
    },
    {
      path: routes.agencyListSidebar,
      element: <AgencyListSidebar />,
      route: Route,
    },
    {
      path: routes.agentDetails,
      element: <AgentDetails />,
      route: Route,
    },
    {
      path: routes.agentGrid,
      element: <AgentGrid />,
      route: Route,
    },
    {
      path: routes.agentGridSidebar,
      element: <AgentGridSidebar />,
      route: Route,
    },
    {
      path: routes.agentList,
      element: <AgentList />,
      route: Route,
    },
    {
      path: routes.agentListSidebar,
      element: <AgentListSidebar />,
      route: Route,
    },
    {
      path: routes.blogDetails,
      element: <BlogDetails />,
      route: Route,
    },
    {
      path: routes.blogGrid,
      element: <BlogGrid />,
      route: Route,
    },
    {
      path: routes.blogList,
      element: <BlogList />,
      route: Route,
    },
    {
      path: routes.buyDetails,
      element: <BuyDetails />,
      route: Route,
    },
    {
      path: routes.buyPropertyGrid,
      element: <BuyPropertyGrid />,
      route: Route,
    },
    {
      path: routes.buyPropertyGridSidebar,
      element: <BuyPropertyGridWithSideBar />,
      route: Route,
    },
    {
      path: routes.buyGridWithMap,
      element: <BuyGridWithMap />,
      route: Route,
    },
    {
      path: routes.faq,
      element: <Faq />,
      route: Route,
    },
    {
      path: routes.compare,
      element: <Compare />,
      route: Route,
    },
    {
      path: routes.ContactUs,
      element: <ContactUs />,
      route: Route,
    },
    {
      path: routes.InvoiceDetails,
      element: <InvoiceDetails />,
      route: Route,
    },
    {
      path: routes.ourTeam,
      element: <OurTeam />,
      route: Route,
    },
    {
      path: routes.pricingplan,
      element: <Pricing />,
      route: Route,
    },
    {
      path: routes.rentDetails,
      element: <RentDetails />,
      route: Route,
    },
    {
      path: routes.privacyPolicy,
      element: <PrivacyPolicy />,
      route: Route,
    },
    {
      path: routes.gallery,
      element: <Gallery />,
      route: Route,
    },
    {
      path: routes.rentalOrderStep1,
      element: <RentalOrderStep1 />,
      route: Route,
    },
    {
      path: routes.rentalOrderStep2,
      element: <RentalOrderStep2 />,
      route: Route,
    },
    {
      path: routes.rentalOrderStep3,
      element: <RentalOrderStep3 />,
      route: Route,
    },
    {
      path: routes.rentGrid,
      element: <RentPropertyGrid />,
      route: Route,
    },
    {
      path: routes.rentGridWithSidebar,
      element: <RentGridWithSidebar />,
      route: Route,
    },
    {
      path: routes.rentGridMap,
      element: <RentGridMap />,
      route: Route,
    },
    {
      path: routes.rentListMap,
      element: <RentListMap />,
      route: Route,
    },
    {
      path: routes.buyDetailsView,
      element: <BuyDetilsView />,
      route: Route,
    },
    {
      path: routes.buyListWithMap,
      element: <BuyListMap />,
      route: Route,
    },
    {
      path: routes.termsCondition,
      element: <TermsCondition />,
      route: Route,
    },
    {
      path: routes.buyPropertyList,
      element: <BuyPropertyList />,
      route: Route,
    },
    {
      path: routes.buyPropertyListSidebar,
      element: <BuyPropertyListSidebar />,
      route: Route,
    },
    {
      path: routes.testimonial,
      element: <Testimonial />,
      route: Route,
    },
    {
      path: routes.rentalOrder,
      element: <RentalOrder  />,
      route: Route,
    },
    {
      path: routes.rentPropertyList,
      element: <RentPropertyList/>,
      route: Route,
    },
    {
      path: routes.rentPropertyListSidebar,
      element: <RentPropertyListSidebar/>,
      route: Route,
    },
    
];

export const authRouts = [
  {
    path: routes.error404,
    element: <Error404 />,
    route: Route,
  },
  {
    path: routes.error500,
    element: <Error500 />,
    route: Route,
  },
  {
    path: routes.comingSoon,
    element: <ComingSoon />,
    route: Route,
  },
  {
    path: routes.Maintenace,
    element: <Maintenace />,
    route: Route,
  },
  {
    path: routes.login,
    element: <Login />,
    route: Route,
  },
  {
    path: routes.register,
    element: <Register/>,
    route: Route,
  },
  {
    path: routes.forgotPassword,
    element: <ForgotPassword/>,
    route: Route,
  },
  {
    path: routes.restPassword,
    element: <ResetPassword/>,
    route: Route,
  },
]
