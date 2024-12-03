import { BASE_API_URL } from '@/config';
import { Video } from '@/types/Video';
import { http } from './http';
import { ResponsePagination } from '@/types/Pagination';
import { LocaleType } from '@/app/dictionaries';

export async function getVideoDetail(
  videoId: string,
  locale: LocaleType
): Promise<Video | undefined> {
  const url = `${BASE_API_URL}/api/videos/${videoId}?populate=tags&populate=categories&populate=actors`;
  try {
    const { data } = await http.get(url, locale);
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getVideos(
  page: number,
  size: number,
  locale: LocaleType
): Promise<ResponsePagination<Video[]> | undefined> {
  const url = `${BASE_API_URL}/api/videos?pagination[page]=${page}&pagination[pageSize]=${
    size
  }&sort[0]=publishedAt&sort[1]=updatedAt&sort[2]=createdAt`;
  try {
    const response = await http.get(url, locale);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getVideosByKeyword(
  keyword: string,
  page: number,
  size: number,
  locale: LocaleType
): Promise<ResponsePagination<Video[]> | undefined> {
  const url = `${BASE_API_URL}/api/videos?pagination[page]=${page}&pagination[pageSize]=${
    size
  }&filters[title][$contains]=${keyword}&sort[0]=publishedAt&sort[1]=updatedAt&sort[2]=createdAt`;
  try {
    const response = await http.get(url, locale);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getVideosByCategory(
  categoryId: string,
  page: number | string,
  pageSize: number,
  locale: LocaleType
): Promise<ResponsePagination<Video[]> | undefined> {
  const url = `${BASE_API_URL}/api/videos?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[categories][documentId][$eq]=${categoryId}`;
  try {
    const response = await http.get(url, locale);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getVideosByActor(
  actorId: string,
  page: number | string,
  pageSize: number,
  locale: LocaleType
): Promise<ResponsePagination<Video[]> | undefined> {
  const url = `${BASE_API_URL}/api/videos?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[actors][documentId][$eq]=${actorId}`;
  try {
    const response = await http.get(url, locale);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getVideosByTag(
  tagId: string,
  page: number | string,
  pageSize: number,
  locale: LocaleType
): Promise<ResponsePagination<Video[]> | undefined> {
  const url = `${BASE_API_URL}/api/videos?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[tags][documentId][$eq]=${tagId}`;
  try {
    const response = await http.get(url, locale);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getVideosTopwatch(
  page: number,
  pageSize: number,
  locale: LocaleType
): Promise<ResponsePagination<Video[] | undefined> | undefined> {
  const url = `${BASE_API_URL}/api/videos?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=view_count`;
  try {
    return await http.get(url, locale);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
