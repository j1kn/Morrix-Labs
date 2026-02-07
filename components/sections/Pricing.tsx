import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PRICING_PLANS } from '@/lib/constants';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 border-t border-subtle">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Pricing</h2>
          <p className="text-secondary text-lg">Simple, transparent plans</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <Card
              key={index}
              highlight={plan.highlighted}
              className={plan.highlighted ? 'md:scale-105' : ''}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold text-accent mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-secondary">
                    <span className="text-accent">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                size="md"
                className="w-full"
              >
                Get started
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
