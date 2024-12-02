import 'server-only';

const dictionaries = {
  en: () => import('../../messages/en.json').then((module) => module.default),
  vi: () => import('../../messages/vi.json').then((module) => module.default),
};

export const supportedLocale = ['en', 'vi'];
export type LocaleType = (typeof supportedLocale)[number];

export const getDictionary = async (locale) => dictionaries[locale]();

export const getDict = async (lang: LocaleType | undefined) => {
  if (supportedLocale.includes(lang || '')) {
    return getDictionary(lang);
  } else {
    return getDictionary('en');
  }
};
