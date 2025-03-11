import { useEffect, useState } from "react";
import logo from "../../assets/img/logo-name.PNG";
import { SiPaytm } from "react-icons/si";
import { Await, Link, useNavigate } from "react-router-dom";
import {
  Getprofile,
  WalletsShow,
  notifications,
  notificationsList,
} from "../../api/login/Login";

import { PiBellSimpleBold } from "react-icons/pi";
import { SiIledefrancemobilites } from "react-icons/si";
import { MdOutlineAppRegistration } from "react-icons/md";

import { TbTiltShift } from "react-icons/tb";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { BsPinFill } from "react-icons/bs";
import { FaBarsStaggered, FaMoneyBillTrendUp } from "react-icons/fa6";
import NotificationSide from "../../components/admin/notificationSide/NotificationSide";
import { setUserTypeId, setUserType } from "../../utils/localStorage";
import "./Header.css";
import { FaMapPin, FaRegAddressBook, FaRegAddressCard, FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdPermIdentity } from "react-icons/md";

function AdminHeader({
  handleLogout,
  walletData,
  handleClick,
  toggleSidebar,
  handleMenuClick,
  profileOn,
  profileOf,
  toggle,
  tokenNoti,
  toggleSidebar2,
}) {
  const navigate = useNavigate();

  const [loadwallet, setLoadWallet] = useState(false);
  // const [walletData, setWalletData] = useState()
  const [data, setData] = useState(null);
  // console.log(data);
  const [adminCount, setAdminCount] = useState(null);

  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);
  const [read, setRead] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const [NotificationData, setNotificationData] = useState(null);

  // console.log(NotificationData);

  const getDataProfile = async () => {
    try {
      const res = await Getprofile();
      setData(res?.data?.data);
      const userType = res?.data?.data?.user_type_id?.user_type || "retailer";
      const userTypeId = res?.data?.data?.user_type_id?._id || "199888";
      setUserType(userType);
      setUserTypeId(userTypeId);
    } catch (error) {}
  };

  // const walletShowHeader = async () => {
  //     try {
  //         const res = await WalletsShow()
  //         setWalletData(res?.data?.data);
  //     } catch (error) {

  //     }
  // }

  const notification = async () => {
    try {
      const res = await notifications();
      // console.log(res);
      setAdminCount(res?.data?.data?.count);
    } catch (error) {}
  };

  const notificationList = async (cc) => {
    try {
      const res = await notificationsList(count, page, cc == 0 ? true : false);
      // console.log(res);
      setNotificationData(res?.data?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getDataProfile();
    // walletShowHeader()
    notification();
  }, []);

  const logOut = () => {
    window.localStorage.removeItem("userToken");
    window.localStorage.removeItem("userIdToken");
    window.localStorage.removeItem("openMenu");
    window.localStorage.removeItem("regisNumber");
    window.localStorage.removeItem("userType");
    window.localStorage.removeItem("userTypeId");
    // window.location.reload()
    navigate("/login-area");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    notificationList(adminCount);
  };
  // console.log("dataprofile", data);
  const storedUserType = localStorage.getItem("userType");

  return (
    <>
      <header className="HeaderMain">
        <div className="logo">
          <Link to="/dashboard">
            <img src={logo} alt="" />
           
          </Link>
          <div
            className="SidebarTriggerMobile SidebarMini SidebarTriggerMobile1"
            id="siderbarMenu"
            onClick={toggleSidebar}
          >
            <FaBarsStaggered />

          </div>

          <div
            className="SidebarTriggerMobile SidebarMini SidebarTriggerMobile2 mobile"
            id="siderbarMenu"
            onClick={toggleSidebar2}
          >
            <FaBarsStaggered />
          </div>
        </div>
        <div className="HeaderContainer" id="topHeader">
          {/* User Dropdown Start */}
          <div className="UserDetails dropdown">
            {/* <div className="UserInfo dropdown-toggle" id="UserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="UserPic"><img src={logo} /></div>
                            <div className="UserName" id="divname">shafiullah</div>
                        </div> */}
            <div
              className="UserDropdown dropdown-menu"
              aria-labelledby="UserDropdown"
            >
              <ul>
                <li className="user-mob-balance">
                  <a href="javascript:void(0);">
                    <i>
                      <svg x={0} y={0} viewBox="0 0 28 28">
                        <path d="M27.982,13.044 L26.627,13.044 L26.627,6.867 C26.627,5.386 25.411,4.182 23.916,4.182 L22.081,4.182 L20.202,0.836 C19.916,0.324 19.371,0.007 18.780,0.007 C18.505,0.007 18.232,0.077 17.990,0.210 L10.781,4.182 L2.728,4.182 C1.233,4.182 0.017,5.386 0.017,6.867 L0.017,25.307 C0.017,26.788 1.233,27.993 2.728,27.993 L23.916,27.993 C25.411,27.993 26.627,26.788 26.627,25.307 L26.627,19.892 L27.982,19.892 L27.982,13.044 L27.982,13.044 ZM23.916,5.256 C24.751,5.256 25.433,5.884 25.525,6.688 L23.488,6.688 L22.684,5.256 L23.916,5.256 ZM18.518,1.149 C18.772,1.007 19.114,1.106 19.254,1.357 L22.247,6.688 L8.463,6.688 L18.518,1.149 ZM25.543,25.307 C25.543,26.196 24.813,26.919 23.916,26.919 L2.728,26.919 C1.831,26.919 1.101,26.196 1.101,25.307 L1.101,6.867 C1.101,5.979 1.831,5.256 2.728,5.256 L8.831,5.256 L6.231,6.688 L3.067,6.688 C2.767,6.688 2.525,6.929 2.525,7.225 C2.525,7.522 2.767,7.763 3.067,7.763 L4.281,7.763 L24.091,7.763 L25.543,7.763 L25.543,13.044 L21.578,13.044 C19.737,13.044 18.239,14.529 18.239,16.353 L18.239,16.584 C18.239,18.408 19.737,19.892 21.578,19.892 L25.543,19.892 L25.543,25.307 L25.543,25.307 ZM26.898,18.818 L26.627,18.818 L21.578,18.818 C20.335,18.818 19.323,17.816 19.323,16.583 L19.323,16.352 C19.323,15.120 20.334,14.118 21.578,14.118 L26.627,14.118 L26.898,14.118 L26.898,18.818 ZM23.239,16.512 C23.239,17.167 22.703,17.698 22.042,17.698 C21.380,17.698 20.845,17.167 20.845,16.512 C20.845,15.857 21.380,15.326 22.042,15.326 C22.703,15.326 23.239,15.857 23.239,16.512 Z" />
                      </svg>
                    </i>
                    <span id="baldiv2">2162.81</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <svg
                        x={0}
                        y={0}
                        viewBox="0 0 15 15"
                        className="sm-svg default-svg"
                      >
                        <path d="M9.355,10.534 C8.985,10.473 8.977,9.417 8.977,9.417 C8.977,9.417 10.064,8.300 10.301,6.799 C10.939,6.799 11.333,5.203 10.695,4.641 C10.722,4.050 11.515,-0.000 7.500,-0.000 C3.485,-0.000 4.278,4.050 4.305,4.641 C3.667,5.203 4.061,6.799 4.698,6.799 C4.936,8.300 6.023,9.417 6.023,9.417 C6.023,9.417 6.015,10.473 5.645,10.534 C4.452,10.730 -0.000,12.767 -0.000,15.000 L7.500,15.000 L15.000,15.000 C15.000,12.767 10.548,10.730 9.355,10.534 Z" />
                      </svg>
                    </i>
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <svg
                        x={0}
                        y={0}
                        viewBox="0 0 16 16"
                        className="sm-svg default-svg"
                      >
                        <path d="M15.920,7.112 C15.895,6.887 15.633,6.718 15.407,6.718 C14.675,6.718 14.026,6.287 13.753,5.621 C13.475,4.940 13.655,4.144 14.200,3.643 C14.372,3.486 14.392,3.223 14.248,3.040 C13.874,2.564 13.448,2.133 12.983,1.760 C12.801,1.614 12.534,1.634 12.377,1.809 C11.901,2.337 11.046,2.534 10.385,2.257 C9.698,1.968 9.264,1.270 9.307,0.521 C9.320,0.285 9.149,0.081 8.915,0.053 C8.318,-0.016 7.716,-0.018 7.118,0.048 C6.887,0.074 6.715,0.274 6.723,0.506 C6.749,1.248 6.310,1.934 5.629,2.213 C4.977,2.480 4.128,2.286 3.653,1.762 C3.496,1.590 3.233,1.569 3.050,1.711 C2.572,2.088 2.136,2.518 1.758,2.991 C1.611,3.175 1.633,3.441 1.806,3.599 C2.362,4.103 2.541,4.905 2.253,5.595 C1.977,6.253 1.295,6.676 0.515,6.676 C0.262,6.668 0.082,6.839 0.054,7.069 C-0.016,7.670 -0.017,8.283 0.050,8.889 C0.076,9.114 0.345,9.282 0.574,9.282 C1.269,9.264 1.937,9.695 2.217,10.378 C2.496,11.060 2.317,11.855 1.770,12.356 C1.600,12.514 1.578,12.776 1.722,12.959 C2.093,13.433 2.519,13.863 2.985,14.240 C3.168,14.387 3.434,14.367 3.593,14.191 C4.071,13.662 4.926,13.466 5.584,13.743 C6.273,14.032 6.706,14.730 6.664,15.479 C6.650,15.715 6.823,15.920 7.056,15.946 C7.361,15.982 7.668,16.000 7.976,16.000 C8.268,16.000 8.560,15.984 8.852,15.951 C9.084,15.926 9.255,15.726 9.248,15.493 C9.221,14.752 9.660,14.066 10.340,13.787 C10.997,13.518 11.843,13.715 12.318,14.238 C12.475,14.410 12.736,14.431 12.920,14.288 C13.398,13.913 13.832,13.483 14.212,13.009 C14.359,12.825 14.339,12.559 14.164,12.401 C13.609,11.897 13.428,11.094 13.717,10.405 C13.988,9.756 14.645,9.321 15.351,9.321 L15.449,9.323 C15.678,9.342 15.889,9.165 15.917,8.931 C15.987,8.329 15.988,7.718 15.920,7.112 ZM7.998,10.685 C6.529,10.685 5.335,9.488 5.335,8.017 C5.335,6.545 6.529,5.348 7.998,5.348 C9.467,5.348 10.661,6.545 10.661,8.017 C10.661,9.488 9.467,10.685 7.998,10.685 Z" />
                      </svg>
                    </i>
                    <span>Complain</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <svg
                        x={0}
                        y={0}
                        viewBox="0 0 14 14"
                        className="sm-svg default-svg"
                      >
                        <path d="M13.943,6.640 C13.913,6.711 13.871,6.776 13.817,6.829 L12.070,8.577 C11.957,8.692 11.808,8.748 11.659,8.748 C11.509,8.748 11.361,8.692 11.247,8.577 C11.019,8.350 11.019,7.981 11.247,7.753 L12.000,7.000 L8.747,7.000 C8.425,7.000 8.165,6.739 8.165,6.417 C8.165,6.095 8.425,5.834 8.747,5.834 L12.000,5.834 L11.247,5.080 C11.019,4.853 11.019,4.484 11.247,4.256 C11.475,4.029 11.843,4.029 12.070,4.256 L13.817,6.004 C13.871,6.058 13.913,6.123 13.943,6.194 C14.002,6.336 14.002,6.497 13.943,6.640 ZM9.912,4.669 C9.590,4.669 9.329,4.407 9.329,4.086 L9.329,1.171 L4.563,1.171 L6.585,1.779 C6.831,1.853 7.000,2.080 7.000,2.337 L7.000,11.663 L9.329,11.663 L9.329,8.748 C9.329,8.427 9.590,8.166 9.912,8.166 C10.234,8.166 10.494,8.427 10.494,8.748 L10.494,12.246 C10.494,12.567 10.234,12.828 9.912,12.828 L7.000,12.828 L7.000,13.411 C7.000,13.586 6.922,13.751 6.787,13.862 C6.682,13.948 6.551,13.994 6.418,13.994 C6.380,13.994 6.342,13.991 6.304,13.982 L0.481,12.817 C0.209,12.762 0.013,12.524 0.013,12.246 L0.013,0.588 C0.013,0.577 0.020,0.566 0.021,0.555 C0.021,0.538 0.016,0.521 0.019,0.504 C0.026,0.455 0.046,0.412 0.065,0.368 C0.071,0.351 0.073,0.334 0.081,0.319 C0.120,0.246 0.173,0.185 0.236,0.135 C0.241,0.131 0.243,0.125 0.247,0.121 C0.259,0.112 0.275,0.111 0.288,0.103 C0.340,0.070 0.395,0.046 0.456,0.031 C0.483,0.024 0.507,0.020 0.535,0.017 C0.555,0.014 0.574,0.006 0.595,0.006 L9.912,0.006 C10.234,0.006 10.494,0.267 10.494,0.588 L10.494,4.086 C10.494,4.407 10.234,4.669 9.912,4.669 Z" />
                      </svg>
                    </i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* User Dropdown End */}
          <div className="HeaderRight">
            {/* hide to load balalnce cannot seen */}
            {/* <div className="UserWallet mr-2" >
                            <i>
                                <svg x={0} y={0} viewBox="0 0 28 28">
                                    <path d="M27.982,13.044 L26.627,13.044 L26.627,6.867 C26.627,5.386 25.411,4.182 23.916,4.182 L22.081,4.182 L20.202,0.836 C19.916,0.324 19.371,0.007 18.780,0.007 C18.505,0.007 18.232,0.077 17.990,0.210 L10.781,4.182 L2.728,4.182 C1.233,4.182 0.017,5.386 0.017,6.867 L0.017,25.307 C0.017,26.788 1.233,27.993 2.728,27.993 L23.916,27.993 C25.411,27.993 26.627,26.788 26.627,25.307 L26.627,19.892 L27.982,19.892 L27.982,13.044 L27.982,13.044 ZM23.916,5.256 C24.751,5.256 25.433,5.884 25.525,6.688 L23.488,6.688 L22.684,5.256 L23.916,5.256 ZM18.518,1.149 C18.772,1.007 19.114,1.106 19.254,1.357 L22.247,6.688 L8.463,6.688 L18.518,1.149 ZM25.543,25.307 C25.543,26.196 24.813,26.919 23.916,26.919 L2.728,26.919 C1.831,26.919 1.101,26.196 1.101,25.307 L1.101,6.867 C1.101,5.979 1.831,5.256 2.728,5.256 L8.831,5.256 L6.231,6.688 L3.067,6.688 C2.767,6.688 2.525,6.929 2.525,7.225 C2.525,7.522 2.767,7.763 3.067,7.763 L4.281,7.763 L24.091,7.763 L25.543,7.763 L25.543,13.044 L21.578,13.044 C19.737,13.044 18.239,14.529 18.239,16.353 L18.239,16.584 C18.239,18.408 19.737,19.892 21.578,19.892 L25.543,19.892 L25.543,25.307 L25.543,25.307 ZM26.898,18.818 L26.627,18.818 L21.578,18.818 C20.335,18.818 19.323,17.816 19.323,16.583 L19.323,16.352 C19.323,15.120 20.334,14.118 21.578,14.118 L26.627,14.118 L26.898,14.118 L26.898,18.818 ZM23.239,16.512 C23.239,17.167 22.703,17.698 22.042,17.698 C21.380,17.698 20.845,17.167 20.845,16.512 C20.845,15.857 21.380,15.326 22.042,15.326 C22.703,15.326 23.239,15.857 23.239,16.512 Z" />
                                </svg>
                            </i>

                           
                            <div className="WalletDetails">
                                <h3>Load Balance</h3>
                                <h2>₹ <span id="baldiv">0.00</span></h2>
                            </div>
                        </div> */}

            <div className="UserWallet mr-2">
              <i>
                <svg x={0} y={0} viewBox="0 0 28 28">
                  <path d="M27.982,13.044 L26.627,13.044 L26.627,6.867 C26.627,5.386 25.411,4.182 23.916,4.182 L22.081,4.182 L20.202,0.836 C19.916,0.324 19.371,0.007 18.780,0.007 C18.505,0.007 18.232,0.077 17.990,0.210 L10.781,4.182 L2.728,4.182 C1.233,4.182 0.017,5.386 0.017,6.867 L0.017,25.307 C0.017,26.788 1.233,27.993 2.728,27.993 L23.916,27.993 C25.411,27.993 26.627,26.788 26.627,25.307 L26.627,19.892 L27.982,19.892 L27.982,13.044 L27.982,13.044 ZM23.916,5.256 C24.751,5.256 25.433,5.884 25.525,6.688 L23.488,6.688 L22.684,5.256 L23.916,5.256 ZM18.518,1.149 C18.772,1.007 19.114,1.106 19.254,1.357 L22.247,6.688 L8.463,6.688 L18.518,1.149 ZM25.543,25.307 C25.543,26.196 24.813,26.919 23.916,26.919 L2.728,26.919 C1.831,26.919 1.101,26.196 1.101,25.307 L1.101,6.867 C1.101,5.979 1.831,5.256 2.728,5.256 L8.831,5.256 L6.231,6.688 L3.067,6.688 C2.767,6.688 2.525,6.929 2.525,7.225 C2.525,7.522 2.767,7.763 3.067,7.763 L4.281,7.763 L24.091,7.763 L25.543,7.763 L25.543,13.044 L21.578,13.044 C19.737,13.044 18.239,14.529 18.239,16.353 L18.239,16.584 C18.239,18.408 19.737,19.892 21.578,19.892 L25.543,19.892 L25.543,25.307 L25.543,25.307 ZM26.898,18.818 L26.627,18.818 L21.578,18.818 C20.335,18.818 19.323,17.816 19.323,16.583 L19.323,16.352 C19.323,15.120 20.334,14.118 21.578,14.118 L26.627,14.118 L26.898,14.118 L26.898,18.818 ZM23.239,16.512 C23.239,17.167 22.703,17.698 22.042,17.698 C21.380,17.698 20.845,17.167 20.845,16.512 C20.845,15.857 21.380,15.326 22.042,15.326 C22.703,15.326 23.239,15.857 23.239,16.512 Z" />
                </svg>
              </i>
              <div className="WalletDetails">
                <h3>Main Wallet</h3>
                <h2>
                  $ <span id="baldiv">{walletData?.main_wallet}</span>
                </h2>
              </div>
            </div>

            <div className="UserWallet mr-2">
              <i>
                <svg x={0} y={0} viewBox="0 0 28 28">
                  <path d="M27.982,13.044 L26.627,13.044 L26.627,6.867 C26.627,5.386 25.411,4.182 23.916,4.182 L22.081,4.182 L20.202,0.836 C19.916,0.324 19.371,0.007 18.780,0.007 C18.505,0.007 18.232,0.077 17.990,0.210 L10.781,4.182 L2.728,4.182 C1.233,4.182 0.017,5.386 0.017,6.867 L0.017,25.307 C0.017,26.788 1.233,27.993 2.728,27.993 L23.916,27.993 C25.411,27.993 26.627,26.788 26.627,25.307 L26.627,19.892 L27.982,19.892 L27.982,13.044 L27.982,13.044 ZM23.916,5.256 C24.751,5.256 25.433,5.884 25.525,6.688 L23.488,6.688 L22.684,5.256 L23.916,5.256 ZM18.518,1.149 C18.772,1.007 19.114,1.106 19.254,1.357 L22.247,6.688 L8.463,6.688 L18.518,1.149 ZM25.543,25.307 C25.543,26.196 24.813,26.919 23.916,26.919 L2.728,26.919 C1.831,26.919 1.101,26.196 1.101,25.307 L1.101,6.867 C1.101,5.979 1.831,5.256 2.728,5.256 L8.831,5.256 L6.231,6.688 L3.067,6.688 C2.767,6.688 2.525,6.929 2.525,7.225 C2.525,7.522 2.767,7.763 3.067,7.763 L4.281,7.763 L24.091,7.763 L25.543,7.763 L25.543,13.044 L21.578,13.044 C19.737,13.044 18.239,14.529 18.239,16.353 L18.239,16.584 C18.239,18.408 19.737,19.892 21.578,19.892 L25.543,19.892 L25.543,25.307 L25.543,25.307 ZM26.898,18.818 L26.627,18.818 L21.578,18.818 C20.335,18.818 19.323,17.816 19.323,16.583 L19.323,16.352 C19.323,15.120 20.334,14.118 21.578,14.118 L26.627,14.118 L26.898,14.118 L26.898,18.818 ZM23.239,16.512 C23.239,17.167 22.703,17.698 22.042,17.698 C21.380,17.698 20.845,17.167 20.845,16.512 C20.845,15.857 21.380,15.326 22.042,15.326 C22.703,15.326 23.239,15.857 23.239,16.512 Z" />
                </svg>
              </i>
              <div className="WalletDetails">
                <h3>Investment Wallet</h3>
                <h2>
                  ${" "}
                  <span id="baldiv">{walletData?.main_investment_wallet}</span>
                </h2>
              </div>
            </div>

            {/* {storedUserType === 'Super Distributor' || storedUserType === 'Distributor' ? (
                            <></>
                        ) : (
                            <>
                                <div className="UserWallet" >
                                    <i>
                                        <svg x={0} y={0} viewBox="0 0 28 28">
                                            <path d="M27.982,13.044 L26.627,13.044 L26.627,6.867 C26.627,5.386 25.411,4.182 23.916,4.182 L22.081,4.182 L20.202,0.836 C19.916,0.324 19.371,0.007 18.780,0.007 C18.505,0.007 18.232,0.077 17.990,0.210 L10.781,4.182 L2.728,4.182 C1.233,4.182 0.017,5.386 0.017,6.867 L0.017,25.307 C0.017,26.788 1.233,27.993 2.728,27.993 L23.916,27.993 C25.411,27.993 26.627,26.788 26.627,25.307 L26.627,19.892 L27.982,19.892 L27.982,13.044 L27.982,13.044 ZM23.916,5.256 C24.751,5.256 25.433,5.884 25.525,6.688 L23.488,6.688 L22.684,5.256 L23.916,5.256 ZM18.518,1.149 C18.772,1.007 19.114,1.106 19.254,1.357 L22.247,6.688 L8.463,6.688 L18.518,1.149 ZM25.543,25.307 C25.543,26.196 24.813,26.919 23.916,26.919 L2.728,26.919 C1.831,26.919 1.101,26.196 1.101,25.307 L1.101,6.867 C1.101,5.979 1.831,5.256 2.728,5.256 L8.831,5.256 L6.231,6.688 L3.067,6.688 C2.767,6.688 2.525,6.929 2.525,7.225 C2.525,7.522 2.767,7.763 3.067,7.763 L4.281,7.763 L24.091,7.763 L25.543,7.763 L25.543,13.044 L21.578,13.044 C19.737,13.044 18.239,14.529 18.239,16.353 L18.239,16.584 C18.239,18.408 19.737,19.892 21.578,19.892 L25.543,19.892 L25.543,25.307 L25.543,25.307 ZM26.898,18.818 L26.627,18.818 L21.578,18.818 C20.335,18.818 19.323,17.816 19.323,16.583 L19.323,16.352 C19.323,15.120 20.334,14.118 21.578,14.118 L26.627,14.118 L26.898,14.118 L26.898,18.818 ZM23.239,16.512 C23.239,17.167 22.703,17.698 22.042,17.698 C21.380,17.698 20.845,17.167 20.845,16.512 C20.845,15.857 21.380,15.326 22.042,15.326 C22.703,15.326 23.239,15.857 23.239,16.512 Z" />
                                        </svg>
                                    </i>

                                    <div className="WalletDetails">
                                        <h3>AEPS Wallet</h3>
                                        <h2>₹ <span id="baldiv">{walletData?.aeps_wallet}</span></h2>
                                    </div>
                                </div>

                            </>
                        )} */}

            {/* User Wallet End */}
            {/* <a href="https://m.masterpay.pro/Retailer/Paytm_transfer" class="walletTopup">
                      <div class="UserWallet">
                          <i>
                              <svg x="0" y="0" viewBox="0 0 28 28">
                                  <path
                                      d="M27.982,13.044 L26.627,13.044 L26.627,6.867 C26.627,5.386 25.411,4.182 23.916,4.182 L22.081,4.182 L20.202,0.836 C19.916,0.324 19.371,0.007 18.780,0.007 C18.505,0.007 18.232,0.077 17.990,0.210 L10.781,4.182 L2.728,4.182 C1.233,4.182 0.017,5.386 0.017,6.867 L0.017,25.307 C0.017,26.788 1.233,27.993 2.728,27.993 L23.916,27.993 C25.411,27.993 26.627,26.788 26.627,25.307 L26.627,19.892 L27.982,19.892 L27.982,13.044 L27.982,13.044 ZM23.916,5.256 C24.751,5.256 25.433,5.884 25.525,6.688 L23.488,6.688 L22.684,5.256 L23.916,5.256 ZM18.518,1.149 C18.772,1.007 19.114,1.106 19.254,1.357 L22.247,6.688 L8.463,6.688 L18.518,1.149 ZM25.543,25.307 C25.543,26.196 24.813,26.919 23.916,26.919 L2.728,26.919 C1.831,26.919 1.101,26.196 1.101,25.307 L1.101,6.867 C1.101,5.979 1.831,5.256 2.728,5.256 L8.831,5.256 L6.231,6.688 L3.067,6.688 C2.767,6.688 2.525,6.929 2.525,7.225 C2.525,7.522 2.767,7.763 3.067,7.763 L4.281,7.763 L24.091,7.763 L25.543,7.763 L25.543,13.044 L21.578,13.044 C19.737,13.044 18.239,14.529 18.239,16.353 L18.239,16.584 C18.239,18.408 19.737,19.892 21.578,19.892 L25.543,19.892 L25.543,25.307 L25.543,25.307 ZM26.898,18.818 L26.627,18.818 L21.578,18.818 C20.335,18.818 19.323,17.816 19.323,16.583 L19.323,16.352 C19.323,15.120 20.334,14.118 21.578,14.118 L26.627,14.118 L26.898,14.118 L26.898,18.818 ZM23.239,16.512 C23.239,17.167 22.703,17.698 22.042,17.698 C21.380,17.698 20.845,17.167 20.845,16.512 C20.845,15.857 21.380,15.326 22.042,15.326 C22.703,15.326 23.239,15.857 23.239,16.512 Z" />
                              </svg>
                          </i>
                          <div class="WalletDetails">
                              <h3>Load <br> Wallet</h3>
                          </div>
                      </div>
                  </a> */}

            {/* <div className="dropdown loadwallet ml-3" onClick={() => { setLoadWallet(!loadwallet) }}>
                            <div className="UserWallet dropdown-toggle" id="walletDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i>
                                    <svg x={0} y={0} viewBox="0 0 28 28">
                                        <path d="M27.982,13.044 L26.627,13.044 L26.627,6.867 C26.627,5.386 25.411,4.182 23.916,4.182 L22.081,4.182 L20.202,0.836 C19.916,0.324 19.371,0.007 18.780,0.007 C18.505,0.007 18.232,0.077 17.990,0.210 L10.781,4.182 L2.728,4.182 C1.233,4.182 0.017,5.386 0.017,6.867 L0.017,25.307 C0.017,26.788 1.233,27.993 2.728,27.993 L23.916,27.993 C25.411,27.993 26.627,26.788 26.627,25.307 L26.627,19.892 L27.982,19.892 L27.982,13.044 L27.982,13.044 ZM23.916,5.256 C24.751,5.256 25.433,5.884 25.525,6.688 L23.488,6.688 L22.684,5.256 L23.916,5.256 ZM18.518,1.149 C18.772,1.007 19.114,1.106 19.254,1.357 L22.247,6.688 L8.463,6.688 L18.518,1.149 ZM25.543,25.307 C25.543,26.196 24.813,26.919 23.916,26.919 L2.728,26.919 C1.831,26.919 1.101,26.196 1.101,25.307 L1.101,6.867 C1.101,5.979 1.831,5.256 2.728,5.256 L8.831,5.256 L6.231,6.688 L3.067,6.688 C2.767,6.688 2.525,6.929 2.525,7.225 C2.525,7.522 2.767,7.763 3.067,7.763 L4.281,7.763 L24.091,7.763 L25.543,7.763 L25.543,13.044 L21.578,13.044 C19.737,13.044 18.239,14.529 18.239,16.353 L18.239,16.584 C18.239,18.408 19.737,19.892 21.578,19.892 L25.543,19.892 L25.543,25.307 L25.543,25.307 ZM26.898,18.818 L26.627,18.818 L21.578,18.818 C20.335,18.818 19.323,17.816 19.323,16.583 L19.323,16.352 C19.323,15.120 20.334,14.118 21.578,14.118 L26.627,14.118 L26.898,14.118 L26.898,18.818 ZM23.239,16.512 C23.239,17.167 22.703,17.698 22.042,17.698 C21.380,17.698 20.845,17.167 20.845,16.512 C20.845,15.857 21.380,15.326 22.042,15.326 C22.703,15.326 23.239,15.857 23.239,16.512 Z" />
                                    </svg>
                                </i>
                                <div className="WalletDetails">
                                    <Link to="Retailer/Paytm_wallet">
                                       
                                        <span>PG</span>
                                    </Link>
                                </div>
                            </div>

                        </div> */}

            <div className="dropdown header-profile2">
              <Link className="nav-link" to="#" onClick={profileOn}>
                <div
                  className="header-info2"
                  
                >
                  <div className="header-media" style={{ marginRight: "5px" }}>
                    <img
                      src={
                        data?.profile
                          ? `https://api.paypandabnk.com/api/cloudinary/${data.profile}`
                          : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                      }
                      alt="Profile Picture"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div style={{ marginRight: "5px" }}>
                    <h6 style={{ margin: 0, fontSize: "12px", color: "#fff" }}>
                      {/* {data?.name} */}
                      PhoenixFx AiWorld
                    </h6>
                    <small
                      style={{
                        fontSize: "12px",
                        color: "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      {data?.refer_id}
                    </small>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                    style={{ color: "#fff" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              </Link>
              {toggle ? (
                <div className="dropdown-menu-end dropdown-menu-2" style={{}}>
                  <div className="card border-0 mb-0">
                    <div className="card-header py-2 d-block">
                      <div className="products">
                        <img
                          src={`https://api.paypandabnk.com/api/cloudinary/${data?.profile}`}
                          className="avatar avatar-md"
                          alt
                        />
                        <div>
                          <p className="m-0">{data?.refer_id}</p>
                          <h6>{data?.name}</h6>
                        </div>
                      </div>
                      <span>{data?.email}</span>
                    </div>
                    <div
                      className="card-body"
                      style={{ padding: "15px", minHeight: "2rem" }}
                    >
                      <Link
                        to="profile"
                        className="dropdown-item ai-icon "
                        onClick={profileOf}
                      >
                        <FaRegUserCircle />
                        <span className="ms-1">Profile </span>
                      </Link>
                      {/* <Link
                                                to="shipping_Address"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <TbTiltShift />
                                                <span className="ms-2">Shipping Address</span>
                                            </Link> */}
                      <Link
                        to="billing_Address"
                        className="dropdown-item ai-icon "
                        onClick={profileOf}
                      >
                        <FaRegAddressBook />
                        <span className="ms-2">Billing Address</span>
                      </Link>
                      <Link
                        to="change_password"
                        className="dropdown-item ai-icon "
                        onClick={profileOf}
                      >
                        <RiLockPasswordFill />
                        <span className="ms-2">Password Change</span>
                      </Link>
                      <Link
                        to="change_txnpassword"
                        className="dropdown-item ai-icon "
                        onClick={profileOf}
                      >
                        <FaMapPin />
                        <span className="ms-2">Pin Change</span>
                      </Link>
                      <Link
                        to="my_kyc"
                        className="dropdown-item ai-icon "
                        onClick={profileOf}
                      >
                        <TiDocumentText />
                        <span className="ms-2">My KYC</span>
                      </Link>
                      {/* <Link
                                                to="registrationComplete"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <BsPinFill />
                                                <span className="ms-2">Complete Kyc</span>
                                            </Link> */}

                      <Link
                        to="aibot/User-Panel/Member/welcomeletter"
                        className="dropdown-item ai-icon "
                        onClick={profileOf}
                      >
                        <IoDocumentTextOutline />
                        <span className="ms-2">Welcome Letter</span>
                      </Link>
                      <Link
                        to="aibot/User-Panel/Member/getIDcard"
                        className="dropdown-item ai-icon "
                        onClick={profileOf}
                      >
                        <FaRegAddressCard />
                        <span className="ms-2">Identity Card</span>
                      </Link>
                      <Link
                        to="my-referred-member"
                        className="dropdown-item ai-icon "
                        onClick={profileOf}
                      >
                        <MdOutlineAppRegistration />
                        <span className="ms-2">New Registration </span>
                      </Link>

                      {/* hide APS on Boarding */}

                      {/* <Link
                                                to="aeps-OnBoarded"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <FaMoneyBillTrendUp />
                                                <span className="ms-2">Aeps Onbording</span>
                                            </Link> */}
                      {/* <Link
                                                to="certificate"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <SiIledefrancemobilites />
                                                <span className="ms-2">Certificate</span>
                                            </Link> */}

                      {/* <Link
                                                to="setting/user-management"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <SiIledefrancemobilites />
                                                <span className="ms-2">Staff Management</span>
                                            </Link> */}
                      {/* <Link
                                                to="#"
                                                className="dropdown-item ai-icon dropdown-item-set-2"
                                                onClick={profileOf}
                                            >
                                                <SiIledefrancemobilites />
                                                <span className="ms-2">Markup</span>

                                                <ul>
                                                    <li><Link to="markup-discount/flight-markup">Flight Markup</Link></li>
                                                    <li><Link to="markup-discount/hotel-markup">Hotel Markup</Link></li>
                                                    <li><Link to="markup-discount/bus-markup">Bus Markup</Link></li>
                                                </ul>
                                            </Link> */}
                      {/* <Link
                                                to="bc-authorization"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <SiIledefrancemobilites />
                                                <span className="ms-2">BC Authorization Letter</span>
                                            </Link>
                                            <Link
                                                to="#"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <SiIledefrancemobilites />
                                                <span className="ms-2">Railway Certificate</span>
                                            </Link>
                                            <Link
                                                to="TDS-Certificate"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <SiIledefrancemobilites />
                                                <span className="ms-2">TDS Certificate</span>
                                            </Link>
                                            <Link
                                                to="id-card"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <SiIledefrancemobilites />
                                                <span className="ms-2">ID Card</span>
                                            </Link>
                                            <Link
                                                to="commission"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <SiIledefrancemobilites />
                                                <span className="ms-2">Commission Earned</span>
                                            </Link>
                                            <Link
                                                to="balance"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <SiIledefrancemobilites />
                                                <span className="ms-2">Balance</span>
                                            </Link>
                                            <Link
                                                to="status"
                                                className="dropdown-item ai-icon "
                                                onClick={profileOf}
                                            >
                                                <SiIledefrancemobilites />
                                                <span className="ms-2">Status</span>
                                            </Link> */}
                    </div>
                    <div className="card-footer px-0 py-2">
                      {/* <a href="javascript:void(0);" className="dropdown-item ai-icon ">
                                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.8066 7.62355L20.1842 6.54346C19.6576 5.62954 18.4907 5.31426 17.5755 5.83866V5.83866C17.1399 6.09528 16.6201 6.16809 16.1307 6.04103C15.6413 5.91396 15.2226 5.59746 14.9668 5.16131C14.8023 4.88409 14.7139 4.56833 14.7105 4.24598V4.24598C14.7254 3.72916 14.5304 3.22834 14.17 2.85761C13.8096 2.48688 13.3145 2.2778 12.7975 2.27802H11.5435C11.0369 2.27801 10.5513 2.47985 10.194 2.83888C9.83666 3.19791 9.63714 3.68453 9.63958 4.19106V4.19106C9.62457 5.23686 8.77245 6.07675 7.72654 6.07664C7.40418 6.07329 7.08843 5.98488 6.8112 5.82035V5.82035C5.89603 5.29595 4.72908 5.61123 4.20251 6.52516L3.53432 7.62355C3.00838 8.53633 3.31937 9.70255 4.22997 10.2322V10.2322C4.82187 10.574 5.1865 11.2055 5.1865 11.889C5.1865 12.5725 4.82187 13.204 4.22997 13.5457V13.5457C3.32053 14.0719 3.0092 15.2353 3.53432 16.1453V16.1453L4.16589 17.2345C4.41262 17.6797 4.82657 18.0082 5.31616 18.1474C5.80575 18.2865 6.33061 18.2248 6.77459 17.976V17.976C7.21105 17.7213 7.73116 17.6515 8.21931 17.7821C8.70746 17.9128 9.12321 18.233 9.37413 18.6716C9.53867 18.9488 9.62708 19.2646 9.63043 19.5869V19.5869C9.63043 20.6435 10.4869 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9088 18.6 15.2681 18.2407C15.6274 17.8814 16.1154 17.6806 16.6236 17.6831C16.9451 17.6917 17.2596 17.7797 17.5389 17.9393V17.9393C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8066 16.1453C21.0617 15.7074 21.1317 15.1859 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6717 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8872 19.1602 11.3658 19.4153 10.9279C19.5812 10.6383 19.8213 10.3981 20.111 10.2322V10.2322C21.0161 9.70283 21.3264 8.54343 20.8066 7.63271V7.63271V7.62355Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <circle cx="12.175" cy="11.889" r="2.63616" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <span className="ms-2">Settings </span>
                                                        </a> */}
                      <div
                        // href="#"
                        className=""
                        onClick={logOut}
                        // onClick={handleLogout}
                        style={{ cursor: "pointer", padding: "2px 25px" }}
                      >
                        <svg
                          className="profle-logout"
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          style={{ cursor: "pointer" }}
                          fill="none"
                          stroke="#ff7979"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                          <polyline points="16 17 21 12 16 7" />
                          <line x1={21} y1={12} x2={9} y2={12} />
                        </svg>
                        <span className="ms-2 text-danger">Logout </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="RightActions">
              {/* Notifications Start */}
              <div className="NotificationsMain dropdown">
                {/* <IoIosNotifications /> */}
                <div className="px-2" onClick={handleShow}>
                  <span className="notification">
                    <span className="pulse">
                      <div className="circle pulse green">{adminCount}</div>
                    </span>
                    <PiBellSimpleBold />
                  </span>
                </div>
              </div>
              {/* Notifications End */}
            </div>
          </div>
        </div>
        <input
          type="hidden"
          id="das_hidgetrechargevalues_url"
          defaultValue="https://m.masterpay.pro/Retailer/getRechargeValues"
          autoComplete="off"
        />
      </header>

      {["end"].map((placement, idx) => (
        <NotificationSide
          key={idx}
          placement={placement}
          tokenNoti={tokenNoti}
          name={placement}
          handleClose={handleClose}
          show={show}
          NotificationData={NotificationData}
        />
      ))}
    </>
  );
}
export default AdminHeader;
