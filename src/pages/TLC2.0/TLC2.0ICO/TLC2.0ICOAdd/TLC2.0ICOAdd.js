

import '../TLC2.0ICOAdd/TLC2.0ICO.css'
const TLC20ICOAdd = () => {
    return (
        <>
            <div className="PageHeading">
                <h1>TLC2.0 ICO</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>TLC2.0 ICO New</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" >

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="wallet-card">
                                        <div className="wallet-title">TLC2.0 ICO Wallet Balance</div>
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
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="wallet-card">
                                        <div className="wallet-title">Package Wallet Balance</div>
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
                                <div className="col-xl-3 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Select Wallet <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>Open this select Wallet</option>
                                        <option value={1}>Package</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Amount</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Amount'
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-3 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">One Time Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder='Enter One Time Password '
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-3 text-center mt-4">
                                    <button type="button" className="btn btn-primary mt-4">
                                        Send OTP
                                    </button>
                                </div>
                                <div className="col-xl-12 text-center">
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

export default TLC20ICOAdd