import React, { useEffect, useState } from "react";
import Breadcrumb from "../../shared/breadcrumb/Breadcrumb";
import AboutStory from "./about-story/AboutStory";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { base_url } from "../../server";

function About() {
  const [data, setData] = useState();
  const baseUrl = base_url();
  const aboutData = async () => {
    try {
      const res = await axios.get(`${baseUrl}adminWeb_footer/get`);
      setData(res.data);
    } catch (error) {
      console.log("server-error");
    }
  };
  useEffect(() => {
    aboutData();
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <>
      <Breadcrumb title="About Us" t={t} />
      <main className="main about">
        <AboutStory data={data} t={t} />
      </main>
    </>
  );
}

export default About;
