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
          description={t("description.projectOne")}
          subName="React Typescript"
          link="https://github.com/peterdinis/Spst-Kniznica-Client"
          firstLinkName="Github"
        />

        <Project
          name={t("description.projectTwo")}
          description={t("description.projectTwo")}
          subName="Nest Sequelize Postgresql"
          link="https://github.com/peterdinis/Spst-Kniznica-Server"
          firstLinkName="Github"
        />

        <Project
          description={t("description.socialGraphAPI")}
          name="Facebook Backend Clone"
          subName="Node Tpyescript Mongodb"
          link="https://github.com/peterdinis/Facebook-Clone-Backend"
          firstLinkName="Github"
        />

        <Project
          description={t("description.socialGraphql")}
          name="Facebook Clone"
          subName="React Typescript"
          link="https://github.com/peterdinis/Facebook-Clone-Frontend"
          firstLinkName="Github"
        />

        <Project 
          description={t("description.foodAPI")}
          name="Django FoodDeliveryApp API"
          subName="Django-Rest-Framework Postgresql"
          link="https://github.com/peterdinis/Django-Ecommerce-BE"
          firstLinkName="Github" 
        />

        <Project 
          description={t("description.nodeStart")}
          name="Node Simple Starter template"
          subName="Ejs Typescript"
          link="https://github.com/peterdinis/Node-Typescript-Starter"
          firstLinkName="Github" 
        />
      </div>
    </div>
  );
};

export default MyProjects;
