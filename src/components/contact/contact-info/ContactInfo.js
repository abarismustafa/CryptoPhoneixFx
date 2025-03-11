import React from "react";

function ContactInfo({ t }) {
  return (
    <>
      <div className="contactInfo">
        <div className="fisherman-content">
          <h4>Get in touch</h4>
          <h3 className="ls-n-25 m-b-1">{t("Contact Info")}</h3>
          <p>{t("conuse")}</p>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
