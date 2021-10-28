import Project from "./Project";
import {useTranslation} from "react-i18next";

const MyProjects = () => {
  const {t} = useTranslation ();

  return (
    <div className="mt-1">
      <h1 className="text-center mt-4 text-4xl">{t("description.myProjects")}</h1>
      <div className="mt-6 px-10 grid grid-cols-4 gap-4">
        <Project 
          name={t("description.projectOne")}
          description={t("description.projectOneD")}
          subName="React React Query Styled-Components Typescript Material UI"
          link="https://github.com/peterdinis/React-SPST-Kniznica"
          firstLinkName="Github"
        />

        <Project 
          name={t("description.projectTwo")}
          description={t("description.projectTwoD")}
          subName="Python Django Postgresql"
          link="https://github.com/peterdinis/SPST-Book-API"
          firstLinkName="Github"
        />

        <Project 
          name="DevBook API"
          description={t("description.projectThreeD")}
          subName="Node Typescript Postgresql Prisma"
          link="https://github.com/peterdinis/Dev-Book-API"
          firstLinkName="Github"
        />
        
        <Project 
          name="DevBOOK"
          description={t("description.newProject")}
          subName="React Firebase"
          link="https://github.com/peterdinis/Dev-Book-React"
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
          name="React PhotoBookFE"
          description={t("description.projectSixD")}
          subName="React Typescript Tailwind Status(Work in progress)"
          link="https://github.com/peterdinis/RN-FoodApp"
          firstLinkName="Github"
        />

        <Project 
          name="Simple BookStore Admin Dashboard"
          description={t("description.sevenDesc")}
          subName="Html Css JS(Crud)"
          link="https://github.com/peterdinis/Simple-Dashboard"
          firstLinkName="Github"
        />

        <Project 
          name="Asp.Net Photobook api"
          description={t("description.projectSevenD")}
          subName="Asp.Net C# Status(Work in progress)"
          link="https://github.com/peterdinis/Laravel-Restaurant-API"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
