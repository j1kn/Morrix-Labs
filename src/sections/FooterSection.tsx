import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(content,
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={sectionRef}
      className="relative w-full bg-charcoal py-16 lg:py-20 z-90"
    >
      <div ref={contentRef} className="section-padding">
        {/* Top Area */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
          {/* Left - Logo & Tagline */}
          <div>
            <div className="font-mono text-lg tracking-wide text-foreground mb-3">
              morrix labs
            </div>
            <p className="text-sm text-muted-foreground">
              Prototype the future—then ship it.
            </p>
          </div>

          {/* Right - Links */}
          <nav className="flex flex-wrap gap-8">
            <button
              onClick={() => scrollToSection('work')}
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <button
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </button>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-8" />

        {/* Bottom Area */}
        <div className="text-center">
          <p className="font-mono text-xs text-muted-foreground/60">
            © 2026 Morrix Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
