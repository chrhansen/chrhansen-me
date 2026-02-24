import Image from "next/image";
import { Github, Linkedin, Mail, X as XIcon } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/chrhansen", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/christianhansen/", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/chrhansen", label: "X" },
  { icon: Mail, href: "mailto:christiandanmark@gmail.com", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Image
                src="/chrhansen-logo.png"
                alt="Christian Hansen logo"
                width={28}
                height={28}
                className="h-7 w-7 rounded"
              />
              <p className="font-display text-lg font-semibold text-foreground">
                chr<span className="text-primary">hansen</span>
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Software Engineer & Ski Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Christian Hansen. Built with Next.js, React, and TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};
