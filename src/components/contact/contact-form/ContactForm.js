import React, { useState } from "react";
import { useContactMessageMutation } from "../../products/productSlice";

function ContactForm({ t }) {
  // const [sendDataContact, { isLoading }] = useContactMessageMutation();
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  //   phone: "",
  // });

  // const chengehandle = (e) => {
  //   const clone = { ...state };
  //   clone[e.target.name] = e.target.value;
  //   setState(clone);
  // };

  // const sendData = () => {
  //   sendDataContact(state);
  //   setState({
  //     name: "",
  //     email: "",
  //     message: "",
  //     phone: "",
  //   });
  // };
  return (
    <>
      <div className="contactForm">
        <div className="fisherman-content mb-2">
          <h4 className="bg-primary">Touch with us</h4>
          <h3 className="text-white">{t("Send Us a Message")}</h3>
        </div>
        <form className="mb-0" action="#">
          <div className="form-group mb-3">
            <label className="mb-1 text-white" htmlFor="contact-name">
              {t("Your Name")}
            </label>
            <input
              type="text"
              className="form-control"
              id="contact-name"
              name="name"
              required
              placeholder={t("Your Name")}
            />
          </div>
          <div className="form-group mb-3">
            <label className="mb-1 text-white" htmlFor="contact-email">
              {t("Your E-mail")}
            </label>
            <input
              type="email"
              className="form-control"
              id="contact-email"
              name="email"
              required
              placeholder={t("Your E-mail")}
            />
          </div>
          <div className="form-group mb-3">
            <label className="mb-1 text-white" htmlFor="contact-email">
              {t("Phone Number")}
            </label>
            <input
              type="number"
              className="form-control"
              id="contact-email"
              name="phone"
              required
              placeholder={t("Phone Number")}
            />
          </div>
          <div className="form-group mb-3">
            <label className="mb-1 text-white" htmlFor="contact-message">
              {t("Your Message")}
            </label>
            <textarea
              cols={30}
              rows={4}
              id="contact-message"
              className="form-control"
              name="message"
              required
              defaultValue={""}
              placeholder={t("Your Message")}
            />
          </div>
          <div className="form-footer mb-0">
            <button type="button" className="commonButton bg-primary">
              {t("Send Message")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
