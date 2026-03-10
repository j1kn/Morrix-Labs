import React from 'react';
import { PencilRuler, CodeIcon, Fingerprint, Zap } from 'lucide-react';

const services = [
    {
        icon: <PencilRuler size={24} strokeWidth={1.5} />,
        title: "Web Design",
        description: "Pixel-perfect interfaces. Built to convert, built to impress."
    },
    {
        icon: <CodeIcon size={24} strokeWidth={1.5} />,
        title: "Web App Development",
        description: "From MVPs to full-stack platforms. We ship fast, clean code."
    },
    {
        icon: <Fingerprint size={24} strokeWidth={1.5} />,
        title: "Branding & Identity",
        description: "Logos, systems, and strategy. Your brand, made unforgettable."
    },
    {
        icon: <Zap size={24} strokeWidth={1.5} />,
        title: "Performance & SEO",
        description: "Speed, structure, and visibility baked into everything we build."
    }
];

export default function Services() {
    return (
        <section id="services" className="container reveal">
            <div className="section-label">— What We Do —</div>
            <h2 className="section-heading">End-to-End Digital Excellence</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                marginTop: '64px'
            }}>
                {services.map((svc, i) => (
                    <div
                        key={i}
                        className="service-card"
                        style={{
                            backgroundColor: '#111',
                            border: '1px solid #222',
                            borderRadius: '8px',
                            padding: '32px',
                            transition: 'all var(--transition)'
                        }}
                    >
                        <div style={{
                            color: 'var(--text-primary)',
                            marginBottom: '48px',
                            opacity: 0.8
                        }}>
                            {svc.icon}
                        </div>
                        <h3 style={{
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: 500
                        }}>
                            {svc.title}
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '15px'
                        }}>
                            {svc.description}
                        </p>
                    </div>
                ))}
            </div>

            <style>{`
        .service-card:hover {
          border-color: #444 !important;
          box-shadow: var(--glow-shadow) !important;
          transform: translateY(-4px) !important;
        }
      `}</style>
        </section>
    );
}
