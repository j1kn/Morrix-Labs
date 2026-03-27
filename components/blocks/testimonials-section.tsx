'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';

interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

export function TestimonialsColumn({ testimonials, className, duration = 15 }: { testimonials: Testimonial[]; className?: string; duration?: number }) {
    return (
        <div className={className}>
            <div className="overflow-hidden py-4">
                <motion.div className="flex flex-col gap-4 pb-4" animate={{ translateY: ['0%', '-50%'] }} transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}>
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <Card key={index} className="w-[280px] sm:w-[320px] p-4 sm:p-6 bg-card border-border/50 shadow-md">
                            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground mb-4">&ldquo;{item.text}&rdquo;</p>
                            <div className="flex items-center gap-3">
                                <img src={item.image} alt={item.name} className="size-8 sm:size-10 rounded-full object-cover" />
                                <div>
                                    <p className="text-xs sm:text-sm font-medium">{item.name}</p>
                                    <p className="text-[10px] sm:text-xs text-muted-foreground">{item.role}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

const testimonials = [
    { text: "Morrix Labs delivered our SaaS dashboard on time and it looks incredible. They understood our product vision from day one.", image: "https://randomuser.me/api/portraits/men/32.jpg", name: "James Thornton", role: "Founder, StreamlineHQ" },
    { text: "Our rebrand transformed how clients perceive us. Morrix Labs nailed the identity — clean, bold, and completely on-brand.", image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Layla Hassan", role: "CEO, Avara Studio" },
    { text: "The new e-commerce site Morrix Labs built increased our conversion rate by 34% in the first month. Genuinely impressive work.", image: "https://randomuser.me/api/portraits/men/15.jpg", name: "Marcus Bell", role: "Head of Growth, Crafter Co." },
    { text: "Fast, communicative, and technically excellent. They built our mobile-first web app in six weeks and it's flawless.", image: "https://randomuser.me/api/portraits/women/22.jpg", name: "Priya Nair", role: "Product Manager, NovaTech" },
    { text: "Working with Morrix Labs felt like having a senior in-house team. They pushed back when needed and always had a better idea.", image: "https://randomuser.me/api/portraits/men/8.jpg", name: "Tom Eriksen", role: "CTO, Lattice Systems" },
    { text: "The quality of their design work is outstanding. Our landing page now looks like a top-tier SaaS product.", image: "https://randomuser.me/api/portraits/women/56.jpg", name: "Amara Diallo", role: "Marketing Director, Orbis Labs" },
    { text: "They handled everything — design, dev, and deployment. One agency, zero stress. I'll never go back to freelancers.", image: "https://randomuser.me/api/portraits/men/41.jpg", name: "Ryan Osei", role: "Founder, Stackly" },
    { text: "Our Shopify store is faster and more beautiful than ever. Morrix Labs knew exactly what we needed before we did.", image: "https://randomuser.me/api/portraits/women/67.jpg", name: "Sophie Martin", role: "E-commerce Manager, Bloom & Co." },
    { text: "Transparent process, no surprises, and a final product that blew the brief. Morrix Labs is our go-to agency for everything digital.", image: "https://randomuser.me/api/portraits/men/73.jpg", name: "Daniel Kwame", role: "Operations Director, Vertex Media" },
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="mx-auto max-w-5xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.1 }} 
                        viewport={{ once: true }} 
                        className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 px-4"
                    >
                        <div className="flex justify-center">
                            <div className="border py-1 px-4 rounded-lg text-xs sm:text-sm">Client Stories</div>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
                            Trusted by founders, teams & growing brands
                        </h2>
                        <p className="text-center mt-4 sm:mt-5 opacity-75 text-sm sm:text-base max-w-xl">
                            Don&apos;t take our word for it — hear what our clients have to say.
                        </p>
                    </motion.div>
                    <div className="flex justify-center gap-4 sm:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[500px] sm:max-h-[600px] md:max-h-[740px] overflow-hidden">
                        <TestimonialsColumn testimonials={testimonials.slice(0, 3)} duration={15} />
                        <TestimonialsColumn testimonials={testimonials.slice(3, 6)} className="hidden md:block" duration={19} />
                        <TestimonialsColumn testimonials={testimonials.slice(6, 9)} className="hidden lg:block" duration={17} />
                    </div>
                </div>
            </div>
        </section>
    );
}
