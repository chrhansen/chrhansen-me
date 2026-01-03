import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  const activeProjects = projects.filter(p => p.status === 'active');
  const completedProjects = projects.filter(p => p.status === 'completed');
  const archivedProjects = projects.filter(p => p.status === 'archived');

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of side projects, experiments, and things I've built. Some are still in progress, others have been shipped.
            </p>
          </div>

          {/* Active Projects */}
          {activeProjects.length > 0 && (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Currently Working On
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {activeProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Completed Projects */}
          {completedProjects.length > 0 && (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Completed
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {completedProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Archived Projects */}
          {archivedProjects.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Archived
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {archivedProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
