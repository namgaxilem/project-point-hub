import { BASE_API_URL } from "@/config";
import { Category } from "@/types/Category";

export async function getCategories(): Promise<Category[]> {
  const url = `${BASE_API_URL}/api/categories?locale=en`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
