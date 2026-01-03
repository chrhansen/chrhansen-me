import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { getPostBySlug, type BlogPost as BlogPostType } from '@/data/posts';

const categoryColors: Record<BlogPostType['category'], string> = {
  software: 'bg-blue-500/20 text-blue-400',
  skiing: 'bg-emerald-500/20 text-emerald-400',
  projects: 'bg-purple-500/20 text-purple-400',
  thoughts: 'bg-amber-500/20 text-amber-400',
};

const categoryLabels: Record<BlogPostType['category'], string> = {
  software: 'Software',
  skiing: 'Skiing',
  projects: 'Projects',
  thoughts: 'Thoughts',
};

// Simple markdown parser for basic formatting
const parseMarkdown = (content: string): string => {
  let html = content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-display font-semibold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-display font-semibold mt-10 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-display font-bold mt-8 mb-6">$1</h1>')
    // Bold and Italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">$1</blockquote>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
    // Line breaks
    .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
    // Lists
    .replace(/^- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>');

  // Handle numbered lists
  html = html.replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4 mb-2">$2</li>');

  // Handle code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm"><code>${code.trim()}</code></pre>`;
  });

  return `<p class="mb-4 leading-relaxed">${html}</p>`;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                  {categoryLabels[post.category]}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

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

            {/* Content */}
            <div 
              className="prose-custom text-lg"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
            />

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-border">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <ArrowLeft size={18} />
                Back to all posts
              </Link>
            </footer>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
