import React from "react";
import circular_img from "../../../assets/img/banner/counter_shape.png";
import banner from "../../../assets/img/banner/circular_img.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import InvestModal from "./invest-modal/InvestModal";
const Package = () => {
  return (
    <>
      <section
        className="packageCom p-30"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container">
          <div className="fisherman-content text-center">
            <h4>plan's</h4>
            <h3>Our pricing's plan</h3>
            <p>
              We offer the best pricing's around - from installations to
              repairs, maintenance, and more!
            </p>
          </div>
          <div className="packageTabItem">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="packageItem"
                  style={{ backgroundImage: `url(${circular_img})` }}
                >
                  <h4>Education Package</h4>

                  <div className="price">
                    <p>
                      $200/ <span>Fix Package</span>
                    </p>
                  </div>
                  <ul>
                    <li>24X5 Support</li>
                    <li>checkLive Trading on MT5</li>
                    <li>checkInstant Deposit & Withdrawal</li>
                    <li>checkMultiple Income types</li>
                  </ul>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#investModal"
                    className="commonButton"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="packageItem most"
                  style={{ backgroundImage: `url(${circular_img})` }}
                >
                  <span>Most popular</span>
                  <h4>STANDARD ACCOUNT</h4>

                  <div className="price">
                    <p>$110 to Infinity</p>
                  </div>
                  <ul>
                    <li>Profit: Upto 200$</li>
                    <li>24X5 Support</li>
                    <li>Live Trading on MT5</li>
                    <li>Instant Deposit & Withdrawal</li>
                    <li>Multiple Income types</li>
                  </ul>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#investModal"
                    className="commonButton"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="packageItem"
                  style={{ backgroundImage: `url(${circular_img})` }}
                >
                  <h4>CLASSIC ACCOUNT</h4>

                  <div className="price">
                    <p>$110 to Infinity</p>
                  </div>
                  <ul>
                    <li>Profit: Upto 300%</li>
                    <li>24X5 Support</li>
                    <li>Live Trading on MT5</li>
                    <li>Instant Deposit & Withdrawal</li>
                    <li>Multiple Income types</li>
                  </ul>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#investModal"
                    className="commonButton"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="packageItem"
                  style={{ backgroundImage: `url(${circular_img})` }}
                >
                  <h4>PREMIUM ACCOUNT</h4>

                  <div className="price">
                    <p>
                      $1100 / <span>Fix Package</span>
                    </p>
                  </div>
                  <ul>
                    <li>24X5 Support</li>
                    <li>Live Trading on MT5</li>
                    <li>Instant Deposit & Withdrawal</li>
                    <li>Multiple Income types</li>
                  </ul>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#investModal"
                    className="commonButton"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>

      <InvestModal />
    </>
  );
};

export default Package;
