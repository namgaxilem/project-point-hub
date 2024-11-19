import { http } from "@/lib/http";
import { Category } from "@/types/Category";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  return useQuery({
    queryKey: ["useCategories"],
    queryFn: (): Promise<Category[]> => {
      return http
        .get<any>(`/api/categories?locale=en`)
        .then(({ data }) => Promise.resolve(data));
    },
  });
};
