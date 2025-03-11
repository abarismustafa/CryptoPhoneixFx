import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import banner1 from "../../../assets/img/banner/g7fx-social-header-image.jpg";

import "./Banner.css";
import { Link } from "react-router-dom";
import { useGetBannerQuery } from "./bannerSlice";
import axios from "axios";
import { bannerDB } from "../../../rki-data/banner";
import { isMobile } from "react-device-detect";
import { base_url } from "../../../server";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
const bannerData = bannerDB;
function Banner() {
  const [data, setData] = useState();
  const baseUrl = base_url();

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const getData = async () => {
    try {
      const res = await axios.get(`${baseUrl}banner/public`, {
        withCredentials: true,
      });
      setData(res.data);
    } catch (error) {
      console.log("Server Error BannerList");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="bannerSection d-none">
        <div className="container">
          <Slider {...settings}>
            {data &&
              data.map((item) => {
                return (
                  item?.image?.url && (
                    <Link to={item?.url || ""} key={item._id}>
                      <div
                        className="bannerItem"
                        // style={!isMobile ? { height: "500px" } : {}}
                      >
                        <img
                          src={item?.image.url}
                          // className="aspect-ratio-img"
                        />
                      </div>
                    </Link>
                  )
                );
              })}
          </Slider>
        </div>
      </section>

      <section className="bannerSection ">
        <div className="bannerContent">
          <img src={banner1} alt="PhoenixFx AiWorld" className="img-fluid" />
          <div className="bannerDem">
            <h4>Hey I'm PhoenixFx AiWorld</h4>
            <h2>Welcome to PhoenixFx AiWorld</h2>
            <p>
              Achieve Financial Freedom with PhoenixFx AiWorld
              Technology.
            </p>
            <Link className="commonButton dev" to={"/Signup"}>
              Open Account
            </Link>
          </div>
        </div>
        {/* <div className="bannerContent">
            <img src={banner2} alt="PhoenixFx AiWorld" className="img-fluid" />
            <div className="bannerDem">
              <h4>Hey I'm PhoenixFx AiWorld</h4>
              <h2>
                Provide Awesome Service
                <span className="d-block"> With Our Tools!</span>
              </h2>
              <ul>
                <li>
                  TRADING SOLUTIONS FOR ACTIVEDAY TRADERS ANDNEW ENTRANTS.
                </li>
                <li>
                  OURAIM IS TO HELP YOU GAIN CONFIDENCEIN ONLINEFOREX TRADING
                </li>
                <li>COMPETITIVE AND LOW PRICING FORORDINARY TRADERS.</li>
                <li>ALL TRADES ARE EXECUTED ON MT5 Platform</li>
              </ul>
              <Link className="commonButton dev" to={"/"}>
                Know More{" "}
                <span>
                  <MdKeyboardDoubleArrowRight />
                </span>
              </Link>
              <Link className="commonButton business" to={"/about"}>
                Business Plan Download{" "}
                <span>
                  <FaCloudDownloadAlt />
                </span>
              </Link>
            </div>
          </div>
          <div className="bannerContent">
            <img src={banner3} alt="PhoenixFx AiWorld" className="img-fluid" />
            <div className="bannerDem">
              <h4>Hey I'm PhoenixFx AiWorld</h4>
              <h2>
                How to Increase
                <span className="d-block"> Profit Margin!</span>
              </h2>
              <ul>
                <li>
                  TRADING SOLUTIONS FOR ACTIVEDAY TRADERS ANDNEW ENTRANTS.
                </li>
                <li>
                  OURAIM IS TO HELP YOU GAIN CONFIDENCEIN ONLINEFOREX TRADING
                </li>
                <li>COMPETITIVE AND LOW PRICING FORORDINARY TRADERS.</li>
                <li>ALL TRADES ARE EXECUTED ON MT5 Platform</li>
              </ul>
              <Link className="commonButton dev" to={"/about"}>
                Know More{" "}
                <span>
                  <MdKeyboardDoubleArrowRight />
                </span>
              </Link>
              <Link className="commonButton business" to={"/"}>
                Business Plan Download{" "}
                <span>
                  <FaCloudDownloadAlt />
                </span>
              </Link>
            </div>
          </div> */}
      </section>
    </>
  );
}

export default Banner;
