"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, Globe, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  const [formState, setFormState] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-screen-md"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {description}
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-8 md:p-12 shadow-lg">
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We&apos;ll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input 
                    type="text" 
                    id="firstname" 
                    placeholder="First Name"
                    value={formState.firstname}
                    onChange={(e) => setFormState(prev => ({ ...prev, firstname: e.target.value }))}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input 
                    type="text" 
                    id="lastname" 
                    placeholder="Last Name"
                    value={formState.lastname}
                    onChange={(e) => setFormState(prev => ({ ...prev, lastname: e.target.value }))}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="Email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    placeholder="Subject"
                    value={formState.subject}
                    onChange={(e) => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                    required
                  />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#9B99FE] to-[#2BC8B7] hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}

            <div className="mt-10 pt-8 border-t">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <a href={`mailto:${email}`} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{email}</span>
                </a>
                <a href={`tel:${phone}`} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{phone}</span>
                </a>
                <a href={web.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{web.label}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
