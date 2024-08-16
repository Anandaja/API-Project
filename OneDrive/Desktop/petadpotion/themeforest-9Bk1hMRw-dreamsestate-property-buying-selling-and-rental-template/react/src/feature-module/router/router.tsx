import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { authRouts, publicRoutes } from "./router.link";
import Header from "../../core/common/header";
import Progress from "../../core/common/scrollbar";
import Footer from "../../core/common/footer";
// import Loader from '../../core/common/loader';

const AllRoutes = () => {
  const HeaderLayout = () => (
    <>
      <Header />
      <Outlet />
      <Progress />
      <Footer />
    </>
  );
  const AuthLayout = () => (
    <>
      <Outlet />
    </>
  );
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HeaderLayout />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route path={"/"} element={<AuthLayout />}>
          {authRouts.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
