import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <main className="h-screen mx-auto flex ">
      <Sidebar />
      <div className="flex-1 pl-5">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
