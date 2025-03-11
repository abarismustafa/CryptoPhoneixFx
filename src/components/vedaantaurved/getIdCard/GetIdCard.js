import React, { useEffect, useState } from "react";
import aibotlogo from "../../../asesets/logo/profile.jpg";
// import ExportPdf from '../../../common/exportPdf/ExportPdf'
import { baseUrlImage } from "../../../baseUrl";
import { authCertificate } from "../../../api/login/Login";
function GetIdCard() {
  const [state, setState] = useState(null);
  console.log(state);

  const userProfileData = async () => {
    try {
      const res = await authCertificate();
      setState(res?.data?.data);
    } catch (error) {
      alert(error?.message);
    }
  };
  useEffect(() => {
    userProfileData();
  }, []);
  return (
    <div className="m-4">
      <div className="card p-4">
        <div className="exppdf d-flex gap-4">
          <div className="d-flex justify-content-center align-items-center">
            {state?.sign ? (
              <img
                src={`${baseUrlImage}${state?.sign}`}
                alt="profile image"
                className="mb-3 rounded-circle img-fluid"
                style={{ width: "125px", height: "125px", objectFit: "cover" }}
              />
            ) : (
              <img
                src={aibotlogo}
                alt="profile not found"
                className="mb-3 rounded-circle img-fluid"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            )}
          </div>
          <div>
            <p>
              <strong>Distributer ID:</strong> {state?.refer_id}
            </p>
            <p>
              <strong>Name:</strong> {state?.name}
            </p>
            {/* <p><strong>Gender:</strong> Male</p> */}
            <p>
              <strong>Mobile:</strong> {state?.mobile}
            </p>
            <p>
              <strong>On Board Date:</strong> {state?.onBoardDate}
            </p>
          </div>
        </div>
        <div className="">{/* <ExportPdf /> */}</div>
      </div>
    </div>
  );
}

export default GetIdCard;
