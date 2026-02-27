import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Nova Dashboard',
    description: 'AI-powered analytics interface for real-time data visualization and insights.',
    tags: ['UI', 'React', 'AI'],
    link: '#',
  },
  {
    name: 'Lumen Identity',
    description: 'Complete brand system for a climate-tech startup, from logo to digital presence.',
    tags: ['Brand', 'Web'],
    link: '#',
  },
  {
    name: 'Arcade Mode',
    description: 'Experimental interaction playground exploring WebGL and motion design.',
    tags: ['WebGL', 'Motion'],
    link: '#',
  },
];

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const items = itemsRef.current;

    if (!section || !header) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(header,
        { y: 22, opacity: 0 },
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

      // Items animation
      items.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(item,
          { x: '-8vw', opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: i * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full bg-charcoal py-24 lg:py-32 z-50"
    >
      <div className="section-padding">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A few recent builds—designed, engineered, and shipped.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.name}
              ref={(el) => { if (el) itemsRef.current[index] = el; }}
              className="border-t border-border last:border-b"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full py-6 lg:py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-left group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="font-heading text-xl lg:text-2xl font-medium text-foreground group-hover:translate-x-2 transition-transform duration-300">
                      {project.name}
                    </h3>
                    <ChevronRight 
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        expandedIndex === index ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} 
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  {/* Expanded Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-lg">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-lime font-mono text-xs tracking-wider hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View case study
                      <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-muted-foreground px-2 py-1 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            View all projects
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
