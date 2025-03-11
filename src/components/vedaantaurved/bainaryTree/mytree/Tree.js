import React, { useState } from "react";
import defualt from "../../../../asesets/logo/profile.jpg"
import TreeModuls from "./TreeModules";
import { Badge } from "react-bootstrap";
import TreeNode from "./TreeNode";

const Tree = ({ bineryData }) => {
  const [modalShow, setModalShow] = useState(false);



  return (
    <>








      {/* <div className="tree-container">

        <div className="row justify-content-center">
          <div className="col-auto">
            <TreeNode bineryData={bineryData} />
          </div>
        </div>

      </div>


      <div className="tree-container">
        <div className="row justify-content-center position-relative">
          <div className="col-auto text-center">
            <div className="circle-tree overflow-hidden" onClick={() => setModalShow(true)}>
              <img src={defualt} className="w-100 h-100" />
            </div>
            <Badge className="fs-5 ">Aibot313</Badge>
          </div>
        </div>


        <div className="row">
          <div className="col-6 justify-content-center position-relative">
            <div className="text-center">
              <div className="circle-tree overflow-hidden">
                <img src={defualt} className="w-100 h-100" />
              </div>
              <Badge className="fs-5 ">VA1001
              </Badge>
            </div>
            <div className="line">
              <span className="left-arow"></span>
              <span className="right-arow"></span>
            </div>
          </div>
          <div className="col-6 justify-content-center position-relative">
            <div className="text-center">
              <div className="circle-tree overflow-hidden">
                <img src={defualt} className="w-100 h-100" />
              </div>
              <Badge className="fs-5 ">VA1097
              </Badge>
            </div>
            <div className="line">
              <span className="left-arow"></span>
              <span className="right-arow"></span>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-3 justify-content-center position-relative">
            <div className="text-center">
              <div className="circle-tree overflow-hidden">
                <img src={defualt} className="w-100 h-100" />
              </div>
              <Badge className="fs-5 ">No User</Badge>
            </div>
            <div className="line">
              <span className="left-arow"></span>
              <span className="right-arow"></span>
            </div>
          </div>
          <div className="col-3 justify-content-center position-relative">
            <div className="text-center">
              <div className="circle-tree overflow-hidden">
                <img src={defualt} className="w-100 h-100" />
              </div>
              <Badge className="fs-5 ">No User</Badge>
            </div>
            <div className="line">
              <span className="left-arow"></span>
              <span className="right-arow"></span>
            </div>
          </div>
          <div className="col-3 justify-content-center position-relative">
            <div className="text-center">
              <div className="circle-tree overflow-hidden">
                <img src={defualt} className="w-100 h-100" />
              </div>
              <Badge className="fs-5 ">No User</Badge>
            </div>
            <div className="line">
              <span className="left-arow"></span>
              <span className="right-arow"></span>
            </div>
          </div>
          <div className="col-3 justify-content-center position-relative">
            <div className="text-center">
              <div className="circle-tree overflow-hidden">
                <img src={defualt} className="w-100 h-100" />
              </div>
              <Badge className="fs-5 ">No User</Badge>
            </div>
            <div className="line">
              <span className="left-arow"></span>
              <span className="right-arow"></span>
            </div>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <div className="text-center">
                  <div className="circle-tree overflow-hidden">
                    <img src={defualt} className="w-100 h-100" />
                  </div>
                  <Badge className="fs-5 ">No User</Badge>
                </div>
              </div>
              <div className="col-3">
                <div className="text-center">
                  <div className="circle-tree overflow-hidden">
                    <img src={defualt} className="w-100 h-100" />
                  </div>
                  <Badge className="fs-5 ">No User</Badge>
                </div>
              </div>
              <div className="col-3"><div className="text-center">
                <div className="circle-tree overflow-hidden">
                  <img src={defualt} className="w-100 h-100" />
                </div>
                <Badge className="fs-5 ">No User</Badge>
              </div>
              </div>
              <div className="col-3">
                <div className="text-center">
                  <div className="circle-tree overflow-hidden">
                    <img src={defualt} className="w-100 h-100" />
                  </div>
                  <Badge className="fs-5 ">No User</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <div className="text-center">
                  <div className="circle-tree overflow-hidden">
                    <img src={defualt} className="w-100 h-100" />
                  </div>
                  <Badge className="fs-5 ">No User</Badge>
                </div>
              </div>
              <div className="col-3">
                <div className="text-center">
                  <div className="circle-tree overflow-hidden">
                    <img src={defualt} className="w-100 h-100" />
                  </div>
                  <Badge className="fs-5 ">No User</Badge>
                </div>
              </div>
              <div className="col-3">
                <div className="text-center">
                  <div className="circle-tree overflow-hidden">
                    <img src={defualt} className="w-100 h-100" />
                  </div>
                  <Badge className="fs-5 ">No User</Badge>
                </div>
              </div>
              <div className="col-3">
                <div className="text-center">
                  <div className="circle-tree overflow-hidden">
                    <img src={defualt} className="w-100 h-100" />
                  </div>
                  <Badge className="fs-5 ">No User</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <TreeModuls show={modalShow}
        onHide={() => setModalShow(false)} />
    </>
  );
};

export default Tree;