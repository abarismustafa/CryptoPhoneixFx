import React from "react";
import circular_img from "../../../assets/img/banner/counter_shape.png";

import { Link } from "react-router-dom";

import home from "../../../assets/img/profit-img.png";
const investData = [
  {
    id: "1",
    name: "MORI YOU",
    username: "motoxxx",
    investment: "$9,348,100.00",
  },
  {
    id: "2",
    name: "Md Belal Hosen",
    username: "mdbelalhosen002",
    investment: "$6,239,213.67",
  },
  {
    id: "3",
    name: "Stefan Cajavilca",
    username: "jocare52",
    investment: "$5,013,614.20",
  },
  {
    id: "4",
    name: "Abdul Basit",
    username: "basit123",
    investment: "$954,500.00",
  },
  {
    id: "5",
    name: "User Name",
    username: "username",
    investment: "$204,228.35",
  },
  {
    id: "6",
    name: "azzd fzfz",
    username: "rooted",
    investment: "$125,294.85",
  },
  {
    id: "7",
    name: "testingo testingo",
    username: "nekotreci66",
    investment: "$76,200.00",
  },
  {
    id: "8",
    name: "David Doe",
    username: "whoami420",
    investment: "$61,227.85",
  },
];

const Investors = () => {
  return (
    <>
      {/* <section className="treatmentProgram p-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="fisherman-content">
                <h4>Investors</h4>
                <h3>Our Top Investors</h3>
                <p>
                  Here are the investor leaders who have made the maximum
                  investment with our system.
                </p>
              </div>
            </div>
            {investData.map((item) => {
              return (
                <div className="col-lg-3 col-md-3" key={item.id}>
                  <div className="investWidget" style={{ backgroundImage: `url(${circular_img})` }}>
                    <h5>{item.name}</h5>
                    <p>{item.username}</p>
                    <span>Investment: {item.investment}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      <section className="briefCompany p-30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="fisherman-content profit">
                <h4>Start Robot Trading with. .</h4>
                <h3>The most profitable Trading Robot</h3>
                <p className="special">$99</p>

                <Link to={"/Signup"} className="commonButton mt-3">
                  Open an Account
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="briefImg">
                <img src={home} alt="PhoenixFx AiWorld" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investors;
