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
          name="Simple BookStore Admin Dashboard"
          description={t("description.sevenDesc")}
          subName="Html Css JS"
          link="https://github.com/peterdinis/Simple-Dashboard"
          firstLinkName="Github"
        />

        <Project 
          name="Shopping Card"
          description={t("description.shoppingCart")}
          subName="Nestjs Postgresql"
          firstLinkName="Github"
          link="https://github.com/peterdinis/Nest-Shop"
        />

        <Project
          description={t("description.doc")}
          name="IDoctor"
          subName="Asp.Net  sqlite"
          link="https://github.com/peterdinis/IDoctor"
          firstLinkName="Github"
        />

        <Project 
          description={t("description.foo")}
          name="Burger Shop"
          subName="Asp.Net React Typescript"
          link="https://github.com/peterdinis/BurgerShop-2.0"
          firstLinkName="Github"
          />

        <Project 
          description={t("description.overflow")} 
          name="Dev overflow client"
          subName="React Typescript Graphql"
          link="https://github.com/peterdinis/Dev-Overflow-Client"
          firstLinkName="Github"
        />

        <Project 
          description=""
          name="Dev overflow api"
          subName="Node Typescript graphql"
          link="https://github.com/peterdinis/Dev-OwerflowGraphql-API"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
