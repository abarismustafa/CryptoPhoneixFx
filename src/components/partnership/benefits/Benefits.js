import React from "react";
import circular_img from "../../../assets/img/banner/fact1-bg.png";

import icon1 from "../../../assets/img/icons/arbi1.png";
import icon2 from "../../../assets/img/icons/arbi2.png";
import icon3 from "../../../assets/img/icons/arbi3.png";
const benefitsData = [
  {
    id: "1",
    url: icon1,
    title: "Quick-Start Bonus",
    description:
      "Earn extra rewards quickly by hitting key milestones with our Quick-Start Bonus program!",
  },
  {
    id: "2",
    url: icon2,
    title: "Level Team Commission",
    description:
      "Maximize your earnings through levels of commissions with our Level Team structure!",
  },
  {
    id: "3",
    url: icon3,
    title: "Million Dollar Bonus",
    description:
      "Achieve extraordinary success and unlock life-changing rewards with the Million Dollar Bonus!",
  },
];

const Benefits = () => {
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
                <h4>Awesome Benefits</h4>
                <h3>
                  <span>Benefits </span>PhoenixFx AiWorld
                </h3>
                <p>
                  PhoenixFx AiWorld partners earn exciting rewards for building
                  and growing their network through successful referrals.
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

export default Benefits;
