import React from 'react'
import BuyTlcCard from './buyTlcCard/BuyTlcCard'
// import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import BuyTLCForm from './buyTLCForm/BuyTLCForm'

function BuyTLC() {
    const breadCrumbsTitle = {
        id: "4324",
        title_1: "Buy Sell",
        title_2: "BUY AIBOT",
    }
    return (
        <>
            <div className="PageHeading">
                <h1>BUY AIBOT</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>BUY AIBOT</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" >
                                <div className="col-lg-4 col-md-6 col-sm-12">
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
                                <div className="col-lg-4 col-md-6 col-sm-12">
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
                                <div className="col-lg-4 col-md-12">
                                    <div className="wallet-card">
                                        <div className="wallet-title">AIBOT Buy/Sell Wallet

                                        </div>
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
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Select Wallet-- <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>Open this select Wallet---</option>
                                        <option value={1}>AI BOT Income Wallet</option>
                                        <option value={1}>AI BOT Package Wallet</option>
                                    </select>
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Amount (RS)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Transfer To(User ID)'
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Aibot</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Amount to be Transfer '
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">One Time Password</label>
                                    <div className="d-flex align-items-center">
                                        <input
                                            type="text"
                                            className="form-control border-0"
                                            placeholder="Enter One Time Password"
                                        />
                                        <button className="btn btn-sm btn-warning text-white fw-bold rounded-0 rounded-end">
                                            Send OTP
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3 mt-2">
                                    <div className="form-check mt-2">
                                        <input
                                            className="form-check-input form-check-lg border border-primary"
                                            type="checkbox"
                                            id="checkboxTLC"
                                            style={{ width: '20px', height: '20px' }} // Optional custom size
                                        />
                                        <label className="form-check-label ms-2" htmlFor="checkboxTLC">
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
            </div >
            {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
            {/* <BuyTlcCard /> */}
            {/* <BuyTLCForm /> */}

        </>
    )
}

export default BuyTLC
