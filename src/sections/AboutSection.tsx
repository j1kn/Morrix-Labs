import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Tech stack with brand colors and custom SVG icons
const techStack = [
  {
    name: 'Claude Code',
    color: '#D4A574',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <circle cx="6" cy="6" r="2" /><circle cx="12" cy="6" r="2" /><circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="18" cy="12" r="2" />
        <circle cx="6" cy="18" r="2" /><circle cx="12" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
      </svg>
    ),
  },
  {
    name: 'Clawdbot',
    color: '#7DD3FC',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4M8 16h.01M16 16h.01" />
      </svg>
    ),
  },
  {
    name: 'AntiGravity',
    color: '#B7FF3A',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 19V5M12 5L7 10M12 5L17 10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21h14" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: 'OpenCode',
    color: '#F472B6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    color: '#3ECF8E',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.35 23.35L10.5 13H18.5L12.65 0.65L13.5 11H5.5L11.35 23.35Z" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#FFFFFF',
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="w-6 h-6">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.6c-1.1-1.6-1.7-3.4-1.7-5.4V36.7c0-1 .8-1.8 1.8-1.8 1 0 1.8.8 1.8 1.8v11.4c0 1.1.3 2.1 1 2.9l66.9 88.4c3.4-6.4 5.3-13.7 5.3-21.4 0-35.3-28.7-64-64-64zM100.2 34.9c0-1 .8-1.8 1.8-1.8 1 0 1.8.8 1.8 1.8V93c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8V34.9z" />
      </svg>
    ),
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const stack = stackRef.current;
    const text = textRef.current;
    const items = itemRefs.current;

    if (!section || !stack || !text) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
        },
      });

      // ENTRANCE (0% - 30%) - smooth
      scrollTl
        .fromTo(stack,
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(text,
          { x: '50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );

      // Stack items stagger
      items.forEach((item, i) => {
        if (!item) return;
        scrollTl.fromTo(item,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.05 + i * 0.02
        );
      });

      // EXIT (70% - 100%) - smooth
      scrollTl
        .fromTo(stack,
          { x: 0, opacity: 1 },
          { x: '-15vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(text,
          { x: 0, opacity: 1 },
          { x: '-8vw', opacity: 0, ease: 'power2.in' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-charcoal overflow-hidden z-20"
    >
      <div className="min-h-screen flex items-center justify-center section-padding gap-8 lg:gap-16">

        {/* Left Side - Tech Stack (Vertical) */}
        <div
          ref={stackRef}
          className="hidden lg:flex flex-col w-[280px] flex-shrink-0"
        >
          <div className="p-6 bg-card border border-border">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-6">
              Tech Stack
            </div>

            <div className="space-y-1">
              {techStack.map((tool, index) => (
                <div
                  key={tool.name}
                  ref={(el) => { if (el) itemRefs.current[index] = el; }}
                  className="group flex items-center gap-4 p-3 hover:bg-charcoal transition-colors duration-300 cursor-default"
                >
                  {/* Icon with brand color */}
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded bg-charcoal border border-border group-hover:border-current transition-colors duration-300"
                    style={{ color: tool.color }}
                  >
                    {tool.icon}
                  </div>

                  {/* Name */}
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative line */}
          <div className="mt-6 flex items-center gap-3">
            <div className="w-12 h-px bg-lime/30" />
            <span className="font-mono text-[10px] text-muted-foreground/50">
              vibe coding
            </span>
          </div>
        </div>

        {/* Text Block */}
        <div ref={textRef} className="flex-1 max-w-2xl">
          {/* Eyebrow */}
          <div className="font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase mb-6">
            About Morrix Labs
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] mb-8">
            <span className="text-foreground">Design is a system.</span>
            <br />
            <span className="text-foreground">Code is the medium.</span>
          </h2>

          {/* Divider */}
          <div className="w-32 h-px bg-border mb-8" />

          {/* Body */}
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
            We're a small team of designers and engineers who turn complex ideas into fast,
            usable products. We prototype early, iterate in public, and ship work that lasts.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime text-charcoal font-mono text-xs tracking-wider hover:bg-lime-dark transition-colors"
            >
              Start a project
            </a>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-border font-mono text-xs tracking-wider text-foreground hover:border-foreground/30 transition-colors">
              Download capabilities (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
