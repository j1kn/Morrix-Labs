import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email) {
            setSubmitted(true);
        }
    };

    return (
        <section id="contact" className="container reveal" style={{ marginTop: '120px', marginBottom: '120px' }}>
            <div className="section-label">— Get in Touch —</div>
            <h2 className="section-heading">Let's Build Something Great</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '64px',
                marginTop: '64px'
            }}>
                {/* Contact Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <p style={{
                        fontSize: '20px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '16px'
                    }}>
                        Ready to elevate your digital presence? We're currently taking new clients
                        for Q3 2026. Reach out and let's craft something exceptional together.
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#111',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #222'
                        }}>
                            <Mail size={20} color="var(--text-primary)" />
                        </div>
                        <div>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Email</p>
                            <a href="mailto:hello@morrixlabs.com" style={{ fontSize: '18px', fontWeight: 500, transition: 'color 0.2s' }}>hello@morrixlabs.com</a>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#111',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #222'
                        }}>
                            <Phone size={20} color="var(--text-primary)" />
                        </div>
                        <div>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Phone</p>
                            <a href="tel:+44712345678" style={{ fontSize: '18px', fontWeight: 500, transition: 'color 0.2s' }}>+44 7123 45678</a>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#111',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #222'
                        }}>
                            <MapPin size={20} color="var(--text-primary)" />
                        </div>
                        <div>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Studio</p>
                            <p style={{ fontSize: '18px', fontWeight: 500 }}>London, United Kingdom</p>
                        </div>
                    </div>
                </div>

                {/* Form Container */}
                <div>
                    {submitted ? (
                        <div style={{
                            height: '100%',
                            padding: '48px',
                            backgroundColor: '#111',
                            borderRadius: '12px',
                            border: '1px solid #222',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            gap: '16px',
                            animation: 'fadeUp 0.5s ease-out'
                        }}>
                            <CheckCircle2 size={48} color="#fff" style={{ marginBottom: '8px' }} />
                            <h3 style={{ fontSize: '24px' }}>Message Sent</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>We'll review your inquiry and get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            backgroundColor: 'rgba(17,17,17,0.5)',
                            padding: '40px',
                            borderRadius: '12px',
                            border: '1px solid #1e1e1e'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    style={{
                                        padding: '16px',
                                        backgroundColor: '#0a0a0a',
                                        border: '1px solid #222',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontFamily: 'var(--font-body)',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#444'}
                                    onBlur={(e) => e.target.style.borderColor = '#222'}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="john@company.com"
                                    style={{
                                        padding: '16px',
                                        backgroundColor: '#0a0a0a',
                                        border: '1px solid #222',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontFamily: 'var(--font-body)',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#444'}
                                    onBlur={(e) => e.target.style.borderColor = '#222'}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell us about your project..."
                                    style={{
                                        padding: '16px',
                                        backgroundColor: '#0a0a0a',
                                        border: '1px solid #222',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontFamily: 'var(--font-body)',
                                        outline: 'none',
                                        resize: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#444'}
                                    onBlur={(e) => e.target.style.borderColor = '#222'}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary" style={{ marginTop: '8px', justifyContent: 'center' }}>
                                Send Inquiry <ArrowRight size={16} />
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}
