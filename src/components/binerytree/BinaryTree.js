import React, { useEffect, useState } from "react";
import { binerytreeGet } from "../../api/login/Login";
import { Badge } from "react-bootstrap";
import defualt from "../../asesets/logo/profile.jpg";
import { Link } from "react-router-dom";
import "./bineryTree.css";
const BinaryTree = () => {
  const [bineryData, setBineryData] = useState(null);
  console.log(bineryData);

  const getByNeryData = async () => {
    try {
      const res = await binerytreeGet();
      // console.log(res?.data);
      setBineryData(res?.data?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getByNeryData();
  }, []);

  return (
    // https://cdn-icons-png.freepik.com/256/7611/7611571.png?semt=ais_hybrid
    <div className="m-4">
      {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
      <div className="ContentArea">
        <div className="card">
          <div className="card-header">
            <input
              className="form-control"
              type="search"
              placeholder="Search Here"
            />
          </div>
          <div className="card-body p-1">
            <div className="tree-container">
              <div className="row ">
                <div className="col-4 text-center mt-5">
                  <h5 style={{ color: "blue", fontWeight: "700" }}>
                    Left Users
                  </h5>
                  <p>0</p>
                </div>
                <div className="col-4 text-center position-relativee">
                  <div className="circle-tree overflow-hidden ">
                    <img src={defualt} className="w-100 h-100" />
                    {/* {bineryData?.right?.right?.right?.paid ? (
                                            <img src={defualt} className="w-100 h-100" />
                                        ) : bineryData?.right?.right?.right?.free ? (
                                            <img src="https://www.freeiconspng.com/thumbs/free-icon/free-icon-27.png" className="w-100 h-100" />
                                        ) : bineryData?.right?.right?.right?.referid ? (
                                            <img src="https://www.freeiconspng.com/thumbs/referral-icon/referral-icon-28.png" className="w-100 h-100" />
                                        ) : (
                                            <img src="https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-28.png" className="w-100 h-100" />
                                        )} */}
                  </div>
                  <div className="box-hover">
                    <p>
                      {" "}
                      <strong>Mr Ashraf</strong>
                    </p>
                    <p>
                      <span>
                        <strong>Spnsor:</strong>5645
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>Left Active Member:</strong>5645
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>Right Active Member:</strong>5645
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>Activation PV:</strong>5645
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>Left PV:</strong>5645
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>Right PV:</strong>5645
                      </span>
                    </p>
                    <div
                      style={{ width: "100%", borderTop: "1px solid black" }}
                    >
                      <div
                        style={{
                          padding: "5px",
                          backgroundColor: "yellowgreen",
                          width: "80px",
                          borderRadius: "5px",
                          margin: "4px auto",
                          fontWeight: "700",
                        }}
                      >
                        Paid
                      </div>
                    </div>
                  </div>
                  <Badge className="fs-5 ">{bineryData?.refer_id}</Badge>
                </div>
                <div className="col-4 text-center mt-5">
                  <h5 style={{ color: "blue", fontWeight: "700" }}>
                    Right Users
                  </h5>
                  <p>0</p>
                </div>
              </div>

              <div className="row">
                {bineryData && bineryData?.left == null ? (
                  <div className="col-6 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">Dummy</Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                ) : (
                  <div className="col-6 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">
                        {bineryData?.left?.refer_id}
                      </Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                )}

                {bineryData && bineryData?.right == null ? (
                  <div className="col-6 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">dummy</Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                ) : (
                  <div className="col-6 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">
                        {bineryData?.right?.refer_id}
                      </Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                )}
              </div>

              <div className="row">
                {bineryData && bineryData?.left?.left == null ? (
                  <div className="col-3 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">Dummy Users</Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                ) : (
                  <div className="col-3 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">
                        {bineryData?.left?.left?.refer_id}
                      </Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                )}

                {bineryData && bineryData?.left?.right == null ? (
                  <div className="col-3 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">Dummy Users</Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                ) : (
                  <div className="col-3 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">
                        {bineryData?.left?.right?.refer_id}
                      </Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                )}

                {/* <div className="col-3 justify-content-center position-relative">
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
                                </div> */}

                {bineryData && bineryData?.right?.left == null ? (
                  <div className="col-3 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">Dummy</Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                ) : (
                  <div className="col-3 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">
                        {bineryData?.right?.left?.refer_id}
                      </Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                )}

                {bineryData && bineryData?.right?.right == null ? (
                  <div className="col-3 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">Dummy</Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                ) : (
                  <div className="col-3 justify-content-center position-relative">
                    <div className="text-center">
                      <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                      </div>
                      <Badge className="fs-5 ">
                        {bineryData?.right?.right?.refer_id}
                      </Badge>
                    </div>
                    <div className="line">
                      <span className="left-arow"></span>
                      <span className="right-arow"></span>
                    </div>
                  </div>
                )}
              </div>

              <div className="row m-0">
                <div className="col-6">
                  <div className="row">
                    {bineryData && bineryData?.left?.left?.left == null ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <div className="col-3">
                          <div className="text-center">
                            <div className="circle-tree overflow-hidden">
                              <img src={defualt} className="w-100 h-100" />
                            </div>
                            <Badge className="fs-5 ">
                              {bineryData?.left?.left?.left?.refer_id}
                            </Badge>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="text-center">
                            <div className="circle-tree overflow-hidden">
                              <img src={defualt} className="w-100 h-100" />
                            </div>
                            <Badge className="fs-5 ">
                              {bineryData?.left?.left?.right?.refer_id}
                            </Badge>
                          </div>
                        </div>
                      </>
                    )}

                    {bineryData && bineryData?.left?.left?.right == null ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <div className="col-3">
                          <div className="text-center">
                            <div className="circle-tree overflow-hidden">
                              <img src={defualt} className="w-100 h-100" />
                            </div>
                            <Badge className="fs-5 ">
                              {bineryData?.left?.right?.left?.refer_id}
                            </Badge>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="text-center">
                            <div className="circle-tree overflow-hidden">
                              <img src={defualt} className="w-100 h-100" />
                            </div>
                            <Badge className="fs-5 ">
                              {bineryData?.left?.right?.right?.refer_id}
                            </Badge>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="col-6">
                  <div className="row">
                    {bineryData && bineryData?.right?.left?.left == null ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <div className="col-3">
                          <div className="text-center">
                            <div className="circle-tree overflow-hidden">
                              <img src={defualt} className="w-100 h-100" />
                            </div>
                            <Badge className="fs-5 ">
                              {bineryData?.right?.left?.left?.refer_id}
                            </Badge>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="text-center">
                            <div className="circle-tree overflow-hidden">
                              <img src={defualt} className="w-100 h-100" />
                            </div>
                            <Badge className="fs-5 ">
                              {bineryData?.right?.left?.right?.refer_id}
                            </Badge>
                          </div>
                        </div>
                      </>
                    )}

                    {bineryData && bineryData?.right?.right?.left == null ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <div className="col-3">
                          <div className="text-center">
                            <div className="circle-tree overflow-hidden">
                              <img src={defualt} className="w-100 h-100" />
                            </div>
                            <Badge className="fs-5 ">
                              {bineryData?.right?.right?.left?.refer_id}
                            </Badge>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="text-center">
                            <div className="circle-tree overflow-hidden">
                              {bineryData?.right?.right?.right?.refer_id ? (
                                <img src={defualt} className="w-100 h-100" />
                              ) : (
                                <img
                                  src="https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-28.png"
                                  className="w-100 h-100"
                                />
                              )}
                            </div>
                            <Badge className="fs-5 ">
                              {bineryData?.right?.right?.right?.refer_id ? (
                                bineryData?.right?.right?.right?.refer_id
                              ) : (
                                <Link
                                  to={"#"}
                                  style={{
                                    color: "white",
                                    textDecoration: "none",
                                    background: "gray",
                                    padding: "0px 5px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  Sign Up
                                </Link>
                              )}
                            </Badge>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* https://teamgreen.org.in/wp-content/uploads/2019/07/boy-avatar-3.png */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinaryTree;
