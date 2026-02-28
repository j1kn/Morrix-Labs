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
        <path d="M12.924 1.109a1.05 1.05 0 00-1.848 0L9.423 4.21c-.138.25-.42.394-.702.36L5.232 4.131a1.05 1.05 0 00-1.16 1.16l.439 3.489c.034.282-.11.564-.36.702l-3.101 1.653a1.05 1.05 0 000 1.848l3.101 1.653c.25.138.394.42.36.702l-.44 3.489a1.05 1.05 0 001.16 1.16l3.489-.439c.282-.034.564.11.702.36l1.653 3.101a1.05 1.05 0 001.848 0l1.653-3.101c.138-.25.42-.394.702-.36l3.489.439a1.05 1.05 0 001.16-1.16l-.439-3.489c-.034-.282.11-.564.36-.702l3.101-1.653a1.05 1.05 0 000-1.848l-3.101-1.653c-.25-.138-.394-.42-.36-.702l.44-3.489a1.05 1.05 0 00-1.16-1.16l-3.489.439c-.282.034-.564-.11-.702-.36L12.924 1.109z" />
      </svg>
    ),
  },
  {
    name: 'Clawdbot',
    color: '#7DD3FC',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.071-7.071l-1.414 1.414M7.757 16.243l-1.414 1.414m10.728 0l1.414 1.414M7.757 7.757L6.343 6.343M12 7a5 5 0 100 10 5 5 0 000-10z" />
      </svg>
    ),
  },
  {
    name: 'AntiGravity',
    color: '#B7FF3A',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: 'OpenCode',
    color: '#F472B6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
      const mm = gsap.matchMedia();

      // Desktop: Cinematic pinning with extended stay
      mm.add("(min-width: 1024px)", () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=250%', // extra long stay
            pin: true,
            scrub: 1,
          },
        });

        // Entrance (0-20%)
        scrollTl
          .fromTo(text,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, ease: 'expo.out' },
            0.1
          )
          .fromTo(stack,
            { y: 70, opacity: 0 },
            { y: 0, opacity: 1, ease: 'expo.out' },
            0.2
          );

        // Individual itmes stagger
        items.forEach((item, i) => {
          if (!item) return;
          scrollTl.fromTo(item,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, ease: 'power3.out' },
            0.3 + i * 0.05
          );
        });

        // Exit (85-100%) - stays much longer
        scrollTl
          .to([text, stack],
            { y: -50, opacity: 0, stagger: 0.1, ease: 'power2.inOut' },
            0.85
          );
      });

      // Mobile: Natural flow (No pinning)
      mm.add("(max-width: 1023px)", () => {
        // Simple entrance triggered by view
        gsap.fromTo([text, stack],
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Items stagger
        items.forEach((item, i) => {
          if (!item) return;
          gsap.fromTo(item,
            { y: 15, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-charcoal overflow-hidden z-20"
    >
      <div className="min-h-screen flex items-center justify-center section-padding py-24 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-24 max-w-6xl mx-auto">

          {/* Text Block - Now first in mobile and left on desktop */}
          <div ref={textRef} className="order-1 lg:order-1 flex-1 max-w-xl text-center lg:text-left">
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
            <div className="w-24 h-px bg-border mb-8 mx-auto lg:mx-0" />

            {/* Body */}
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
              We're a small team of designers and engineers who turn complex ideas into fast,
              usable products. We prototype early, iterate in public, and ship work that lasts.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
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

          {/* Tech Stack - Now second in mobile and fixed to right side on desktop */}
          <div
            ref={stackRef}
            className="order-2 lg:order-2 flex flex-col w-full sm:w-[320px] flex-shrink-0 items-center lg:items-start"
          >
            <div className="w-full p-6 lg:p-8 bg-card border border-border shadow-2xl relative group">
              {/* Subtle top light effect */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />

              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-8 opacity-50">
                Core Stack
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {techStack.map((tool, index) => (
                  <div
                    key={tool.name}
                    ref={(el) => { if (el) itemRefs.current[index] = el; }}
                    className="group/item flex items-center gap-4 p-3 hover:bg-white/5 transition-all duration-300 rounded-sm"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-sm bg-charcoal border border-border group-hover/item:border-current transition-all duration-500"
                      style={{ color: tool.color }}
                    >
                      {tool.icon}
                    </div>
                    <span className="font-mono text-xs text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="mt-8 flex items-center gap-4 opacity-40 group hover:opacity-100 transition-opacity">
              <div className="w-8 h-px bg-lime transition-all group-hover:w-12" />
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                vibe coding
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
