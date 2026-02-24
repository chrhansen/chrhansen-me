import Image from "next/image";
import { MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";
import { projects } from "@/data/projects";

const technologiesIWorkWith = Array.from(
  new Set(projects.flatMap((project) => project.technologies)),
);

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A software engineer who thinks skiing is just applied physics.
            </p>
            <div className="mt-6">
              <Image
                src="/chrhansen.jpeg"
                alt="Christian Hansen"
                width={220}
                height={220}
                className="rounded-xl border border-border object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose-custom text-lg mb-16">
            <p className="mb-6">
              Hi, I'm Christian. I'm a Danish software engineer based in Innsbruck, Austria with a passion for
              building software and spending as much time as possible on the
              slopes.
            </p>

            <p className="mb-6">
              By summer, I work on software. By winter, I work on my skiing technique, which is a never-ending project of its own.
            </p>

            <p className="mb-6">
              When I'm not coding, you'll find me analyzing ski technique with perhaps too much
              rigor, or working on side projects that may or may not see the light of day.
            </p>

            <p>
              This blog is my space to think out loud about fun stuff I build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Innsbruck, Austria</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Work</h3>
                <p className="text-muted-foreground text-sm">Software Engineer</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Focus</h3>
                <p className="text-muted-foreground text-sm">AI Coding, Software, Skiing</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Interests</h3>
                <p className="text-muted-foreground text-sm">Skiing, Building, Learning</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              Technologies I Work With
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologiesIWorkWith.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-6">
              Want to chat about software, skiing, or potential collaborations?
            </p>
            <a
              href="mailto:christiandanmark@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
