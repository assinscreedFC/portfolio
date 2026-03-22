import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import fr from './locales/fr.json';
import enPro from './locales/en-pro.json';
import frPro from './locales/fr-pro.json';

const resources = {
  en: { translation: en, pro: enPro },
  fr: { translation: fr, pro: frPro },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translation', 'pro'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
