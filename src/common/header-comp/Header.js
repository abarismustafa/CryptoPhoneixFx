import React, { useEffect } from "react";
import TopHeader from "./top-header/TopHeader";
import SearchBox from "./search-box/SearchBox";
import { isMobile } from "react-device-detect";

import "./Header.css";
import Menus from "./menu/Menus";
import { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { base_url } from "../../server";
import LocationModal from "./search-box/location-modal/LocationModal";

function Header({ changeLang }) {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const baseUrl = base_url();
  const location = useLocation();

  const fixedHeader = () => {
    if (window.scrollY >= 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  window.addEventListener("scroll", fixedHeader);
  console.log("isSticky", isSticky);

  const [state, setState] = useState({
    front_top_message: "",
    icon: "",
  });

  const onMenuButtonClicked = () => {
    if (isMobile) {
      setShowMenu(!showMenu);
    }
  };

  return (
    <>
      {/* <button type="button" onClick={()=>{changeLang('en')}}>EEE</button>
                    <button type="button" onClick={()=>{changeLang('de')}}>ARR</button> */}
      <header className={`${isSticky
        ? "sticky active"
        : `sticky ${location.pathname === "/" ? "" : "diff"}`
        }`}>
        <TopHeader state={state} changeLange={changeLang} />
        <SearchBox val={state} showMenu={onMenuButtonClicked} />
        {!isMobile && (
          <div className="navbarArea">
            <div className="abaris-nav">
              <div className="container">
                <div className="menuCard">
                  <div className="allCategoryDrop">
                    <span>categories</span>
                    <i className="ri-menu-line"></i>

                    <div className="categoryList">
                      <ul>
                        <li>
                          <Link to="/products">Baby bottles</Link>
                        </li>
                        <li>
                          <Link to="/products">Breastfeeding Accessories</Link>
                        </li>
                        <li>
                          <Link to="/products">Bibs & Cloths</Link>
                        </li>
                        <li>
                          <Link to="/products">Teethers & Pacifiers</Link>
                        </li>
                        <li>
                          <Link to="/products">Feeding Essentials</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <LocationModal />
    </>
  );
}

export default Header;
