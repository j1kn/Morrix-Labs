'use client';

import { Contact2 } from "@/components/ui/contact-2";
import { LocationMap } from "@/components/ui/expand-map";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 xl:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="mb-6 md:mb-8 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
                Start Your Project
              </h2>
              <p className="text-muted-foreground mt-3 text-sm sm:text-base">
                Have a project in mind? Let&apos;s talk.
              </p>
            </div>
            <Contact2 email="hello@morrixlabs.com" />
          </div>
          
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end justify-center gap-5 sm:gap-6 lg:gap-8">
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
    </section>
  );
}
