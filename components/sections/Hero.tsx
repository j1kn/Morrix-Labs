'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            We design and build fast, scalable web products.
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed max-w-2xl">
            Morrix Labs helps startups and small teams turn ideas into reliable websites and web applications that are built to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToContact}
            >
              Start a project
            </Button>
            <Link href="#projects">
              <Button
                variant="secondary"
                size="lg"
              >
                View our work
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
