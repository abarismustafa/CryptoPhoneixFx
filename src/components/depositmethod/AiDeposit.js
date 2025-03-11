import React from "react";
import DepositType from "./DepositType";
import PaymentCard from "./PaymentCard";

export default function AiDeposit() {
    return (
        <div>
            <div className="PageHeading">
                <h1>Deposit Method</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Deposit</span></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <DepositType />
                            </div>
                            <div className="col-6">
                                <PaymentCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}