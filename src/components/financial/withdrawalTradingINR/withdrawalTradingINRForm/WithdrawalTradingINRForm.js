import React from 'react'

function WithdrawalTradingINRForm() {
    return (
        <>
            <div className="PageHeading">
                <h1>New RS.TRC20 Address to Receive Profits</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Add New RS.TRC20 Address to Receive Profits</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" >

                                <div className="col-xl-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Select Wallet Address</label>
                                    <select className='form-select'>
                                        <option>Select Wallet Address</option>
                                        <option>Teth USD (Tron/TRC20)</option>
                                        <option>Trillion (AIBOT)</option>
                                    </select>
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Address</label>
                                    <input
                                        type="Note"
                                        className="form-control"
                                        value={""}
                                        name="end_date"
                                    // onChange={handleChange}
                                    />
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
            </div >
        </>
    )
}

export default WithdrawalTradingINRForm
