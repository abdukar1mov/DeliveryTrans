import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section";
import Header from "../../components/Header/Header"

const Glavniy = () => {
  return (
    <div className="glavniy">
      <Navbar />
      <Header/>
      <Section />
      <Footer />
    </div>
  );
};

export default Glavniy;
