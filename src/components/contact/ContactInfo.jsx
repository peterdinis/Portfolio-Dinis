import { Paper } from "@material-ui/core";
import Links from "./Links";
import { Mailto } from "./Mailto";
import "./Links.css";
import { useTranslation } from "react-i18next";

function ContactInfo() {
  const { t } = useTranslation();
  return (
    <div className="mt-1">
      <Paper elevation={3}>
        <h1 className="infoHead text-red-900">Email</h1>
        <p className="infoEmail">
          {t("description.contactMe")}:{" "}
          <Mailto href="mailto:pdinis1@gmail.com">pdinis1@gmail.com</Mailto>
        </p>
        <Links />
      </Paper>
    </div>
  );
}

export default ContactInfo;
