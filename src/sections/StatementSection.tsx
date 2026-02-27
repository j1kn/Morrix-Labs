import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function StatementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;

    if (!section || !bg || !content) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%): Background scales in from left
      scrollTl
        .fromTo(bg,
          { scaleX: 0, transformOrigin: 'left' },
          { scaleX: 1, ease: 'none' },
          0
        )
        .fromTo(content,
          { y: '18vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0
        );

      // SETTLE (30% - 70%): Hold

      // EXIT (70% - 100%): Background scales out to right
      scrollTl
        .fromTo(bg,
          { scaleX: 1, transformOrigin: 'right' },
          { scaleX: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(content,
          { y: 0, opacity: 1 },
          { y: '-12vh', opacity: 0, ease: 'power2.in' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToPrinciples = () => {
    const principlesSection = document.getElementById('principles');
    if (principlesSection) {
      principlesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden z-40"
    >
      {/* Lime Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-lime"
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] text-charcoal mb-8">
          Great work lives
          <br />
          in the details.
        </h2>

        <p className="font-mono text-sm text-charcoal/70 tracking-wide mb-12 max-w-md">
          We design the invisible: performance, accessibility, and calm UX.
        </p>

        <button
          onClick={scrollToPrinciples}
          className="group inline-flex items-center gap-3 px-6 py-3 border border-charcoal/30 hover:border-charcoal transition-colors duration-300"
        >
          <span className="font-mono text-xs tracking-wider text-charcoal">
            See our principles
          </span>
          <svg
            className="w-4 h-4 text-charcoal group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
