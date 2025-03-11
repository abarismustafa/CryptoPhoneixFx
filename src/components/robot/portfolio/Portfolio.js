import { Breadcrumbs } from "@mui/material";
import React from "react";

function Portfolio() {
  const breadCrumbsTitle = {
    id: "4324",
    title_1: "Robot",
    title_2: "Portfolio",
  };
  return (
    <>
      {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-xl-12">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption tbl-caption-2">
                    <h6 className="mb-0">Trading Portfolio</h6>
                  </div>
                </div>
                <div className="d-block mt-1 mb-2">
                  <div className="bg-warning text-white rounded p-2 d-inline-block mt-1">
                    Trading
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-xl-12">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption tbl-caption-2">
                    <h6 className="mb-0">Compounding Portfolio</h6>
                  </div>
                </div>
                <div className="d-block mt-1 mb-2">
                  <div className="bg-success text-white rounded p-2 d-inline-block mt-1">
                    Compounding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
