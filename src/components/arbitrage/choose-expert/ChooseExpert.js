import React from "react";
import circular_img from "../../../assets/img/banner/fact1-bg.png";

import icon1 from "../../../assets/img/icons/arbi1.png";
import icon2 from "../../../assets/img/icons/arbi3.png";
import icon3 from "../../../assets/img/icons/arbi2.png";
const benefitsData = [
  {
    id: "1",
    url: icon1,
    title: "Unrivaled profit potential",
    description:
      "Take advantage of the opportunity to generate exceptional passive income and benefit from industry-leading interest rates on both your fiat and crypto investments.",
  },
  {
    id: "2",
    url: icon2,
    title: "24/7 support",
    description:
      "Get top-tier service and assistance anytime from our global team of experienced crypto market professionals, available around the clock to support you.",
  },
  {
    id: "3",
    url: icon3,
    title: "Fiat and crypto support",
    description:
      "Maximize your earning potential with a variety of lucrative options, including crypto exchange, arbitrage, and wallet services, all available with a wide range of fiat and",
  },
];

const ChooseExpert = () => {
  return (
    <>
      <section
        className="innovativeSec p-30"
        style={{ background: `url(${circular_img})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="fisherman-content text-center">
                <h4>Why Choose Us</h4>
                <h3>
                  Why choose PhoenixFx AiWorld to become an
                  <span className="d-block">arbitrage investor? </span>
                </h3>
                <p>
                  Buy and sell a diverse selection of cryptocurrencies, taking
                  advantage of real-time data and ultra-fast trade execution.
                  The PhoenixFx AiWorld exchange is designed to be highly
                  intuitive, offering a seamless user experience with
                  competitive rates.
                </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="row">
                {benefitsData.map((item) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
                      <div className="awesomeCard">
                        <span>
                          <img
                            src={item.url}
                            alt={item.title}
                            className="img-fluid"
                          />
                        </span>
                        <div className="text">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseExpert;
