'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-subtle">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-accent">
            Morrix Labs
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-secondary hover:text-primary transition">
              Services
            </Link>
            <Link href="#projects" className="text-secondary hover:text-primary transition">
              Work
            </Link>
            <Link href="#process" className="text-secondary hover:text-primary transition">
              Process
            </Link>
            <Link href="#pricing" className="text-secondary hover:text-primary transition">
              Pricing
            </Link>
            <Link href="#contact" className="text-secondary hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary hover:text-primary transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="#services" className="text-secondary hover:text-primary transition">
              Services
            </Link>
            <Link href="#projects" className="text-secondary hover:text-primary transition">
              Work
            </Link>
            <Link href="#process" className="text-secondary hover:text-primary transition">
              Process
            </Link>
            <Link href="#pricing" className="text-secondary hover:text-primary transition">
              Pricing
            </Link>
            <Link href="#contact" className="text-secondary hover:text-primary transition">
              Contact
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
};
