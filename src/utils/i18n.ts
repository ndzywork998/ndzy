import i18n, { Resource } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import data from './i18n-data.json';

export const resources: Resource = data;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'ja',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
