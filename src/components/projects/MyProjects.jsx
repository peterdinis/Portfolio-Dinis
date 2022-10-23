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
          subName="React Typescript React Query Tailwind"
          link="https://github.com/peterdinis/Spst-Kniznica-Client"
          firstLinkName="Github"
        />

        <Project
          name={t("description.projectTwo")}
          description={t("description.projectTwoD")}
          subName="Nestjs Postgresql"
          link="https://github.com/peterdinis/Spst-Kniznica-Server"
          firstLinkName="Github"
        />

        <Project
          name="Node Typescript Template"
          description={t("description.nodeT")}
          subName="Node js Typescript Ejs"
          link="https://github.com/peterdinis/Node-Typescript-Starter"
          firstLinkName="Github"
        />

        <Project
          name={t("description.foodApp")}
          description={t("description.foodClient")}
          subName="React Typescript React-Query"
          link="https://github.com/peterdinis/Pizza-Shop-Frontend"
          firstLinkName="Github"
        />

        <Project
          name={t("description.socialGraphql")}
          description={t("description.socialGraphql")}
          subName="React Typescript Asp.NET"
          link="https://github.com/peterdinis/Social-Site-React-C-Sharp"
          firstLinkName="Github"
        />

        <Project
          name={t("description.disneyClone")}
          description={t("description.disneyClone")}
          subName="React Typescript Styled-Components Firebase"
          link="https://github.com/peterdinis/Disney-Plus-Clone-React"
          firstLinkName="Github"
        />

        <Project
          name={t("description.ecommerceSimple")}
          description={t("description.ecommerceSimple")}
          subName="React Typescript React-Query"
          link="https://github.com/peterdinis/React-Shop-Frontend"
          firstLinkName="Github"
        />

        <Project
          name={t("description.ecommerceSimple")}
          description={t("description.ecommerceSimple")}
          subName="Goolang Postgresql"
          link="https://github.com/peterdinis/Goolng-Shop-Api"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
