import React from "react";
import circular_img from "../../../assets/img/banner/fact1-bg.png";

import icon1 from "../../../assets/img/icons/icon1.png";
import icon2 from "../../../assets/img/icons/icon2.png";
import icon3 from "../../../assets/img/icons/icon3.png";
import icon4 from "../../../assets/img/icons/icon4.png";
import icon5 from "../../../assets/img/icons/icon5.png";
import icon6 from "../../../assets/img/icons/icon6.png";
const innovate = [
  {
    id: "1",
    url: icon1,
    title: "Trading Solution",
    description: "Trading solutions for active day traders and new entrants.",
  },
  {
    id: "2",
    url: icon2,
    title: "Cutting Edge Trading",
    description:
      "Our aim is to help you gain confidence in online forex trading.",
  },
  {
    id: "3",
    url: icon3,
    title: "Competitive Pricing",
    description: "Competitive and low pricing for ordinary Trader.",
  },
  {
    id: "4",
    url: icon4,
    title: "Trading Solutions",
    description: "Trading Solutions for Active Traders and Beginners.",
  },
  {
    id: "5",
    url: icon5,
    title: "Secure and Reliable",
    description:
      "Our robust security infrastructure ensures your assets and data...",
  },
  {
    id: "6",
    url: icon6,
    title: "24/7 Operation",
    description:
      "Our system works around the clock, so you never miss a profitable trade..",
  },
];

const Innovative = () => {
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
                <h4>Awesome Service</h4>
                <h3>
                  <span>Why </span>PhoenixFx AiWorld
                </h3>
                <p>Provide Awesome Service With Our Tools</p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="row">
                {innovate.map((item) => {
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

export default Innovative;
