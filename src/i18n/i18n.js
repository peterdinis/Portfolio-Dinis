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
            aboutMe: "A few sentences about me",
            firstSentence: "Hi My name is Peter Dinis. I am 20 years old. I come from Bardejov. I visited Priemyslovka in Bardejov. I also tried it at the university in Žilina, but it didn't work out there. Department of Informatics. My interests include football, volleyball. I am currently looking for a job and I am open to all offers.",
            secondSentence: "I have the most experience with technologies: React Python Django and Typescript Node.I would like to work as a Frontend developer or as a backend developer in the future.",
            favoriteStack: "My favorite stack",
            myProjects: "Some of my projects",
            projectOne: "Spst Library FE",
            projectOneD: "Frontend copy of a school project",
            projectTwo: "SPST API",
            projectTwoD: "Backend Api copy of school project",
            projectThreeD: "Farm site",
            projectFourD: "Web game snake",
            projectFiveD: "Application for tracking restaurants plus the possibility of ordering food",
            projectSixD: "Restaurant FE",
            projectSevenD: "API for Restaurant",
            work: "My work experience",
            workOne: "(1-year) School library project Unicorn React-Node-MongoDB",
            workTwo: "(1-rok) Školská knižnica projekt Unicorn React-Node-MongoDB",
            workThree: "(3-Months) Company Think Easy React.js Typescript",
            knowledge: "My knowledge",
            emailInfo: "If you are interested in my work, write to me at"
          }
        }
      },

      sk: {
        translation: {
          description: {
            aboutMe: "Pár viet o mne",
            firstSentence: "Ahoj Volám sa Peter Dinis. Mám 20 rokov. Pochádzam z Bardejova. Naštevoval som Priemyslovku v Bardejove. Skúsil som to aj na vysokej škole v Žiline, ale tam mi to nevyšlo. Odbor Informatika. Medzi moje záujmy patrí futbal, volejbal. Akutálne si hľadám prácu a som otvorený všetkých ponukám.",
            secondSentence: "Najväčšie skúsenosti mám z technológiami: React Python Django a Typescript Node.Rád by som v budúcnosti pracoval ako Frontend vývojár alebo ako backend vývojár.",
            favoriteStack: "Môj obľubený stack",
            myProjects: "Niektoré moje projekty",
            projectOne: "Spšt Knižnica FE",
            projectOneD: "Frontend kopia školského projektu",
            projectTwo: "SPŠT API",
            projectTwoD: "Backend Api kopia školského projektu",
            projectThreeD: "Stránka pre farmu",
            projectFourD: "Webová hra hadík",
            projectFiveD: "Aplikácia na sledovanie reštaurácií plus možnosť objednávky jedla",
            projectSixD: "Reštaurácia FE",
            projectSevenD: "API pre reštauráciu",
            work: "Moje pracovné skúsenosti",
            workOne: "(1-rok) Školská knižnica projekt Unicorn React-Node-MongoDB",
            workTwo: "(3-týždne) Erazmus Firma Think Easy React.js",
            workThree: "(3-Mesiace) Firma Think Easy React.js Typescript",
            knowledge: "Moje znalosti",
            emailInfo: "Ak ťa moja tvorba zaujala tak mi napíš na"
          }
        }
      }
    }
  });

export default i18n;