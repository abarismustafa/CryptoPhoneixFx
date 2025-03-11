import React from "react";
import home from "../../assets/img/partnership.webp";
import { Link } from "react-router-dom";
import Benefits from "./benefits/Benefits";

function Partnership() {
  return (
    <>
      <section className="partnershipSec p-30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="briefImg">
                <img src={home} alt="PhoenixFx AiWorld" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="fisherman-content about">
                <h4>Partnership</h4>
                <h3>Partnership</h3>
                <p>
                  Start leveraging your network today by joining Infinite
                  Tradingas a partner and earn generous rewards for introducing
                  your contacts to our ecosystem. Your support will help expand
                  our community and boost liquidity.
                </p>
                <hr />
                <p>
                  Start leveraging your network today by joining Infinite
                  Tradingas a partner and earn generous rewards for introducing
                  your contacts to our ecosystem.
                </p>

                <Link to={"/registration"} className="commonButton mt-3">
                  Become a partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Benefits />
    </>
  );
}

export default Partnership;
