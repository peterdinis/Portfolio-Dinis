import Links from "./Links";
import { Mailto } from "./Mailto";
import "./Links.css";
import { useTranslation } from "react-i18next";
import React from "react";

function ContactInfo() {
  const { t } = useTranslation();
  return (
    <div className="mt-1">
      <h1 className="infoHead">Email</h1>
      <p className="infoEmail">
        {t("description.emailInfo")}:{" "}
        <Mailto href="mailto:pdinis1@gmail.com">pdinis1@gmail.com</Mailto>
      </p>
      <Links />
    </div>
  );
}

export default ContactInfo;
