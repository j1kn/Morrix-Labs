"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface Contact2Props {
  phone?: string;
  email?: string;
}

export const Contact2 = ({
  phone = "(123) 34567890",
  email = "hello@morrixlabs.com",
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
    <div className="flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-16">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-6">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
              <Send className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. We&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border bg-card p-8 shadow-lg">
            <div className="flex gap-4">
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
      </div>
    </div>
  );
};
