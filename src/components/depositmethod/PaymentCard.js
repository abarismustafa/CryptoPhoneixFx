import React from "react";

export default function PaymentCard() {
    return (
        <div className="card p-3" style={{height : "350px"}}>
            <div className="mb-3 d-flex justify-content-between aling-items-center">
                <label htmlFor="amount" className="form-label m-0 fw-bold">
                    Amount
                </label>
                <div className="input-group col-5">
                    <span className="input-group-text">$</span>
                    <input
                        type="number"
                        id="amount"
                        className="form-control"
                        value="20"
                        readOnly
                    />
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted">Processing Charge</span>
                <span className="fw-normal">1.20 USD</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="text-muted">Total</span>
                <span className="fw-normal">21.20 USD</span>
            </div>
            <button className="btn btn-primary w-100 mb-3" style={{ backgroundColor: "#4A00E0", border: "none" }}>
                Confirm Payment
            </button>
            <p className="text-muted text-center mb-0" style={{ fontSize: "0.875rem" }}>
                Ensuring your funds grow safely through our secure deposit process with world-class payment options.
            </p>
        </div>
    );
}
