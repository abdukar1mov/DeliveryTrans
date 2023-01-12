import React from "react";
import img from './../img/news_img.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const News  =  () => {
    return(
        <div className="news">
            <div className="container">
                <h1>Новости и акции</h1>

                <div className="box_item">
                    <div className="item">
                        <img src={img} alt="" />
                        <h3>Lorem ipsum</h3>
                        <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                        <div className="bottom">
                            <div className="data">
                            10 июня 2022
                            </div>
                            <button>
                            Подробнее <ChevronRightIcon />
                            </button>
                        </div>
                    </div>   
                    <div className="item">
                        <img src={img} alt="" />
                        <h3>Lorem ipsum</h3>
                        <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                        <div className="bottom">
                            <div className="data">
                            10 июня 2022
                            </div>
                            <button>
                            Подробнее <ChevronRightIcon />
                            </button>
                        </div>
                    </div>   
                    <div className="item">
                        <img src={img} alt="" />
                        <h3>Lorem ipsum</h3>
                        <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                        <div className="bottom">
                            <div className="data">
                            10 июня 2022
                            </div>
                            <button>
                            Подробнее <ChevronRightIcon />
                            </button>
                        </div>
                    </div>    
                </div> 
            </div>
        </div>
    )
}


export default News