
import React from 'react'

const AvialbleEpinRecharge = () => {
    return (
        <>
            <div className="PageHeading">
                <h1>Avialble Epin Recharge</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Avialble Epin Recharge</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row">
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Enter E-Pin Number: <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Enter E-Pin Number'
                                        disabled
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Downline Member <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Downline Member'
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>

                                <div className="col-xl-12 text-align-center">
                                    <button type="button" className="btn btn-primary ">
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

export default AvialbleEpinRecharge