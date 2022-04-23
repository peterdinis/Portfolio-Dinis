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
          subName="React Redux toolkit typescript Asp.net mysql"
          link="https://github.com/peterdinis/SPST-2-0"
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
          description={t("description.foo")}
          name="Pizza-Net"
          subName="Asp.Net Blazor"
          link="https://github.com/peterdinis/Pizza-Net-Shop"
          firstLinkName="Github"
        />

        <Project 
          description={t("description.netflix")}
          name="Netlix-Clone"
          subName="Nextjs Typescript Firebase Stripe"
          link="https://github.com/peterdinis/Next-Flix"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
