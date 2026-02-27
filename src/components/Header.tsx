import { useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-charcoal/95 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
        }`}
    >
      <div className="section-padding py-5 flex items-center justify-between">
        {/* Logo - Bigger and more visible */}
        <div className="flex items-center -my-6">
          <img
            src="/images/logo.png"
            alt="Morrix Labs"
            className="h-24 w-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-8">
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
        </nav>
      </div>
    </header>
  );
}
