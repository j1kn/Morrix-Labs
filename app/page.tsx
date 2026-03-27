import { HeroSection }        from '@/components/blocks/hero-section';
import ServicesSection        from '@/components/blocks/services-section';
import WorkSection            from '@/components/blocks/work-section';
import ProcessSection         from '@/components/blocks/process-section';
import AboutSection           from '@/components/blocks/about-section';
import TestimonialsSection    from '@/components/blocks/testimonials-section';
import PricingSection         from '@/components/blocks/pricing-section';
import FaqSection             from '@/components/blocks/faq-section';
import ContactSection         from '@/components/blocks/contact-section';
import Footer                 from '@/components/blocks/footer';

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <WorkSection />
            <ProcessSection />
            <AboutSection />
            <TestimonialsSection />
            <PricingSection />
            <FaqSection />
            <ContactSection />
            <Footer />
        </>
    );
}
