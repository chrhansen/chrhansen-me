import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import { MdxImageCarousel } from "@/components/MdxImageCarousel";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import type { PostCategory } from "@/lib/posts-types";

const categoryColors: Record<PostCategory, string> = {
  software: "bg-blue-500/20 text-blue-400",
  skiing: "bg-emerald-500/20 text-emerald-400",
  projects: "bg-purple-500/20 text-purple-400",
  thoughts: "bg-amber-500/20 text-amber-400",
};

const categoryLabels: Record<PostCategory, string> = {
  software: "Software",
  skiing: "Skiing",
  projects: "Projects",
  thoughts: "Thoughts",
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Christian Hansen`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: {
      ImageCarousel: MdxImageCarousel,
    },
  });

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                {categoryLabels[post.category]}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {post.coverImage ? (
              <div className="mb-6 overflow-hidden rounded-xl border border-border">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                  priority
                />
              </div>
            ) : null}

            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </header>

          <div className="prose-custom text-lg">{content}</div>

          <footer className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft size={18} />
              Back to all posts
            </Link>
          </footer>
        </div>
      </div>
    </article>
  );
}
