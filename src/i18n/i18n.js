import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'sk',
    interpolation: {
      escapeValue: false,
     },
    resources: {
      en: {
        translation: {
          description: {
            socialGraphAPI: "Api for dev tweet",
            socialGraphql: "Simple Social site Twitter clone",
            devOverflow: "API clone for stack overflow",
            doc: "Application for doctors",
            aboutMe: "A few sentences about me",
            firstSentence: "Hi My name is Peter Dinis. I am 21 years old. I come from Bardejov. I visited Secondary industrial school(SPST) in Bardejov",
            secondSentence: "I have the most experience with technologies: React Python Django and Typescript Node.",
            favoriteStack: "My favorite stack",
            myProjects: "Some of my projects",
            projectOne: "Spst Library FE",
            projectOneD: "Frontend copy of a school project",
            projectTwo: "SPST API",
            projectTwoD: "Backend Api copy of school project",
            projectThreeD: "DevBookAPI",
            projectFourD: "Web game snake",
            projectFiveD: "Application for tracking restaurants plus the possibility of ordering food",
            projectSixD: "Photo upload app user can upload photos plus authentication",
            projectSevenD: "Crud photos plus full authentication",
            work: "My work experience",
            workOne: "(1-year) School library project Unicorn React-Node-MongoDB - (uuapp)",
            workTwo: "(3-weeks) Erasmus Company Think Easy React.js",
            workThree: "(3-Months) Company Think Easy React.js Typescript",
            knowledge: "My knowledge",
            emailInfo: "If you are interested in my work, write to me at",
            uuappHeader: "What is uuapp",
            newProject: "Simple social site",
            newCompany: "Inver s.r.o",
            insta: "Instagram clone",
            instaBE: "API for instagram",
            newProjectOne: "Simple e-commerce application in node",
            crm: "Simple CRM management system",
            crmAPI: "API for CRM",
            newProjectTwo: "Client for foodStore e-commerce app",
            newProjectThree: "API for foodStore e-commerce app",
            sevenDesc: "A simple control panel administrator can add customer books and issues and see questions from page users",
            uuappText: "This project was done during high school. The unicorn company announced a competition and the school I visited to apply. With the help of their framework we had to create a page. Their framework is based on the principle of React Node Mongodb (Modified version)"
          }
        }
      },

      sk: {
        translation: {
          description: {
            socialGraphAPI: "API k sociálnej siete",
            socialGraphql: "Jednoduchá socialná sieť podobná twitteru",
            devOverflow: "Kopia Stack overflow",
            doc: "Applikácia pre doktorov",
            insta: "Kópia Instagramu",
            instaBE:"Backend instagram",
            aboutMe: "Pár viet o mne",
            crm: "Jednoduchý crm systém",
            crmAPI: "API pre crm",
            firstSentence: "Ahoj Volám sa Peter Dinis. Mám 21 rokov. Pochádzam z Bardejova. Naštevoval som Strednú priemyselnú školu technickú(SPŠT) v Bardejove. Skúsil som to aj na vysokej škole v Žiline, ale tam mi to nevyšlo. Odbor Informatika. Medzi moje záujmy patrí futbal, volejbal.",
            secondSentence: "Najväčšie skúsenosti mám z technológiami: React Python Django a Typescript Node.",
            favoriteStack: "Môj obľubený stack",
            newProjectOne: "Jednoduchá e-commerce aplikácia v node",
            myProjects: "Niektoré moje projekty",
            newProjectTwo: "Frontend k e-commerce-app",
            newProjectThree: "Api k e-commerce-app",
            projectOne: "Spšt Knižnica FE",
            projectOneD: "Frontend kopia školského projektu",
            projectTwo: "SPŠT API",
            projectTwoD: "Backend Api kopia školského projektu",
            projectThreeD: "Api ku projektu DevBook",
            projectFourD: "Webová hra hadík",
            projectFiveD: "Aplikácia na sledovanie reštaurácií plus možnosť objednávky jedla",
            projectSixD: "Pridanie obľubených fotiek plus prihlásenie/registrácia/profil",
            projectSevenD: "Crud operácie na fotografie a funkčné prihlásenie/registrácia/profil",
            work: "Moje pracovné skúsenosti",
            workOne: "(1-rok) Školská knižnica projekt Unicorn React-Node-MongoDB - (uuapp)",
            workTwo: "(3-týždne) Erazmus Firma Think Easy React.js",
            workThree: "(3-Mesiace) Firma Think Easy React.js Typescript",
            knowledge: "Moje znalosti",
            emailInfo: "Ak ťa moja tvorba zaujala tak mi napíš na",
            uuappHeader: "Čo je uuapp",
            newProject: "Jednoduchá socialna sieť",
            newCompany: "Inver s.r.o",
            uuappText: "Tento projekt bol robený počas strednej školy. Firma unicorn vyhlásila súťaž a školu ktorú som navštívil sa prihlásiť. Za pomoci ich frameworku sme mali vytvoriť stránku.Ich framework je postavený na princípe React Node Mongodb (Upravená verzia)",
            sevenDesc: "Jednoduchý dashboard admin vie pridať knihy zákazníkov a problémy a vidí otázky používateľov stránky"
          }
        }
      }
    }
  });

export default i18n;