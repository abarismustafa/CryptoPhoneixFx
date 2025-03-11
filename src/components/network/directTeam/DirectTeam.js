import { Pagination, Popconfirm } from "antd";
// import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import Loadar from "../../../common/loader/Loader";
import { Link } from "react-router-dom";
import DirectTeamFilter from "./directTeamFilte/DirectTeamFilter";

const DirectTeam = () => {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Network",
    title_2: "Direct Team",
    path_2: "",
  };
  return (
    <>
      <div className="PageHeading">
        <h1>Direct Team</h1>
      </div>
      <div className="ContentArea">
        <div className="card">
          <div className="card-header">
            <span>Fillter Direct Team</span>
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
                      <th style={{ width: "50px" }}>S.NO</th>
                      <th style={{ width: "150px" }}>User ID</th>
                      <th style={{ width: "150px" }}>Name</th>
                      <th style={{ width: "150px" }}>Subscription</th>
                      <th style={{ width: "200px" }}>Trading</th>
                      <th style={{ width: "200px" }}>Compounding</th>
                      <th style={{ width: "150px" }}>Position</th>
                      <th style={{ width: "100px" }}>Status</th>
                      <th style={{ width: "100px" }}>Direct Business</th>
                      <th style={{ width: "100px" }}>Team Business</th>
                      <th style={{ width: "100px" }}>Total Bot</th>
                      <th style={{ width: "100px" }}>Trading Business</th>
                      <th style={{ width: "100px" }}>Compounding Business</th>
                      <th style={{ width: "100px" }}>Rank</th>
                      <th style={{ width: "100px" }}>Joining Date</th>
                      <th style={{ width: "100px" }}>Activation Date</th>
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
    </>
  );
};

export default DirectTeam;
