import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en.json";
import translationAr from "./locales/ar.json";
const lang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  lng: lang!,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: translationEn,
    },
    ar: {
      translation: translationAr,
    },
  },
});
i18n.languages = ["en", "es"];
