import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./Menus.css";
import { useGetMenuListQuery } from "../../../components/products/productSlice";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { base_url } from "../../../server";

function Menus() {
  const isLogin = window.localStorage.getItem("isLogin");
  // // const { data, isSuccess } = useGetMenuListQuery()
  // const { data: categoryData } = useGetMenuListQuery();

  // const [data, setdata] = useState(null);
  // const baseUrl = base_url();
  // const getData = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}category/filter`, {
  //       withCredentials: true,
  //     });
  //     setdata(res.data);
  //   } catch (error) {
  //     console.error("An error occurred while fetching data:", error);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  const { t } = useTranslation();

  return (
    <>
      <div
        className="collapse navbar-collapse mean-menu show"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav m-0 p-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              {t("Home")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              {t("About")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/arbitrage" className="nav-link">
              {t("What is Arbitrage?")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/partnership" className="nav-link">
              {t("Partnership")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
              <i className="bx bx-chevron-down"></i>
            </NavLink>
          </li>

          {isLogin === true && (
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Services
              </Link>
            </li>
          )}

          {/* <li className="dropdown categoryDropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </button>
            <ul className="dropdown-menu">
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
          {/* <li className="dropdown categoryDropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Top Currencies
            </button>
            <ul className="dropdown-menu">
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  US Dollar
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  Euro
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  British Pound
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  Australian Dollar
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  Canadian Dollar
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  Singapore Dollar
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown categoryDropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Currency Converter
            </button>
            <ul className="dropdown-menu">
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  USD to INR
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  EUR to INR
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  GBP to INR
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  AUD to INR
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  CAD to INR
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  SGD to INR
                </Link>
              </li>
            </ul>
          </li> */}

          {/* {data &&
            data.slice(0, 9).map((item, i) => {
              {
                console.log(item?.title);
              }
              return (
                <li className="nav-item perent">
                  <Link to={`product/category/${item?.title.uid}/${item?.title?.slug}`} className="nav-link">
                    {item?.title?.name}
                    <i className="bx bx-chevron-down"></i>
                  </Link>

                  {item?.Submenu?.length > 0 && (
                    <ul className={`dropdown-menu dropAgro ${i}`}>
                      <div className="row">
                        <div className="col-lg-3 width-100pr">
                          <div className="menuList" style={{ paddingTop: "0px" }}>
                            <ul>
                              {item.Submenu &&
                                item.Submenu.map((item) => {
                                  {
                                    console.log(item);
                                  }
                                  return (
                                    <li className="nav-item" key={item._id}>
                                      <Link to={`product/category/${item._id}`} className="nav-link sub_menu_Text">
                                        <FiChevronRight /> {item.name}
                                      </Link>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </ul>
                  )}
                </li>
              );
            })} */}

          
          
        </ul>
      </div>
    </>
  );
}

export default Menus;
