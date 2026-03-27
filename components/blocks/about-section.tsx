'use client';

import { motion } from 'motion/react';
import { MagicText } from '@/components/ui/magic-text';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">About Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Who We Are
            </h2>
          </motion.div>

          <div className="relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-transparent" />
            <div className="relative z-10 w-full">
              <MagicText 
                text="Morrix Labs is a forward-thinking digital studio focused on building scalable products, intelligent systems, and modern web experiences. We blend technology, design, and strategy to help ideas evolve into powerful, real-world solutions."
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
