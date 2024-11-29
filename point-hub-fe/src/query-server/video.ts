import { BASE_API_URL } from "@/config";
import { Video } from "@/types/Video";
import { http } from "./http";
import { ResponsePagination } from "@/types/Pagination";

export async function getVideos(
  page?: number,
  size?: number
): Promise<ResponsePagination<Video[]> | undefined> {
  const url = `${BASE_API_URL}/api/videos?pagination[page]=${
    page || 1
  }&pagination[pageSize]=${size || 50}`;
  try {
    const response = await http.get(url);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getVideoByCategory(
  categoryId: string,
  page: number | string,
  pageSize: number
): Promise<ResponsePagination<Video[]> | undefined> {
  const url = `${BASE_API_URL}/api/videos?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[categories][documentId][$eq]=${categoryId}`;
  try {
    const response = await http.get(url);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getVideoDetail(
  videoId: string
): Promise<Video | undefined> {
  const url = `${BASE_API_URL}/api/videos/${videoId}`;
  try {
    const { data } = await http.get(url);
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
