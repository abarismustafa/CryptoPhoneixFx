import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import { BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import footerlogo from "../../assets/img/logo.png";

import visa from "../../assets/img/rki/payment/visa.svg";
import master from "../../assets/img/rki/payment/master.svg";
import american from "../../assets/img/rki/payment/american.svg";
import footer_banner from "../../assets/img/footer-bg.jpg";

import "./Footer.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { base_url } from "../../server";

function Footer() {
  const { pathname } = useLocation();
  const [state, setState] = useState({
    about_company: "",
    office_address: "",
    location: "",
    phoneNo: "+91-8851746286 ",
    email: "#",
  });
  const baseUrl = base_url();
  const getData = async () => {
    const res = await axios.get(`${baseUrl}adminWeb_footer/get`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    });
    setState({
      about_company: res.data.about_company,
      office_address: res.data.office_address,
      location: res.data.contact_info.location,
      phoneNo: res.data.contact_info.phoneNo,
      email: res.data.contact_info.email,
    });
    window.localStorage.setItem("callNum", res.data.contact_info.phoneNo);
  };

  const [allCategories, setallCategories] = useState(null);

  const getData2 = async () => {
    try {
      const res = await axios.get(`${baseUrl}category/public`, {
        withCredentials: true,
      });
      setallCategories(res.data);
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // getData();
    getData2();
  }, []);
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState();
  const senDatas = async () => {
    const obj = { email: email };

    try {
      const res = await axios.post(`${baseUrl}newsletter/add_newsletter`, obj);
      setEmail("");
      alert("Subscribe Successfully");
    } catch (error) {
      alert("Not Subscribe");
    }
  };
  const { t, i18n } = useTranslation();
  return (
    <>
      {/* Start Footer Section */}
      <footer
        className="footer-section "
        style={{
          backgroundImage: `url(${footer_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3 className="mb-3">{t("Quick-Links")}</h3>
                  <ul className="footer-quick-links">
                    <li>
                      <Link to="/">{t("Home")}</Link>
                    </li>
                    <li>
                      <Link to="/partnership">{t("Partnership")}</Link>
                    </li>
                  </ul>
                </div>

                {/* <p>{state?.office_address}</p> */}

                <ul className="footer-social">
                  <li>
                    <a href="#" className="facebook" target="_blank">
                      <FaFacebookF />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="whatsapp" target="_blank">
                      <BsWhatsapp />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="instagram" target="_blank">
                      <BsInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3 className="mb-3">{t("Company")}</h3>
                  <ul className="footer-quick-links">
                    <li>
                      <Link to="/arbitrage">{t("What is arbitrage?")}</Link>
                    </li>
                    <li>
                      <Link to="/Signup">{t("Open Account")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3 className="mb-3">{t("Support")}</h3>
                  <ul className="footer-quick-links">
                    <li>
                      <Link to="/login-area">{t("Login")}</Link>
                    </li>
                    <li>
                      <Link to="/Signup">{t("Open Account")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>{t("Contact info")}</h3>
                </div>
                <div className="footer-info-contact">
                  <div className="topIcon">
                    <FaMapMarkerAlt />
                    <span>
                      <h3>{t("Location")}</h3>
                      {/* {state?.location} */}
                      {t(`loc-1`)}
                    </span>
                  </div>
                </div>

                <div className="numberLink">
                  <div className="footer-info-contact">
                    <div className="topIcon">
                      <MdCall />
                      <span>
                        <h3>{t("Call Us")}</h3>
                        {/* <a href={`tel:${state?.phoneNo}`}> {state?.phoneNo}</a> */}
                        <a href={`tel:${state?.phoneNo}`}> {state?.phoneNo}</a>
                      </span>
                    </div>
                  </div>

                  <div className="footer-info-contact">
                    <div className="topIcon">
                      <HiMail />
                      <span>
                        <h3>{t("Email Us")}</h3>
                        {/* <a href={`mailto:${state?.email}`}> */}
                        <a href={`mailto:info@infinitetrading.com`}>
                          <span className="__cf_email__">
                            {/* {state?.email}  */}
                            info@infinitetrading.com
                          </span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3 className="mb-3">{t("After Login")}</h3>
                  <ul className="footer-quick-links sellerLists">
                    <li>
                      <Link to="/user/dashboard">{t("Dashboard")}</Link>
                    </li>
                    <li>
                      <Link to="/user/withdraw">{t("Withdraw")}</Link>
                    </li>
                    <li>
                      <Link to="/user/deposit">{t("Deposit")}</Link>
                    </li>
                    <li>
                      <Link to="/user/packages">{t("Package")}</Link>
                    </li>
                    <li>
                      <Link to="/user/staking">{t("Staking")}</Link>
                    </li>
                    <li>
                      <Link to="/user/pool">{t("Pool")}</Link>
                    </li>
                    <li>
                      <Link to="/user/schedule-invest">
                        {t("Schedule Invest")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/user/transfer-balance">
                        {t("Transfer Balance")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/user/transactions">{t("Transactions")}</Link>
                    </li>
                    <li>
                      <Link to="/user/promotional-banners">
                        {t("Promotional Banners")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/user/profile-setting">
                        {t("Profile Setting")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/user/change-password">
                        {t("Change Password")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/user/ranking">{t("Ranking")}</Link>
                    </li>
                    <li>
                      <Link to="/user/two-factor-authentication">
                        {t("2FA Security")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/user/support-ticket">
                        {t("Support Ticket")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-none">
              <div className="single-footer-widget">
                {/* <div className="footer-heading">
                  <h3>Newsletter</h3>
                </div>
                <p>
                  Sign up & get shopping vouchers & stay updated about latest
                  styles and exclusive promotions
                </p> */}

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="footer-heading">
                    <h3 className="mb-3">{t("Newsletter signup")}</h3>
                    <p>{t("letter")}</p>
                  </div>
                </div>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    required
                    autoComplete="off"
                  />
                  <button type="button" onClick={senDatas}>
                    {/* <i className="ri-arrow-right-up-fill"></i> */}
                    Subscribe
                  </button>
                  <div id="validator-newsletter" className="form-result"></div>
                </form>

                <div className="paymentOption">
                  <ul>
                    <li>
                      <img src={visa} alt="Visa" className="img-fluid" />
                    </li>
                    <li>
                      <img src={master} alt="Master" className="img-fluid" />
                    </li>
                    <li>
                      <img
                        src={american}
                        alt="American"
                        className="img-fluid"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <div className="copyright-left">
                <p>
                  Copyright @ {currentYear} PhoenixFx AiWorld. All rights
                  reserved. | Powered By:{" "}
                  <a href="https://www.abarissoftech.com/" target="_blank">
                    Abaris Softech{" "}
                  </a>
                </p>
              </div>

              {/* <div className="copyright-right">
                <ul>
                  <li>
                    <Link to="/terms-of-use">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer Section */}
    </>
  );
}

export default Footer;
