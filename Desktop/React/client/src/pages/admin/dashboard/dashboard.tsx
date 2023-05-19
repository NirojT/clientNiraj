import React, { useEffect } from "react";
import { adminLayoutStore } from "../layout/store";

const Dashboard = () => {
  const setActiveUrl = adminLayoutStore((state: any) => state.setActiveUrl);
  useEffect(() => {
    setActiveUrl(window.location.pathname);
  }, [setActiveUrl]);
  return <div>Dashboard</div>;
};

export default Dashboard;
