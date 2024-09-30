import { BASE_API_URL, QUERY_KEY } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import { News } from "../types/news";

export function useQueryNews(categoryId: string) {
  const fetchNews = async (): Promise<News[]> => {
    const url = `${BASE_API_URL}/news/categories/${categoryId}/news`;
    const response = await fetch(url);
    if (!response.ok) {
      console.log(response.json());
      throw new Error("Something went wrong");
    }
    return response.json();
  };

  return useQuery<News[]>({
    queryKey: [QUERY_KEY.NEWS, categoryId],
    queryFn: fetchNews,
  });
}
