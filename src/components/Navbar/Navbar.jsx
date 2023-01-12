import React from "react";
import "./navbar.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalculateIcon from '@mui/icons-material/Calculate';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <nav>
                <div className="logo"></div>
                <div className="number"> <i><LocalPhoneIcon /></i> 7 123 456 78 90</div>
                <input type="text" placeholder="Поиск" />
                <div className="city">
                    <select  name="" id="">
                            <optgroup>
                            <option className="option">Москва</option>
                            <option >Санкт петербург</option>
                            <option >Новосибирск</option>
                            </optgroup>
                            <option value="" hidden selected>Выбор города</option>
                    </select>
                </div>
                <div className="number"> <i><CalculateIcon /></i>Калькулятор</div>
                <div className="sign"> <i><PersonIcon /></i>Sign</div>
            </nav>
            <ul>
                <Link to='/PageUslugi'><li>Услуги</li></Link> 
                <li>Международные перевозки</li>
                <li>Для бизнеса</li>
                <li>Частным лицам</li>
                <li>О компании</li>
                <li>Блог</li>
                <li>Контакты</li>
                <li>deliverytrans@gmail.com</li>
            </ul>
        </div>
    )
}
export default Navbar