import React, { useState } from "react";
import "./header.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1100,
  height: 550,
  bgcolor: "background.paper",
  border: "2px solid white",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header>
      <div className="container">
        <h1>Доставим ваш груз в любую точку России</h1>
        <p>
          Доставляем сборный груз от 1кг по всей стране узнай стоймость
          перевозки прямо сейчас
        </p>
      </div>
      <div className="header_button">
        <div className="calculator">
          <Button onClick={handleOpen} className="calc_bg">
            <div className="calc_img"></div>
          </Button>
          <Modal
            clasName="modal_div"
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="display_modal">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <div className="text">
                    Рассчитаите <br /> стоимость
                  </div>
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <div onClick={handleClose} className="icon__close">
                    <CloseIcon />
                  </div>
                </Typography>
              </div>
              <div className="container-img"></div>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                <div className="text_little">
                  Вы можете <span>Зарегистрироваться</span>
                </div>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                <div className="display_inputs">
                  <form action="Name">
                    <p>
                      <b style={{ fontFamily: "Nunito" }}>Имя</b>
                    </p>
                    <input type="name" placeholder="Ваше имя" />
                  </form>
                  <form action="Name">
                    <p>
                      <b style={{ fontFamily: "Nunito" }}>Откуда</b>
                    </p>
                    <input type="text" placeholder="Например: Москва " />
                  </form>
                </div>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                <div className="display_inputs">
                  <form action="Tel">
                    <p>
                      <b style={{ fontFamily: "Nunito" }}>Телефон</b>
                    </p>
                    <input type="tel" placeholder="+7__ ___ ___" />
                  </form>
                  <form action="Name">
                    <p>
                      <b style={{ fontFamily: "Nunito" }}>Куда</b>
                    </p>
                    <input type="text" placeholder="Например: Владивосток " />
                  </form>
                </div>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                <div className="display_inputs">
                  <form action="Tel">
                    <p>
                      <b style={{ fontFamily: "Nunito" }}>Почта</b>
                    </p>
                    <input type="tel" placeholder="mail@mail.ru" />
                  </form>
                  <form action="Name">
                    <p>
                      <b style={{ fontFamily: "Nunito" }}>
                        Комментарий к заказу
                      </b>
                    </p>
                    <input type="text" placeholder="Ваш комментарий " />
                  </form>
                </div>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                <div className="display_buttons">
                  <button>Заказать</button>
                  <button>Рассчитать перевозку</button>
                </div>
              </Typography>
            </Box>
          </Modal>
          <h4>расчитать стоймость</h4>
        </div>
        <div className="girl">
          <div className="girl_bg">
            <div className="girl_img"></div>
          </div>
          <h4>личный менеджер</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
