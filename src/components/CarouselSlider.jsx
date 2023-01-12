import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import img from "./../img/rrecomendation_img.png";

const CarouselSlider = () => {
  return (
    <div className="carouselSlider">
      <div className="container">
        <div className="text_caroousel">
          <h1>Рекомендации наших клиентов</h1>
          <button>Читать все отзывы</button>
        </div>
      </div>
      <OwlCarousel className="owl-theme" items="4" autoPlay nav>
        <div className="item">
          <img src={img} alt="" />
        </div>
        <div className="item">
          <img src={img} alt="" />
        </div>
        <div className="item">
          <img src={img} alt="" />
        </div>
        <div className="item">
          <img src={img} alt="" />
        </div>
        <div className="item">
          <img src={img} alt="" />
        </div>
        <div className="item">
          <img src={img} alt="" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default CarouselSlider;
