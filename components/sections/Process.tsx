import React from 'react';
import { Container } from '@/components/ui/Container';
import { PROCESS_STEPS } from '@/lib/constants';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 border-t border-subtle">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-accent text-5xl font-bold mb-4 opacity-20">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-secondary leading-relaxed">{step.description}</p>
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-subtle" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
