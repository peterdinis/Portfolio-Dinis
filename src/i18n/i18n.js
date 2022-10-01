import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "sk",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            disneyClone: "Disney+ clone",
            shoppingCart: "Simple implement shopping cart in nest",
            overflowAPI: "Backend to the Dev Overflow application",
            overflow:
              "A copy stack overflow user can write a question to answer questions",
            foo: "Online food shop",
            socialGraphAPI: "Api for dev tweet",
            eshop: "Online burger-shop plus payments",
            eshopAPI: "API for online shop",
            socialGraphql: "Simple Social site instagram clone",
            devOverflow: "API clone for stack overflow",
            doc: "Application for doctors",
            aboutMe: "A few sentences about me",
            firstSentence:
              "Hi My name is Peter Dinis. I am 21 years old. I come from Bardejov. I visited Secondary industrial school(SPST) in Bardejov",
            secondSentence:
              "I have the most experience with technologies: React Python Django and Typescript Node.",
            favoriteStack: "My favorite stack",
            myProjects: "Some of my projects",
            projectOne: "Spst Library FE",
            projectOneD: "Frontend copy of a school project",
            projectTwo: "Backend API for SPST Library",
            projectTwoD: "Backend Api copy of school project",
            projectThreeD: "DevBookAPI",
            nodeT: "Simple template for working with nodejs and typescript",
            projectFourD: "Web game snake",
            projectFiveD:
              "Application for tracking restaurants plus the possibility of ordering food",
            projectSixD:
              "Photo upload app user can upload photos plus authentication",
            projectSevenD: "Crud photos plus full authentication",
            work: "My work experience",
            snakeGame: "Snake web game",
            snakeDesc: "Online web game snake",
            workOne:
              "(1-year) School library project Unicorn React-Node-MongoDB - (uuapp)",
            workTwo: "(3-weeks) Erasmus Company Think Easy React.js",
            workFour: "(7-Months) Navisys s.r.o",
            workThree: "(3-Months) Company Think Easy React.js Typescript",
            knowledge: "My knowledge",
            emailInfo: "If you are interested in my work, write to me at",
            uuappHeader: "What is uuapp",
            newProject: "Simple social site",
            newCompany: "Inver s.r.o",
            insta: "Instagram clone",
            instaBE: "API for instagram",
            newProjectTwo: "Client for foodStore e-commerce app",
            newProjectThree: "API for foodStore e-commerce app",
            foodAPI: "API for online food ordering",
            foodClient: "Application for ordering food",
            foodApp: "Application for ordering food online",
            foodAppAPI: "Api to online food ordering apps",
            frontendApp: "Frontend to the social network",
            frontendDesc: "A simple social network similar to TikTok",
            backendApp: "API to the social network",
            backendDesc: "A simple social network similar to TikTok",
            sevenDesc:
              "A simple control panel administrator can add customer books and issues and see questions from page users",
            uuappText:
              "This project was done during high school. The unicorn company announced a competition and the school I visited to apply. With the help of their framework we had to create a page. Their framework is based on the principle of React Node Mongodb (Modified version)",
          },
        },
      },

      sk: {
        translation: {
          description: {
            snakeDesc: "Online webová hra had",
            snakeGame: "Webová hra had",
            foodClient: "Aplikácia na objednávanie jedál",
            foodAPI: "API k online objednávke jedál",
            nodeT: "Jednoduchá template pre prácu z nodejs a typescript",
            shoppingCart: "Jednoduchá implementácia nákupnej karty v nest",
            overflowAPI: "Backend ku applikáci Dev Overflow",
            foodApp: "Applikácia kde na objednávanie jedál online",
            foodAppAPI: "Api ku applikácií na objednávanie jedál online",
            disneyClone: "Klon stránky Disney+",
            overflow:
              "Kópia stack overflow používateľ vie napísať otázku odpovedať na otázky",
            foo: "Online shop na nákup jedla",
            socialGraphAPI: "API k sociálnej siete",
            socialGraphql: "Jednoduchá socialná sieť podobná instagramu",
            devOverflow: "Kopia Stack overflow",
            doc: "Applikácia pre doktorov",
            insta: "Kópia Instagramu",
            instaBE: "Backend instagram",
            aboutMe: "Pár viet o mne",
            workFour: "(7-Mesiacov) Navisys s.r.o",
            eshop: "Online burger shop s možnosťou online platieb",
            firstSentence:
              "Ahoj Volám sa Peter Dinis. Mám 21 rokov. Pochádzam z Bardejova. Naštevoval som Strednú priemyselnú školu technickú(SPŠT) v Bardejove. Medzi moje záujmy patrí futbal, volejbal.",
            secondSentence:
              "Najväčšie skúsenosti mám z technológiami: React Python Django a Typescript Node.",
            favoriteStack: "Môj obľubený stack",
            newProjectOne: "Jednoduchá e-commerce aplikácia v node",
            myProjects: "Niektoré moje projekty",
            newProjectTwo: "Frontend k e-commerce-app",
            newProjectThree: "Api k e-commerce-app",
            projectOne: "Spšt Knižnica FE",
            projectOneD: "Frontend kopia školského projektu",
            projectTwo: "Backend API ku školskej knižnici",
            projectTwoD: "Backend Api kopia školského projektu",
            projectThreeD: "Api ku projektu DevBook",
            projectFourD: "Webová hra hadík",
            projectFiveD:
              "Aplikácia na sledovanie reštaurácií plus možnosť objednávky jedla",
            projectSixD:
              "Pridanie obľubených fotiek plus prihlásenie/registrácia/profil",
            projectSevenD:
              "Crud operácie na fotografie a funkčné prihlásenie/registrácia/profil",
            work: "Moje pracovné skúsenosti",
            workOne:
              "(1-rok) Školská knižnica projekt Unicorn React-Node-MongoDB - (uuapp)",
            workTwo: "(3-týždne) Erazmus Firma Think Easy React.js",
            workThree: "(3-Mesiace) Firma Think Easy React.js Typescript",
            knowledge: "Moje znalosti",
            emailInfo: "Ak ťa moja tvorba zaujala tak mi napíš na",
            uuappHeader: "Čo je uuapp",
            newProject: "Jednoduchá socialna sieť",
            frontendApp: "Frontend k socialnej sieti",
            frontendDesc: "Jednoduchá socialna sieť podobná tiktoku",
            backendApp: "API k socialnej sieti",
            backendDesc: "Jednoduchá socialna sieť podobná tiktoku",
            uuappText:
              "Tento projekt bol robený počas strednej školy. Firma unicorn vyhlásila súťaž a školu ktorú som navštívil sa prihlásiť. Za pomoci ich frameworku sme mali vytvoriť stránku.Ich framework je postavený na princípe React Node Mongodb (Upravená verzia)",
            sevenDesc:
              "Jednoduchý dashboard admin vie pridať knihy zákazníkov a problémy a vidí otázky používateľov stránky",
          },
        },
      },
    },
  });

export default i18n;
