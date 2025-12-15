import { Language } from '@constants/languages';
import { translate, TranslationKey } from '@constants/translations';
import { useLanguageStore } from '@store/languageStore';

type TranslateParams = Record<string, string | number>;

type UseTranslationResult = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey, params?: TranslateParams) => string;
};

export const useTranslation = (): UseTranslationResult => {
  const { language, setLanguage } = useLanguageStore(state => state);

  const t = (key: TranslationKey, params?: TranslateParams) =>
    translate(language, key, params);

  return { language, setLanguage, t };
};


