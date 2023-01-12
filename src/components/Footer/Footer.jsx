import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <ul>
            <li className="ddd">О компании</li>
            <li>Филиалы</li>
            <li>Новости</li>
            <li>Блог</li>
            <li>Горячая линия</li>
            <li className="ddd">Контакты</li>
            <li>
              {" "}
              <i>
                <LocalPhoneIcon />
              </i>{" "}
              +7 987 654 32 10
            </li>
            <li className="aa">
              {" "}
              <i>
                <LocalPhoneIcon />
              </i>
              mail@mail.ru
            </li>
            <li className="bb">
              {" "}
              <i>
                <LocalPhoneIcon />
              </i>
              WhatsApp
            </li>
            <li className="cc">
              {" "}
              <i>
                <LocalPhoneIcon />
              </i>
              Москва, ул. Лобачика 11
            </li>
            <li className="ddd">Соц сети</li>
            <li>
              <i>
                <LocalPhoneIcon />
              </i>{" "}
              <i>
                <LocalPhoneIcon />
              </i>
            </li>
          </ul>
          <ul>
            <li className="ddd">Направления</li>
            <li>Тарифы</li>
            <li>Требования к грузу</li>
            <li>Требования к упаковке</li>
            <li className="ddd">Услуги</li>
            <li>Тарифы</li>
            <li>Проверка груза по ттн</li>
            <li>Сотрудничество</li>
            <li>Электронный</li>
            <li className="ddd"> Акции</li>
            <li className="ddd">Блог</li>
          </ul>
          <ul>
            <li className="ddd">Международные </li>
            <li>перевозки</li>
            <li>Грузоперевозки Москва–Омск</li>
            <li>Грузоперевозки Москва–Красноярск</li>
            <li>Грузоперевозки Москва-Ростов-на-Дону</li>
            <li>Грузоперевозки Москва-Челябинск</li>
            <li>Грузоперевозки Москва–Барнаул</li>
            <li>Грузоперевозки Москва–Самара</li>
            <li>Грузоперевозки Москва-Челябинск</li>
            <li className="ddd">Условия перевозок</li>
            <li>Грузоперевозки Москва–Омск</li>
            <li>Грузоперевозки Москва–Красноярск</li>
            <li>Грузоперевозки Москва-Ростов-на-Дону</li>
            <li className="ddd">Автопарк</li>
          </ul>
          <ul>
            <li className="ddd">Для бизнеса</li>
            <li>Филиалы</li>
            <li>Новости</li>
            <li>Блог</li>
            <li>Горячая линия</li>
            <li>Вакансии</li>
            <li className="ddd">Частным лицам</li>
            <li>Филиалы</li>
            <li>Новости</li>
            <li>Блог</li>
            <li className="ddd">Водителям</li>
            <li>Филиалы</li>
            <li>Новости</li>
            <li>Блог</li>
            <li>Блог</li>
          </ul>
        </div>
        <div className="footer_bottom">
          <p>Политика конфиденциальности</p>
          <p>Реквизиты</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
