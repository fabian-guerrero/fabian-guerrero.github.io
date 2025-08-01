import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "es"],
    fallbackLng: "en",
    ns: ["common", "heroes", "experiences", "works"],
    defaultNS: "common",
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
