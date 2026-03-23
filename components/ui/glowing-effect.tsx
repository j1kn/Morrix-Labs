"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface GlowingItemProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingItem({
  children,
  className,
}: GlowingItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isInteractive = true;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        isInteractive
          ? { rotateX, rotateY, transformPerspective: 1000 }
          : undefined
      }
      className={cn(
        "relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 transition-colors hover:border-purple-200 dark:hover:border-purple-800/50",
        isInteractive && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface GlowingEffectProps {
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
  borderWidth?: number;
  className?: string;
  children?: React.ReactNode;
}

export function GlowingEffect({
  className,
  children,
}: GlowingEffectProps) {
  return (
    <GlowingItem className={className}>
      {children}
    </GlowingItem>
  );
}

interface SkillGridProps {
  sectionHeading?: {
    label?: string;
    title?: string;
    subtitle?: string;
  };
  gridItems?: {
    area?: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  glowingEffectProps?: GlowingEffectProps;
}

export function SkillGrid({
  sectionHeading = {
    label: "Skills",
    title: "My toolbox.",
    subtitle: "The tools and tech I use to build fast and ship faster.",
  },
  gridItems = [],
  glowingEffectProps = {
    spread: 40,
    glow: true,
    disabled: false,
    proximity: 64,
    inactiveZone: 0.01,
    borderWidth: 3,
  },
}: SkillGridProps) {
  return (
    <section id="skills" className="py-24 md:py-32 bg-zinc-50/50 dark:bg-zinc-950/50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          {gridItems.map((item, i) => (
            <div
              key={i}
              className={cn("md:[grid-area:auto]", item.area)}
            >
              <GlowingEffect {...glowingEffectProps} className="h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </GlowingEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
