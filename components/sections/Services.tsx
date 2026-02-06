import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { SERVICES } from '@/lib/constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 border-t border-subtle">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-secondary text-lg">What we offer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <Card key={index}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-secondary leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
