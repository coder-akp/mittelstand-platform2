import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: {
        welcome_message: "Willkommen zur Mittelstand Plattform",
      },
    },
  },
  lng: 'de', // Default language
  fallbackLng: 'de', // Language to use if the current one is not available
});

export default i18n;
