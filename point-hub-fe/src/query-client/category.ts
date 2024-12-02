import { LocaleType } from '@/app/dictionaries';
import { http } from '@/query-client/http';
import { Category } from '@/types/Category';
import { useQuery } from '@tanstack/react-query';

export const useCategories = (locale: LocaleType) => {
  return useQuery({
    queryKey: ['useCategories'],
    queryFn: (): Promise<Category[]> => {
      return http
        .get<any>(`/api/all-categories-with-video-counts`, locale)
        .then(({ data }) => Promise.resolve(data));
    },
  });
};
