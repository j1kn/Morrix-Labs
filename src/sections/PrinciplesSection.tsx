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

      // Cards animation
      cards.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 30, opacity: 0, scale: 0.99 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="principles"
      className="relative w-full bg-charcoal py-24 lg:py-32 z-60"
    >
      <div className="section-padding">
        {/* Header - Centered */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Principles
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            We ship better work when we follow a few simple rules.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={principle.number}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="text-center p-8 lg:p-10"
            >
              {/* Number */}
              <div className="font-mono text-5xl lg:text-6xl font-medium text-lime/20 mb-6">
                {principle.number}
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-medium text-foreground mb-3">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
