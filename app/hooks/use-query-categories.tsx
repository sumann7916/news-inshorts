import { BASE_API_URL, QUERY_KEY } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import { NewsCategory } from "../types/news";

export function useQueryCategory() {
  const fetchNewsCategory = async (): Promise<NewsCategory[]> => {
    const url = `${BASE_API_URL}/news/categories`;
    const response = await fetch(url);
    if (!response.ok) {
      console.log(response.json());
      throw new Error("Something went wrong");
    }
    return response.json();
  };

  return useQuery<NewsCategory[]>({
    queryKey: [QUERY_KEY.CATEGORIES],
    queryFn: fetchNewsCategory,
  });
}
