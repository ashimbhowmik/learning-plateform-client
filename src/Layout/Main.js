import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      <header className="w-[95%] mx-auto">
        <Header></Header>
      </header>
      <section className="w-[90%] mx-auto">
        <section className="flex ">
          <div className="w-[80%]">
            <Outlet></Outlet>
          </div>
          <div className="w-[20%]">
            <Sidebar></Sidebar>
          </div>
        </section>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Main;
