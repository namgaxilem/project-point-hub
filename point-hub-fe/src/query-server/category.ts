import { BASE_API_URL } from '@/config';
import { Category } from '@/types/Category';
import { http } from './http';
import { ResponsePagination } from '@/types/Pagination';
import { LocaleType } from '@/app/dictionaries';

export async function getCategories(locale: LocaleType): Promise<ResponsePagination<Category[]> | undefined> {
  const url = `${BASE_API_URL}/api/all-categories-with-video-counts`;
  try {
    return await http.get(url, locale);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getCategory(id: string, locale: LocaleType): Promise<Category | undefined> {
  const url = `${BASE_API_URL}/api/categories/${id}`;
  try {
    const { data } = await http.get(url, locale);
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
