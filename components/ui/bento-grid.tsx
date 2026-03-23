"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  name: string;
  className?: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  href: string;
  cta: string;
  backgroundImage?: string;
}

function BentoCard({
  name,
  className,
  icon,
  description,
  features,
  href,
  cta,
  backgroundImage,
}: BentoCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 transition-colors hover:border-purple-200 dark:hover:border-purple-800/50",
        className
      )}
    >
      {backgroundImage && (
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
          {icon}
        </div>

        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
            >
              {feature}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:gap-2 gap-1 transition-all">
          {cta}
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </motion.a>
  );
}

interface BentoGridProps {
  sectionHeading?: {
    label?: string;
    title?: string;
    subtitle?: string;
  };
  cards?: BentoCardProps[];
}

export function BentoGrid({
  sectionHeading = {
    label: "Projects",
    title: "Things I've shipped.",
    subtitle: "Real products. Real users. Built solo.",
  },
  cards = [],
}: BentoGridProps) {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-16">
          <span className="text-xs tracking-widest uppercase text-purple-600 mb-2 block">
            {sectionHeading.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {sectionHeading.title}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl">
            {sectionHeading.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <BentoCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
