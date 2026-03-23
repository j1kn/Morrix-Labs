"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface RetroGridProps {
  angle?: number;
  opacity?: number;
  cellSize?: number;
  lightLineColor?: string;
  darkLineColor?: string;
}

function RetroGrid({
  angle = 65,
  opacity = 0.3,
  cellSize = 50,
  lightLineColor = "#d1d5db",
  darkLineColor = "#27272a",
}: RetroGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid();
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      ctx.strokeStyle = isDark ? darkLineColor : lightLineColor;
      ctx.lineWidth = 1;

      const rad = (angle * Math.PI) / 180;
      const sin = Math.sin(rad);

      ctx.globalAlpha = opacity;

      for (let x = -canvas.height; x < canvas.width + canvas.height; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + canvas.height * sin, canvas.height);
        ctx.stroke();
      }

      for (let y = -canvas.width; y < canvas.height + canvas.width; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y + canvas.width * Math.tan(rad));
        ctx.stroke();
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const observer = new MutationObserver(drawGrid);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
    };
  }, [angle, opacity, cellSize, lightLineColor, darkLineColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

interface HeroSectionProps {
  title?: string;
  subtitle?: {
    regular?: string;
    gradient?: string;
  };
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaTextSecondary?: string;
  ctaHrefSecondary?: string;
  bottomImage?: {
    light?: string;
    dark?: string;
  };
  gridOptions?: RetroGridProps;
}

export function HeroSection({
  title = "Available for Startup Projects",
  subtitle = { regular: "I build solutions that ", gradient: "actually ship." },
  description = "Hi, I'm Jaskaran — a VibeCoder & Business student who makes technology work for him. From stunning landing pages to full-stack web apps and AI tools, I turn ideas into real products.",
  ctaText = "See My Work",
  ctaHref = "#projects",
  ctaTextSecondary = "Let's Talk",
  ctaHrefSecondary = "#contact",
  bottomImage = {
    light: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    dark: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
  },
  gridOptions = {
    angle: 65,
    opacity: 0.3,
    cellSize: 50,
    lightLineColor: "#d1d5db",
    darkLineColor: "#27272a",
  },
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <RetroGrid {...gridOptions} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block text-xs tracking-widest uppercase text-purple-600 mb-4">
            {title}
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            {subtitle.regular}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {subtitle.gradient}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mb-8">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={ctaHref}
              className="relative h-11 px-6 flex items-center justify-center rounded-full text-sm font-medium overflow-hidden group"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <span className="relative z-10 text-white">{ctaText}</span>
            </Link>

            <Link
              href={ctaHrefSecondary}
              className="h-11 px-6 flex items-center justify-center rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
            >
              {ctaTextSecondary}
            </Link>
          </div>
        </div>
      </div>

      {bottomImage && (
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] md:h-[50vh]">
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-15 dark:hidden"
            style={{
              backgroundImage: `url(${bottomImage.light})`,
            }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15 hidden dark:block"
            style={{
              backgroundImage: `url(${bottomImage.dark})`,
            }}
          />
        </div>
      )}
    </section>
  );
}
