import Project from "./Project";
import { useTranslation } from "react-i18next";

const MyProjects = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-1">
      <h1 className="text-center mt-4 text-4xl">
        {t("description.myProjects")}
      </h1>
      <div className="mt-6 px-10 grid grid-cols-4 gap-4">
        <Project
          name={t("description.projectOne")}
          description={t("description.projectOneD")}
          subName="React React Query Asp.net mysql"
          link="https://github.com/peterdinis/React-Aspnet-SchollApp"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
