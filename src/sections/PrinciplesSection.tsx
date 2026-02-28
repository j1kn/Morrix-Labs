import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: '01',
    title: 'Clarity first',
    description: 'If the user is confused, the design failed.',
  },
  {
    number: '02',
    title: 'Systems, not pages',
    description: 'Build patterns that scale.',
  },
  {
    number: '03',
    title: 'Respect the user',
    description: 'Performance, accessibility, and calm UX.',
  },
];

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!section || !header) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(header,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation - more robust 'fill' effect
      gsap.fromTo(cards,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
          rotateX: -15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cards[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="principles"
      className="relative w-full bg-charcoal py-24 lg:py-32 z-30"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lime/5 blur-[120px] pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Header - Centered */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="font-mono text-[10px] tracking-[0.3em] text-lime uppercase mb-4">
            Philosophy
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Our Principles
          </h2>
          <div className="w-12 h-1 bg-lime/30 mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto perspective-1000">
          {principles.map((principle, index) => (
            <div
              key={principle.number}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="group relative"
            >
              {/* Card Container with glassmorphism */}
              <div className="relative h-full p-8 lg:p-10 bg-white/[0.02] border border-white/10 group-hover:border-lime/40 transition-all duration-500 overflow-hidden">

                {/* Hover Glow */}
                <div className="absolute -inset-px bg-gradient-to-br from-lime/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number as background element */}
                <div className="absolute -top-4 -right-2 font-mono text-8xl font-bold text-white/[0.03] group-hover:text-lime/[0.05] transition-colors duration-500 select-none">
                  {principle.number}
                </div>

                <div className="relative z-10">
                  {/* Icon/Number indicator */}
                  <div className="w-8 h-8 flex items-center justify-center font-mono text-xs text-lime border border-lime/30 mb-8 rounded-sm">
                    {principle.number}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-medium text-white mb-4 group-hover:text-lime transition-colors duration-300">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
