import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Goals, constraints, and user context.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Prototype',
    description: 'Interactive concepts, fast.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Build',
    description: 'Production-ready systems.',
    icon: Code,
  },
  {
    number: '04',
    title: 'Support',
    description: 'Launch, measure, and improve.',
    icon: Rocket,
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const line = lineRef.current;
    const stepElements = stepsRef.current;

    if (!section || !left) return;

    const ctx = gsap.context(() => {
      // Left column fade in
      gsap.fromTo(left,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Line draw animation
      if (line) {
        gsap.fromTo(line,
          { scaleY: 0, transformOrigin: 'top' },
          {
            scaleY: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Steps animation
      stepElements.forEach((step, i) => {
        if (!step) return;
        gsap.fromTo(step,
          { x: '6vw', opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
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
      className="relative w-full bg-charcoal py-24 lg:py-32 z-70"
    >
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Sticky */}
          <div
            ref={leftRef}
            className="lg:w-[40%] lg:sticky lg:top-[18vh] lg:self-start"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
              Process
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              A repeatable loop that keeps projects moving—and surprises minimal.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime text-charcoal font-mono text-xs tracking-wider hover:bg-lime-dark transition-colors"
            >
              Book a discovery call
            </a>
          </div>

          {/* Right Column - Steps */}
          <div className="lg:w-[46%] lg:ml-auto relative">
            {/* Vertical Line */}
            <div
              ref={lineRef}
              className="absolute left-5 top-0 bottom-0 w-px bg-border"
            />

            {/* Steps */}
            <div className="space-y-12 lg:space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    ref={(el) => { if (el) stepsRef.current[index] = el; }}
                    className="relative pl-16"
                  >
                    {/* Step Number Circle */}
                    <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center bg-card border border-border">
                      <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs text-lime">{step.number}</span>
                        <h3 className="font-heading text-lg font-medium text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
