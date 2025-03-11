import React from "react";
import SellAibotCard from "./sellAibotCard/SellAibotCard";
// import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import SellAibotForm from "./sellAibotForm/SellAibotForm";
import { Pagination } from "antd";

function SellAibot() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Buy Sell",
    title_2: "Sell AIBOT",
  };
  return (
    <>
      <div className="PageHeading">
        <h1>Sell AIBOT ADD</h1>
      </div>
      <div className="ContentArea">
        <div className="card">
          <div className="card-header">
            <span>Sell AIBOT ADD</span>
          </div>
          <div className="card-body">
            <form action="" method="post" name="frmReport" id="frmReport">
              <div className="form-row">
                <div className="col-md-6">
                  <div className="wallet-card">
                    <div className="wallet-title">AIBOT Income Wallet </div>
                    <div className="wallet-balance">$0</div>
                    <div className="bar-chart">
                      <div className="bar" />
                      <div className="bar" />
                      <div className="bar" />
                      <div className="bar" />
                      <div className="bar" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="wallet-card">
                    <div className="wallet-title">AIBOT Package Wallet </div>
                    <div className="wallet-balance">$0</div>
                    <div className="bar-chart">
                      <div className="bar" />
                      <div className="bar" />
                      <div className="bar" />
                      <div className="bar" />
                      <div className="bar" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 mb-3 mt-2">
                  <label for="exampleFormControlInput1" class="form-label">
                    Aibot
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Aibot "
                    // value={filterInitial?.end_date}
                    // name="end_date"
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-xl-3 mb-3 mt-2">
                  <label for="exampleFormControlInput1" class="form-label">
                    Amount (RS)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Transfer To(Rs)"
                    // value={filterInitial?.end_date}
                    // name="end_date"
                    // onChange={handleChange}
                  />
                </div>

                <div className="col-xl-4 mb-3 mt-2">
                  <label for="exampleFormControlInput1" class="form-label">
                    One Time Password
                  </label>
                  <div className="d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter One Time Password"
                    />
                  </div>
                </div>
                <div className="col-xl-2 mb-3 mt-2">
                  <button className="commonButton">
                    Send OTP
                  </button>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mt-2">
                  <div className="form-check mt-2">
                    <input
                      className="form-check-input form-check-lg border border-primary"
                      type="checkbox"
                      id="checkboxTLC"
                      style={{ width: "20px", height: "20px" }} // Optional custom size
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="checkboxTLC"
                    >
                      Check me out
                    </label>
                  </div>
                </div>

                <div className="col-xl-12">
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SellAibotCard />
            <SellAibotForm /> */}
    </>
  );
}

export default SellAibot;
