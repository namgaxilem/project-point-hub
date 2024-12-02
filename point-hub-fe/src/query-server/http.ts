import { LocaleType } from '@/app/dictionaries';

export const http = {
  get: async function get(baseUrl: string, locale: LocaleType | undefined) {
    try {
      let params: Record<string, string> = {};
      if (locale) {
        params = {
          locale: locale,
        };
      }
      const url = new URL(baseUrl);
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error while fetching.');
      throw error;
    }
  },
};
