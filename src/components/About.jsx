import React from "react";
import Boy from './../img/about_boy.png'
import Oclock from './../img/oclock.png'
 
const About = () => {
    return(
        <div className="about_section-block">
            <div className="about_section">
            <div className="container">
                <h1>О компании</h1>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate <br /> <br />

                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditii
                Sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt  <br /> <br />

                Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> <br />

                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                </p>
                <img src={Boy} alt="" />
            </div>
            </div>
            <div className="advantage">
                <div className="container">
                    <h1>Приемущества</h1>
                    <div className="box_advantage">
                    <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Не надо звонитьи вести долгие переговоры</p>
                            <img src={Oclock} alt="" />
                        </div>
                        <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Не надо звонитьи вести долгие переговоры</p>
                            <img src={Oclock} alt="" />
                        </div>
                        <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Не надо звонитьи вести долгие переговоры</p>
                            <img src={Oclock} alt="" />
                        </div>
                        <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Не надо звонитьи вести долгие переговоры</p>
                            <img src={Oclock} alt="" />
                        </div>
                        <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Не надо звонитьи вести долгие переговоры</p>
                            <img src={Oclock} alt="" />
                        </div>
                        <div className="box_item">
                            <h3>Экспедирование</h3>
                            <p>Не надо звонитьи вести долгие переговоры</p>
                            <img src={Oclock} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="numbers_about">
                <div className="container">
                    <div className="numbers_header">
                        <h1>О нас в цифрах</h1>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
                        <span>#6</span>
                        <h2>Consectetur adipiscing elit, sed do eiusmod tempor </h2>
                    </div>
                    <div className="numbers_box">
                        <div className="box_item">
                            <h1>3500</h1>
                            <p>Профессиональных сотрудников</p>
                        </div>
                        <div className="box_item">
                            <h1>400</h1>
                            <p>Профессиональных сотрудников</p>
                        </div>
                        <div className="box_item">
                            <h1>31</h1>
                            <p>Профессиональных сотрудников</p>
                        </div>
                        <div className="box_item">
                            <h1>10</h1>
                            <p>Профессиональных сотрудников</p>
                        </div>
                        <div className="box_item">
                            <h1>7000</h1>
                            <p>Профессиональных сотрудников</p>
                        </div>
                        <div className="box_item">
                            <h1>22</h1>
                            <p>Профессиональных сотрудников</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
