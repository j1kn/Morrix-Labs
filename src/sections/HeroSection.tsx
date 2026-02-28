import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const codeLines = [
  { text: 'const future = await prototype();', color: 'text-lime' },
  { text: 'return build(future);', color: 'text-foreground' },
  { text: '// shipped with love', color: 'text-muted-foreground' },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<HTMLDivElement[]>([]);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const microRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const code = codeRef.current;
    const lines = lineRefs.current;
    const headline = headlineRef.current;
    const subhead = subheadRef.current;
    const cta = ctaRef.current;
    const micros = microRefs.current;

    if (!section || !content || !code || !headline || !subhead || !cta) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Initial state - subtle starting point
      gsap.set([headline, subhead, cta], { opacity: 0, y: 30, scale: 0.98 });
      gsap.set(code, { opacity: 0, x: 20, scale: 0.95 });
      gsap.set(lines, { opacity: 0, x: -10 });
      gsap.set(micros, { opacity: 0 });

      // Entrance animation - extra smooth with refined expo ease
      const entranceTl = gsap.timeline({ delay: 0.3 });

      entranceTl.to(headline, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.6,
        ease: 'power4.out',
      })
        .to(subhead, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
        }, '-=1.3')
        .to(cta, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power4.out',
        }, '-=1.1')
        .to(code, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.8,
          ease: 'power4.out',
        }, '-=1.4')
        .to(lines, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        }, '-=1.2')
        .to(micros, {
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
        }, '-=0.6');

      // Desktop-only pinning and scrubbed exit
      mm.add("(min-width: 1024px)", () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=200%', // stay even longer
            pin: true,
            scrub: 1.2, // smoother float
          },
        });

        // Exit phase - drift out with scale down (starts later)
        scrollTl
          .to(content, {
            y: '-15vh',
            opacity: 0,
            scale: 0.94,
            ease: 'power3.inOut',
          }, 0.7)
          .to(code, {
            x: '8vw',
            y: '8vh',
            opacity: 0,
            scale: 0.88,
            ease: 'power3.inOut',
          }, 0.7);
      });

      // Mobile-only simple exit trigger (no pinning)
      mm.add("(max-width: 1023px)", () => {
        gsap.to(sectionRef.current, {
          opacity: 0,
          y: -50,
          scrollTrigger: {
            trigger: section,
            start: 'bottom 20%', // only fade when nearly gone
            end: 'bottom top',
            scrub: true,
          }
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-charcoal overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full section-padding">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left - Text Content */}
            <div ref={contentRef} className="flex-1 max-w-xl">
              {/* Headline */}
              <h1
                ref={headlineRef}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] mb-8"
              >
                <span className="text-foreground">We prototype the</span>
                <br />
                <span className="text-lime">future</span>
                <span className="text-foreground"> — then ship it.</span>
              </h1>

              {/* Subheadline */}
              <p
                ref={subheadRef}
                className="font-mono text-sm text-muted-foreground tracking-wide mb-10"
              >
                AI interfaces · Web systems · Product experiments
              </p>

              {/* CTA */}
              <button
                ref={ctaRef}
                onClick={scrollToWork}
                className="group inline-flex items-center gap-3 px-6 py-3 border border-border hover:border-lime/50 transition-colors duration-300"
              >
                <span className="font-mono text-xs tracking-wider text-foreground group-hover:text-lime transition-colors">
                  Explore work
                </span>
                <svg
                  className="w-4 h-4 text-foreground group-hover:text-lime group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right - Code Lines */}
            <div
              ref={codeRef}
              className="flex-1 w-full max-w-md lg:max-w-lg"
            >
              <div className="relative p-6 lg:p-8 bg-card border border-border">
                {/* Window controls */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                  <div className="ml-4 font-mono text-xs text-muted-foreground">~/morrix-labs</div>
                </div>

                {/* Code lines */}
                <div className="space-y-3">
                  {codeLines.map((line, index) => (
                    <div
                      key={index}
                      ref={(el) => { if (el) lineRefs.current[index] = el; }}
                      className="flex items-center gap-3"
                    >
                      <span className="font-mono text-xs text-muted-foreground/50 w-6">
                        {index + 1}
                      </span>
                      <span className={`font-mono text-sm ${line.color}`}>
                        {line.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Cursor */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground/50 w-6">4</span>
                  <span className="w-2 h-4 bg-lime/70 animate-pulse" />
                </div>

                {/* Subtle glow */}
                <div className="absolute -inset-px bg-lime/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Micro notes */}
      <div className="absolute bottom-8 left-0 right-0 section-padding flex justify-between items-end">
        <div
          ref={(el) => { if (el) microRefs.current[0] = el; }}
          className="font-mono text-xs text-muted-foreground/60"
        >
          Scroll to enter
        </div>
        <div
          ref={(el) => { if (el) microRefs.current[1] = el; }}
          className="font-mono text-xs text-muted-foreground/60 text-right"
        >
          Based in Berlin · Working worldwide
        </div>
      </div>
    </section>
  );
}
