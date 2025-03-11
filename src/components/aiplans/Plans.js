import React, { useEffect, useState } from "react";
import PlansCards from "./PlansCards";
import { plan } from "../../api/login/Login";


export default function AiPlans({ walletShowHeader, walletData }) {
  const [planData, setPlanData] = useState(null);
  const planGet = async () => {
    try {
      const res = await plan();
      setPlanData(res?.data?.data);
    } catch (error) {}
  };
  useEffect(() => {
    planGet();
  }, []);
  return (
    <div>
      <div className="PageHeading">
        <h1>Package</h1>
      </div>
      <div className="ContentArea">
        <div className="card">
          <div className="card-header">
            <span>Package</span>
          </div>
          <div className="card-body p-1">
            <div className="row mt-3 mx-2">
              <PlansCards
                planGet={planGet}
                planData={planData}
                walletShowHeader={walletShowHeader}
                walletData={walletData}
                title={"Basic"}
                package={"$130.00 USD"}
              />

              {/* <div className="col-4">
                                <PlansCards title={"Optimal"} package={"$100.00 USD"} />
                            </div>
                            <div className="col-4">
                                <PlansCards title={"Silver"} package={"$800.00 USD"} />
                            </div>
                            <div className="col-4">
                                <PlansCards title={"Gold"} package={"$1,000.00 USD"} />
                            </div>
                            <div className="col-4">
                                <PlansCards title={"Diamond"} package={"$1,200.00 USD"} />
                            </div>
                            <div className="col-4">
                                <PlansCards title={"Platinum"} package={"$2,000.00 USD"} />
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
