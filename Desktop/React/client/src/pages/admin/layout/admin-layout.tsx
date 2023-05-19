import React from "react";
import {  Outlet } from "react-router-dom";
import SideBar from "./components/sidebar";
import AppBar from "./components/appbar";

const AdminLayout = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-full">
          <AppBar />
          <div className="overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
