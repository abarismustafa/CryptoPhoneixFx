import React from "react";
import { Link } from "react-router-dom";

import home from "../../../assets/img/export-about.png";

const BriefCompany = () => {
  return (
    <>
      <section className="briefCompany p-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="briefImg">
                <img src={home} alt="PhoenixFx AiWorld" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="fisherman-content about">
                <h4>About Us</h4>
                <h3>
                  Let the PhoenixFx AiWorld help you make money!{" "}
                  <span>PhoenixFx AiWorld</span>
                </h3>
                <p>
                  With a fluctuating market, it’s hard to predict when prices
                  will go up or down. This is where our ally comes in –
                  automatically setting Buy and Sell orders so that we can take
                  advantage of any fluctuations happening on your exchange (or
                  others). Simply connect them through API access if needed then
                  wait for performance data; once available check out how
                  successful these strategies were by demoing before investing
                  real funds
                </p>

                <Link to={"/Signup"} className="commonButton mt-3">
                  Open an Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BriefCompany;
