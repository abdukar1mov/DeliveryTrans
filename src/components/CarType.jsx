import React from "react";
import { useEffect } from "react";
import Car from "./../img/furgon.png";

const CarType = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll(".tabheader_tem");
    const tabContent = document.querySelectorAll(".box_carType");
    const headerPerents = document.querySelector(".carType_button");

    function hideTabContent() {
      tabContent.forEach((item) => {
        item.style.display = "none";
      });
      tabs.forEach((item) => {
        item.classList.remove("active");
      });
    }

    function showTabContent(i = 0) {
      tabContent[i].style.display = "flex";
      tabs[i].classList.add("active");
    }

    hideTabContent();
    showTabContent();

    headerPerents.addEventListener("click", (e) => {
      if (e.target && e.target.classList.contains("tabheader_tem")) {
        tabs.forEach((item, i) => {
          if (e.target === item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }, []);

  return (
    <div className="carType">
      <div className="container">
        <div className="carType_button">
          <button className="tabheader_tem active">Тент</button>
          <button className="tabheader_tem ">Борт</button>
          <button className="tabheader_tem ">Рефрижератор</button>
          <button className="tabheader_tem ">Фургон </button>
        </div>
        <div className="box_carType">
          <div className="box">
            <h3>Фургон</h3>
            <img src={Car} alt="" />
            <div className="box_button">
              <button>Заказать</button>
              <div className="calc_bg">
                <div className="calc_img"></div>
              </div>
            </div>
          </div>
          <div className="box">
            <h3>Фургон</h3>
            <img src={Car} alt="" />
            <div className="box_button">
              <button>Заказать</button>
              <div className="calc_bg">
                <div className="calc_img"></div>
              </div>
            </div>
          </div>
          <div className="box">
            <h3>Фургон</h3>
            <img src={Car} alt="" />
            <div className="box_button">
              <button>Заказать</button>
              <div className="calc_bg">
                <div className="calc_img"></div>
              </div>
            </div>
          </div>
          <div className="box">
            <h3>Фургон</h3>
            <img src={Car} alt="" />
            <div className="box_button">
              <button>Заказать</button>
              <div className="calc_bg">
                <div className="calc_img"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="box_carType">
          <div className="box">
            <h3>Фургон</h3>
            <img src={Car} alt="" />
            <div className="box_button">
              <button>Заказать</button>
              <div className="calc_bg">
                <div className="calc_img"></div>
              </div>
            </div>
          </div>
          <div className="box">
            <h3>Фургон</h3>
            <img src={Car} alt="" />
            <div className="box_button">
              <button>Заказать</button>
              <div className="calc_bg">
                <div className="calc_img"></div>
              </div>
            </div>
          </div>
          <div className="box">
            <h3>Фургон</h3>
            <img src={Car} alt="" />
            <div className="box_button">
              <button>Заказать</button>
              <div className="calc_bg">
                <div className="calc_img"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="box_carType">
          <div className="box">
            <h3>Фургон</h3>
            <img src={Car} alt="" />
            <div className="box_button">
              <button>Заказать</button>
              <div className="calc_bg">
                <div className="calc_img"></div>
              </div>
            </div>
          </div>
          <div className="box">
            <h3>Фургон</h3>
            <img src={Car} alt="" />
            <div className="box_button">
              <button>Заказать</button>
              <div className="calc_bg">
                <div className="calc_img"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="box_carType">
          <div className="box">
            <h3>Фургон</h3>
            <img src={Car} alt="" />
            <div className="box_button">
              <button>Заказать</button>
              <div className="calc_bg">
                <div className="calc_img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarType;
