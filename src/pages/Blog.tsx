import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { BlogCard } from '@/components/BlogCard';
import { posts, type BlogPost } from '@/data/posts';

const categories: { value: BlogPost['category'] | 'all'; label: string }[] = [
  { value: 'all', label: 'All Posts' },
  { value: 'software', label: 'Software' },
  { value: 'skiing', label: 'Skiing' },
  { value: 'projects', label: 'Projects' },
  { value: 'thoughts', label: 'Thoughts' },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<BlogPost['category'] | 'all'>('all');

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Thoughts on software development, skiing technique, and building things that matter.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {sortedPosts.map((post, index) => (
              <div 
                key={post.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {sortedPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No posts found in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
