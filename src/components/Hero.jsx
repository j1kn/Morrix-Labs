import React from 'react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                textAlign: 'center',
                padding: '0 24px',
                overflow: 'hidden'
            }}
        >
            {/* Radial Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(10,10,10,0) 70%)',
                pointerEvents: 'none',
                zIndex: -1
            }} />

            <div className="reveal" style={{ maxWidth: '800px' }}>
                <p className="section-label" style={{ marginBottom: '24px' }}>
                    — Digital Craft Studio —
                </p>

                <h1 style={{
                    fontSize: 'clamp(48px, 8vw, 96px)',
                    fontWeight: 600,
                    lineHeight: '1.1',
                    marginBottom: '16px',
                }}>
                    We Build Digital <br />
                    Products That Move.
                </h1>

                <h2 style={{
                    fontSize: 'clamp(32px, 5vw, 64px)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: 'var(--text-secondary)',
                    marginBottom: '32px'
                }}>
                    Design. Code. Identity.
                </h2>

                <p style={{
                    fontSize: '18px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    maxWidth: '600px',
                    margin: '0 auto 48px auto'
                }}>
                    Morrix Labs crafts premium websites, web applications,
                    and brand systems for founders and companies who refuse to settle.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <a href="#cta" className="btn-primary">
                        Start a Project <ArrowDownRight size={16} />
                    </a>
                    <a href="#work" className="btn-ghost">
                        View Our Work
                    </a>
                </div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '40px',
                animation: 'bounce 2s infinite',
                color: 'var(--text-secondary)'
            }}>
                <ArrowDownRight size={24} style={{ transform: 'rotate(45deg)' }} />
            </div>

            <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
        </section>
    );
}
