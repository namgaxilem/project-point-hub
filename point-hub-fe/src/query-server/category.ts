import { BASE_API_URL } from '@/config';
import { Category } from '@/types/Category';
import { http } from './http';
import { ResponsePagination } from '@/types/Pagination';

export async function getCategories(): Promise<ResponsePagination<Category[]> | undefined> {
  const url = `${BASE_API_URL}/api/all-categories-with-video-counts`;
  try {
    return await http.get(url);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getCategory(id: string): Promise<Category | undefined> {
  const url = `${BASE_API_URL}/api/categories/${id}`;
  try {
    const { data } = await http.get(url);
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
