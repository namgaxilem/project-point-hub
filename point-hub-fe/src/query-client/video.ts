import { http } from "@/query-client/http";
import { Category } from "@/types/Category";
import { useQuery } from "@tanstack/react-query";

export const useVideosHomePage = () => {
  return useQuery({
    queryKey: ["useVideosHomePage"],
    queryFn: (): Promise<Category[]> => {
      return http
        .get<any>(`/api/videos`)
        .then(({ data }) => Promise.resolve(data));
    },
  });
};
