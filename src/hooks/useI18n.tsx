// src/hooks/useI18n.ts

import { useTranslation } from 'react-i18next';
import { addTranslationSchema } from '@/configs/I18nConfigs';

type NestedTranslations = {
  [key: string]: string | NestedTranslations;
};

export function useI18n(fa?: NestedTranslations, en?: NestedTranslations) {
  // Add translation schemas
  if (fa) {
    addTranslationSchema('fa', fa);
  }
  if (en) {
    addTranslationSchema('en', en);
  }

  // Use the react-i18next hook
  const { t, i18n } = useTranslation();

  return { t, i18n };
}
