import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { PostCategory, PostMeta } from "@/lib/posts-types";

export interface Post extends PostMeta {
  content: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

const readPostFiles = () =>
  fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .sort();

const parsePost = (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const meta: PostMeta = {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    category: data.category as PostCategory,
    readTime: data.readTime,
    coverImage: data.coverImage,
  };

  return { meta, content };
};

export const getPostSlugs = () => readPostFiles().map((file) => file.replace(/\.mdx$/, ""));

export const getAllPosts = (): PostMeta[] => {
  const posts = getPostSlugs().map((slug) => parsePost(slug).meta);

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): Post | null => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const { meta, content } = parsePost(slug);
  return { ...meta, content };
};

export const getRecentPosts = (count = 3): PostMeta[] => getAllPosts().slice(0, count);
