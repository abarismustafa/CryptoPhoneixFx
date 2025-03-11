import React, { useEffect, useState } from "react";
import Tree from "./Tree";
import "./Tree.css";
import { binerytreeGet } from "../../../../api/login/Login";
import { Badge } from "react-bootstrap";
import defualt from "../../../../asesets/banner/0234605a9c.svg.svg";
import new1 from "../../../../asesets/new.svg";
import { Link } from "react-router-dom";
import TreeModuls from "./TreeModules";
import Loader from "../../../../common/loader/Loader";
// import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";

export default function AiTree() {
  const [loading, setLoading] = useState(false);
  const [bineryData, setBineryData] = useState();
  const [selfId, setSelfId] = useState(null);

  const generateUrl = (Par_refId, par_position, self_id, self_position) => {
    try {
      if (selfId == null && Par_refId) throw new Error("Self Id not found!");
      if (selfId == null && par_position)
        throw new Error("Self position not found!");
      const url = `https://partners.aibotworld.in/signup/${
        selfId === null ? self_id : selfId?.refer_id
      }=${
        selfId === null ? self_position : selfId?.refer_by_code_position
      }&${Par_refId}=${par_position}`;
      return url;
    } catch (error) {
      alert(error.message);
    }
  };
  // const dummyData = {
  //     "error": false,
  //     "statusCode": 200,
  //     "data": {
  //         "_id": "67a1fdcd46055c2838684500",
  //         "name": "ADMIN",
  //         "refer_id": "AIBOT10000",
  //         "isActive": true,
  //         "left": {
  //             "_id": "67a1febf46055c2838684601",
  //             "name": "ADMIN",
  //             "refer_id": "AIBOT10001",
  //             "isActive": true,
  //             "left": {
  //                 "_id": "67a1ff9c46055c2838684702",
  //                 "name": "ADMIN",
  //                 "refer_id": "AIBOT10002",
  //                 "isActive": false,
  //                 "left": {
  //                     "_id": "67a200d146055c2838684803",
  //                     "name": "ADMIN",
  //                     "refer_id": "AIBOT10003",
  //                     "isActive": false,
  //                     "left": null,
  //                     "right": null,
  //                     "left_report": { "paid": 5, "free": 20, "total": 25 },
  //                     "right_report": { "paid": 7, "free": 22, "total": 29 }
  //                 },
  //                 "right": {
  //                     "_id": "67a200d146055c2838684804",
  //                     "name": "ADMIN",
  //                     "refer_id": "AIBOT10004",
  //                     "isActive": true,
  //                     "left": null,
  //                     "right": null,
  //                     "left_report": { "paid": 3, "free": 18, "total": 21 },
  //                     "right_report": { "paid": 9, "free": 26, "total": 35 }
  //                 },
  //                 "left_report": { "paid": 8, "free": 38, "total": 46 },
  //                 "right_report": { "paid": 12, "free": 49, "total": 61 }
  //             },
  //             "right": {
  //                 "_id": "67a1ff9c46055c2838684705",
  //                 "name": "ADMIN",
  //                 "refer_id": "AIBOT10005",
  //                 "isActive": false,
  //                 "left": {
  //                     "_id": "67a200d146055c2838684806",
  //                     "name": "ADMIN",
  //                     "refer_id": "AIBOT10006",
  //                     "isActive": false,
  //                     "left": null,
  //                     "right": null,
  //                     "left_report": { "paid": 6, "free": 24, "total": 30 },
  //                     "right_report": { "paid": 10, "free": 30, "total": 40 }
  //                 },
  //                 "right": {
  //                     "_id": "67a200d146055c2838684807",
  //                     "name": "ADMIN",
  //                     "refer_id": "AIBOT10007",
  //                     "isActive": false,
  //                     "left": null,
  //                     "right": null,
  //                     "left_report": { "paid": 4, "free": 16, "total": 20 },
  //                     "right_report": { "paid": 11, "free": 35, "total": 46 }
  //                 },
  //                 "left_report": { "paid": 10, "free": 45, "total": 55 },
  //                 "right_report": { "paid": 15, "free": 50, "total": 65 }
  //             },
  //             "left_report": { "paid": 18, "free": 83, "total": 101 },
  //             "right_report": { "paid": 27, "free": 99, "total": 126 }
  //         },
  //         "right": {
  //             "_id": "67a1febf46055c2838684608",
  //             "name": "ADMIN",
  //             "refer_id": "AIBOT10008",
  //             "isActive": false,
  //             "left": {
  //                 "_id": "67a1ff9c46055c2838684709",
  //                 "name": "ADMIN",
  //                 "refer_id": "AIBOT10009",
  //                 "isActive": false,
  //                 "left": {
  //                     "_id": "67a200d146055c2838684810",
  //                     "name": "ADMIN",
  //                     "refer_id": "AIBOT10010",
  //                     "isActive": false,
  //                     "left": null,
  //                     "right": null,
  //                     "left_report": { "paid": 9, "free": 25, "total": 34 },
  //                     "right_report": { "paid": 8, "free": 20, "total": 28 }
  //                 },
  //                 "right": {
  //                     "_id": "67a200d146055c2838684811",
  //                     "name": "ADMIN",
  //                     "refer_id": "AIBOT10011",
  //                     "isActive": false,
  //                     "left": null,
  //                     "right": null,
  //                     "left_report": { "paid": 5, "free": 15, "total": 20 },
  //                     "right_report": { "paid": 14, "free": 40, "total": 54 }
  //                 },
  //                 "left_report": { "paid": 14, "free": 40, "total": 54 },
  //                 "right_report": { "paid": 22, "free": 55, "total": 77 }
  //             },
  //             "right": {
  //                 "_id": "67a1ff9c46055c2838684712",
  //                 "name": "ADMIN",
  //                 "refer_id": "AIBOT10012",
  //                 "isActive": false,
  //                 "left": {
  //                     "_id": "67a200d146055c2838684813",
  //                     "name": "ADMIN",
  //                     "refer_id": "AIBOT10013",
  //                     "isActive": false,
  //                     "left": null,
  //                     "right": null,
  //                     "left_report": { "paid": 6, "free": 18, "total": 24 },
  //                     "right_report": { "paid": 12, "free": 30, "total": 42 }
  //                 },
  //                 "right": {
  //                     "_id": "67a200d146055c2838684814",
  //                     "name": "ADMIN",
  //                     "refer_id": "AIBOT10014",
  //                     "isActive": false,
  //                     "left": null,
  //                     "right": null,
  //                     "left_report": { "paid": 7, "free": 20, "total": 27 },
  //                     "right_report": { "paid": 10, "free": 28, "total": 38 }
  //                 },
  //                 "left_report": { "paid": 13, "free": 38, "total": 51 },
  //                 "right_report": { "paid": 17, "free": 48, "total": 65 }
  //             },
  //             "left_report": { "paid": 28, "free": 78, "total": 106 },
  //             "right_report": { "paid": 34, "free": 96, "total": 130 }
  //         },
  //         "left_report": { "paid": 46, "free": 161, "total": 207 },
  //         "right_report": { "paid": 61, "free": 195, "total": 256 }
  //     }
  // }

  // const [bineryData, setBineryData] = useState(dummyData.data)

  const getByNeryData = async (id, refer_id, position) => {
    console.log(id, refer_id, position);

    try {
      setLoading(true);

      const res = await binerytreeGet(id);
      const data = res?.data?.data;

      setBineryData(data);

      if (!selfId) {
        console.log(id, data?.refer_id, data?.refer_by_code_position);

        setSelfId({
          refer_id: data?.refer_id,
          refer_by_code_position: data?.refer_by_code_position,
        });
      }
    } catch (error) {
      console.error("Error fetching binary tree data:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getByNeryData();
  }, []);
  // < img src = {new1} className = "w-100 h-100" />
  return (
    <>
      {loading && <Loader />}
      <div className="mt-4">
        {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
        <div className="ContentArea-binry">
          <div className="card">
            <div className="card-header">
              {/* <input className="form-control" type="search" placeholder="Search Here" /> */}
            </div>
            <div className="card-body p-1">
              <div className="tree-container">
                <div className="row px-2">
                  <div className="col-lg-4 col-md-12 dwnline-set">
                  <div className="fisherman-content text-center  mb-0">
                    <h4>
                      LEFT DOWNLINE PAID :{" "}
                      {bineryData?.left_report
                        ? bineryData?.left_report?.paid
                        : 0}
                    </h4>
                    {/* <p></p> */}
                    <p>
                      LEFT DOWNLINE FREE :{" "}
                      {bineryData?.left_report
                        ? bineryData?.left_report?.free
                        : 0}
                    </p>
                  </div>
                  </div>
                  <div className="col-lg-4 col-md-12 text-center position-relativee">
                    <div className="circle-tree overflow-hidden">
                      {bineryData?.isActive === true ? (
                        <img src={defualt} className="w-100 h-100" />
                      ) : bineryData?.isActive === false ? (
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                          className="w-100 h-100"
                        />
                      ) : (
                        <img src={new1} className="w-100 h-100" />
                      )}
                    </div>
                    <Badge className="fs-5 positions-relative bg-white">
                      {bineryData?.isActive === true ? (
                        <span className="abc">{bineryData?.refer_id}</span>
                      ) : bineryData?.isActive === false ? (
                        <span>{bineryData?.refer_id}</span>
                      ) : bineryData?.refer_id ? (
                        <Link
                          to={`/https://partners.aibotworld.in/signup/${
                            bineryData?.refer_id
                          }=left&${""}=right`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Sign Up
                        </Link>
                      ) : null}

                      <div className="box-hover">
                        <div className=" bgBlue">
                            <h3 className="text-white fs-5">Member Binary Details</h3>
                        </div>
                        <div className="py-3">
                        <p>
                          <strong>Member Name :</strong>{" "}
                          <strong>{bineryData?.name}</strong>
                        </p>
                        <p>
                          <strong>Member Code :</strong>{" "}
                          <strong>{bineryData?.refer_id}</strong>
                        </p>
                        </div>
                        {bineryData?.refer_by_code ? (
                          <p>
                            <span>
                              <strong>Refered By Code : </strong>
                              {bineryData?.refer_by_code}
                            </span>
                          </p>
                        ) : (
                          ""
                        )}

                        <table>
                          <thead>
                            <tr role="row">
                              <th className="sorting fs-6"></th>
                              <th className="sorting fs-6">LEFT</th>
                              <th className="sorting fs-6">RIGHT</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td valign="top" className="dataTables_empty fs-6">
                                Current Free Member
                              </td>
                              <td valign="top" className="dataTables_empty fs-6">
                                {bineryData?.left_report?.free}
                              </td>
                              <td valign="top" className="dataTables_empty fs-6">
                                {bineryData?.right_report?.free}
                              </td>
                            </tr>
                            <tr>
                              <td valign="top" className="dataTables_empty fs-6">
                                Current Paid Member
                              </td>
                              <td valign="top" className="dataTables_empty fs-6">
                                {bineryData?.left_report?.paid}
                              </td>
                              <td valign="top" className="dataTables_empty fs-6">
                                {bineryData?.right_report?.paid}
                              </td>
                            </tr>
                            <tr>
                              <td valign="top" className="dataTables_empty fs-6">
                                Total Invesment
                              </td>
                              <td valign="top" className="dataTables_empty fs-6">
                                {bineryData?.left_report?.total}
                              </td>
                              <td valign="top" className="dataTables_empty fs-6">
                                {bineryData?.right_report?.total}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <span
                          className={`${
                            bineryData?.isActive ? "bg-success" : "bg-danger"
                          }  text-white px-2 my-2 rounded`}
                        >
                          {bineryData?.isActive ? "PAID" : "UNPAID"}
                        </span>
                      </div>
                    </Badge>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="fisherman-content text-center mb-0">
                      <h4>
                        RIGHT DOWNLINE PAID :{" "}
                        {bineryData?.right_report?.paid ?? "0"}
                      </h4>

                      <p>
                        RIGHT DOWNLINE FREE :{" "}
                        {bineryData?.right_report?.free ?? "0"}
                      </p>
                    </div>
                  </div>
                </div>
                            
                <div className="row">
                  {bineryData && bineryData?.left == null ? (
                    <div className="col-lg-6 col-md-6 col-sm-6 justify-content-center position-relative">
                      <div className="text-center">
                        <div className="circle-tree overflow-hidden">
                          {bineryData?.left?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.left?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>

                        <Badge className="fs-5 ">
                          {bineryData?.left?.isActive === true ? (
                            <span>{bineryData?.left?.refer_id}</span>
                          ) : bineryData?.left?.isActive === false ? (
                            <span>{bineryData?.left?.refer_id}</span>
                          ) : bineryData?.refer_id ? (
                            <Link
                              to={generateUrl(
                                bineryData.refer_id,
                                "left",
                                bineryData?.left?.refer_id,
                                "left"
                              )}
                              style={{ textDecoration: "none", color: "white" }}
                              target="blank"
                            >
                              Sign Up
                            </Link>
                          ) : null}
                        </Badge>
                        {/**/}
                      </div>
                      <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="col-lg-6 col-md-6 col-sm-6  justify-content-center position-relative">
                      <div className="text-center">
                        <div
                          className="circle-tree overflow-hidden"
                          onClick={() =>
                            bineryData?.left?.isActive === true ||
                            bineryData?.left?.isActive === false
                              ? getByNeryData(
                                  bineryData?.left?._id,
                                  bineryData?.refer_id,
                                  "left"
                                )
                              : null
                          }
                        >
                          {bineryData?.left?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.left?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>
                        <Badge className="fs-5 positions-relative bg-white">
                          {bineryData?.left?.isActive === true ? (
                            <span>{bineryData?.left?.refer_id}</span>
                          ) : bineryData?.left?.isActive === false ? (
                            <span>{bineryData?.left?.refer_id}</span>
                          ) : bineryData?.refer_id ? (
                            <Link
                              to={generateUrl(
                                bineryData?.left?.refer_id,
                                "right",
                                bineryData.refer_id,
                                "left"
                              )}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Sign Up
                            </Link>
                          ) : null}
                          <div className="box-hover">
                            <h2 className="bg-primary text-white mx-1">
                              Member Binary Details
                            </h2>
                            <p>
                              <strong>Member Name :</strong>{" "}
                              <strong>{bineryData?.left?.name}</strong>
                            </p>
                            <p>
                              <strong>Member Code :</strong>{" "}
                              <strong>{bineryData?.left?.refer_id}</strong>
                            </p>
                            <p>
                              <span>
                                <strong>Refered By Code : </strong>
                                {bineryData?.left?.refer_by_code}
                              </span>
                            </p>

                            <table>
                              <thead>
                                <tr role="row">
                                  <th className="sorting"></th>
                                  <th className="sorting">LEFT</th>
                                  <th className="sorting">RIGHT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Free Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.left_report?.free}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.right_report?.free}
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Paid Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.left_report?.paid}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.right_report?.paid}
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Total Invesment
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.left_report?.total}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.right_report?.total}
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <span
                              className={`${
                                bineryData?.left?.isActive
                                  ? "bg-success"
                                  : "bg-danger"
                              }  text-white px-2 my-2 rounded`}
                            >
                              {bineryData?.left?.isActive ? "PAID" : "UNPAID"}
                            </span>
                          </div>
                        </Badge>
                      </div>
                      <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                      </div>
                    </div>
                  )}

                  {bineryData && bineryData?.right == null ? (
                    <div className="col-lg-6 col-md-6 col-sm-6 justify-content-center position-relative">
                      <div className="text-center">
                        <div className="circle-tree overflow-hidden">
                          {bineryData?.right?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.right?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>
                        <Badge className="fs-5 ">
                          {bineryData?.right?.isActive === true ? (
                            <span>{bineryData?.right?.refer_id}</span>
                          ) : bineryData?.right?.isActive === false ? (
                            <span>{bineryData?.right?.refer_id}</span>
                          ) : bineryData?.refer_id ? (
                            <Link
                              to={generateUrl(
                                bineryData?.refer_id,
                                "right",
                                bineryData?.refer_id,
                                "right"
                              )}
                              style={{ textDecoration: "none", color: "white" }}
                              target="blank"
                            >
                              Sign Up
                            </Link>
                          ) : null}
                        </Badge>
                      </div>
                      <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="col-lg-6 col-md-6 col-sm-6 justify-content-center position-relative">
                      <div className="text-center">
                        <div
                          className="circle-tree overflow-hidden"
                          onClick={() =>
                            bineryData?.right?.isActive === true ||
                            bineryData?.right?.isActive === false
                              ? getByNeryData(
                                  bineryData?.right?._id,
                                  bineryData?.refer_id,
                                  "left"
                                )
                              : null
                          }
                        >
                          {bineryData?.right?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.right?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>
                        <Badge className="fs-5 positions-relative bg-white">
                          {bineryData?.right?.isActive === true ? (
                            <span>{bineryData?.right?.refer_id}</span>
                          ) : bineryData?.right?.isActive === false ? (
                            <span>{bineryData?.right?.refer_id}</span>
                          ) : bineryData?.refer_id ? (
                            <Link
                              to={generateUrl(
                                bineryData?.refer_id,
                                "right",
                                bineryData?.refer_id,
                                "right"
                              )}
                              style={{ textDecoration: "none", color: "white" }}
                              target="blank"
                            >
                              Sign Up
                            </Link>
                          ) : null}
                          <div className="box-hover">
                            <h2 className="bg-primary text-white mx-1">
                              Member Binary Details
                            </h2>
                            <p>
                              <strong>Member Name :</strong>{" "}
                              <strong>{bineryData?.right?.name}</strong>
                            </p>
                            <p>
                              <strong>Member Code :</strong>{" "}
                              <strong>{bineryData?.right?.refer_id}</strong>
                            </p>
                            <p>
                              <span>
                                <strong>Refered By Code : </strong>
                                {bineryData?.right?.refer_by_code}
                              </span>
                            </p>

                            <table>
                              <thead>
                                <tr role="row">
                                  <th className="sorting"></th>
                                  <th className="sorting">LEFT</th>
                                  <th className="sorting">RIGHT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Free Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.right?.left_report?.free}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.right?.right_report?.free}
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Paid Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.right?.left_report?.paid}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.right?.right_report?.paid}
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Total Invesment
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.right?.left_report?.total}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.right?.right_report?.total}
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <span
                              className={`${
                                bineryData?.right?.isActive
                                  ? "bg-success"
                                  : "bg-danger"
                              }  text-white px-2 my-2 rounded`}
                            >
                              {bineryData?.right?.isActive ? "PAID" : "UNPAID"}
                            </span>
                          </div>
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
                    <div className="col-lg-3 col-md-6 col-3 justify-content-center position-relative">
                      <div className="text-center">
                        <div className="circle-tree overflow-hidden">
                          {bineryData?.left?.left?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.left?.left?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>
                        <Badge className="fs-5 ">
                          {bineryData?.left?.left?.isActive === true ? (
                            <span>{bineryData?.left?.left?.refer_id}</span>
                          ) : bineryData?.left?.left?.isActive === false ? (
                            <span>{bineryData?.left?.left?.refer_id}</span>
                          ) : bineryData?.left?.refer_id ? (
                            <Link
                              to={generateUrl(
                                bineryData.refer_id,
                                "left",
                                bineryData?.left?.refer_id,
                                "left"
                              )}
                              style={{ textDecoration: "none", color: "white" }}
                              target="blank"
                            >
                              Sign Up
                            </Link>
                          ) : null}
                        </Badge>
                      </div>
                      <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="col-lg-3 col-md-6 col-3 justify-content-center position-relative">
                      <div className="text-center">
                        <div
                          className="circle-tree overflow-hidden"
                          onClick={() =>
                            bineryData?.left?.left?.isActive === true ||
                            bineryData?.left?.left?.isActive === false
                              ? getByNeryData(bineryData?.left?.left?._id)
                              : null
                          }
                        >
                          {bineryData?.left?.left?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.left?.left?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>
                        <Badge className="fs-5 positions-relative bg-white">
                          {bineryData?.left?.left?.isActive === true ? (
                            <span>{bineryData?.left?.left?.refer_id}</span>
                          ) : bineryData?.left?.left?.isActive === false ? (
                            <span>{bineryData?.left?.left?.refer_id}</span>
                          ) : bineryData?.left?.refer_id ? (
                            <Link
                              to={"#"}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Sign Up
                            </Link>
                          ) : null}
                          <div className="box-hover">
                            <h2 className="bg-primary text-white mx-1">
                              Member Binary Details
                            </h2>
                            <p>
                              <strong>Member Name :</strong>{" "}
                              <strong>{bineryData?.left?.left?.name}</strong>
                            </p>
                            <p>
                              <strong>Member Code :</strong>{" "}
                              <strong>
                                {bineryData?.left?.left?.refer_id}
                              </strong>
                            </p>
                            <p>
                              <span>
                                <strong>Refered By Code : </strong>
                                {bineryData?.left?.left?.refer_by_code}
                              </span>
                            </p>

                            <table>
                              <thead>
                                <tr role="row">
                                  <th className="sorting"></th>
                                  <th className="sorting">LEFT</th>
                                  <th className="sorting">RIGHT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Free Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.left?.left_report?.free}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.left?.right_report?.free}
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Paid Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.left?.left_report?.paid}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.left?.right_report?.paid}
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Total Invesment
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.left?.left_report?.total}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.left?.left?.right_report
                                        ?.total
                                    }
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <span
                              className={`${
                                bineryData?.left?.left?.isActive
                                  ? "bg-success"
                                  : "bg-danger"
                              }  text-white px-2 my-2 rounded`}
                            >
                              {bineryData?.left?.left?.isActive
                                ? "PAID"
                                : "UNPAID"}
                            </span>
                          </div>
                        </Badge>
                      </div>
                      <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                      </div>
                    </div>
                  )}

                  {bineryData && bineryData?.left?.right == null ? (
                    <div className="col-lg-3 col-md-6 col-3 justify-content-center position-relative">
                      <div className="text-center">
                        <div className="circle-tree overflow-hidden">
                          {bineryData?.left?.right?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.left?.right?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>
                        <Badge className="fs-5 ">
                          {bineryData?.left?.right?.isActive === true ? (
                            <span>{bineryData?.left?.right?.refer_id}</span>
                          ) : bineryData?.left?.right?.isActive === false ? (
                            <span>{bineryData?.left?.right?.refer_id}</span>
                          ) : bineryData?.left?.refer_id ? (
                            <Link
                              to={generateUrl(
                                bineryData?.left?.refer_id,
                                "right",
                                bineryData.refer_id,
                                "left"
                              )}
                              style={{ textDecoration: "none", color: "white" }}
                              target="blank"
                            >
                              Sign Up
                            </Link>
                          ) : null}
                        </Badge>
                      </div>
                      <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="col-lg-3 col-md-6 col-3 justify-content-center position-relative">
                      <div className="text-center">
                        <div
                          className="circle-tree overflow-hidden"
                          onClick={() =>
                            bineryData?.left?.right?.isActive === true ||
                            bineryData?.left?.right?.isActive === false
                              ? getByNeryData(bineryData?.left?.right?._id)
                              : null
                          }
                        >
                          {bineryData?.left?.right?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.left?.right?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>
                        <Badge className="fs-5 positions-relative bg-white">
                          {bineryData?.left?.right?.isActive === true ? (
                            <span>{bineryData?.left?.right?.refer_id}</span>
                          ) : bineryData?.left?.right?.isActive === false ? (
                            <span>{bineryData?.left?.right?.refer_id}</span>
                          ) : bineryData?.left?.refer_id ? (
                            <Link
                              to={"#"}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Sign Up
                            </Link>
                          ) : null}
                          <div className="box-hover">
                            <h2 className="bg-primary text-white mx-1">
                              Member Binary Details
                            </h2>
                            <p>
                              <strong>Member Name :</strong>{" "}
                              <strong>{bineryData?.left?.right?.name}</strong>
                            </p>
                            <p>
                              <strong>Member Code :</strong>{" "}
                              <strong>
                                {bineryData?.left?.right?.refer_id}
                              </strong>
                            </p>
                            <p>
                              <span>
                                <strong>Refered By Code : </strong>
                                {bineryData?.left?.right?.refer_by_code}
                              </span>
                            </p>

                            <table>
                              <thead>
                                <tr role="row">
                                  <th className="sorting"></th>
                                  <th className="sorting">LEFT</th>
                                  <th className="sorting">RIGHT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Free Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.right?.left_report?.free}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.left?.right?.right_report
                                        ?.free
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Paid Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.left?.right?.left_report?.paid}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.left?.right?.right_report
                                        ?.paid
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Total Invesment
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.left?.right?.left_report
                                        ?.total
                                    }
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.left?.right?.right_report
                                        ?.total
                                    }
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <span
                              className={`${
                                bineryData?.left?.right?.isActive
                                  ? "bg-success"
                                  : "bg-danger"
                              }  text-white px-2 my-2 rounded`}
                            >
                              {bineryData?.left?.right?.isActive
                                ? "PAID"
                                : "UNPAID"}
                            </span>
                          </div>
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
                                        <Badge className="fs-5 "><Link to={"#"} style={{textDecoration:"none", color:"white"}}>
                                        Sign Up
                                        </Link></Badge>
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
                                        <Badge className="fs-5 "><Link to={"#"} style={{textDecoration:"none", color:"white"}}>
                                        Sign Up
                                        </Link></Badge>
                                    </div>
                                    <div className="line">
                                        <span className="left-arow"></span>
                                        <span className="right-arow"></span>
                                    </div>
                                </div> */}

                  {bineryData && bineryData?.right?.left == null ? (
                    <div className="col-lg-3 col-md-6 col-3 justify-content-center position-relative">
                      <div className="text-center">
                        <div className="circle-tree overflow-hidden">
                          {bineryData?.right?.left?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.right?.left?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>
                        <Badge className="fs-5 ">
                          {bineryData?.right?.left?.isActive === true ? (
                            <span>{bineryData?.right?.left?.refer_id}</span>
                          ) : bineryData?.right?.left?.isActive === false ? (
                            <span>{bineryData?.right?.left?.refer_id}</span>
                          ) : bineryData?.right?.refer_id ? (
                            <Link
                              to={generateUrl(
                                bineryData?.right?.refer_id,
                                "left",
                                bineryData?.refer_id,
                                "right"
                              )}
                              style={{ textDecoration: "none", color: "white" }}
                              target="blank"
                            >
                              Sign Up
                            </Link>
                          ) : null}
                        </Badge>
                      </div>
                      <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="col-lg-3 col-md-6 col-3 justify-content-center position-relative">
                      <div className="text-center">
                        <div
                          className="circle-tree overflow-hidden"
                          onClick={() =>
                            bineryData?.right?.left?.isActive === true ||
                            bineryData?.right?.left?.isActive === false
                              ? getByNeryData(bineryData?.right?.left?._id)
                              : null
                          }
                        >
                          {bineryData?.right?.left?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.right?.left?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>
                        <Badge className="fs-5 positions-relative bg-white">
                          {bineryData?.right?.left?.isActive === true ? (
                            <span>{bineryData?.right?.left?.refer_id}</span>
                          ) : bineryData?.right?.left?.isActive === false ? (
                            <span>{bineryData?.right?.left?.refer_id}</span>
                          ) : bineryData?.right?.refer_id ? (
                            <Link
                              to={"#"}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Sign Up
                            </Link>
                          ) : null}
                          <div className="box-hover">
                            <h2 className="bg-primary text-white mx-1">
                              Member Binary Details
                            </h2>
                            <p>
                              <strong>Member Name :</strong>{" "}
                              <strong>{bineryData?.right?.left?.name}</strong>
                            </p>
                            <p>
                              <strong>Member Code :</strong>{" "}
                              <strong>
                                {bineryData?.right?.left?.refer_id}
                              </strong>
                            </p>
                            <p>
                              <span>
                                <strong>Refered By Code : </strong>
                                {bineryData?.right?.left?.refer_by_code}
                              </span>
                            </p>

                            <table>
                              <thead>
                                <tr role="row">
                                  <th className="sorting"></th>
                                  <th className="sorting">LEFT</th>
                                  <th className="sorting">RIGHT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Free Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.right?.left?.left_report?.free}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.right?.left?.right_report
                                        ?.free
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Paid Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {bineryData?.right?.left?.left_report?.paid}
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.right?.left?.right_report
                                        ?.paid
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Total Invesment
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.right?.left?.left_report
                                        ?.total
                                    }
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.right?.left?.right_report
                                        ?.total
                                    }
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <span
                              className={`${
                                bineryData?.right?.left?.isActive
                                  ? "bg-success"
                                  : "bg-danger"
                              }  text-white px-2 my-2 rounded`}
                            >
                              {bineryData?.right?.left?.isActive
                                ? "PAID"
                                : "UNPAID"}
                            </span>
                          </div>
                        </Badge>
                      </div>
                      <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                      </div>
                    </div>
                  )}

                  {bineryData && bineryData?.right?.right == null ? (
                    <div className="col-lg-3 col-md-6 col-3 justify-content-center position-relative">
                      <div className="text-center">
                        <div className="circle-tree overflow-hidden">
                          {bineryData?.right?.right?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.right?.right?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>
                        <Badge className="fs-5">
                          {bineryData?.right?.right?.isActive === true ? (
                            <span>{bineryData?.right?.right?.refer_id}</span>
                          ) : bineryData?.right?.right?.isActive === false ? (
                            <span>{bineryData?.right?.right?.refer_id}</span>
                          ) : bineryData?.right?.refer_id ? (
                            <Link
                              to={"#"}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Sign Up
                            </Link>
                          ) : null}
                        </Badge>
                      </div>
                      <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="col-lg-3 col-md-6 col-3 justify-content-center position-relative">
                      <div className="text-center">
                        <div
                          className="circle-tree overflow-hidden"
                          onClick={() =>
                            bineryData?.right?.right?.isActive === true ||
                            bineryData?.right?.right?.isActive === false
                              ? getByNeryData(bineryData?.right?.right?._id)
                              : null
                          }
                        >
                          {bineryData?.right?.right?.isActive === true ? (
                            <img src={defualt} className="w-100 h-100" />
                          ) : bineryData?.right?.right?.isActive === false ? (
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                              className="w-100 h-100"
                            />
                          ) : (
                            <img src={new1} className="w-100 h-100" />
                          )}
                        </div>
                        <Badge className="fs-5 positions-relative bg-white">
                          {bineryData?.right?.right?.isActive === true ? (
                            <span>{bineryData?.right?.right?.refer_id}</span>
                          ) : bineryData?.right?.right?.isActive === false ? (
                            <span>{bineryData?.right?.right?.refer_id}</span>
                          ) : bineryData?.right?.refer_id ? (
                            <Link
                              to={"#"}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Sign Up
                            </Link>
                          ) : null}
                          <div className="box-hover">
                            <h2 className="bg-primary text-white mx-1">
                              Member Binary Details
                            </h2>
                            <p>
                              <strong>Member Name :</strong>{" "}
                              <strong>{bineryData?.right?.right?.name}</strong>
                            </p>
                            <p>
                              <strong>Member Code :</strong>{" "}
                              <strong>
                                {bineryData?.right?.right?.refer_id}
                              </strong>
                            </p>
                            <p>
                              <span>
                                <strong>Refered By Code : </strong>
                                {bineryData?.right?.right?.refer_by_code}
                              </span>
                            </p>

                            <table>
                              <thead>
                                <tr role="row">
                                  <th className="sorting"></th>
                                  <th className="sorting">LEFT</th>
                                  <th className="sorting">RIGHT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Free Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.right?.right?.left_report
                                        ?.free
                                    }
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.right?.right?.right_report
                                        ?.free
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Current Paid Member
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.right?.right?.left_report
                                        ?.paid
                                    }
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.right?.right?.right_report
                                        ?.paid
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    Total Invesment
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.right?.right?.left_report
                                        ?.total
                                    }
                                  </td>
                                  <td valign="top" className="dataTables_empty fs-6">
                                    {
                                      bineryData?.right?.right?.right_report
                                        ?.total
                                    }
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <span
                              className={`${
                                bineryData?.right?.right?.isActive
                                  ? "bg-success"
                                  : "bg-danger"
                              }  text-white px-2 my-2 rounded`}
                            >
                              {bineryData?.right?.right?.isActive
                                ? "PAID"
                                : "UNPAID"}
                            </span>
                          </div>
                        </Badge>
                      </div>
                      <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="row m-0 last-lable">
                  <div className="col-6">
                    <div className="row">
                      {bineryData && bineryData?.left?.left?.left == null ? (
                        <>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div className="circle-tree overflow-hidden">
                                {bineryData?.left?.left?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.left?.left?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 ">
                                {bineryData?.left?.left?.left?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.left?.left?.left?.refer_id}
                                  </span>
                                ) : bineryData?.left?.left?.left?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.left?.left?.left?.refer_id}
                                  </span>
                                ) : bineryData?.left?.left?.refer_id ? (
                                  <Link
                                    to={generateUrl(
                                      bineryData?.left?.left?.refer_id,
                                      "left",
                                      bineryData?.refer_id,
                                      "left"
                                    )}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                    target="blank"
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                              </Badge>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div className="circle-tree overflow-hidden">
                                {bineryData?.left?.left?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.left?.left?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 ">
                                {bineryData?.left?.left?.left?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.left?.left?.left?.refer_id}
                                  </span>
                                ) : bineryData?.left?.left?.left?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.left?.left?.left?.refer_id}
                                  </span>
                                ) : bineryData?.left?.left?.refer_id ? (
                                  <Link
                                    to={"#"}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                              </Badge>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div
                                className="circle-tree overflow-hidden"
                                onClick={() =>
                                  bineryData?.left?.left?.left?.isActive ===
                                    true ||
                                  bineryData?.left?.left?.left?.isActive ===
                                    false
                                    ? getByNeryData(
                                        bineryData?.left?.left?.left?._id
                                      )
                                    : null
                                }
                              >
                                {bineryData?.left?.left?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.left?.left?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 positions-relative bg-white">
                                {bineryData?.left?.left?.left.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.left?.left?.left.refer_id}
                                  </span>
                                ) : bineryData?.left?.left?.left.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.left?.left?.left.refer_id}
                                  </span>
                                ) : bineryData?.left?.left?.refer_id ? (
                                  <Link
                                    to={"#"}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                                <div className="box-hover">
                                  <h2 className="bg-primary text-white mx-1">
                                    Member Binary Details
                                  </h2>
                                  <p>
                                    <strong>Member Name :</strong>{" "}
                                    <strong>
                                      {bineryData?.left?.left?.left?.name}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>Member Code :</strong>{" "}
                                    <strong>
                                      {bineryData?.left?.left?.left?.refer_id}
                                    </strong>
                                  </p>
                                  <p>
                                    <span>
                                      <strong>Refered By Code : </strong>
                                      {
                                        bineryData?.left?.left?.left
                                          ?.refer_by_code
                                      }
                                    </span>
                                  </p>

                                  <table>
                                    <thead>
                                      <tr role="row">
                                        <th className="sorting"></th>
                                        <th className="sorting">LEFT</th>
                                        <th className="sorting">RIGHT</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Free Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.left?.left
                                              ?.left_report?.free
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.left?.left
                                              ?.right_report?.free
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Paid Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.left?.left
                                              ?.left_report?.paid
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.left?.left
                                              ?.right_report?.paid
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Total Invesment
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.left?.left
                                              ?.left_report?.total
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.left?.left
                                              ?.right_report?.total
                                          }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <span
                                    className={`${
                                      bineryData?.left?.left?.left?.isActive
                                        ? "bg-success"
                                        : "bg-danger"
                                    }  text-white px-2 my-2 rounded`}
                                  >
                                    {bineryData?.left?.left?.left?.isActive
                                      ? "PAID"
                                      : "UNPAID"}
                                  </span>
                                </div>
                              </Badge>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div
                                className="circle-tree overflow-hidden"
                                onClick={() =>
                                  bineryData?.left?.left?.right?.isActive ===
                                    true ||
                                  bineryData?.left?.left?.right?.isActive ===
                                    false
                                    ? getByNeryData(
                                        bineryData?.left?.left?.right?._id
                                      )
                                    : null
                                }
                              >
                                {bineryData?.left?.left?.right?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.left?.left?.right?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge
                                className={`fs-5 ${
                                  bineryData?.left?.left?.right == null
                                    ? ""
                                    : "positions-relative"
                                }`}
                              >
                                {bineryData?.left?.left?.right?.isActive !==
                                undefined ? (
                                  <span>
                                    {bineryData?.left?.left?.right?.refer_id}
                                  </span>
                                ) : bineryData?.left?.left?.refer_id ? (
                                  <Link
                                    to={generateUrl(
                                      bineryData?.left?.left?.refer_id,
                                      "right",
                                      bineryData?.refer_id,
                                      "left"
                                    )}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                    target="blank"
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}

                                <div className="box-hover">
                                  <h2 className="bg-primary text-white mx-1">
                                    Member Binary Details
                                  </h2>
                                  <p>
                                    <strong>Member Name :</strong>{" "}
                                    <strong>
                                      {bineryData?.left?.left?.right?.name}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>Member Code :</strong>{" "}
                                    <strong>
                                      {bineryData?.left?.left?.right?.refer_id}
                                    </strong>
                                  </p>
                                  <p>
                                    <span>
                                      <strong>Referred By Code:</strong>{" "}
                                      {
                                        bineryData?.left?.left?.right
                                          ?.refer_by_code
                                      }
                                    </span>
                                  </p>

                                  <table>
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>LEFT</th>
                                        <th>RIGHT</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Current Free Member</td>
                                        <td>
                                          {
                                            bineryData?.left?.left?.right
                                              ?.left_report?.free
                                          }
                                        </td>
                                        <td>
                                          {
                                            bineryData?.left?.left?.right
                                              ?.right_report?.free
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Current Paid Member</td>
                                        <td>
                                          {
                                            bineryData?.left?.left?.right
                                              ?.left_report?.paid
                                          }
                                        </td>
                                        <td>
                                          {
                                            bineryData?.left?.left?.right
                                              ?.right_report?.paid
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Total Investment</td>
                                        <td>
                                          {
                                            bineryData?.left?.left?.right
                                              ?.left_report?.total
                                          }
                                        </td>
                                        <td>
                                          {
                                            bineryData?.left?.left?.right
                                              ?.right_report?.total
                                          }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <span
                                    className={`${
                                      bineryData?.left?.left?.right?.isActive
                                        ? "bg-success"
                                        : "bg-danger"
                                    } text-white px-2 my-2 rounded`}
                                  >
                                    {bineryData?.left?.left?.right?.isActive
                                      ? "PAID"
                                      : "UNPAID"}
                                  </span>
                                </div>
                              </Badge>
                            </div>
                          </div>
                        </>
                      )}

                      {bineryData && bineryData?.left?.right?.left == null ? (
                        <>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div className="circle-tree overflow-hidden">
                                {bineryData?.left?.right?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.left?.right?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 ">
                                {bineryData?.left?.right?.left?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.left?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.left?.right?.left?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.left?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.left?.right?.refer_id ? (
                                  <Link
                                    to={generateUrl(
                                      bineryData?.left?.right?.refer_id,
                                      "left",
                                      bineryData?.refer_id,
                                      "left"
                                    )}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                    target="blank"
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                              </Badge>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div className="circle-tree overflow-hidden">
                                {bineryData?.left?.right?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.left?.right?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 ">
                                {bineryData?.left?.right?.left?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.left?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.left?.right?.left?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.left?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.left?.right?.refer_id ? (
                                  <Link
                                    to={generateUrl(
                                      bineryData?.left?.right?.refer_id,
                                      "right",
                                      bineryData?.refer_id,
                                      "left"
                                    )}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                    target="blank"
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                              </Badge>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div
                                className="circle-tree overflow-hidden"
                                onClick={() =>
                                  bineryData?.left?.right?.left?.isActive ===
                                    true ||
                                  bineryData?.left?.right?.left?.isActive ===
                                    false
                                    ? getByNeryData(
                                        bineryData?.left?.right?.left?._id
                                      )
                                    : null
                                }
                              >
                                {bineryData?.left?.right?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.left?.right?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 positions-relative bg-white">
                                {bineryData?.left?.right?.left?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.left?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.left?.right?.left?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.left?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.left?.right?.refer_id ? (
                                  <Link
                                    to={generateUrl(
                                      bineryData?.left?.right?.refer_id,
                                      "right",
                                      bineryData?.refer_id,
                                      "left"
                                    )}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                    target="blank"
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                                <div className="box-hover">
                                  <h2 className="bg-primary text-white mx-1">
                                    Member Binary Details
                                  </h2>
                                  <p>
                                    <strong>Member Name :</strong>{" "}
                                    <strong>
                                      {bineryData?.left?.right?.left?.name}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>Member Code :</strong>{" "}
                                    <strong>
                                      {bineryData?.left?.right?.left?.refer_id}
                                    </strong>
                                  </p>
                                  <p>
                                    <span>
                                      <strong>Refered By Code : </strong>
                                      {
                                        bineryData?.left?.right?.left
                                          ?.refer_by_code
                                      }
                                    </span>
                                  </p>

                                  <table>
                                    <thead>
                                      <tr role="row">
                                        <th className="sorting"></th>
                                        <th className="sorting">LEFT</th>
                                        <th className="sorting">RIGHT</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Free Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.left
                                              ?.left_report?.free
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.left
                                              ?.right_report?.free
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Paid Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.left
                                              ?.left_report?.paid
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.left
                                              ?.right_report?.paid
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Total Invesment
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.left
                                              ?.left_report?.total
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.left
                                              ?.right_report?.total
                                          }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <span
                                    className={`${
                                      bineryData?.left?.right?.left?.isActive
                                        ? "bg-success"
                                        : "bg-danger"
                                    }  text-white px-2 my-2 rounded`}
                                  >
                                    {bineryData?.left?.right?.left?.isActive
                                      ? "PAID"
                                      : "UNPAID"}
                                  </span>
                                </div>
                              </Badge>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div className="circle-tree overflow-hidden">
                                {bineryData?.left?.right?.right?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.left?.right?.right?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>

                              <Badge
                                className={`fs-5 ${
                                  bineryData?.left?.right?.right === null
                                    ? ""
                                    : "position-relative"
                                }`}
                              >
                                {bineryData?.left?.right?.right?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.left?.right?.right?.refer_id}
                                  </span>
                                ) : bineryData?.left?.right?.right?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.left?.right?.right?.refer_id}
                                  </span>
                                ) : bineryData?.left?.right?.refer_id ? (
                                  <Link
                                    to={generateUrl(
                                      bineryData?.left?.right?.refer_id,
                                      "right",
                                      bineryData?.refer_id,
                                      "left"
                                    )}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                    target="blank"
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                                {console.log(bineryData?.left?.right?.refer_id)}
                                <div className="box-hover">
                                  <h2 className="bg-primary text-white mx-1">
                                    Member Binary Details
                                  </h2>
                                  <p>
                                    <strong>Member Name :</strong>{" "}
                                    <strong>
                                      {bineryData?.left?.right?.right?.name}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>Member Code :</strong>{" "}
                                    <strong>
                                      {bineryData?.left?.right?.right?.refer_id}
                                    </strong>
                                  </p>
                                  <p>
                                    <span>
                                      <strong>Refered By Code : </strong>
                                      {
                                        bineryData?.left?.right?.right
                                          ?.refer_by_code
                                      }
                                    </span>
                                  </p>

                                  <table>
                                    <thead>
                                      <tr role="row">
                                        <th className="sorting"></th>
                                        <th className="sorting">LEFT</th>
                                        <th className="sorting">RIGHT</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Free Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.right
                                              ?.left_report?.free
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.right
                                              ?.right_report?.free
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Paid Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.right
                                              ?.left_report?.paid
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.right
                                              ?.right_report?.paid
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Total Invesment
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.right
                                              ?.left_report?.total
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.left?.right?.right
                                              ?.right_report?.total
                                          }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <span
                                    className={`${
                                      bineryData?.left?.right?.right?.isActive
                                        ? "bg-success"
                                        : "bg-danger"
                                    }  text-white px-2 my-2 rounded`}
                                  >
                                    {bineryData?.left?.right?.right?.isActive
                                      ? "PAID"
                                      : "UNPAID"}
                                  </span>
                                </div>
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
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div className="circle-tree overflow-hidden">
                                {bineryData?.right?.left?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.right?.left?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 positions-relative bg-white">
                                {bineryData?.right?.left?.left?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.right?.left?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.left?.left?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.right?.left?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.left?.refer_id ? (
                                  <Link
                                    to={"#"}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                                <div className="box-hover">
                                  <p>
                                    {" "}
                                    <strong className="text-decoration-underline">
                                      {bineryData?.right?.left?.left?.name}
                                    </strong>
                                  </p>
                                  <p>
                                    <span>
                                      <strong>Refered By : </strong>
                                      {bineryData?.right?.left?.left?.refer_id}
                                    </span>
                                  </p>
                                  <p>
                                    <span>
                                      <strong>Left Active Member : </strong>
                                      {
                                        bineryData?.right?.left?.left
                                          ?.left_report?.paid
                                      }
                                    </span>
                                  </p>
                                  <p>
                                    <span>
                                      <strong>Right Active Member:</strong>
                                      {
                                        bineryData?.right?.left?.left
                                          ?.right_report?.paid
                                      }
                                    </span>
                                  </p>

                                  <span
                                    className={`${
                                      bineryData?.right?.left?.left?.isActive
                                        ? "bg-success"
                                        : "bg-danger"
                                    }  text-white px-2 my-2 rounded`}
                                  >
                                    {bineryData?.right?.left?.left?.isActive
                                      ? "PAID"
                                      : "UNPAID"}
                                  </span>
                                </div>
                              </Badge>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div className="circle-tree overflow-hidden">
                                {bineryData?.right?.left?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.right?.left?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 ">
                                {bineryData?.right?.left?.left?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.right?.left?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.left?.left?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.right?.left?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.left?.refer_id ? (
                                  <Link
                                    to={"#"}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                              </Badge>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div
                                className="circle-tree overflow-hidden"
                                onClick={() =>
                                  bineryData?.right?.left?.left?.isActive ===
                                    true ||
                                  bineryData?.right?.left?.left?.isActive ===
                                    false
                                    ? getByNeryData(
                                        bineryData?.right?.left?.left?._id
                                      )
                                    : null
                                }
                              >
                                {bineryData?.right?.left?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.right?.left?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 positions-relative bg-white">
                                {bineryData?.right?.left?.left?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.right?.left?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.left?.left?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.right?.left?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.left?.refer_id ? (
                                  <Link
                                    to={"#"}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                                <div className="box-hover">
                                  <h2 className="bg-primary text-white mx-1">
                                    Member Binary Details
                                  </h2>
                                  <p>
                                    <strong>Member Name :</strong>{" "}
                                    <strong>
                                      {bineryData?.right?.left?.left?.name}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>Member Code :</strong>{" "}
                                    <strong>
                                      {bineryData?.right?.left?.left?.refer_id}
                                    </strong>
                                  </p>
                                  <p>
                                    <span>
                                      <strong>Refered By Code : </strong>
                                      {
                                        bineryData?.right?.left?.left
                                          ?.refer_by_code
                                      }
                                    </span>
                                  </p>

                                  <table>
                                    <thead>
                                      <tr role="row">
                                        <th className="sorting"></th>
                                        <th className="sorting">LEFT</th>
                                        <th className="sorting">RIGHT</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Free Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.left
                                              ?.left_report?.free
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.left
                                              ?.right_report?.free
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Paid Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.left
                                              ?.left_report?.paid
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.left
                                              ?.right_report?.paid
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Total Invesment
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.left
                                              ?.left_report?.total
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.left
                                              ?.right_report?.total
                                          }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <span
                                    className={`${
                                      bineryData?.right?.left?.left?.isActive
                                        ? "bg-success"
                                        : "bg-danger"
                                    }  text-white px-2 my-2 rounded`}
                                  >
                                    {bineryData?.right?.left?.left?.isActive
                                      ? "PAID"
                                      : "UNPAID"}
                                  </span>
                                </div>
                              </Badge>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div
                                className="circle-tree overflow-hidden"
                                onClick={() =>
                                  bineryData?.right?.left?.right?.isActive ===
                                    true ||
                                  bineryData?.right?.left?.right?.isActive ===
                                    false
                                    ? getByNeryData(
                                        bineryData?.right?.left?.right?._id
                                      )
                                    : null
                                }
                              >
                                {bineryData?.right?.left?.right?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.right?.left?.right?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 positions-relative bg-white">
                                {bineryData?.right?.left?.right?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.right?.left?.right?.refer_id}
                                  </span>
                                ) : bineryData?.right?.left?.right?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.right?.left?.right?.refer_id}
                                  </span>
                                ) : bineryData?.right?.left?.refer_id ? (
                                  <Link
                                    to={"#"}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                                <div className="box-hover">
                                  <h2 className="bg-primary text-white mx-1">
                                    Member Binary Details
                                  </h2>
                                  <p>
                                    <strong>Member Name :</strong>{" "}
                                    <strong>
                                      {bineryData?.right?.left?.right?.name}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>Member Code :</strong>{" "}
                                    <strong>
                                      {bineryData?.right?.left?.right?.refer_id}
                                    </strong>
                                  </p>
                                  <p>
                                    <span>
                                      <strong>Refered By Code : </strong>
                                      {
                                        bineryData?.right?.left?.right
                                          ?.refer_by_code
                                      }
                                    </span>
                                  </p>

                                  <table>
                                    <thead>
                                      <tr role="row">
                                        <th className="sorting"></th>
                                        <th className="sorting">LEFT</th>
                                        <th className="sorting">RIGHT</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Free Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.right
                                              ?.left_report?.free
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.right
                                              ?.right_report?.free
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Paid Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.right
                                              ?.left_report?.paid
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.right
                                              ?.right_report?.paid
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Total Invesment
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.right
                                              ?.left_report?.total
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.left?.right
                                              ?.right_report?.total
                                          }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <span
                                    className={`${
                                      bineryData?.right?.left?.right?.isActive
                                        ? "bg-success"
                                        : "bg-danger"
                                    }  text-white px-2 my-2 rounded`}
                                  >
                                    {bineryData?.right?.left?.right?.isActive
                                      ? "PAID"
                                      : "UNPAID"}
                                  </span>
                                </div>
                              </Badge>
                            </div>
                          </div>
                        </>
                      )}

                      {bineryData && bineryData?.right?.right?.right == null ? (
                        <>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div className="circle-tree overflow-hidden">
                                {bineryData?.right?.right?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.right?.right?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 ">
                                {bineryData?.right?.right?.left?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.right?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.right?.left?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.right?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.right?.refer_id ? (
                                  <Link
                                    to={"#"}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                              </Badge>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div className="circle-tree overflow-hidden">
                                {bineryData?.right?.right?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.right?.right?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 ">
                                {bineryData?.right?.right?.left?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.right?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.right?.left?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.right?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.right?.refer_id ? (
                                  <Link
                                    to={"#"}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                              </Badge>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div
                                className="circle-tree overflow-hidden"
                                onClick={() =>
                                  bineryData?.right?.right?.left?.isActive ===
                                    true ||
                                  bineryData?.right?.right?.left?.isActive ===
                                    false
                                    ? getByNeryData(
                                        bineryData?.right?.right?.left?._id
                                      )
                                    : null
                                }
                              >
                                {bineryData?.right?.right?.left?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.right?.right?.left?.isActive ===
                                  false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 positions-relative bg-white">
                                {bineryData?.right?.right?.left?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.right?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.right?.left?.isActive ===
                                  false ? (
                                  <span>
                                    {bineryData?.right?.right?.left?.refer_id}
                                  </span>
                                ) : bineryData?.right?.right?.refer_id ? (
                                  <Link
                                    to={"#"}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                                <div className="box-hover">
                                  <h2 className="bg-primary text-white mx-1">
                                    Member Binary Details
                                  </h2>
                                  <p>
                                    <strong>Member Name :</strong>{" "}
                                    <strong>
                                      {bineryData?.right?.right?.left?.name}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>Member Code :</strong>{" "}
                                    <strong>
                                      {bineryData?.right?.right?.left?.refer_id}
                                    </strong>
                                  </p>
                                  <p>
                                    <span>
                                      <strong>Refered By Code : </strong>
                                      {
                                        bineryData?.right?.right?.left
                                          ?.refer_by_code
                                      }
                                    </span>
                                  </p>

                                  <table>
                                    <thead>
                                      <tr role="row">
                                        <th className="sorting"></th>
                                        <th className="sorting">LEFT</th>
                                        <th className="sorting">RIGHT</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Free Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.left
                                              ?.left_report?.free
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.left
                                              ?.right_report?.free
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Paid Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.left
                                              ?.left_report?.paid
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.left
                                              ?.right_report?.paid
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Total Invesment
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.left
                                              ?.left_report?.total
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.left
                                              ?.right_report?.total
                                          }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <span
                                    className={`${
                                      bineryData?.right?.right?.left?.isActive
                                        ? "bg-success"
                                        : "bg-danger"
                                    }  text-white px-2 my-2 rounded`}
                                  >
                                    {bineryData?.right?.right?.left?.isActive
                                      ? "PAID"
                                      : "UNPAID"}
                                  </span>
                                </div>
                              </Badge>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                              <div
                                className="circle-tree overflow-hidden"
                                onClick={() =>
                                  bineryData?.left?.isActive === true ||
                                  bineryData?.left?.isActive === false
                                    ? getByNeryData(
                                        bineryData?.right?.right?.right?._id
                                      )
                                    : null
                                }
                              >
                                {bineryData?.right?.right?.right?.isActive ===
                                true ? (
                                  <img src={defualt} className="w-100 h-100" />
                                ) : bineryData?.right?.right?.right
                                    ?.isActive === false ? (
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <img src={new1} className="w-100 h-100" />
                                )}
                              </div>
                              <Badge className="fs-5 positions-relative bg-white">
                                {bineryData?.right?.right?.right?.isActive ===
                                true ? (
                                  <span>
                                    {bineryData?.right?.right?.right?.refer_id}
                                  </span>
                                ) : bineryData?.right?.right?.right
                                    ?.isActive === false ? (
                                  <span>
                                    {bineryData?.right?.right?.right?.refer_id}
                                  </span>
                                ) : bineryData?.right?.right?.refer_id ? (
                                  <Link
                                    to={"#"}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                    Sign Up
                                  </Link>
                                ) : null}
                                <div className="box-hover">
                                  <h2 className="bg-primary text-white mx-1">
                                    Member Binary Details
                                  </h2>
                                  <p>
                                    <strong>Member Name :</strong>{" "}
                                    <strong>
                                      {bineryData?.right?.right?.right?.name}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>Member Code :</strong>{" "}
                                    <strong>
                                      {
                                        bineryData?.right?.right?.right
                                          ?.refer_id
                                      }
                                    </strong>
                                  </p>
                                  <p>
                                    <span>
                                      <strong>Refered By Code : </strong>
                                      {
                                        bineryData?.right?.right?.right
                                          ?.refer_by_code
                                      }
                                    </span>
                                  </p>

                                  <table>
                                    <thead>
                                      <tr role="row">
                                        <th className="sorting"></th>
                                        <th className="sorting">LEFT</th>
                                        <th className="sorting">RIGHT</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Free Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.right
                                              ?.left_report?.free
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.right
                                              ?.right_report?.free
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Current Paid Member
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.right
                                              ?.left_report?.paid
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.right
                                              ?.right_report?.paid
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          Total Invesment
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.right
                                              ?.left_report?.total
                                          }
                                        </td>
                                        <td
                                          valign="top"
                                          className="dataTables_empty fs-6"
                                        >
                                          {
                                            bineryData?.right?.right?.right
                                              ?.right_report?.total
                                          }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <span
                                    className={`${
                                      bineryData?.right?.right?.right?.isActive
                                        ? "bg-success"
                                        : "bg-danger"
                                    }  text-white px-2 my-2 rounded`}
                                  >
                                    {bineryData?.right?.right?.right?.isActive
                                      ? "PAID"
                                      : "UNPAID"}
                                  </span>
                                </div>
                              </Badge>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg */}
            </div>
          </div>
        </div>
      </div>
      {/* <TreeModuls show={modalShow}
                onHide={() => setModalShow(false)} /> */}
    </>
    // <div className="m-4">
    //     {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
    //     <div className="ContentArea">
    //         <div className="card">
    //             <div className="card-header">
    //                 <input className="form-control" type="search" placeholder="Search Here" /></div>
    //             <div className="card-body p-1">
    //                 <Tree bineryData={bineryData} />
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
}
