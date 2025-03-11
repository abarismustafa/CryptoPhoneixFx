import React from "react";
import icon1 from "../../../assets/img/icons/1.png";
import icon2 from "../../../assets/img/icons/2.png";
import icon3 from "../../../assets/img/icons/3.png";
import icon4 from "../../../assets/img/icons/4.png";

const ProvideService = () => {
  return (
    <>
      <section className="provideServiceSec bgGray">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="tradingCard">
                <img src={icon1} alt="icon" className="img-fluid" />

                <div className="text">
                  <h3>24/7 Operation</h3>
                  <p>the clock so you never miss a profitable trade.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="tradingCard">
                <img src={icon2} alt="icon" className="img-fluid" />

                <div className="text">
                  <h3>5+ years</h3>
                  <p>expertise arbitrage trading strategies</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="tradingCard">
                <img src={icon3} alt="icon" className="img-fluid" />

                <div className="text">
                  <h3>up to 5%-30%</h3>
                  <p>monthly return</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="tradingCard">
                <img src={icon4} alt="icon" className="img-fluid" />

                <div className="text">
                  <h3>automated</h3>
                  <p>trading algorithms for optimal performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProvideService;
