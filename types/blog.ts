export type Blog = {
  data: {
    title: string;
    id?: string;
    description?: string;
    by?: string;
    publishedAt?: string;
    relatedIds?: string[];
    previousId?: string;
    type?: 'changelog' | string;
    readingTime?: { text: string; minutes: number; time: number; words: number };
    poster?: string;
  };
  slug: string;
  content: string;
};
