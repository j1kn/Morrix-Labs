import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/lib/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle py-12 md:py-16 bg-secondary/20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-secondary text-sm">Digital engineering studio</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-secondary hover:text-primary transition text-sm">Services</Link></li>
              <li><Link href="#projects" className="text-secondary hover:text-primary transition text-sm">Work</Link></li>
              <li><Link href="#process" className="text-secondary hover:text-primary transition text-sm">Process</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">More</h4>
            <ul className="space-y-2">
              <li><Link href="#pricing" className="text-secondary hover:text-primary transition text-sm">Pricing</Link></li>
              <li><Link href="#contact" className="text-secondary hover:text-primary transition text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Contact</h4>
            <ul className="space-y-2">
              <li><Link href={`mailto:${SITE_CONFIG.email}`} className="text-secondary hover:text-primary transition text-sm">{SITE_CONFIG.email}</Link></li>
              <li><Link href={`https://t.me/${SITE_CONFIG.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition text-sm">{SITE_CONFIG.telegram}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-subtle pt-8 text-center text-secondary text-sm">
          <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
