'use client';

import { motion } from 'motion/react';
import { MagicText } from '@/components/ui/magic-text';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-8"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">About Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Who We Are
            </h2>
          </motion.div>

          <div className="relative min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-transparent" />
            <div className="relative z-10 w-full max-w-4xl">
              <MagicText 
                text="Morrix Labs is a forward-thinking digital studio focused on building scalable products, intelligent systems, and modern web experiences. We blend technology, design, and strategy to help ideas evolve into powerful, real-world solutions."
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
