import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../shared/breadcrumb/Breadcrumb";
import Partnership from "../../components/partnership/Partnership";

function PartnershipPage({ setShow }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Partnership | PhoenixFx AiWorld</title>
        <meta name="keyword" content="PhoenixFx AiWorld" />
        <meta name="description" content="PhoenixFx AiWorld" />
      </Helmet>
      <Breadcrumb title="Partnership" t={t} />
      <Partnership />
    </>
  );
}

export default PartnershipPage;
