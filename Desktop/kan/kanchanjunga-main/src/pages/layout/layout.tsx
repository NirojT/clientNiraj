import Sidebar from "./sidebar";
import AppBar from "./appbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex bg-gray-200">
        <Sidebar />
        <div className="w-full px-3">
          <AppBar />
          <div className="w-full mt-2 overflow-y-scroll rounded">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
