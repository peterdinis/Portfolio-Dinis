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
          name="Shopping Card"
          description={t("description.shoppingCart")}
          subName="Nestjs Sqlite"
          firstLinkName="Github"
          link="https://github.com/peterdinis/Nest-Shop-API"
        />

        <Project
          description={t("description.foo")}
          name="Burger Shop API"
          subName="Asp.Net sqlite"
          link="https://github.com/peterdinis/BurgerShop-2.0"
          firstLinkName="Github"
        />

        <Project
          description={t("description.foo")}
          name="Burger Shop Client"
          subName="React typescript"
          link="https://github.com/peterdinis/BurgerShop2.0Client"
          firstLinkName="Github"
        />

        <Project
          description={t("description.socialGraphql")}
          name="Dev-Net-Typescript"
          subName="React-Typescript Redux"
          link="https://github.com/peterdinis/Dev-Net-Typescript"
          firstLinkName="Github"
        />

        <Project
          description={t("description.socialGraphAPI")}
          name="Dev-Net-Backend"
          subName="Node Typescript Mongodb"
          link="https://github.com/peterdinis/Dev-Net-API"
          firstLinkName="Github"
        />

        <Project
          description={t("description.socialGraphql")}
          name="React-django-socialSite"
          subName="Python Django Html Css Js"
          link="https://github.com/peterdinis/Django-Social-Site"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
