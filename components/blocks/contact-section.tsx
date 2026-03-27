'use client';

import { Contact2 } from "@/components/ui/contact-2";
import { LocationMap } from "@/components/ui/expand-map";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Start Your Project
                </h2>
                <p className="text-muted-foreground mt-3 text-sm sm:text-base">
                  Have a project in mind? Let&apos;s talk.
                </p>
              </div>
              <Contact2 email="hello@morrixlabs.com" />
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center gap-6 lg:gap-8">
              <LocationMap 
                location="Coventry, UK"
                coordinates="52.4068° N, 1.5197° W"
              />
              <p className="text-muted-foreground text-xs sm:text-sm text-center lg:text-right">
                Working remotely with clients worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
