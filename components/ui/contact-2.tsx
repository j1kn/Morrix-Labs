"use client";
 
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface Contact2Props {
  email?: string;
}

export const Contact2 = ({
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
    <div className="w-full">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
          <div className="mx-auto w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-black dark:bg-white flex items-center justify-center mb-4">
            <Send className="w-6 sm:w-8 h-6 sm:h-8 text-white dark:text-black" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            Thank you for reaching out. We&apos;ll get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 rounded-2xl border bg-card p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="firstname" className="text-sm">First Name</Label>
              <Input 
                type="text" 
                id="firstname" 
                placeholder="First Name"
                value={formState.firstname}
                onChange={(e) => setFormState(prev => ({ ...prev, firstname: e.target.value }))}
                required
                className="h-10 sm:h-11"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lastname" className="text-sm">Last Name</Label>
              <Input 
                type="text" 
                id="lastname" 
                placeholder="Last Name"
                value={formState.lastname}
                onChange={(e) => setFormState(prev => ({ ...prev, lastname: e.target.value }))}
                required
                className="h-10 sm:h-11"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="text-sm">Email</Label>
            <Input 
              type="email" 
              id="email" 
              placeholder="Email"
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
              required
              className="h-10 sm:h-11"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="subject" className="text-sm">Subject</Label>
            <Input 
              type="text" 
              id="subject" 
              placeholder="Subject"
              value={formState.subject}
              onChange={(e) => setFormState(prev => ({ ...prev, subject: e.target.value }))}
              required
              className="h-10 sm:h-11"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message" className="text-sm">Message</Label>
            <Textarea 
              placeholder="Tell us about your project..." 
              id="message"
              value={formState.message}
              onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
              className="min-h-[100px] sm:min-h-[120px]"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors rounded-xl h-11 sm:h-12 text-sm sm:text-base font-medium flex items-center justify-center gap-2 disabled:opacity-50"
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
          </button>
        </form>
      )}
    </div>
  );
};
