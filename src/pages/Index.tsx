import { Link } from 'react-router-dom';
import { ArrowRight, Code, Mountain, Lightbulb } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { BlogCard } from '@/components/BlogCard';
import { getRecentPosts } from '@/data/posts';

const Index = () => {
  const recentPosts = getRecentPosts(3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Hello, I'm Christian
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Software Engineer & <span className="text-gradient">Ski Enthusiast</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              I write about software development, skiing technique, and the lessons learned from building things. Currently exploring local-first architectures and perfecting my carving.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Read the Blog <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
            What I Write About
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover-lift">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-blue-400" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Software Development
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Deep dives into Rust, TypeScript, system design, and the craft of building reliable software.
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover-lift">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <Mountain className="text-emerald-400" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Skiing Technique
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Analyzing the biomechanics of skiing with an engineer's perspective on technique improvement.
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover-lift">
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-amber-400" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Lessons & Thoughts
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reflections on building products, failed experiments, and the journey of continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Recent Posts
            </h2>
            <Link
              to="/blog"
              className="text-primary hover:underline text-sm font-medium flex items-center gap-1"
            >
              View all posts <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <div 
                key={post.slug} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
