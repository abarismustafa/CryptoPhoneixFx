import { useState } from "react";
import React, { createContext, useContext, useEffect } from "react";
import { Provider } from "react-redux";
import { productItemHome } from "../../pages/home";
import { productData } from "../../pages/products/mockData";

import { store } from "../store";
import Banner from "./banner/Banner";


import axios from "axios";
import { base_url } from "../../server";

import { Link } from "react-router-dom";
import ProvideService from "./provide-service/ProvideService";
import BriefCompany from "./brief-company/BriefCompany";
import Experience from "./experience/Experience";
import Package from "./package/Package";
import Innovative from "./innovative/Innovative";
import Investors from "./investors/Investors";
function Home() {
  const productData = useContext(productItemHome);
  const baseUrl = base_url();
  const [data, setData] = useState(null);
  const getata = async () => {
    try {
      const res = await axios.get(`${baseUrl}category/filter/categ`, {
        withCredentials: true,
      });
      setData(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getata();
  }, []);
  return (
    <>
      <Banner />
      <ProvideService />
      <BriefCompany />
      <Experience />
      <Package />
      <Innovative />
      <Investors />
      
      {/* <TreatmentPrograms /> */}
      {/* <ChooseUs /> */}
      {/* <TeamExport /> */}
      {/* <Executed /> */}
      {/* <Transaction /> */}
      {/* <ProfitCalculator /> */}
      {/* <Recovery /> */}
      {/* <CustomerView /> */}
      {/* <ServiceList /> */}
      {/* <RealStory /> */}
      {/* <ProductsCategory />  */}
      {/* <FeaturedProducts /> */}
      {/* {data &&
        data?.slice(0, 3).map((item, i) => {
          return <CatagProduct key={i} item={item} />;
        })} */}
      {/* <Products productData={productData} /> */}
      {/* <SellCounter /> */}
      {/* <PopularProduct />
      <GetApp /> */}
      {/* <TrendingProducts /> */}
      {/* <TodayDeals /> */}
      {/* <section className="sellerCategorySec d-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <CategoriesItems />
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="brandsSec p-30">
        <div className="container">
          <div className="brandsHeader">
            <div className="fisherman-content dark">
              <h4>Trusted by 20,000+</h4>
              <h3>Marketing Departments.</h3>
            </div>
          </div>
          <div className="brandsItem">
            <ul>
              <li>
                <Link to={"/"}>
                  <img src={etg} alt="Brand" title="Brand" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={falcon} alt="Brand" title="Brand" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={kynoch} alt="Brand" title="Brand" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={oemff} alt="Brand" title="Brand" />
                </Link>
              </li>

              <li>
                <Link to={"/"}>
                  <img src={artboard} alt="Brand" title="Brand" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={bayer} alt="Brand" title="Brand" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      {/* <BestSeller /> */}
      {/* <Network />
      <AddingShow /> */}
      {/* <HandicraftImage />
        <Challenge /> */}
      {/* <Brands /> */}
    </>
  );
}

export default Home;
