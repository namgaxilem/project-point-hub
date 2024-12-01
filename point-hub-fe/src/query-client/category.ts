import { http } from '@/query-client/http';
import { Category } from '@/types/Category';
import { useQuery } from '@tanstack/react-query';

export const useCategories = () => {
  return useQuery({
    queryKey: ['useCategories'],
    queryFn: (): Promise<Category[]> => {
      return http
        .get<any>(`/api/all-categories-with-video-counts`)
        .then(({ data }) => Promise.resolve(data));
    },
  });
};
