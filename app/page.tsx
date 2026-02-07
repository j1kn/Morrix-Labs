import { Header } from '@/components/common/Header';
import { Hero } from '@/components/ui/animated-hero';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/common/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
