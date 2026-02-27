import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '@/components/Header';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { StatementSection } from '@/sections/StatementSection';
import { WorkSection } from '@/sections/WorkSection';
import { PrinciplesSection } from '@/sections/PrinciplesSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { ContactSection } from '@/sections/ContactSection';
import { FooterSection } from '@/sections/FooterSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Wait for all ScrollTriggers to be created
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      // Build ranges and snap targets from pinned sections
      const pinnedRanges = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      // Create global snap
      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            // Check if within any pinned range (with small buffer)
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            
            if (!inPinned) return value; // Flowing section: free scroll

            // Find nearest pinned center
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );

            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-charcoal min-h-screen">
      <Header />
      
      <main className="relative">
        {/* z-index stacking: later sections above earlier sections */}
        <div className="relative z-10">
          <HeroSection />
        </div>
        <div className="relative z-20">
          <AboutSection />
        </div>
        <div className="relative z-30">
          <ServicesSection />
        </div>
        <div className="relative z-40">
          <StatementSection />
        </div>
        <div className="relative z-50">
          <WorkSection />
        </div>
        <div className="relative z-60">
          <PrinciplesSection />
        </div>
        <div className="relative z-70">
          <ProcessSection />
        </div>
        <div className="relative z-80">
          <ContactSection />
        </div>
        <div className="relative z-90">
          <FooterSection />
        </div>
      </main>
    </div>
  );
}

export default App;
