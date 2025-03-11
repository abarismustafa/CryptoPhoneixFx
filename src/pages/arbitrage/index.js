import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../shared/breadcrumb/Breadcrumb";
import Arbitrage from "../../components/arbitrage/Arbitrage";

function ArbitragePage({ setShow }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Arbitrage | PhoenixFx AiWorld</title>
        <meta name="keyword" content="PhoenixFx AiWorld" />
        <meta name="description" content="PhoenixFx AiWorld" />
      </Helmet>
      <Breadcrumb title="Arbitrage" t={t} />
      <Arbitrage />
    </>
  );
}

export default ArbitragePage;
