import React from "react";
import { Button, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
export default function AiBinary() {
    return (
        <div>
            <div className="PageHeading">
                <h1>Binary Commission</h1>
            </div>
            <div className="ContentArea">
                <div className="card">

                    <div className="card-header d-flex justify-content-between">
                    <div>Binary Commission</div>
                    <div className="input-group col-5">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search by Trx"
                    />
                    <button className="input-group-text"><CiSearch /></button>
                </div></div>
                    <div className="card-body">
                    <div id="myTable_wrapper" className="dataTables_wrapper no-footer">
                            <div className="d-flex  justify-content-between align-items-center">
                                <div className="dataTables_length mb-3" id="myTable_length">
                                </div>
                            </div>
                            <div id="myTable_processing" className="dataTables_processing" style={{ display: 'none' }}>Processing...</div>
                            <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info" >
                                <thead>
                                    <tr role="row">
                                        <th className="sorting">
                                        Trx
                                        </th>
                                        <th className="sorting" >Transacted</th>
                                        <th className="sorting" >Amount</th>
                                        <th className="sorting">Post Balance</th>
                                        <th className="sorting" >Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                     <tr className="odd" >
                                            <td valign="top" className="dataTables_empty">TPPN4GQSI4HZ</td>
                                            <td valign="top" className="dataTables_empty text-center">
                                                <span className="d-bolck m-0">2025-01-02 11:56 AM</span>
                                                <span className="d-block m-0">1 week ago</span>
                                            </td>
                                            <td valign="top" className="dataTables_empty text-success">+ $1.00 USD</td>
                                            <td valign="top" className="dataTables_empty">$4,087.57 USD</td>
                                            <td valign="top" className="dataTables_empty">Tree commission</td>
                                        </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div className="dataTables_info_page">
                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                        Total {0}  entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                        <Pagination
                            defaultCurrent={1}
                            onChange={""}
                            total={""}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}