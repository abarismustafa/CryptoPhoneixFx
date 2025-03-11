import React from "react";
import { Link } from "react-router-dom";
import home from "../../../assets/img/platform-00001.png";

const Platform = () => {
  return (
    <>
      <section className="experienceSec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="fisherman-content dark ps-4">
                <h4>Platform</h4>
                <h3>Trading Bot Platform</h3>

                <p>
                  Discover the ultimate toolkit for profitable trading all in
                  one place: featuring top-tier trading bots, AI-powered
                  statistical arbitrage, Grid, Signal, and DCA bots.
                </p>

                <Link to={"/registration"} className="commonButton mt-4">
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

export default Platform;
