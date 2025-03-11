import React, { useState } from "react";
import defualt from "../../asesets/banner/default.png"
import TreeModuls from "./TreeModules";

const Tree = () => {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
    <div className="tree-container">
      {/* Root Node */}
      <div className="row justify-content-center position-relative">
        <div className="col-auto text-center">
          <div className="circle-tree overflow-hidden" onClick={() => setModalShow(true)}>
            <img src={defualt} className="w-100 h-100" />
          </div>
          <h1 className="fs-5 text-black">hamjshs77</h1>
        </div>
        <div className="line">
          <span className="left-arow"></span>
          <span className="right-arow"></span>
        </div>
      </div>

      {/* First Level */}
      <div className="row">
        <div className="col-6 position-relative">
          <div className="text-center">
            <div className="circle-tree overflow-hidden">
              <img src={defualt} className="w-100 h-100" />
            </div>
            <h1 className="fs-5 text-black">No User</h1>
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
            <h1 className="fs-5 text-black">No User</h1>
          </div>
          <div className="line">
            <span className="left-arow"></span>
            <span className="right-arow"></span>
          </div>
        </div>
      </div>

      {/* Second Level */}
      <div className="row">
        <div className="col-3 justify-content-center position-relative">
          <div className="text-center">
            <div className="circle-tree overflow-hidden">
              <img src={defualt} className="w-100 h-100" />
            </div>
            <h1 className="fs-5 text-black">No User</h1>
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
            <h1 className="fs-5 text-black">No User</h1>
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
            <h1 className="fs-5 text-black">No User</h1>
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
            <h1 className="fs-5 text-black">No User</h1>
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
            <div className="col-3"><div className="text-center">
              <div className="circle-tree overflow-hidden">
                <img src={defualt} className="w-100 h-100" />
              </div>
              <h1 className="fs-5 text-black">No User</h1>
            </div></div>
            <div className="col-3"><div className="text-center">
              <div className="circle-tree overflow-hidden">
                <img src={defualt} className="w-100 h-100" />
              </div>
              <h1 className="fs-5 text-black">No User</h1>
            </div></div>
            <div className="col-3"><div className="text-center">
              <div className="circle-tree overflow-hidden">
                <img src={defualt} className="w-100 h-100" />
              </div>
              <h1 className="fs-5 text-black">No User</h1>
            </div></div>
            <div className="col-3"><div className="text-center">
              <div className="circle-tree overflow-hidden">
                <img src={defualt} className="w-100 h-100" />
              </div>
              <h1 className="fs-5 text-black">No User</h1>
            </div></div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <div className="text-center">
                <div className="circle-tree overflow-hidden">
                  <img src={defualt} className="w-100 h-100" />
                </div>
                <h1 className="fs-5 text-black">No User</h1>
              </div>
            </div>
            <div className="col-3">
              <div className="text-center">
                <div className="circle-tree overflow-hidden">
                  <img src={defualt} className="w-100 h-100" />
                </div>
                <h1 className="fs-5 text-black">No User</h1>
              </div>
            </div>
            <div className="col-3">
              <div className="text-center">
                <div className="circle-tree overflow-hidden">
                  <img src={defualt} className="w-100 h-100" />
                </div>
                <h1 className="fs-5 text-black">No User</h1>
              </div>
            </div>
            <div className="col-3">
              <div className="text-center">
                <div className="circle-tree overflow-hidden">
                  <img src={defualt} className="w-100 h-100" />
                </div>
                <h1 className="fs-5 text-black">No User</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TreeModuls show={modalShow}
        onHide={() => setModalShow(false)} />
    </>
  );
};

export default Tree;