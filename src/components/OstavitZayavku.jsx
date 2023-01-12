import React from "react";

const OstavitZayavku = () => {
    return(
        <div className="ostavit_zayavku">
            <div className="container">
                <h1>Нет времени разбираться? Подскажем!</h1>
                <div className="box">
                    <div className="input_box">
                        <h4>Я хочу перевезти</h4>
                        <input type="text" placeholder="Например: Кухонный уголок"/>
                    </div>
                    <div className="input_box">
                        <h4>Откуда - Куда</h4>
                        <input type="text" placeholder="Например: Москва - Владивосток"/>
                    </div>
                    <div className="input_box">
                        <h4>Телефон</h4>
                        <input type="text" placeholder="+7 ___ ___ __ __"/>
                    </div>
                    <div className="input_checkbox">
                        <input type="checkbox" />
                        <p>Согласие на обработку персональных данных</p>
                    </div>
                    <button>Оставить заявку</button>
                </div>
            </div>
        </div>
    )
}

export default OstavitZayavku