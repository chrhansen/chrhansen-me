import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/data/posts';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const categoryColors: Record<BlogPost['category'], string> = {
  software: 'bg-blue-500/20 text-blue-400',
  skiing: 'bg-emerald-500/20 text-emerald-400',
  projects: 'bg-purple-500/20 text-purple-400',
  thoughts: 'bg-amber-500/20 text-amber-400',
};

const categoryLabels: Record<BlogPost['category'], string> = {
  software: 'Software',
  skiing: 'Skiing',
  projects: 'Projects',
  thoughts: 'Thoughts',
};

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article 
      className={`group bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover-lift ${
        featured ? 'p-8' : 'p-6'
      }`}
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
            {categoryLabels[post.category]}
          </span>
        </div>

        <h3 className={`font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-3 ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          {post.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          <span className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Read more <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </article>
  );
};
