'use client';
import { Globe, Smartphone, Palette, Cpu, ShoppingCart, BarChart3 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Feature {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
}

export function FeatureCard({ feature }: { feature: Feature }) {
    const Icon = feature.icon;

    return (
        <Card className="group relative flex flex-col overflow-hidden border-0 bg-transparent p-6 shadow-none">
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-dashed bg-muted/50 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-300">
                <Icon className="size-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Card>
    );
}

const features = [
    {
        title: 'Web App Development',
        icon: Cpu,
        description: 'We build fast, scalable web applications using React, Next.js, and Node.js — from MVPs to enterprise platforms.',
    },
    {
        title: 'Website Design & Dev',
        icon: Globe,
        description: 'High-converting, pixel-perfect websites that reflect your brand and perform across every device.',
    },
    {
        title: 'Brand Identity',
        icon: Palette,
        description: 'Logos, color systems, typography, and brand guidelines that make your business impossible to ignore.',
    },
    {
        title: 'E-commerce Solutions',
        icon: ShoppingCart,
        description: 'Custom storefronts and Shopify builds optimised for conversion, speed, and a seamless checkout experience.',
    },
    {
        title: 'Mobile-First Design',
        icon: Smartphone,
        description: 'Responsive, touch-optimised interfaces that look and feel native on every screen size.',
    },
    {
        title: 'Growth & Analytics',
        icon: BarChart3,
        description: 'Data-driven insights and SEO strategy that turn your digital presence into a sustainable growth engine.',
    },
];

type ViewAnimationProps = {
    delay?: number;
    className?: React.ComponentProps<typeof motion.div>['className'];
    children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();
    if (shouldReduceMotion) return <>{children}</>;
    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function ServicesSection() {
    return (
        <section id="services" className="py-16 md:py-32">
            <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
                <AnimatedContainer className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">What We Do</p>
                    <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
                        Everything Your Business Needs to Win Online
                    </h2>
                    <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
                        From concept to launch — and beyond. Morrix Labs is your end-to-end digital partner.
                    </p>
                </AnimatedContainer>

                <AnimatedContainer
                    delay={0.4}
                    className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
                >
                    {features.map((feature, i) => (
                        <FeatureCard key={i} feature={feature} />
                    ))}
                </AnimatedContainer>
            </div>
        </section>
    );
}
