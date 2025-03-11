import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { useGetMenuListQuery } from "../../../components/products/productSlice";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { base_url } from "../../../server";

function MobileMenu() {
  const isLogin = JSON.parse(window?.localStorage?.getItem("isLogin"));

  // const { data: categoryData } = useGetMenuListQuery();

  // const [data, setData] = useState(null);
  // const [showSelectedSubMenu, setShowSelectedSubMenu] = useState({});
  // const baseUrl = base_url();

  // const getData = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}category/filter`, {
  //       withCredentials: true,
  //     });
  //     setData(res.data);
  //   } catch (error) {
  //     console.error("An error occurred while fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const { t } = useTranslation();

  // const openSubMenu = (name) => {
  //   setShowSelectedSubMenu((prev) => {
  //     const updatedState = {};
  //     Object.keys(prev).forEach((key) => {
  //       updatedState[key] = false;
  //     });

  //     updatedState[name] = !prev[name];
  //     return updatedState;
  //   });
  // };

  return (
    <div
      className="collapse navbar-collapse mean-menu show"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav m-0 p-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
            <i className="bx bx-chevron-down"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            {t("About Us")}
            <i className="bx bx-chevron-down"></i>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/arbitrage" className="nav-link">
            {t("What is Arbitrage?")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/partnership" className="nav-link">
            {t("Partnership")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact Us
            <i className="bx bx-chevron-down"></i>
          </Link>
        </li>

        {isLogin && (
          <li className="nav-item">
            <Link to="/" className="nav-link">
              {t("Services")}
            </Link>
          </li>
        )}

        {/* <li className="dropdown categoryDropdown">
          <button
            className="btn btn-secondary dropdown-toggle text-white fs-5"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </button>
          <ul className="dropdown-menu w-75">
            <li className="nav-item">
              <Link to="/exchange" className="nav-link">
                Exchange
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/launchpads" className="nav-link">
                Launchpads
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/staking" className="nav-link">
                {" "}
                Staking
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/swap" className="nav-link">
                Swap
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/p2p-trading" className="nav-link">
                P2P Trading
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/trading-profile" className="nav-link">
                Trading Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/markets" className="nav-link">
                Markets
              </Link>
            </li>
          </ul>
        </li> */}

        {/* {data &&
          data.map((item, i) => (
            <div className="add" key={i}>
              <li className="nav-item my-item">
                <Link
                  to="#"
                  className="nav-link"
                  onClick={() => openSubMenu(item.title.name)}
                >
                  {item?.title?.name}
                  <i className="bx bx-chevron-down"></i>
                </Link>
                {item?.Submenu?.length > 0 && (
                  <ul
                    className={`dropdown-menu dropAgro drop ${
                      showSelectedSubMenu[item.title.name] ? "active" : ""
                    } `}
                  >
                    <div className="row">
                      <div className="col-lg-3 width-100pr">
                        <div className="menuList" style={{ paddingTop: "0px" }}>
                          <ul>
                            {item.Submenu &&
                              item.Submenu.map((subItem) => (
                                <li className="nav-item" key={subItem._id}>
                                  <Link
                                    to={`product/category/${subItem._id}`}
                                    className="nav-link sub_menu_Text"
                                  >
                                    <FiChevronRight /> {subItem.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ul>
                )}
              </li>
              <p>{!showSelectedSubMenu[item.title.name] ? " + " : " - "} </p>
            </div>
          ))} */}

        
      </ul>
    </div>
  );
}

export default MobileMenu;
