import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const userName = "John Doe"; // Replace with actual user data
  const userAvatar = ""; // Replace with actual avatar URL, or leave empty for default icon

  return (
    <div className="layout">
      <Header userName={userName} userAvatar={userAvatar} />
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
