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
       
        <Project
          name="Dev overflow"
          description={t("description.devOverflow")}
          subName="Goolang mysql"
          link="https://github.com/peterdinis/Dev-Owerflow-API"
          firstLinkName="Github"
        />
        <Project
          name="Simple BookStore Admin Dashboard"
          description={t("description.sevenDesc")}
          subName="Html Css JS"
          link="https://github.com/peterdinis/Simple-Dashboard"
          firstLinkName="Github"
        />

        <Project
          name="Simple BookStore Admin Dashboard"
          description={t("description.socialGraphAPI")}
          subName="Html Css JS"
          link="https://github.com/peterdinis/Simple-Dashboard"
          firstLinkName="Github"
        />

        <Project 
          name="Dev Net"
          description={t("description.socialGraphql")}
          subName="React Javascript css"
          link="https://github.com/peterdinis/Dev-Net-Frontend"
          firstLinkName="Github"
        />

        <Project 
          name="Dev Net API"
          description={t("description.socialGraphAPI")}
          subName="Nodejs Mongodb"
          link="https://github.com/peterdinis/Dev-Net-Backend"
          firstLinkName="Github"
        />

        <Project 
          name="Mern Shop Frontend"
          description={t("description.eshop")}
          subName="React typescript css"
          link="https://github.com/peterdinis/Mern-Shop-Frontend"
          firstLinkName="Github"
        />


        <Project 
          name="Mern shop Backend"
          description={t("description.eshopAPI")}
          subName="node mongodb"
          link="https://github.com/peterdinis/Mern-Shop-Backend"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
