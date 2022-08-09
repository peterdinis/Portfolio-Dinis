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
      {/* TODO: Return back old content */}
    </div>
  );
}

export default ContactInfo;
