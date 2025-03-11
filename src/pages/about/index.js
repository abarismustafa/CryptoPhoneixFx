import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import About from "../../components/about/About";

function AboutPage({ setShow }) {
  return (
    <>
      <Helmet>
        <title>About Us | PhoenixFx AiWorld</title>
        <meta name="keyword" content="PhoenixFx AiWorld " />
        <meta name="description" content="PhoenixFx AiWorld " />
      </Helmet>
      <About />
    </>
  );
}

export default AboutPage;
