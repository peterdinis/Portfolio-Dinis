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
          name="DevBOOK"
          description={t("description.newProject")}
          subName="React Typescript Tailwind Asp.net Sqlite"
          link="https://github.com/peterdinis/Social-Site-2.0"
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
          name="Cron-CRM"
          description={t("description.crm")}
          subName="React Recoil Typescript"
          link="https://github.com/peterdinis/Cron-CRM-React"
          firstLinkName="Github"
        />

        <Project 
          name="Cron-CRM Backend"
          description={t("description.crmAPI")}
          subName="Python Django Sqlite"
          link="https://github.com/peterdinis/CRON-CRM-Backend"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
