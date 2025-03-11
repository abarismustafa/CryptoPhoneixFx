import { useEffect, useState } from "react";
import Loader from "../../common/loader/Loader";
import { dashboardPublic } from "../../api/login/Login";
import { Link } from "react-router-dom";
import "../dashboardPalyNif/dashboardPalyNif.css";
import { BsArrowUpLeftCircleFill, BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { BiSolidPackage } from "react-icons/bi";


function DashboardPalyNif() {
  const [loader, setLoader] = useState();

  const [data, setSata] = useState(null);
  console.log(data?.data?.plans);

  const getData = async () => {
    setLoader(true);
    try {
      const res = await dashboardPublic();
      setSata(res?.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loader && <Loader />}
      <div className="ContentArea">
        <div className="card ContentArea-card">
          <div className="card-body">
            <div className="row">
              {/* <div className="col-lg-4 col-md-12">
                <div className="card card-custom2">
                  <Link
                    to={"/my-downline-team"}
                    className="text-decoration-none text-white"
                  >
                    <div className="card-content d-flex justify-content-between align-items-center p-2 gap-4">
                      <div className="icon text-danger  fs-3">
                         <BsArrowUpLeftCircleFill />
                      </div>
                      <div className="text-center">
                        <p className="text-white mb-1">
                          Left Downline Paid:{" "}
                          {data?.data?.leftdownline_paid
                            ? data?.data?.leftdownline_paid
                            : "0"}
                        </p>
                        <p className="text-white mb-1">
                          Left Downline Free:{" "}
                          {data?.data?.leftdownline_free
                            ? data?.data?.leftdownline_free
                            : "0"}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div> */}

              {/* <div className="col-lg-4 col-md-12">
                <div className="card card-custom2">
                  <Link
                    to={"/my-downline-team"}
                    className="text-decoration-none text-white"
                  >
                    <div className="card-content d-flex justify-content-between align-items-center p-2 gap-4">
                      <div className="icon text-success fs-3">
                        <BsArrowUpRightCircleFill />
                      </div>
                      <div className="text-center">
                        <p className="text-white mb-1">
                          Right Downline Paid:{" "}
                          {data?.data?.rightdownline_paid
                            ? data?.data?.rightdownline_paid
                            : "0"}
                        </p>
                        <p className="text-white mb-1">
                          Right Downline Free:{" "}
                          {data?.data?.rightdownline_free
                            ? data?.data?.rightdownline_free
                            : "0"}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div> */}

              <div className="col-lg-6 col-md-12">
                <div className="card card-custom2">
                  <Link
                    to={"/my-referred-member"}
                    className="text-decoration-none text-white"
                  >
                    <div className="card-content d-flex justify-content-between align-items-center p-2 gap-4">
                      <div className="icon text-white fs-3"><FaRegUserCircle />                      </div>
                      <div>
                        <div className="text-center">
                          <div className="text-center">
                            <p className="text-white mb-1">
                              Referred Members Paid:{" "}
                              {data?.data?.children_paid
                                ? data?.data?.children_paid
                                : "0"}
                            </p>
                            <p className="text-white mb-1">
                              Referred Members Free:{" "}
                              {data?.data?.children_free
                                ? data?.data?.children_free
                                : "0"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="card card-custom2">
                  <Link
                    to={"/wallet-report"}
                    className="text-decoration-none text-white"
                  >
                    <div className="card-content d-flex justify-content-between align-items-center p-2 gap-4">
                      <div className="icon text-warning fs-3"><HiMiniCurrencyDollar />
                      </div>
                      <div>
                        <h4 className="mb-2">Current Balance</h4>
                        <p className="text-white mb-0">
                          {data?.data?.user?.main_wallet}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="card card-custom2">
                  <Link
                    to={"/plan"}
                    className="text-decoration-none text-white"
                  >
                    <div className="card-content d-flex justify-content-between align-items-center p-2 gap-4">
                      <div className="icon text-warning fs-3"><BiSolidPackage />
                      </div>
                      <div>
                        <h4 className="mb-2">Current Package</h4>
                        <p className="text-white mb-0">
                          {data?.data?.user?.plan_id?.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card card-custom2">
                  <div className="card-content d-flex justify-content-between align-items-center p-2 gap-4">
                    <div className="icon text-white fs-3">💳</div>
                    <div>
                      <h4 className="mb-2">Total Investment</h4>
                      <p className="text-white mb-0">{"0.00"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 ">
                <div className="card card-custom2">
                  <div className="card-content d-flex justify-content-between align-items-center p-2 gap-4">
                    <div className="icon text-white fs-3">✉️</div>
                    <div>
                      <h4 className="mb-2">Email Unverified</h4>
                      <p className="text-white mb-0">{"0 "}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 ">
                <div className="card card-custom2">
                  <div className="card-content d-flex justify-content-between align-items-center p-2 gap-4">
                    <div className="icon text-white fs-3">📱</div>
                    <div>
                      <h4 className="mb-2">Mobile Unverified</h4>
                      <p className="text-white mb-0">{"0 "}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row g-3 m-0">
                  {/* Deposits Section */}
                  <div className="col-lg-6 col-md-12 mt-0">
                    <div className="card p-3 shadow-sm card-custom2">
                      <h5 className="text-center">Trading Investment Deposits</h5>
                      <Link
                        to={"/deposit-report"}
                        className="text-decoration-none text-white"
                      >
                        <div className="row gy-3 mt-2">
                          {/* Total Deposited */}
                          <div className="col-6 ">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                💵
                              </span>
                              <div className="text-end">
                                <p className="text-white">Total Deposited</p>

                                <h6 className="mb-0">
                                  {data?.data?.deposit?.total}
                                </h6>
                              </div>
                            </div>
                          </div>
                          {/* Pending Deposits */}
                          <div className="col-6 ">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                ⏳
                              </span>
                              <div className="text-end">
                                <p className="text-white">Pending Deposits</p>

                                <h6 className="mb-0">
                                  {data?.data?.deposit?.pending}
                                </h6>
                              </div>
                            </div>
                          </div>
                          {/* Deposited Charge */}
                          <div className="col-6 ">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                📊
                              </span>
                              <div className="text-end">
                                <p className="text-white">Deposited Approved</p>

                                <h6 className="mb-0">
                                  {data?.data?.deposit?.approved}
                                </h6>
                              </div>
                            </div>
                          </div>
                          {/* Rejected Deposits */}
                          <div className="col-6 ">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                ❌
                              </span>
                              <div className="text-end">
                                <p className="text-white">Rejected Deposits</p>

                                <h6 className="mb-0">
                                  {data?.data?.deposit?.rejected}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Withdrawals Section */}
                  <div className="col-lg-6 col-md-12 mt-0">
                    <Link
                      to={"/all-list-withdraw-request/All"}
                      className="text-decoration-none text-white"
                    >
                      <div className="card p-3 shadow-sm card-custom2">
                        <h5 className="text-center">Withdrawals</h5>
                        <div className="row gy-3 mt-2 ">
                          {/* Total Withdrawn */}
                          <div className="col-6 ">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                💳
                              </span>
                              <div className="text-end">
                                <p className="text-white">Total Withdrawl</p>

                                <h6 className="mb-0">
                                  {data?.data?.withdraw?.total}
                                </h6>
                              </div>
                            </div>
                          </div>
                          {/* Pending Withdrawals */}
                          <div className="col-6 ">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                ⏳
                              </span>
                              <div className="text-end">
                                <p className="text-white">
                                  Pending Withdrawals
                                </p>

                                <h6 className="mb-0">
                                  {data?.data?.withdraw?.pending}
                                </h6>
                              </div>
                            </div>
                          </div>
                          {/* Withdrawal Charge */}
                          <div className="col-6 ">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                📉
                              </span>
                              <div className="text-end">
                                <p className="text-white">
                                  Withdrawal Approved
                                </p>

                                <h6 className="mb-0">
                                  {data?.data?.withdraw?.approved}
                                </h6>
                              </div>
                            </div>
                          </div>
                          {/* Rejected Withdrawals */}
                          <div className="col-6">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                ❌
                              </span>
                              <div className="text-end">
                                <p className="text-white">
                                  Rejected Withdrawals
                                </p>

                                <h6 className="mb-0">
                                  {data?.data?.withdraw?.rejected}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row g-3 m-0 stretch d-flex align-items-stretch">
                  {/* Deposits Section */}
                  <div className="col-lg-6 col-md-12 d-flex mt-0">
                    <div className="card p-3 shadow-sm card-custom2 w-100">
                      <Link
                        to={"/add-payment-request"}
                        className="text-decoration-none text-white"
                      >
                        <h5 className="text-center">Payment Request</h5>
                        <div className="row gy-3">
                          {/* Total Deposited */}
                          <div className="col-6">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                💵
                              </span>
                              <div className="text-end">
                                <p className="text-white">
                                  Total Payment Request
                                </p>

                                <h6 className="mb-0">
                                  {data?.data?.paymentRequest?.total}
                                </h6>
                              </div>
                            </div>
                          </div>
                          {/* Pending Deposits */}
                          <div className="col-6">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                ⏳
                              </span>
                              <div className="text-end">
                                <p className="text-white">
                                  Pending Payment Request
                                </p>
                                <h6 className="mb-0">
                                  {data?.data?.paymentRequest?.pending}
                                </h6>
                              </div>
                            </div>
                          </div>
                          {/* Approved Deposits */}
                          <div className="col-6 ">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                📊
                              </span>
                              <div className="text-end">
                                <p className="text-white">
                                  Payment Request Approved
                                </p>
                                <h6 className="mb-0">
                                  {data?.data?.paymentRequest?.approved}
                                </h6>
                              </div>
                            </div>
                          </div>
                          {/* Rejected Deposits */}
                          <div className="col-6">
                            <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                              <span className="fs-3">
                                ❌
                              </span>
                              <div className="text-end">
                                <p className="text-white">
                                  Rejected Payment Request
                                </p>
                                <h6 className="mb-0">
                                  {data?.data?.paymentRequest?.rejected}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Withdrawals Section */}
                  <div className="col-lg-6 col-md-12 d-flex mt-0">
                    <div className="card p-3 shadow-sm card-custom2 w-100">
                      <h5 className="text-center">Incomes In Main Wallet</h5>
                      <div className="row gy-3 mt-2">
                        {/* Total Referral Income */}
                        <div className="col-6">
                          <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                            <span className="fs-3">
                              💵
                            </span>
                            <div className="text-end">
                              <p className="text-white">
                                Total Referral Income
                              </p>

                              <h6 className="mb-0">
                                {data?.data?.wallet?.referalIncome}
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/* Total Level Income */}
                        <div className="col-6">
                          <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                            <span className="fs-3">
                              📋
                            </span>
                            <div className="text-end">
                              <p className="text-white">Total Level Income</p>

                              <h6 className="mb-0">
                                {data?.data?.wallet?.levelIncome}
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/* Rank & Reward */}
                        <div className="col-6">
                          <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                            <span className="fs-3">
                              📉
                            </span>
                            <div className="text-end">
                              <p className="text-white">Rank & Reward</p>

                              <h6 className="mb-0">
                                {data?.data?.wallet?.rewardIncome}
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/* Fast Achievement Bonus */}
                        <div className="col-6">
                          <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                            <span className="fs-3">
                              🏆
                            </span>
                            <div className="text-end">
                              <p className="text-white">
                                Fast Achievement Bonus
                              </p>

                              <h6 className="mb-0">
                                {data?.data?.wallet?.achievementIncome}
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/* Matching Bonus */}
                        <div className="col-6">
                          <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                            <span className="fs-3">
                              ⏳
                            </span>
                            <div className="text-end">
                              <p className="text-white">Matching Bonus</p>

                              <h6 className="mb-0">
                                {data?.data?.wallet?.matchBotIncome}
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/* Total Trading Income */}
                        <div className="col-6">
                          <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                            <span className="fs-3">
                              💳
                            </span>
                            <div className="text-end">
                              <p className="text-white">Total Trading Income</p>

                              <h6 className="mb-0">
                                {data?.data?.wallet?.tradingIncome}
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/* Society Income */}
                        <div className="col-6">
                          <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                            <span className="fs-3">
                              🗺️
                            </span>
                            <div className="text-end">
                              <p className="text-white">Society Income</p>

                              <h6 className="mb-0">
                                {data?.data?.wallet?.societyIncome}
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/* Earning Cycle Income */}
                        <div className="col-6">
                          <div className="d-flex justify-content-between align-items-center p-2 gap-4">
                            <span className="fs-3">
                              ♻️
                            </span>
                            <div className="text-end">
                              <p className="text-white">Earning Cycle Income</p>

                              <h6 className="mb-0">
                                {data?.data?.wallet?.earningCycleIncome}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashboardPalyNif;
