import React, { useState } from "react";
import defualt from "../../../../asesets/logo/profile.jpg";
import { Badge } from "react-bootstrap";
import LeftClild from "./LeftClild.js";
export default function TreeNode({ bineryData }) {
  const [modalShow, setModalShow] = useState(false);

  console.log(bineryData);

  return (
    <div className="text-center position-relative">
      <div className="circle-tree overflow-hidden" onClick={() => setModalShow(true)}>
        <img src={defualt} className="w-100 h-100" />
      </div>
      <Badge className="fs-5">{bineryData?.refer_id || "No User"}</Badge>
      {/* {node.children && node.children.length > 0 && ( */}
      <div className="row justify-content-center mt-2">
        {/* {node.children.map((child, index) => ( */}
        <div className="col-auto" >
          <LeftClild bineryData={bineryData} />
        </div>
        {/* ))} */}
      </div>
      {/* )} */}
    </div>
  )
};