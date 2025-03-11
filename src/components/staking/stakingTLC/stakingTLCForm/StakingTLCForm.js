import React from 'react'

function StakingTLCForm() {
    return (
        <>
            <div className="PageHeading">
                <h1>Staking  AIBOT</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Add Staking  AIBOT</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" >

                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">User ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={""}
                                        name="start_date"
                                    // onChange={handleChange}

                                    />
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label"> Amount Of Stake</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={""}
                                        name="end_date"
                                    // onChange={handleChange}

                                    />
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Staking Duration</label>
                                    <select className='form-select'>
                                        <option>Staking Duratio Select</option>
                                        <option>1</option>
                                        <option>1</option>
                                        <option>3</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">AIBOT Wallet/Trust Wallet Address</label>
                                    <input
                                        type="Note"
                                        className="form-control"
                                        value={""}
                                        name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Transction Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={""}
                                        name="end_date"
                                    // onChange={handleChange}

                                    />
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Remarks</label>
                                    <input
                                        type="Note"
                                        className="form-control"
                                        value={""}
                                        name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4">
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

export default StakingTLCForm
