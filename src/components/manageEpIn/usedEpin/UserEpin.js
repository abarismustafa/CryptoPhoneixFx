import { Pagination } from "antd"


const UserEpin = () => {
    return (
        <>
            <div className="PageHeading">
                <h1>Used Epin</h1>
            </div>
            <div className="ContentArea">
                <div className="card mt-2" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div className="GridUi no-header-footer-grid mt-3" id="all_transaction">
                            <div id="rechargehistorytbl_wrapper" className="dataTables_wrapper">

                                <table id="rechargehistorytbl" className="table table-striped table-bordered table-hover display fixed_headers dataTable" style={{ width: 1250 }} role="grid" aria-describedby="rechargehistorytbl_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '50px' }}>S.No</th>
                                            <th style={{ width: '150px' }}>Trans No</th>
                                            <th style={{ width: '150px' }}>Trans Date</th>
                                            <th style={{ width: '150px' }}>Epin Number</th>
                                            <th style={{ width: '150px' }}>JO Type</th>
                                            <th style={{ width: '150px' }}>Registered By</th>
                                            <th style={{ width: '150px' }}>Name</th>
                                            <th style={{ width: '150px' }}>Registration Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dataTables_info_page">
                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                        Total {''}  entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                        <Pagination
                        // showSizeChanger
                        // onShowSizeChange={''}

                        // defaultCurrent={1}
                        // onChange={onChangeVal}
                        // total={totalCount}
                        />
                    </div>
                </div>
            </div >
        </>
    )
}

export default UserEpin