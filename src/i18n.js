import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "en",               // Язык по умолчанию
    fallbackLng: "en",       // Если перевод не найден
    ns: ["home"],            // Список неймспейсов
    defaultNS: "home",       // Неймспейс по умолчанию
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Путь до JSON файлов
    },
    interpolation: {
      escapeValue: false, // не экранировать HTML
    },
  });

export default i18n;
