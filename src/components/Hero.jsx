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

                <div className="cta-container" style={{
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

            <div className="scroll-arrow" style={{
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
        @media (max-width: 767px) {
          section {
            padding-top: 120px !important;
            justify-content: flex-start !important;
            text-align: left !important;
            align-items: flex-start !important;
          }
          .reveal {
            text-align: left !important;
            width: 100%;
          }
          h1 {
            font-size: clamp(40px, 12vw, 64px) !important;
            line-height: 1.1 !important;
            text-align: left !important;
          }
          h2 {
            font-size: clamp(24px, 8vw, 40px) !important;
            text-align: left !important;
          }
          p {
            text-align: left !important;
            margin-bottom: 40px !important;
          }
          /* CTA Buttons - Horizontal layout */
          .cta-container {
            display: flex !important;
            flex-direction: row !important;
            justify-content: flex-start !important;
            gap: 12px !important;
            width: 100%;
          }
          .btn-primary, .btn-ghost {
            padding: 10px 16px !important;
            font-size: 13px !important;
            flex: 1;
            justify-content: center;
          }
          /* Center the bottom arrow */
          .scroll-arrow {
            left: 50% !important;
            transform: translateX(-50%) rotate(45deg) !important;
          }
        }
      `}</style>
        </section>
    );
}
