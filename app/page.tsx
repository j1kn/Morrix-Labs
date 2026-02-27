import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import ValueProposition from "./sections/ValueProposition";
import Services from "./sections/Services";
import WhyMorrix from "./sections/WhyMorrix";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ValueProposition />
      <Services />
      <WhyMorrix />
      <CTA />
      <Footer />
    </main>
  );
}
