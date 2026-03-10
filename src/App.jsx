import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stack from './components/Stack';
import Work from './components/Work';
import Process from './components/Process';
import CTA from './components/CTA';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Stack />
      <Work />
      <Process />
      <CTA />
      <Philosophy />
      <Footer />
    </>
  );
}
