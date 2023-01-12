import React from "react";
import Car from './../img/box_item_img.png'
import About from "./About";
import CarouselSlider from "./CarouselSlider";
import CarType from "./CarType";
import News from "./News";
import OstavitZayavku from "./OstavitZayavku";
import Partners from "./Partners";

import './section.css'
const Section = () => {
    return(
        <div className="section">
            <div className="container">
                <section>
                    <h1>Типы перевозок</h1>
                    <div className="box">
                        <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Принимаем, сопровождаем и сдаем груз по утвержденному маршруту. Контролируем правильное оформление...</p>
                            <button>Подробнее</button>
                            <img src={Car} alt="" />
                        </div>
                        <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Принимаем, сопровождаем и сдаем груз по утвержденному маршруту. Контролируем правильное оформление...</p>
                            <button>Подробнее</button>
                            <img src={Car} alt="" />
                        </div>
                        <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Принимаем, сопровождаем и сдаем груз по утвержденному маршруту. Контролируем правильное оформление...</p>
                            <button>Подробнее</button>
                            <img src={Car} alt="" />
                        </div>
                        <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Принимаем, сопровождаем и сдаем груз по утвержденному маршруту. Контролируем правильное оформление...</p>
                            <button>Подробнее</button>
                            <img src={Car} alt="" />
                        </div>
                        <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Принимаем, сопровождаем и сдаем груз по утвержденному маршруту. Контролируем правильное оформление...</p>
                            <button>Подробнее</button>
                            <img src={Car} alt="" />
                        </div>
                        <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Принимаем, сопровождаем и сдаем груз по утвержденному маршруту. Контролируем правильное оформление...</p>
                            <button>Подробнее</button>
                            <img src={Car} alt="" />
                        </div>
                    </div>
                </section>
            </div>
            <CarType />
            <About />
            <OstavitZayavku />
            <CarouselSlider />
            <News />
            <Partners />
        </div>
    )
}

export default Section 