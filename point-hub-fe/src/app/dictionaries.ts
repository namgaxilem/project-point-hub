import { PREFERED_LANG_COOKIE_NAME } from "@/lib/constants";
import { cookies } from "next/headers";
import "server-only";

const dictionaries = {
  en: () => import("../../messages/en.json").then((module) => module.default),
  vi: () => import("../../messages/vi.json").then((module) => module.default),
};

export type LocaleType = "en" | "vi";

export const getDictionary = async (locale) => dictionaries[locale]();

export const getLanguage = async () => {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get(PREFERED_LANG_COOKIE_NAME);
  if (langCookie?.value && ["en", "vi"].includes(langCookie.value)) {
    return getDictionary(langCookie.value);
  } else {
    return getDictionary("en");
  }
};

export const getLocale = async (): Promise<LocaleType> => {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get(PREFERED_LANG_COOKIE_NAME);
  if (langCookie?.value && ["en", "vi"].includes(langCookie.value)) {
    return langCookie.value as LocaleType;
  } else {
    return "en";
  }
};
