import React from 'react';

const steps = [
    { num: "01", title: "Discover", desc: "Strategy and research to understand the domain and define the perfect approach." },
    { num: "02", title: "Design", desc: "Crafting a unique visual language and robust user experience tailored to your brand." },
    { num: "03", title: "Build", desc: "Developing with modern tech stacks, focusing on performance, scalability, and clean code." },
    { num: "04", title: "Launch", desc: "Testing, SEO, and deployment. We ensure your product shines from day one." }
];

export default function Process() {
    return (
        <section className="container reveal" style={{ overflow: 'hidden' }}>
            <div className="section-label">— How We Work —</div>
            <h2 className="section-heading">From Brief to Launch</h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                position: 'relative',
                marginTop: '64px'
            }} className="process-grid">

                {/* Connecting Line (Desktop) */}
                <div className="connecting-line" style={{
                    position: 'absolute',
                    top: '32px',
                    left: '5%',
                    right: '5%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #222 10%, #222 90%, transparent)',
                    zIndex: 0
                }}></div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '24px',
                    position: 'relative',
                    zIndex: 1
                }} className="steps-container">
                    {steps.map((step, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{
                                fontSize: '48px',
                                fontWeight: 600,
                                color: 'rgba(255,255,255,0.1)',
                                fontFamily: 'var(--font-heading)',
                                lineHeight: 1
                            }}>
                                {step.num}
                            </div>
                            <h3 style={{ fontSize: '24px' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '240px' }}>
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .steps-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .connecting-line {
            display: none !important;
          }
        }
      `}</style>
        </section>
    );
}
