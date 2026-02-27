import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const form = formRef.current;

    if (!section || !left || !form) return;

    const ctx = gsap.context(() => {
      // Left column animation
      gsap.fromTo(left,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Form animation
      gsap.fromTo(form,
        { y: 30, opacity: 0, rotate: 0.5 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.6,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent! We will reply within 48 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-card py-24 lg:py-32 z-80"
    >
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div ref={leftRef} className="lg:w-[40%]">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
              Let's build something real.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Tell us what you're making. We reply within 48 hours.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border">
                  <Mail className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:morrixlabs@gmail.com"
                    className="text-foreground hover:text-lime transition-colors"
                  >
                    morrixlabs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border">
                  <MapPin className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <span className="text-foreground">Based in Berlin · UTC+1</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border">
                  <Clock className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Availability
                  </div>
                  <span className="text-foreground">Booking 2–3 weeks ahead</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            ref={formRef}
            className="lg:w-[55%] p-6 lg:p-8 bg-charcoal border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border text-foreground text-sm focus:border-lime/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border text-foreground text-sm focus:border-lime/50 focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground text-sm focus:border-lime/50 focus:outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground text-sm focus:border-lime/50 focus:outline-none transition-colors"
                  >
                    <option value="">Select budget</option>
                    <option value="5k-10k">$5k – $10k</option>
                    <option value="10k-25k">$10k – $25k</option>
                    <option value="25k-50k">$25k – $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-border text-foreground text-sm focus:border-lime/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-lime text-charcoal font-mono text-xs tracking-wider hover:bg-lime-dark transition-colors"
              >
                Send message
                <Send className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
