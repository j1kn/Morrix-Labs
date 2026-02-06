'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-subtle">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-lg text-secondary">
              Tell us what you are building. We will respond within 24 hours.
            </p>
          </div>

          <div className="bg-card border border-subtle rounded-lg p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-lg text-accent mb-2">✓ Message sent successfully!</p>
                <p className="text-secondary">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-subtle rounded-lg text-primary placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-subtle rounded-lg text-primary placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-subtle rounded-lg text-primary placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}

            {/* Contact Options */}
            <div className="mt-12 pt-12 border-t border-subtle">
              <p className="text-secondary mb-6">Or reach out directly:</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-accent hover:text-indigo-400 transition"
                >
                  <span className="text-xl">✉️</span>
                  <span>{SITE_CONFIG.email}</span>
                </Link>
                <Link
                  href={`https://t.me/${SITE_CONFIG.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-accent hover:text-indigo-400 transition"
                >
                  <span className="text-xl">💬</span>
                  <span>{SITE_CONFIG.telegram}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
