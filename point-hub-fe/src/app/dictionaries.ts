// Ensure this module is used only on the server-side
import 'server-only';

// Object containing functions to dynamically load language-specific dictionaries (JSON files)
const dictionaries = {
  // Function to load English dictionary
  en: () => import('../../messages/en.json').then((module) => module.default),

  // Function to load Vietnamese dictionary
  vi: () => import('../../messages/vi.json').then((module) => module.default),
};

// List of supported language codes (locales)
export const supportedLocale = ['en', 'vi'];

// Define a TypeScript type for the supported locales
// This ensures that only 'en' or 'vi' are valid types
export type LocaleType = (typeof supportedLocale)[number];

/**
 * Fetch the dictionary for a specific locale.
 * @param locale - The locale for which the dictionary should be loaded (e.g., 'en', 'vi').
 * @returns A promise that resolves to the dictionary object.
 */
export const getDictionary = async (locale) => dictionaries[locale]();

/**
 * Fetch the dictionary for the given language, with a fallback to English if the language is not supported.
 * @param lang - The language code (e.g., 'en', 'vi') or undefined.
 * @returns A promise that resolves to the dictionary object.
 */
export const getDict = async (lang: LocaleType | undefined) => {
  // Check if the provided language is in the list of supported locales
  if (supportedLocale.includes(lang || '')) {
    return getDictionary(lang); // Load the dictionary for the given language
  } else {
    return getDictionary('vi'); // Default to English dictionary if language is not supported
  }
};
