import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import faPublic from '@/constants/i18n/fa.json';
import enPublic from '@/constants/i18n/en.json';

const i18nObject = i18n.use(initReactI18next);
const DEFAULT_NAMESPACE = 'translation';
const i18nOptions: InitOptions = {
  lng: 'fa',
  fallbackLng: 'fa',
  resources: {
    fa: {
      [DEFAULT_NAMESPACE]: faPublic,
    },
    en: {
      [DEFAULT_NAMESPACE]: enPublic,
    },
  },
  detection: {
    caches: ['localStorage', 'cookie'],
    lookupLocalStorage: 'lng',
    lookupCookie: 'lng',
    cookieMinutes: 1000,
    order: ['localStorage', 'cookie'],
  },
  react: {
    bindI18n: 'languageChanged loaded',
    nsMode: 'default',
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
};

const addTranslationSchema = (locale: 'fa' | 'en', resources: unknown) => {
  i18nObject.addResourceBundle(locale, DEFAULT_NAMESPACE, resources, true, true);
};

export { i18nObject, addTranslationSchema, i18nOptions };
