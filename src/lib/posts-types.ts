export type PostCategory = "software" | "skiing" | "projects" | "thoughts";

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: PostCategory;
  readTime: string;
  coverImage?: string;
}
