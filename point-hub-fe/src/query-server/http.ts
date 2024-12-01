import { PREFERED_LANG_COOKIE_NAME } from '@/lib/constants';
import { cookies } from 'next/headers';

export const http = {
  get: async function get(baseUrl: string) {
    try {
      let params: Record<string, string> = {};
      const locale = (await cookies()).get(PREFERED_LANG_COOKIE_NAME);
      if (locale?.value) {
        params = {
          locale: locale?.value,
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
