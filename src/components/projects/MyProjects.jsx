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
          description={t("description.fooPizza")}
          name="Pizza Shop Frontend"
          subName="React Javascript"
          link="https://github.com/peterdinis/PizzaShop-Frontend"
          firstLinkName="Github"
        />

        <Project
          description={t("description.fooPizzaAPI")}
          name="Pizza Shop Backend"
          subName="Node Mongodb Javacript"
          link="https://github.com/peterdinis/PizzaShopBackend"
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
          description={t("description.foodApp")}
          name="Food Devlivery App"
          subName="Python Django"
          link="https://github.com/peterdinis/Django-FoodDeliveryApp"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
