import { videoSuggestQueryBuilder } from '@/lib/query-utils';
import { http } from '@/query-client/http';
import { Actor } from '@/types/Actor';
import { Category } from '@/types/Category';
import { ResponsePagination } from '@/types/Pagination';
import { Tag } from '@/types/Tag';
import { Video } from '@/types/Video';
import { useQuery } from '@tanstack/react-query';

export const useVideosSuggestion = (
  page: number,
  pageSize: number,
  videoId: string,
  relations?: {
    categories?: Category[];
    tags?: Tag[];
    actors?: Actor[];
  }
) => {
  return useQuery({
    queryKey: ['useVideosSuggestion'],
    queryFn: (): Promise<ResponsePagination<Video[]> | undefined> => {
      return http.get<ResponsePagination<Video[]> | undefined>(
        `/api/videos?pagination[page]=${page}&pagination[pageSize]=${pageSize}${videoSuggestQueryBuilder(
          relations || {}
        )}&filters[$and][0][documentId][$not][$eq]=${videoId}`
      );
    },
  });
};
