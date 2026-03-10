import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTA() {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        type: '',
        budget: '',
        email: '',
        desc: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const types = ["Website", "Web App", "Branding", "Full Package", "Not Sure Yet"];
    const budgets = ["Under $5K", "$5K–$15K", "$15K–$30K", "$30K+", "Let's Discuss"];

    const handleTypeSelect = (t) => {
        setSelections({ ...selections, type: t });
        setTimeout(() => setStep(2), 300);
    };

    const handleBudgetSelect = (b) => {
        setSelections({ ...selections, budget: b });
        setTimeout(() => setStep(3), 300);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selections.email) {
            setSubmitted(true);
        }
    };

    return (
        <section id="cta" style={{
            backgroundColor: '#050505',
            borderTop: '1px solid #111',
            borderBottom: '1px solid #111',
            padding: '120px 24px',
            position: 'relative'
        }}>
            <div className="container reveal" style={{ maxWidth: '800px' }}>
                <h2 className="section-heading" style={{ marginBottom: '16px' }}>What Do You Want to Build?</h2>
                <p style={{
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '18px',
                    marginBottom: '64px'
                }}>Tell us what you're working on. We'll make it real.</p>

                {submitted ? (
                    <div style={{
                        padding: '48px',
                        backgroundColor: '#111',
                        borderRadius: '12px',
                        border: '1px solid #222',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '16px',
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}>
                        <CheckCircle2 size={40} color="#fff" />
                        <h3 style={{ fontSize: '24px' }}>We'll be in touch within 24 hours.</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out to Morrix Labs.</p>
                    </div>
                ) : (
                    <div style={{
                        backgroundColor: '#0a0a0a',
                        border: '1px solid #222',
                        borderRadius: '12px',
                        padding: '40px',
                        minHeight: '400px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            fontSize: '12px',
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '32px'
                        }}>
                            Step {step} of 3
                        </div>

                        <div style={{ position: 'relative', flexGrow: 1 }}>
                            {/* STEP 1 */}
                            <div className={`widget-step ${step === 1 ? 'active' : ''}`}>
                                <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>1. Project Type</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                    {types.map(t => (
                                        <button
                                            key={t}
                                            onClick={() => handleTypeSelect(t)}
                                            className="pill-btn"
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* STEP 2 */}
                            <div className={`widget-step ${step === 2 ? 'active' : ''}`}>
                                <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>2. Budget Range</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                    {budgets.map(b => (
                                        <button
                                            key={b}
                                            onClick={() => handleBudgetSelect(b)}
                                            className="pill-btn"
                                        >
                                            {b}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* STEP 3 */}
                            <div className={`widget-step ${step === 3 ? 'active' : ''}`}>
                                <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>3. How to Reach You</h3>
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <input
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        value={selections.email}
                                        onChange={e => setSelections({ ...selections, email: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            backgroundColor: '#111',
                                            border: '1px solid #222',
                                            color: '#fff',
                                            borderRadius: '8px',
                                            fontFamily: 'var(--font-body)',
                                            outline: 'none'
                                        }}
                                    />
                                    <textarea
                                        placeholder="Briefly describe your project (optional)"
                                        value={selections.desc}
                                        onChange={e => setSelections({ ...selections, desc: e.target.value })}
                                        rows={4}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            backgroundColor: '#111',
                                            border: '1px solid #222',
                                            color: '#fff',
                                            borderRadius: '8px',
                                            fontFamily: 'var(--font-body)',
                                            outline: 'none',
                                            resize: 'none'
                                        }}
                                    ></textarea>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                                        <button type="submit" className="btn-primary" style={{ padding: '16px 32px' }}>
                                            Send Message <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        .widget-step {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }

        .widget-step.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          position: relative;
        }

        .pill-btn {
          padding: 12px 24px;
          border: 1px solid #333;
          border-radius: 40px;
          background: #111;
          color: #aaa;
          font-size: 14px;
        }

        .pill-btn:hover {
          border-color: #666;
          color: #fff;
          background: #1a1a1a;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255,255,255,0.05);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(255,255,255,0.05);
          }
        }
      `}</style>
        </section>
    );
}
