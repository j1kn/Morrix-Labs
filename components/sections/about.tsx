"use client";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface AboutSectionProps {
  heading?: string;
  subheading?: string;
  bio?: string;
  timeline?: TimelineItem[];
  stats?: StatItem[];
}

export function AboutSection({
  heading = "Builder. Student. VibeCoder.",
  subheading = "Based in Coventry, UK",
  bio = "I'm Jaskaran Singh — a Business Management student at Coventry University who codes. I don't wait for perfect conditions; I use the best tools available to ship real products fast. I've built AI automation tools, Web3 platforms, and landing pages that convert. At LC Labs, I wore every hat from developer to marketer. I'm currently open to working with early-stage startups who want to move fast.",
  timeline = [],
  stats = [],
}: AboutSectionProps) {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <div>
            <span className="text-xs tracking-widest uppercase text-purple-600 mb-2 block">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              {heading}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">
              {subheading}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {bio}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
            <div className="pl-8 space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-purple-600 border-2 border-white dark:border-zinc-900" />
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
