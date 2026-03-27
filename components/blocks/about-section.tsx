'use client';

import { motion } from 'motion/react';
import { MagicText } from '@/components/ui/magic-text';
import { Rocket, Code, Users, Globe } from 'lucide-react';

const stats = [
  { icon: Rocket, value: '50+', label: 'Projects Delivered' },
  { icon: Code, value: '100%', label: 'Code Quality' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Globe, value: '15+', label: 'Countries Served' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">About Us</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Who We Are
            </h2>
          </motion.div>

          <div className="relative min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-transparent" />
            <div className="relative z-10">
              <MagicText 
                text="Morrix Labs is a forward-thinking digital studio focused on building scalable products, intelligent systems, and modern web experiences. We blend technology, design, and strategy to help ideas evolve into powerful, real-world solutions."
                className="text-2xl md:text-3xl lg:text-4xl text-center"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl border bg-card hover:bg-muted/50 transition-colors"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-[#9B99FE]/20 to-[#2BC8B7]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#9B99FE]" />
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#9B99FE] to-[#2BC8B7] bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
