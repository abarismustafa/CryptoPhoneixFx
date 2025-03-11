import { Empty } from "antd";
import React from "react";
import { Pagination } from "react-bootstrap";
// import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function BuySellReport() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Buy Sell",
    title_2: " AIBOT BUY/SELL Reports",
  };
  return (
    <>
      <div className="PageHeading">
        <h1>AIBOT BUY/SELL Reports</h1>
      </div>
      <div className="ContentArea">
        <div className="card">
          <div className="card-header">
            <span>Fillter AIBOT BUY/SELL Reports</span>
          </div>
          <div className="card-body">
            <form action="" method="post" name="frmReport" id="frmReport">
              <div className="form-row">
                <div className="col-lg-4 col-md-6 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    // value={filterInitial?.start_date}
                    // name="start_date"
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    // value={filterInitial?.end_date}
                    // name="end_date"
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                  <button type="button" className="btn btn-primary mt-2">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card mt-2" style={{ overflow: "auto" }}>
          <div className="card-body">
            <div
              className="GridUi no-header-footer-grid mt-3"
              id="all_transaction"
            >
              <div
                id="rechargehistorytbl_wrapper"
                className="dataTables_wrapper"
              >
                <table
                  id="rechargehistorytbl"
                  className="table table-striped table-bordered table-hover display fixed_headers dataTable"
                  style={{ width: 1250 }}
                  role="grid"
                  aria-describedby="rechargehistorytbl_info"
                >
                  <thead>
                    <tr role="row">
                      <th style={{ width: "50px" }}>#</th>
                      <th style={{ width: "150px" }}>Amount </th>
                      <th style={{ width: "150px" }}>Price</th>
                      <th style={{ width: "150px" }}>Ai Bot</th>
                      <th style={{ width: "150px" }}>From Wallet </th>
                      <th style={{ width: "150px" }}>Buy/Sell</th>
                      <th style={{ width: "150px" }}>Date</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="dataTables_info_page">
          <div
            className="dataTables_info"
            id="empoloyees-tblwrapper_info"
            role="status"
            aria-live="polite"
          >
            Total {""} entries
          </div>
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="empoloyees-tblwrapper_paginate"
          >
            <Pagination
            // showSizeChanger
            // onShowSizeChange={''}

            // defaultCurrent={1}
            // onChange={onChangeVal}
            // total={totalCount}
            />
          </div>
        </div>
      </div>
      {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
    </>
  );
}

export default BuySellReport;
