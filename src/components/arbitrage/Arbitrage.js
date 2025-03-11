import React from "react";
import home from "../../assets/img/arbitrage-img.avif";
import { Link } from "react-router-dom";
import Platform from "./platform/Platform";
import ChooseExpert from "./choose-expert/ChooseExpert";

function Arbitrage() {
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
                <h4>Community</h4>
                <h3>
                  Empowering a global community of <span>investors</span>
                </h3>
                <p>
                PhoenixFx AiWorld is one of the world’s leading Forex trading
                  Robot and aims to revolutionise the way people invest, and
                  enhance investors’ financial education. At the heart of our
                  mission is a simple belief: investment is a tool for creating
                  opportunities. By empowering individuals and communities
                  worldwide to take control of their financial futures, we
                  enable wealth creation and promote global economic growth A
                  thriving community of investors united by knowledge,
                  resources, and a shared commitment to success. We envision a
                  future where anyone, anywhere, can access the tools and
                  insights needed to make informed financial decisions.
                </p>

                <Link to={"/registration"} className="commonButton mt-3">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Platform />
      <ChooseExpert />
    </>
  );
}

export default Arbitrage;
