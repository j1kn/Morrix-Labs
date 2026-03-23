"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-zinc-100 dark:border-zinc-900"
          : "bg-transparent"
      )}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#hero"
            className="font-geist font-semibold text-sm tracking-tight"
          >
            Jaskaran Singh
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="relative h-8 px-4 flex items-center justify-center rounded-full text-xs font-medium overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_100%] animate-spin-slow">
              <span className="absolute inset-0 rounded-full bg-white dark:bg-black" />
            </span>
            <span className="relative z-10">Let&apos;s Talk</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
