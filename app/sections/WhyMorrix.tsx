"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    title: "Senior expertise",
    description: "Every project is led by senior engineers with 10+ years of experience. No juniors learning on your dime."
  },
  {
    title: "Clear communication",
    description: "We speak human, not jargon. Regular updates, transparent timelines, and honest assessments."
  },
  {
    title: "Future-proof architecture",
    description: "We build for scale and longevity. No technical debt that slows you down six months later."
  },
  {
    title: "Obsessive quality",
    description: "Code reviews, automated testing, and rigorous QA. We ship when it's ready, not when it's due."
  }
];

export default function WhyMorrix() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#06b6d4] text-sm font-medium uppercase tracking-wider mb-4 block">
              Why Morrix Labs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
              Engineering excellence,{" "}
              <span className="gradient-text">delivered</span>
            </h2>
            <p className="text-lg text-[#b3b3b3] leading-relaxed mb-8">
              We have spent years refining our craft. Working with startups and 
              enterprises alike, we have learned what matters: shipping quality 
              code fast, communicating clearly, and building systems that last.
            </p>
            <p className="text-lg text-[#b3b3b3] leading-relaxed">
              Our team brings deep expertise across modern technology stacks. 
              We do not just write code—we solve problems, optimize performance, 
              and create solutions that drive real business outcomes.
            </p>
          </motion.div>

          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#06b6d4]/30 transition-all duration-300 hover:bg-white/[0.04]"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center text-sm font-semibold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#b3b3b3] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
