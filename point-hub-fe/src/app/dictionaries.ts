import { PREFERED_LANG_COOKIE_NAME } from "@/lib/constants";
import { cookies } from "next/headers";
import "server-only";

const dictionaries = {
  en: () => import("../../messages/en.json").then((module) => module.default),
  vi: () => import("../../messages/vi.json").then((module) => module.default),
};

export type LocaleType = "en" | "vi";

export const getDictionary = async (locale) => dictionaries[locale]();

export const useLanguage = async () => {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get(PREFERED_LANG_COOKIE_NAME);
  if (
    langCookie &&
    langCookie.value &&
    ["en", "ko"].includes(langCookie.value)
  ) {
    return getDictionary(langCookie.value);
  } else {
    return getDictionary("en");
  }
};

export const useLocale = async (): Promise<LocaleType> => {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get(PREFERED_LANG_COOKIE_NAME);
  if (
    langCookie &&
    langCookie.value &&
    ["en", "ko"].includes(langCookie.value)
  ) {
    return langCookie.value as LocaleType;
  } else {
    return "vi";
  }
};
