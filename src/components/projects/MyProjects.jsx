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
          name={t("description.insta")}
          subName="React Recoil Typescript"
          link="https://github.com/peterdinis/DevStagram-Frontend"
          firstLinkName="Github"
        />

        <Project
          name={t("description.instaBE")}
          subName="Node typescript mongodb"
          link="https://github.com/peterdinis/Dev-Stagram-Backend"
          firstLinkName="Github"
        />

        <Project
          name="Snake Game"
          description={t("description.projectFourD")}
          subName="Html css js"
          link="https://github.com/peterdinis/Javascript-Snake-Game"
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
          name="Node Pizza Store"
          description={t("description.newProjectOne")}
          subName="Node Typscript Ejs Tailwind"
          firstLinkName="Github"
          link="https://github.com/peterdinis/Node-Pizzas-App"
        />

        {/* <Project 

          name="Next Web3 Crpyto app" 
          description="Applikácia pre crpyto platby"
          subName="Next Moralis Tailwind"
          firstLinkName="Github"
          link="https://github.com/peterdinis/Next-Web3" /> */}
      </div>
    </div>
  );
};

export default MyProjects;
