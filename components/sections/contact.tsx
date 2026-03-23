"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Check } from "lucide-react";

interface ContactSectionProps {
  heading?: string;
  subheading?: string;
  email?: string;
  availabilityBadge?: string;
  links?: {
    label: string;
    icon: React.ReactNode;
    href: string;
    note?: string;
  }[];
  ctaPrimary?: {
    label: string;
    href: string;
  };
}

export function ContactSection({
  heading = "Let's build something.",
  subheading = "I'm open to startup projects, SaaS builds, and freelance work. If you've got a vision, I'll help you ship it.",
  email = "jaskaranspace@gmail.com",
  availabilityBadge = "Available for new projects",
  links = [],
  ctaPrimary = {
    label: "Send me an email",
    href: "mailto:jaskaranspace@gmail.com",
  },
}: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-100/50 via-transparent to-transparent dark:from-purple-900/10 pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm rounded-2xl p-8 md:p-12 bg-white/80 dark:bg-zinc-900/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {availabilityBadge}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {heading}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                {subheading}
              </p>

              <button
                onClick={handleCopyEmail}
                className="group flex items-center gap-2 text-lg md:text-xl font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors mb-8"
              >
                <Mail className="w-5 h-5" />
                <span className="relative">
                  {email}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-full transition-all duration-300" />
                </span>
                {copied && (
                  <span className="ml-2 inline-flex items-center gap-1 text-sm text-green-600 dark:text-green-400 animate-fade-in">
                    <Check className="w-4 h-4" /> Copied!
                  </span>
                )}
              </button>

              <div className="flex flex-wrap gap-4 mb-8">
                {links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors text-sm"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href={ctaPrimary.href}
                className="relative inline-flex h-11 px-6 items-center justify-center rounded-full text-sm font-medium overflow-hidden group"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500" />
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <span className="relative z-10 text-white">
                  {ctaPrimary.label}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
