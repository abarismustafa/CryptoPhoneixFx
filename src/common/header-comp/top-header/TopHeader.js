import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { GrFacebookOption } from "react-icons/gr";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { TbBrandWhatsapp, TbJewishStarFilled } from "react-icons/tb";
import { FaBabyCarriage, FaShippingFast, FaUser } from "react-icons/fa";
import "./TopHeader.css";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { MdOutlineArrowDropDown, MdSell } from "react-icons/md";
import { BiLogInCircle, BiUser } from "react-icons/bi";
import { SiAdobecreativecloud } from "react-icons/si";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { isMobile } from "react-device-detect";
import {
  setCartLeng,
  setCartLengLogout,
  setUpdatedProductsblack,
  setWishCalc,
  useChangeCurrencyMutation,
  useChangeLanguageMutation,
  useGetCurrencyQuery,
  useGetLanguageQuery,
  useGetUserDetailQuery,
  usePostCartOfflineMutation,
} from "../../../components/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearUpdatedProduct } from "../../../components/products/productSlice";
import img from "../../../assets/img/client/2.jpg";
import { BsBuildingAdd } from "react-icons/bs";
import { CgTrack } from "react-icons/cg";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { GiNewspaper, GiWallet } from "react-icons/gi";
import axios from "axios";
import { base_url } from "../../../server";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Button } from "react-bootstrap";
function TopHeader({ state, changeLange }) {
  // const isLogin = window.localStorage.getItem("isLogin");
  // const user_id = window.localStorage.getItem("user_id");
  // const userName = window.localStorage.getItem("userName");
  // const token = window.localStorage.getItem("token");
  // const profileImg = window.localStorage.getItem("profilePic");
  // const [user, setUser] = useState();
  // const navigate = useNavigate();

  // const [changeCurr, { isLoading: curLoad }] = useChangeCurrencyMutation();
  // const [changeLang, { isLoading: langLoad }] = useChangeLanguageMutation();

  // const { updatedProducts } = useSelector((state) => {
  //   return state.productList;
  // });
  // const { data: language } = useGetLanguageQuery();
  // const { data: currency } = useGetCurrencyQuery();
  // const [country, setCountry] = useState();
  // const [selectCountry, setSeleDefCount] = useState();
  // const [defLanguage, setdefLang] = useState();
  // const [countryPut, setCountryPut] = useState();
  // const dispatch = useDispatch();

  // const logout = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}auth/logout`, {
  //       withCredentials: true,
  //     });
  //   } catch (error) {}
  //   window.localStorage.setItem("isLogin", false);
  //   window.localStorage.setItem("user_id", "");
  //   window.localStorage.setItem("token", "");
  //   window.localStorage.setItem("userName", "");
  //   window.localStorage.setItem("profilePic", false);
  //   dispatch(setWishCalc(0));
  //   dispatch(setCartLengLogout());
  //   dispatch(setUpdatedProductsblack());
  //   navigate("/login");
  // };

  // const { data, isSuccess } = useGetUserDetailQuery(token);
  // const baseUrl = base_url();
  // const getCountryData = async () => {
  //   try {
  //     const [countryRes, settingsRes] = await Promise.all([
  //       axios.get(`${baseUrl}country`),
  //       axios.get(`${baseUrl}settings/v1/country`),
  //     ]);
  //     setCountry(countryRes.data);
  //     setSeleDefCount(settingsRes.data.id);
  //     window.localStorage.setItem("countryCode", settingsRes?.data?.code);
  //   } catch (error) {
  //     console.error("Error fetching country data:", error);
  //     // Handle error appropriately, e.g., show a user-friendly message
  //   }
  // };

  // const defaLang = async () => {
  //   try {
  //     const defLanRes = await axios.get(`${baseUrl}settings/v1/language`);
  //     window.localStorage.setItem("languageCode", defLanRes?.data?.code);
  //     setdefLang(defLanRes.data.id);
  //   } catch (error) {
  //     console.error("Error fetching default language:", error);
  //     // Handle error appropriately, e.g., show a user-friendly message
  //   }
  // };

  // useEffect(() => {
  //   getCountryData();
  //   defaLang();
  //   getData2();
  // }, []);
  // useEffect(() => {
  //   setUser(data);
  //   const va = window.localStorage.getItem("langs");
  //   setdefLang(va);
  // }, [data]);

  // const onchengeHandle = (e) => {
  //   if (e.target.id === "languId") {
  //     const obj = { userid: user_id, language: e.target.value };

  //     changeLang(obj);
  //   } else {
  //     const obj2 = { userid: user_id, currency: e.target.value };

  //     changeCurr(obj2);
  //   }
  // };
  // var settings = {
  //   dots: false,
  //   infinite: false,
  //   autoplay: true,
  //   arrows: false,
  //   speed: 100,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  // const putData = async (id) => {
  //   const res3 = await axios.put(
  //     `${baseUrl}settings/v1/change/country`,
  //     { id: id },
  //     { withCredentials: true }
  //   );
  //   window.localStorage.setItem("countryCode", res3?.data?.countryCode);

  //   setCountryPut(res3.data);
  //   window.location.reload();
  // };
  // const handleCountry = (e) => {
  //   putData(e.target.value);
  // };
  const { t, i18n } = useTranslation();
  // const putLangData = async (id) => {
  //   try {
  //     const res4 = await axios.put(`${baseUrl}settings/v1/change/language`, {
  //       id: id,
  //     });

  //     window.localStorage.setItem("languageCode", res4?.data?.languageCode);
  //     setCountryPut(res4.data);
  //     window.location.reload();
  //   } catch (error) {
  //     console.error("Error updating language data:", error);
  //     // Handle error appropriately, e.g., show a user-friendly message
  //   }
  // };

  // const handleLanguage = (id) => {
  //   if (id == "65111f1f78085e4cc5cce8ff") {
  //     i18n.changeLanguage("ten");
  //     window.localStorage.setItem("preferredLanguage", "ten");
  //     putLangData(id);
  //   } else {
  //     i18n.changeLanguage("de");
  //     window.localStorage.setItem("preferredLanguage", "de");
  //     putLangData(id);
  //   }
  // };
  // const [valcur, setvalcur] = useState(null);

  // const getData2 = async () => {
  //   const res = await axios.get(`${baseUrl}language`);
  //   setvalcur(res.data);
  // };
  return (
    <>
      <div className="topHeaderSec" id="topHead">
        <div className="container">
          <div className="topHeaderInfo">
            <div className="rightList">
              {/* <div className="miscel">
                {window.localStorage.getItem("preferredLanguage") == "de" ? (
                  <Button
                    onClick={() => {
                      handleLanguage("65111f1f78085e4cc5cce8ff");
                    }}
                    variant="warning"
                  >
                    English
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      handleLanguage("65111f5278085e4cc5cce904");
                    }}
                    variant="warning"
                  >
                    عربي
                  </Button>
                )}
              </div> */}

              {/* {isMobile && (
                <div>
                  <p style={{ color: "#fff", fontSize: "10px" }}>
                    🚚 {t("MobileProductsdd")}
                  </p>
                </div>
              )} */}
              <div className="miscel">
                <div className="optionSelect">
                  <div className="lang">
                    {/* <select
                      name="language"
                      id="languId"
                      value={defLanguage}
                      onChange={handleLanguage}
                    >

                      {valcur &&
                        valcur.map((item) => {
                          return (
                            <option key={item._id} value={item._id} className="">
                              {item.name}
                            </option>
                          );
                        })}


                    </select> */}
                    {/* <button type="button" onClick={() => {
                      // changeLange('en'),
                      handleLanguage('65111f1f78085e4cc5cce8ff')
                    }}>English</button>
                    <button type="button" onClick={changeLange('de')}>Hindi</button> */}
                  </div>
                  {/* <div className="rupees">
                    <select
                      defaultValue={"DEFAULT"}
                      name="currency"
                      id="currId"
                      className=""
                      onChange={onchengeHandle}
                    >
                      <option value="DEFAULT">
                        
                        {data?.getaUser?.currency?.name
                          ? data?.getaUser?.currency?.name
                          : "  QAR"}
                      </option>
                      {currency &&
                        currency.map((item) => {
                          if (item.name === data?.getaUser?.currency?.name) {
                            return;
                          } else {
                            return (
                              <option key={item._id} value={item._id}>
                                {item.name}
                                INR
                              </option>
                            );
                          }
                        })}
                    </select>
                  </div> */}
                  {/* <select
                    className="countrySelect form-select d-none"
                    aria-label="Default select example"
                    value={selectCountry}
                    onChange={handleCountry}
                    disabled
                  >
                    {country &&
                      country.map((item) => {
                        if (item?.name === data?.getaUser?.country?.name) {
                          return;
                        } else {
                          return (
                            <option key={item._id} value={item._id}>
                              {item.name}
                            </option>
                          );
                        }
                      })}
                  </select> */}
                </div>

                <div className="socialMedia">
                  <ul>
                    <li>
                      <Link to="/login-area">{t("Login")}</Link>
                    </li>
                    <li>
                      <Link to="/Signup">{t("Signup")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
