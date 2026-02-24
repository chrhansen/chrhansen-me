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
    id: 'shred-day',
    title: 'shred-day',
    description: 'Web App for https://shred.day. Where skiers keep track of their skiing days.',
    technologies: ['TypeScript', 'Ruby on Rails', 'PostgreSQL', 'React'],
    githubUrl: 'https://github.com/chrhansen/shred-day',
    liveUrl: 'https://shred.day',
    status: 'active'
  },
  {
    id: 'innput',
    title: 'innput',
    description: 'End-to-end encrypted forms. Signal, but for forms.',
    technologies: ['TypeScript', 'React', 'Ruby on Rails', 'E2EE'],
    githubUrl: 'https://github.com/chrhansen/innput',
    liveUrl: 'https://innput.app',
    status: 'active'
  },
  {
    id: 'poser',
    title: 'poser',
    description: 'A tool to give feedback on skiing techniques. Built by @chrhansen in Innsbruck, Austria.',
    technologies: ['Python','Ruby on Rails','SAM2', 'PyTorch', 'SAM3D Body', 'React'],
    githubUrl: 'https://github.com/chrhansen/poser',
    liveUrl: 'https://poser.pro',
    status: 'active'
  },
  {
    id: 'pg-id',
    title: 'pg-id',
    description: 'ULID, but with fewer random bits, output as Base58, with prefix.',
    technologies: ['PLpgSQL', 'PostgreSQL'],
    githubUrl: 'https://github.com/chrhansen/pg-id',
    status: 'completed'
  },
  {
    id: 'cobalt',
    title: 'Cobalt.io',
    description: 'PTaaS cybersecurity startup I co-founded.',
    technologies: ['PTaaS', 'Cybersecurity', 'React', 'Ruby on Rails'],
    githubUrl: 'https://github.com/cobalthq',
    liveUrl: 'https://www.cobalt.io',
    status: 'completed'
  }
];
