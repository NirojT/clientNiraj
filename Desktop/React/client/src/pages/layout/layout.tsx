import React from "react";
import { Outlet } from "react-router-dom";
import TopHero from "../hero/top-hero";
import BottomNav from "../nav/bottom-nav";
import UpperNav from "../nav/upper-nav";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      {/* <UpperNav /> */}
      <TopHero />
      <div className="bg-white">
        <BottomNav />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
