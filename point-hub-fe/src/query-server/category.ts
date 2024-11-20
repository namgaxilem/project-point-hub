import { BASE_API_URL } from "@/config";
import { Category } from "@/types/Category";
import { http } from "./http";

export async function getCategories(): Promise<Category[]> {
  const url = `${BASE_API_URL}/api/categories`;
  try {
    const response = await http.get(url);
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
}
