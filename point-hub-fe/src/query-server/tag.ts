import { LocaleType } from '@/app/dictionaries';
import { BASE_API_URL } from '@/config';
import { Tag } from '@/types/Tag';
import { http } from './http';

export async function getTag(id: string, locale: LocaleType): Promise<Tag | undefined> {
  const url = `${BASE_API_URL}/api/tags/${id}`;
  try {
    const { data } = await http.get(url, locale);
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
