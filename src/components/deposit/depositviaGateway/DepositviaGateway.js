// import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";



const DepositviaGateway = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Deposit",
        title_2: "Add Fund into Package Wallet",
        path_2: ""
    };
    return (
        <>
            {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}

            <>
                <div className="PageHeading">
                    <h1>Fund into Package Wallet</h1>
                </div>
                <div className="ContentArea">
                    <div className="card">
                        <div className="card-header"><span>Add Fund into Package Wallet</span></div>
                        <div className="card-body">
                            <form action="" method="post" name="frmReport" id="frmReport">
                                <input type="hidden" id="hidID" name="hidID" />
                                <div className="form-row" >

                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Deposit Request For </label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Open this select Deposit Request</option>
                                            <option value={1}>Robo Fund</option>
                                            <option value={2}>Staking Fund</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Select Currency  </label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Open this select Currency</option>
                                            <option value={1}>USD</option>
                                            <option value={2}>Rs</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Amount (USD) </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Amount"
                                        // value={filterInitial?.end_date}
                                        // name="end_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Check Me Out
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary">
                                            Deposit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </>
        </>
    )
}

export default DepositviaGateway