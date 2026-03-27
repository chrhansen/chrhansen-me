export type PostCategory = "software" | "skiing" | "projects" | "thoughts" | "vibe-coding";

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: PostCategory;
  readTime: string;
  coverImage?: string;
}
