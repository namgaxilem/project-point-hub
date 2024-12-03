import { LocaleType } from '@/app/dictionaries';
import { BASE_API_URL } from '@/config';
import { Actor } from '@/types/Actor';
import { http } from './http';

export async function getActor(id: string, locale: LocaleType): Promise<Actor | undefined> {
  const url = `${BASE_API_URL}/api/actors/${id}`;
  try {
    const { data } = await http.get(url, locale);
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
