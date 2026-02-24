"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/blog", label: "Blog" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
];

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? pathname === path : pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Image
              src="/chrhansen-logo.png"
              alt="Christian Hansen logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded"
            />
            <span>
              chr<span className="text-primary">hansen</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(path) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    href={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg font-medium transition-colors hover:text-primary ${
                      isActive(path) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
