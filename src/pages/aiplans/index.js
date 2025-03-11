import React from "react";
import AiPlans from "../../components/aiplans/Plans";

export default function Plans({ walletShowHeader, walletData }) {
    return (
        <div>
            <AiPlans walletShowHeader={walletShowHeader} walletData={walletData} />
        </div>
    )
}