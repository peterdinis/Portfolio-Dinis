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
          subName="React Typescript Nests Nx"
          link="https://github.com/peterdinis/Spst-Kniznica-2.0"
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
          description={t("description.fooPizza")}
          name="Pizza Shop Frontend"
          subName="React Javascript"
          link="https://github.com/peterdinis/PizzaShop-Frontend"
          firstLinkName="Github"
        />

        <Project
          description={t("description.fooPizzaAPI")}
          name="Pizza Shop Backend"
          subName="Node Mongodb Jabacript"
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
      </div>
    </div>
  );
};

export default MyProjects;
