export type News = {
  id: string;
  title: string;
  summary: string;
  original_link: string;
  image_link: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  creator: NewsCreator;
};

type NewsCategory = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

type NewsCreator = {
  id: string;
  name: string;
  url: string;
};
