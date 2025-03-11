import React from "react";

export default function AiBalance() {
    return (
        <div>
            <div className="PageHeading">
                <h1>Balance Transfer</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Balance Transfer</span></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="card p-4 fs-4" style={{background : "#D1E7DD"}}>
                                    <p className="m-0 text-primary">you available balance: <span className="text-danger">$0.00 <br></br> USD USD</span></p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card p-4 fs-4" style={{background : "#FFF3CD"}}>
                                    <p className="m-0 text-">Balance Transfer Charge 2 Fixed and 1 % of your total amount to transfer balance.</p>
                                </div>
                            </div>
                        </div>
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtUserId">Username / Email To Send Amount</label>
                                    <input type="text" className="form-control" placeholder="Username / Email To Send Amount" />
                                </div>
                                <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="reward">Transfer Amount </label>
                                    <input type="number" name="reward" id="order_id" className="form-control" placeholder="Enter Price Money" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label>&nbsp;</label>
                                    <button type="button" className="btn btn-primary mr-3" >
                                        Balance Transfer
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}