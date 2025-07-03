import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col px-2 md:px-4 pb-4 xl:px-0 xl:pb-0 bg-[#F6F8FA]">
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
