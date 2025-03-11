import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineCloseCircle, AiOutlineHeart } from "react-icons/ai";
import { BiSearch, BiUser } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { TbUserCircle } from "react-icons/tb";

import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/download.png";
import {
  getProducts,
  setCartLeng,
  setObjectVal,
  setUpdatedProducts,
  setWishCalc,
  useGetCartQuery,
} from "../../../components/products/productSlice";
import { base_url } from "../../../server";
import { getCartToken, getCouponToken } from "../../../Utils-m/localStorage";
import MobileMenu from "../menu/MobileMenu";
import "./SearchBox.css";
import { MdMyLocation } from "react-icons/md";
import Menus from "../menu/Menus";

function SearchBox({ val }) {
  const { t, i18n } = useTranslation();
  // const userid = window.localStorage.getItem("user_id");
  // const isLogin = window.localStorage.getItem("isLogin");
  // const token = window.localStorage.getItem("token");
  // const nums = window.localStorage.getItem("callNum");
  // const [click, setClick] = useState(false);

  // const { data, isSuccess, isFetching } = useGetCartQuery(token);
  // // const { data: categoryData } = useGetMenuListQuery();

  // const location = useLocation();

  // const [categoryData, setcategoryData] = useState(null);
  // const baseUrl = base_url();
  // const getData3 = async () => {
  //   const res = await axios.get(`${baseUrl}category/public`, {
  //     withCredentials: true,
  //   });
  //   setcategoryData(res.data);
  // };

  // useEffect(() => {
  //   getData3();
  // }, []);

  // useEffect(() => {
  //   setShowMenu(false);
  //   document.body.style.overflow = "unset";
  // }, [location.pathname]);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // // const { data: value } = useGetWishListQuery(userid);
  // const value = [];
  // const [trendSearch, setTrendSearch] = useState(null);
  const inputRef = useRef();
  const handleRef = useRef();
  // const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  // const [valuewish, setValuewish] = useState();

  // const getDatas = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}user/wishlist`, {
  //       withCredentials: true,
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     dispatch(setWishCalc(res.data.length));
  //   } catch (error) {}
  //   if (!token) {
  //     return;
  //   }
  //   try {
  //     const res2 = await axios.get(
  //       `${baseUrl}cart?products=${getCartToken() || ""}&coupon=${
  //         getCouponToken() || ""
  //       }`,
  //       {
  //         headers: {
  //           "Content-type": "application/json; charset=UTF-8",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     dispatch(setCartLeng(res2.data?.cart?.products.length));
  //     // window.localStorage.setItem("cartItem", res2.data?.cart);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getDatas();
  // }, []);

  const [state, setState] = useState();

  const handleShow = () => {
    setShow(!show);
  };
  const handleShow2 = () => {
    setShow(false);
  };

  // const { updatedProducts, products, cartLengh, WishLengh } = useSelector(
  //   (item) => {
  //     return item.productList;
  //   }
  // );
  // useEffect(() => {
  //   if (data) {
  //     dispatch(getProducts(data.cart.products));
  //     dispatch(setObjectVal(data));
  //     if (isLogin === "true") {
  //       dispatch(setUpdatedProducts(data.cart));
  //     }
  //     // dispatch(setCartLeng(data.cart.products.length));
  //   }
  // }, [data]);

  // const handleClick = async () => {
  //   let currentVal = inputRef.current.value.toLowerCase();
  //   const res = await axios.get(
  //     `${baseUrl}product/search/${inputRef.current.value}`,
  //     { withCredentials: true }
  //   );
  //   navigate(`/products/${currentVal}`);
  //   currentVal = "";
  //   setShow(false);
  //   getData();
  //   inputRef.current.value = "";
  // };

  // const getData = async () => {
  //   const resData = await axios.get(`${baseUrl}product/trendingSearches`);
  //   setTrendSearch(resData?.data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  // useEffect(() => {
  //   if (!handleRef.current) {
  //     return;
  //   }
  //   let handler = (e) => {
  //     if (show === true) {
  //       if (!handleRef?.current?.contains(e.target)) {
  //         setShow(false);
  //       }
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return function () {};
  // }, []);

  // useEffect(() => {
  //   if (isLogin === "true") {
  //     setState(data);
  //   } else {
  //     setState([]);
  //   }
  // }, [isFetching]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // handleClick();
    }
  };
  const onSearch = (onSearch) => {
    navigate(`/products/${onSearch}`);
    setShow(false);
  };

  // const [data2, setData2] = useState();
  // const changeApiData = async (e) => {
  //   if (e.target.value?.length > 2) {
  //     try {
  //       const resData = await axios.get(
  //         `${baseUrl}product/search/${e.target.value}`
  //       );
  //       console.log(
  //         "resData.data?.getSearchedProduct",
  //         resData.data?.getSearchedProduct
  //       );
  //       setData2(resData.data?.getSearchedProduct);
  //     } catch (error) {}
  //   }
  // };
  // const changeROutes = (item) => {
  //   navigate(`/product/${item.uid}/${item.slug}`);
  //   setShow(false);
  //   setData2([]);
  // };

  const hideShowMenu = () => {
    if (showMenu) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
    setShowMenu(!showMenu);
  };
  return (
    <>
      <section
        className={`searchSection`}
        style={showMenu ? { height: "100vh" } : { height: "auto" }}
      >
        <div className={`d-flex mobileMenu ${showMenu ? "open" : ""}`}>
          <MobileMenu />
          <AiOutlineCloseCircle
            className="closeBtnDrop"
            onClick={hideShowMenu}
          />
        </div>
        <div className="container">
          <div className="searchItem">
            <div className="logo mamas">
              <Link to="/">
                <img src={logo} alt="logo" onClick={handleShow2} />
                <h4>PhoenixFx AiWorld</h4>
              </Link>

              <div className="bar">
                <button
                  className="navbar-toggler"
                  type="button"
                  // data-bs-toggle="collapse"
                  // data-bs-target="#navbarSupportedContent"
                  // aria-controls="navbarSupportedContent"
                  // aria-expanded="false"
                  // aria-label="Toggle navigation"
                >
                  <FaBars onClick={hideShowMenu} />
                </button>
              </div>
              {/* <div className="searchLocationBox d-none">
                <div className="searchLocation">
                  <input
                    type="text"
                    placeholder="Search Location"
                    className="form-control"
                  />
                  <button
                    type="button"
                    className="btn bgBlue text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <MdMyLocation />
                    Select Delivery Location
                  </button>
                </div>
              </div> */}
            </div>

            <div className="rightSearch">
              <nav className="navbar navbarItem navbar-expand-md">
                <Menus />
              </nav>
              <div className="searchSec search">
                <div className="searchInf">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("Search...")}
                    onClick={handleShow}
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    // onChange={changeApiData}
                  />
                  <div className="rightSearchInfo">
                    <div className="allCategory">
                      <select defaultValue="all category">
                        <option value="All Category">
                          {t("All Category")}
                        </option>
                        {/* {categoryData?.map((item) => {
                        return (
                          <option key={item?._id}>
                            <Link
                              to={`product/category/${item._id}/${item.slug}`}
                            >
                              {item?.name}
                            </Link>
                          </option>
                        );
                      })} */}
                      </select>
                    </div>
                    <div className="searchIcon">
                      <BiSearch />
                      {/* <BiSearch onClick={handleClick} /> */}
                      {/* <button type="button" ></button> */}
                    </div>
                  </div>
                </div>
                {/* {show && (
                  <div className="treandingSec" id="DropShow" ref={handleRef}>
                    <div className="trendingItem">
                      {data2?.length > 0 && (
                        <div className="mainnaed">
                          {data2 &&
                            data2?.map((item) => {
                              return (
                                <div
                                  className="mainViy"
                                  onClick={() => {
                                    changeROutes(item);
                                  }}
                                >
                                  <img
                                    src={
                                      item?.variations[0]?.mainImage_url?.url
                                    }
                                    style={{
                                      border: "1px solid gray",
                                      width: "80px",
                                      height: "80px",
                                    }}
                                  />
                                  <div>
                                    <h6>{item?.name}</h6>
                                    <h6 style={{ whiteSpace: "nowrap" }}>
                                      {item?.country?.code}{" "}
                                      {item?.prices?.sale_rate}
                                    </h6>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      )}

                      <h5 className="trendingTitle">Trending Search</h5>
                     <ul>
                        {trendSearch &&
                          trendSearch?.map((item, i) => {
                            return (
                              <li key={i}>
                                <Link
                                  to={`/products/${item.query}`}
                                  onClick={() => onSearch(item.query)}
                                >
                                  {" "}
                                  {item.query}
                                </Link>
                              </li>
                            );
                          })}
                      </ul> 
                      <AiOutlineCloseCircle
                        className="closeBtnDrop"
                        onClick={handleShow}
                      />
                    </div>
                     <div className="trendingItem">
                    <h5 className="trendingTitle">Discover more</h5>
                    <ul>
                      <li>
                        <Link to="/">INSECTICIDES</Link>
                      </li>
                      <li>
                        <Link to="/">FUNGICIDES</Link>
                      </li>
                      <li>
                        <Link to="/">HERBICIDES</Link>
                      </li>
                      <li>
                        <Link to="/">BACTERICIDES</Link>
                      </li>
                      <li>
                        <Link to="/">ACARICIDES/MITICIDES</Link>
                      </li>
                    </ul>
                    <AiOutlineCloseCircle className="closeBtnDrop" onClick={handleShow} />
                  </div> 
                  </div>
                )} */}
              </div>

              <div className="searchIcons d-none">
                {/*  <div className="optionSelect">
                <div className="lang1">
                  <select name="language" id="languId" className="form-select">
                    <option value="63fb926bba4c51937001628a">English</option>
                    <option value="DEFAULT" selected>
                      Hindi
                    </option>
                  </select>
                </div>
                <div className="rupees1">
                  <select name="currency" id="currId" className="form-select">
                    <option value="DEFAULT" selected>
                      {" "}
                      QAR{" "}
                    </option>
                  </select>
                </div>
              </div> */}

                {/* <div className="searchIconsItem">
                  <ul>
                    <li>
                      <Link to="/myAccount">
                        <TbUserCircle />
                      </Link>
                    </li>
                    <li className="countWish">
                      <Link to="/wishlist">
                        <AiOutlineHeart />
                        {WishLengh > 0 && (
                          <span className="count">{WishLengh}</span>
                        )}
                      </Link>
                    </li>
                    <li className="countParent">
                      <Link to="/cart">
                        <RiShoppingBasketLine />
                        {cartLengh > 0 && (
                          <span className="count">{cartLengh}</span>
                        )}
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBox;
