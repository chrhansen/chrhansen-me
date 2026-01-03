export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'software' | 'skiing' | 'projects' | 'thoughts';
  readTime: string;
  coverImage?: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'mastering-carving-technique',
    title: 'Mastering the Art of Carving: A Software Engineer\'s Approach',
    excerpt: 'How thinking systematically about edge angles and pressure distribution transformed my skiing technique.',
    date: '2025-12-28',
    category: 'skiing',
    readTime: '6 min read',
    content: `
# Mastering the Art of Carving

As a software engineer, I've always approached problems systematically. When I decided to improve my carving technique, I applied the same analytical mindset.

## The Physics of the Turn

The key insight was understanding edge angle geometry. The relationship between edge angle θ and turn radius R can be approximated by:

\`\`\`
R = L / tan(θ)
\`\`\`

Where L is the sidecut radius of your ski.

## Breaking Down the Movement

1. **Initiation** - Weight transfer begins before the fall line
2. **Apex** - Maximum edge angle, minimum radius
3. **Completion** - Pressure release and transition setup

## What Changed My Skiing

The breakthrough came when I stopped thinking about turning and started thinking about *tilting*. Let the ski's geometry do the work.

> "The best turns happen when you get out of your own way." - Some instructor, probably

Next season, I'm focusing on:
- Earlier weight transfer
- More aggressive angulation
- Quieter upper body

See you on the slopes! 🎿
    `
  },
  {
    slug: 'building-with-rust-and-wasm',
    title: 'Building Fast Web Apps with Rust and WebAssembly',
    excerpt: 'Exploring how Rust and WASM can bring near-native performance to browser-based applications.',
    date: '2025-12-15',
    category: 'software',
    readTime: '8 min read',
    content: `
# Building Fast Web Apps with Rust and WebAssembly

JavaScript has served us well, but sometimes you need more performance. That's where Rust and WebAssembly come in.

## Why Rust for WebAssembly?

Rust compiles to incredibly efficient WASM. No garbage collector means predictable performance.

\`\`\`rust
#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2)
    }
}
\`\`\`

## The Setup

Getting started is straightforward:

1. Install \`wasm-pack\`
2. Create a new lib with \`cargo new --lib\`
3. Add the wasm-bindgen dependency
4. Build with \`wasm-pack build\`

## Performance Results

In my benchmarks, the WASM version was **40x faster** for compute-heavy tasks. The trade-off is increased bundle size and complexity.

## When to Use It

- Image/video processing
- Physics simulations
- Cryptographic operations
- Complex data transformations

Not everything needs WASM. Profile first, optimize second.
    `
  },
  {
    slug: 'side-project-lessons',
    title: 'What 10 Failed Side Projects Taught Me',
    excerpt: 'Reflections on a decade of building things nobody used, and why it was still worth it.',
    date: '2025-12-01',
    category: 'thoughts',
    readTime: '5 min read',
    content: `
# What 10 Failed Side Projects Taught Me

Over the past decade, I've started and abandoned more side projects than I can count. Here's what I learned.

## The Graveyard

- A social network for book clubs (2015)
- An AI-powered meal planner (2017)
- A "Tinder for hiking buddies" app (2018)
- A Chrome extension for productivity (2019)
- ... and many more

## The Lessons

### 1. Ship Early, Learn Fast
Every project that failed taught me something. The ones I never shipped taught me nothing.

### 2. Solve Your Own Problems
My only "successful" side project solves a problem I personally have every day.

### 3. Technology Doesn't Matter
I spent months choosing between frameworks when I should have been talking to users.

> "The best time to ship was yesterday. The second best time is now."

### 4. Perfect is the Enemy of Done
My abandoned projects all have one thing in common: I was waiting for them to be "ready."

## Moving Forward

I'm now working on something new. This time, I shipped an MVP in one weekend. Users are already giving feedback.

That's progress.
    `
  },
  {
    slug: 'local-first-architecture',
    title: 'Why I\'m Going Local-First for My Next App',
    excerpt: 'Exploring the benefits of local-first architecture for building resilient, privacy-respecting applications.',
    date: '2025-11-20',
    category: 'projects',
    readTime: '7 min read',
    content: `
# Why I'm Going Local-First for My Next App

The cloud is great until it isn't. Here's why my next project prioritizes local-first architecture.

## What is Local-First?

Local-first means your data lives on your device first, syncing to the cloud as a secondary concern.

\`\`\`typescript
// Data available instantly, syncs in background
const notes = await localDB.notes.getAll();
syncEngine.push(notes); // Non-blocking
\`\`\`

## The Benefits

1. **Instant Performance** - No network latency for reads
2. **Offline Capable** - Works everywhere, always
3. **Privacy by Default** - Your data stays yours
4. **Resilience** - Server goes down? You're fine.

## The Stack I'm Using

- **SQLite** via better-sqlite3 for local storage
- **CRDT** libraries for conflict resolution
- **libp2p** for peer-to-peer sync

## Trade-offs

It's not all roses:

- More complex conflict resolution
- Larger client bundles
- State management complexity

But for many apps, the trade-offs are worth it.

## The Project

I'm building a personal knowledge base that works offline and syncs across devices. Stay tuned for updates.
    `
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: BlogPost['category']): BlogPost[] => {
  return posts.filter(post => post.category === category);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
