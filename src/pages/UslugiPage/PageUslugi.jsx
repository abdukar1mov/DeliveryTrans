import React from "react";
import About from "../../components/About";
import Accordion from "../../components/Accordion";
import CarType from "../../components/CarType";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import OstavitZayavku from "../../components/OstavitZayavku";
import "../Main/glavniy.css";

const PageUslugi = () => {
  return (
    <div className="glavniy">
      <Navbar />
      <Header/>
      <div className="page2_bg">
        <CarType />
        <About />
        <OstavitZayavku />
        <Accordion />
      </div>
      <Footer />
    </div>
  );
};

export default PageUslugi;
