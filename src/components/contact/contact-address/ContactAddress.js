import React from "react";
import { FaAddressBook } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import banner from "../../../assets/img/banner/circular_img.png";

function ContactAddress({ t }) {
  return (
    <>
      <div className="connectSec pt-0">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="feature-box text-center">
              <div className="feature-box-content">
                <BsFillPhoneFill />
                <h4>{t("Phone Number")}</h4>
                <p>
                  <a href="tel:+918851746286">+918851746286</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="feature-box text-center">
              <div className="feature-box-content">
                <MdEmail />
                <h4>{t("E-mail Address")}</h4>

                <p>
                  <a href="mailto:PhoenixFxAiWorld.com">
                    info@phoenixFxAiWorld.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="feature-box text-center">
              <div className="feature-box-content">
                <FaAddressBook />
                <h4>{t("Address")}</h4>
                <p>
                  98B, II Floor, Numberdar Estate,Near Gurudwara, Bharat Nagar,
                  NFC, New Delhi-110025, INDIA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactAddress;
