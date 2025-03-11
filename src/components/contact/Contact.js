import React from "react";
import Breadcrumb from "../../shared/breadcrumb/Breadcrumb";
import ContactAddress from "./contact-address/ContactAddress";
import ContactForm from "./contact-form/ContactForm";
import ContactInfo from "./contact-info/ContactInfo";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumb title="Contact" t={t} />
      <main className="main">
        <div className="contactFormSec p-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="container">
                  <ContactInfo t={t} />
                  <ContactAddress t={t} />
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="container">
                  <ContactForm t={t} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
