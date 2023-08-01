import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // translation file path
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    // resources,
    // fallbackLng: {
    //   "en-US": ["en"],
    //   "zh-CN": ["cn"],
    //   default: ["az"],
    // },
    fallbackLng:["az"],
    // fallBackLng: ["az"],
    fallbacklng: "az",
    // disabled in production
    debug: true,
    // can have multiple namespaces, in case you want to divide a huge
    // translation into smaller pieces and load them on demand
    ns: ["common", "home", "contact", "university", "about"],
    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
