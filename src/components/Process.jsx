import React from 'react';

const steps = [
    { num: "01", title: "Discover", desc: "Strategy and research to understand the domain and define the perfect approach." },
    { num: "02", title: "Design", desc: "Crafting a unique visual language and robust user experience tailored to your brand." },
    { num: "03", title: "Build", desc: "Developing with modern tech stacks, focusing on performance, scalability, and clean code." },
    { num: "04", title: "Launch", desc: "Testing, SEO, and deployment. We ensure your product shines from day one." }
];

export default function Process() {
    return (
        <section className="container reveal" style={{ overflow: 'hidden', paddingTop: '200px' }}>
            <div className="section-label">— How We Work —</div>
            <h2 className="section-heading">From Brief to Launch</h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '80px',
                position: 'relative',
                marginTop: '64px',
                marginBottom: '100px'
            }} className="process-grid">

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '40px',
                    position: 'relative',
                    zIndex: 1
                }} className="steps-container">
                    {steps.map((step, i) => (
                        <div key={i} className="process-step" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            padding: '32px 24px',
                            backgroundColor: 'rgba(17,17,17,0.4)',
                            border: '1px solid #1e1e1e',
                            borderRadius: '12px',
                            transition: 'all var(--transition)'
                        }}>
                            <div style={{
                                fontSize: '64px',
                                fontWeight: 700,
                                color: 'rgba(255,255,255,0.05)',
                                fontFamily: 'var(--font-heading)',
                                lineHeight: 1,
                                transition: 'color var(--transition)'
                            }} className="step-number">
                                {step.num}
                            </div>
                            <h3 style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .process-step:hover {
          border-color: #333 !important;
          transform: translateY(-5px);
          box-shadow: var(--glow-shadow);
        }

        .process-step:hover .step-number {
          color: rgba(255,255,255,0.4) !important;
        }

        @keyframes travel {
          0% { left: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

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
