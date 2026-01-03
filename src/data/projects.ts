export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'active' | 'completed' | 'archived';
}

export const projects: Project[] = [
  {
    id: 'local-notes',
    title: 'LocalNotes',
    description: 'A privacy-focused, local-first note-taking app with real-time sync across devices using CRDTs.',
    technologies: ['Rust', 'TypeScript', 'SQLite', 'WebAssembly'],
    githubUrl: 'https://github.com',
    status: 'active'
  },
  {
    id: 'ski-tracker',
    title: 'SkiMetrics',
    description: 'GPS-based ski tracking app that analyzes your runs, calculates edge angles, and provides technique feedback.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'MapBox'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    status: 'active'
  },
  {
    id: 'code-review-bot',
    title: 'ReviewBot',
    description: 'AI-powered GitHub bot that provides intelligent code review suggestions and catches common issues.',
    technologies: ['Python', 'OpenAI API', 'GitHub Actions'],
    githubUrl: 'https://github.com',
    status: 'completed'
  },
  {
    id: 'terminal-portfolio',
    title: 'Terminal Portfolio',
    description: 'An interactive terminal-style portfolio website built with React and styled-components.',
    technologies: ['React', 'TypeScript', 'Styled Components'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    status: 'archived'
  }
];
