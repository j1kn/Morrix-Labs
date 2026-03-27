'use client';

import { Contact2 } from "@/components/ui/contact-2";
import { LocationMap } from "@/components/ui/expand-map";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="container">
        <main className="flex flex-col items-center justify-center w-full gap-16">
          <div className="flex flex-col items-center gap-8">
            <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">
              Current Location
            </p>
            <LocationMap 
              location="Coventry, UK"
              coordinates="52.4068° N, 1.5197° W"
            />
          </div>

          <div className="w-full max-w-screen-md">
            <Contact2 
              title="Get in Touch"
              description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
              email="hello@morrixlabs.com"
              web={{ label: "morrixlabs.com", url: "https://morrixlabs.com" }}
            />
          </div>
        </main>
      </div>
    </section>
  );
}
