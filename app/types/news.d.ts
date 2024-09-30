export type News = {
  id: string;
  title: string;
  summary: string;
  original_link: string;
  image_link: string;
  published_at: string;
  created_at: string;
  updated_at: string;
};

type NewsCategory = {
  id: string;
  name: string;
  url: string;
};
