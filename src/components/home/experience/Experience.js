import React from "react";
import { Link } from "react-router-dom";
import home from "../../../assets/img/trade123.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Experience = () => {
  return (
    <>
      <section className="experienceSec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="fisherman-content dark ps-4">
                <h4>Trader</h4>
                <h3>
                  All Trades Are Executed On Advanced Meta{" "}
                  <span> Trader 5 Platform</span>
                </h3>

                <p>
                  MetaTrader 5 is an advanced, user-friendly platform that
                  traders can use to manage all aspects of their financial
                  portfolio. It includes analytics tools and indicators as well
                  as market depth information for trading stocks, indices or
                  forex currency pairs on various different markets around the
                  world including US Stocks Portfolio Monitor which provides
                  real time updates about your investments 24/5!
                </p>

                <Link to={"/Signup"} className="commonButton mt-4">
                  Open an account
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
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

export default Experience;
