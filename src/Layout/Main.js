/** @format */

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-10">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
