import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import CarouselSlider from "./CarouselSlider";

const Accordion = () => {
  const [showInfo, setSHowInfo] = useState(false);
  const [showAcc, setShowAcc] = useState(false);
  const [showAccor, setShowAccor] = useState(false);

  return (
    <div className="accordion">
      <div className="first_item" onClick={() => setSHowInfo(!showInfo)}>
        <p>
          Рекомендации наших клиентов{" "}
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </p>
        <div className="content_text">
          {showInfo && (
            <div className="panel">
              {" "}
              <CarouselSlider />{" "}
            </div>
          )}
        </div>
      </div>
      <div className="first_item" onClick={() => setShowAcc(!showAcc)}>
        <p>
          Новости и акции{" "}
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </p>
        <div className="content_text">
          {showAcc && (
            <div className="panel">
              {" "}
              <CarouselSlider />{" "}
            </div>
          )}
        </div>
      </div>

      <div className="first_item" onClick={() => setShowAccor(!showAccor)}>
        <p>
          Наши партнеры{" "}
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </p>
        <div className="content_text">
          {showAccor && (
            <div className="panel">
              {" "}
              <CarouselSlider />{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
