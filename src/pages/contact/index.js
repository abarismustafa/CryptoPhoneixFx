import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Contact from "../../components/contact/Contact";

function ContactPage({ setShow }) {
  return (
    <>
      <Helmet>
        <title>Contact Us | PhoenixFx AiWorld</title>
        <meta name="keyword" content="PhoenixFx AiWorld " />
        <meta name="description" content="PhoenixFx AiWorld " />
      </Helmet>
      <Contact />
    </>
  );
}

export default ContactPage;
