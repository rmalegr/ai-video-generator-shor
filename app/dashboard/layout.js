import React from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="hidden md:block bg-white h-screen fixed mt-27 ">
        <SideNav />
      </div>
      <div>
        <Header />
        <div className="md:ml-69 ">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
