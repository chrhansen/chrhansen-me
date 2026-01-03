import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const statusColors: Record<Project['status'], string> = {
  active: 'bg-emerald-500/20 text-emerald-400',
  completed: 'bg-blue-500/20 text-blue-400',
  archived: 'bg-muted text-muted-foreground',
};

const statusLabels: Record<Project['status'], string> = {
  active: 'Active',
  completed: 'Completed',
  archived: 'Archived',
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover-lift p-6">
      <div className="flex items-start justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </span>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              aria-label="View on GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              aria-label="View live site"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
        {project.title}
      </h3>

      <p className="text-muted-foreground leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-secondary rounded-md text-xs font-medium text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
