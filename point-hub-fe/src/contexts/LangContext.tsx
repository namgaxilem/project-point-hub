"use client";

import { LocaleType } from "@/app/dictionaries";
import { createContext, useContext, useState } from "react";

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

  return (
    <LangContext.Provider
      value={{
        lang,
        locale: locale || "en",
      }}
    >
      {children}
    </LangContext.Provider>
  );
}
