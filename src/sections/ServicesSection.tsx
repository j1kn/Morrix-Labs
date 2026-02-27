import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Globe, FlaskConical, Palette } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'AI Prototyping',
    description: 'Conversational interfaces, agents, and tools—built with modern LLM stacks.',
    icon: Cpu,
    tags: ['LLMs', 'Agents', 'Chatbots'],
  },
  {
    title: 'Web Systems',
    description: 'Design systems, component libraries, and scalable frontends.',
    icon: Globe,
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Product Experiments',
    description: 'Rapid builds to validate ideas before full investment.',
    icon: FlaskConical,
    tags: ['MVP', 'Rapid', 'Validate'],
  },
  {
    title: 'Creative Direction',
    description: 'Brand systems, motion language, and interface craft.',
    icon: Palette,
    tags: ['Brand', 'Motion', 'UI/UX'],
  },
];

export function ServicesSection() {
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
        { y: 24, opacity: 0 },
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
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: i * 0.08,
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
      id="services"
      className="relative w-full bg-charcoal py-24 lg:py-32 z-30"
    >
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-padding relative">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-lime/50" />
            <span className="font-mono text-xs text-lime/70 tracking-wider uppercase">What we do</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A small set of high-leverage offerings—designed to move fast without breaking quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => { if (el) cardsRef.current[index] = el; }}
                className="group p-6 lg:p-8 bg-card border border-border hover:border-lime/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(183, 255, 58, 0.06) 0%, transparent 60%)'
                  }}
                />
                
                <div className="relative flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border group-hover:border-lime/30 bg-charcoal transition-colors">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-lime transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-medium text-foreground mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-muted-foreground/70 px-2 py-1 border border-border/50 group-hover:border-lime/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-lime/20 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
