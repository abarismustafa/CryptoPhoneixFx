import React from "react";
import { Link, useNavigate } from "react-router-dom";

const InvestModal = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/package-detail");
  };
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="investModal"
        tabIndex={-1}
        aria-labelledby="investModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg radius-0">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 mb-0" id="investModalLabel">
                Confirm to invest on cobra
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body ">
              <div className="confirmBody">
                <div className="confirmPrice">
                  <ul>
                    <li>
                      <span>Invest:</span> $1,000.00
                    </li>
                    <li>
                      <span>Interest:</span> 10.00 USD
                    </li>
                    <li>
                      <span>Per 720 hours for 150 times</span>
                    </li>
                    <li>Total Profit $1500.00</li>
                  </ul>
                </div>
                <form className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="Choose Plan">Choose Plan</label>
                      <select className="form-select">
                        <option value="14" selected>
                          {" "}
                          Cobra
                        </option>
                        <option value="13"> Elephant</option>
                        <option value="12"> Crown</option>
                        <option value="11"> Silver</option>
                        <option value="10"> Black Horse</option>
                        <option value="9"> Life Time</option>
                        <option value="8"> Gold</option>
                        <option value="7"> Platinum</option>
                        <option value="6"> Slivesto</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="Invest Amount ">Invest Amount </label>
                      <input
                        type="number"
                        placeholder="1000.00"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="Auto Schedule Invest">
                        Auto Schedule Invest
                      </label>
                      <select className="form-select">
                        <option value="14" selected>
                          {" "}
                          Schedule
                        </option>
                        <option value="13"> Elephant</option>
                        <option value="12"> Crown</option>
                        <option value="11"> Silver</option>
                        <option value="10"> Black Horse</option>
                        <option value="9"> Life Time</option>
                        <option value="8"> Gold</option>
                        <option value="7"> Platinum</option>
                        <option value="6"> Slivesto</option>
                      </select>
                      <span>
                        You can set your investment as a Scheduler or invest
                        instant.
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="Schedule For ">Schedule For </label>
                      <input
                        type="number"
                        placeholder="1"
                        className="form-control"
                      />
                      <span>Set how many times you want invest</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="After ">After </label>
                      <input
                        type="number"
                        placeholder="1"
                        className="form-control"
                      />
                      <span>
                        Set a frequency at which your prefer to make investment
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer border-0 p-0">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={handleRedirect}
                className="btn btn-primary"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestModal;
