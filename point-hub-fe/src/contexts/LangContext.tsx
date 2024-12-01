'use client';

import { LocaleType } from '@/app/dictionaries';
import { createContext, useContext, useMemo, useState } from 'react';

interface ContextProps {
  lang: any;
  locale: LocaleType;
}
export const LangContext = createContext({} as ContextProps);

export const useLang = () => {
  return useContext(LangContext);
};

export default function LangProvider({ dict, locale, children }) {
  const [lang] = useState(dict);

  const contextValue = useMemo(
    () => ({
      lang,
      locale: locale || 'en',
    }),
    [lang, locale]
  );

  return <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>;
}
